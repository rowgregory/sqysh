import React from "react";

const queueData = [
  {
    date: "5-9-2025",
    message: `Create an initial animated typographic video showcasing Garçons’ feature at Suffolk Downs (last year), designed in Adobe After Effects. The video will be 15–20 seconds long and formatted vertically (9:16) for posting on Instagram Reels, TikTok, Snapchat, and Facebook.`,
  },
];

const GarconQueue = () => {
  return (
    <>
      <h1 className="text-3xl font-bold mb-6">In Queue</h1>
      <div className="flex flex-col">
        {queueData?.map((cue, i) => (
          <div
            key={i}
            className="grid grid-cols-[1fr_4fr] gap-y-4 py-3 text-[#b2b2b2] font-lato text-sm"
          >
            <div className="font-semibold text-right pr-4 border-r border-[#555]">
              {cue.date}
            </div>
            <div className="pl-4 text-zinc-200">{cue.message}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default GarconQueue;
