import { useCallback, useEffect, useRef } from "react";

const SOUND_PATHS = {
  se0: "/audio/se0.mp3",
  se1: "/audio/se1.mp3",
} as const;

type SoundKey = keyof typeof SOUND_PATHS;

interface UseSoundsOptions {
  enabled?: boolean;
  volume?: number; // 0 to 1
}

export const useSounds = ({
  enabled = true,
  volume = 0.5,
}: UseSoundsOptions = {}) => {
  const ctxRef = useRef<AudioContext | null>(null);
  const buffersRef = useRef<Partial<Record<SoundKey, AudioBuffer>>>({});

  // Decode everything once on mount
  useEffect(() => {
    const ctx = new AudioContext(); // starts suspended until a user gesture — fine
    ctxRef.current = ctx;
    let cancelled = false;

    (Object.entries(SOUND_PATHS) as [SoundKey, string][]).forEach(
      async ([key, path]) => {
        try {
          const res = await fetch(path);
          const buffer = await ctx.decodeAudioData(await res.arrayBuffer());
          if (!cancelled) buffersRef.current[key] = buffer;
        } catch {
          // missing/undecodable file — play() will just no-op for this key
        }
      },
    );

    return () => {
      cancelled = true;
      ctx.close();
      ctxRef.current = null;
      buffersRef.current = {};
    };
  }, []);

  const play = useCallback(
    (key: SoundKey, { rate = 1 }: { rate?: number } = {}) => {
      if (!enabled) return;
      const ctx = ctxRef.current;
      const buffer = buffersRef.current[key];
      if (!ctx || !buffer) return;
      if (ctx.state === "suspended") ctx.resume(); // unlocks on first gesture-driven play

      // A fresh source per play — instances overlap freely
      const src = ctx.createBufferSource();
      src.buffer = buffer;
      src.playbackRate.value = rate;

      const gain = ctx.createGain();
      gain.gain.value = volume;

      src.connect(gain).connect(ctx.destination);
      src.start();
    },
    [enabled, volume],
  );

  return { play };
};
