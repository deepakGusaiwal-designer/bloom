"use client";

import { Canvas } from "@react-three/fiber";
import { Environment, PerspectiveCamera } from "@react-three/drei";
import { Suspense } from "react";

import SceneLights from "./SceneLights";
import GlobalPointer from "./GlobalPointer";
import HibiscusFlower from "./HibiscusFlower";
import CameraRig from "./CameraRig";
import useSceneAnimation from "@/hooks/useSceneAnimation";

type Props = {
  introFinished: boolean;
};

export default function HeroScene({
  introFinished,
}: Props) {
  useSceneAnimation();

  return (
    <div className="fixed inset-0 -z-10">

      <Canvas
        shadows
        dpr={[1, 2]}
        gl={{
          antialias: false,
          alpha: true,
          powerPreference: "high-performance",
        }}
      >
        <PerspectiveCamera
          makeDefault
          position={[0, 5, 0]}
          fov={34}
        />

        <GlobalPointer />

        <CameraRig introFinished={introFinished} />

        <SceneLights />

        <Environment preset="city"  />

        <Suspense fallback={null}>
          <HibiscusFlower introFinished={introFinished} />
        </Suspense>
      </Canvas>

    </div>
  );
}
