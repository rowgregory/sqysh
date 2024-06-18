"use client";

import { Canvas, useThree } from "@react-three/fiber";
import { Suspense } from "react";
import { useProgress, Html, ScrollControls, OrbitControls } from "@react-three/drei";
import Sqysh from "../components/drei/Sqysh";

function Loader() {
  const { progress, active } = useProgress();

  return <Html center>{progress.toFixed(1)} % loaded</Html>;
}

export const Scene = () => {
  return (
    <Canvas gl={{ antialias: true }} dpr={[1, 1.5]}>
      <OrbitControls />
      <ambientLight intensity={0.5} />
      <directionalLight position={[-5, -5, 5]} intensity={6} />
      <directionalLight position={[-5, 5, 5]} intensity={1} />
      <directionalLight position={[5, -5, 5]} intensity={1} />
      <spotLight
        position={[10, 10, 10]}
        angle={0.15}
        penumbra={1}
        intensity={2}
        castShadow
      />
      <pointLight position={[-10, -10, -10]} intensity={1} />
      <Suspense fallback={<Loader />}>
        <Sqysh />
      </Suspense>
    </Canvas>
  );
};
