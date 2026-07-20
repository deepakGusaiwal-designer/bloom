"use client";

import { easing } from "maath";
import { useFrame } from "@react-three/fiber";
import { PerspectiveCamera } from "three";
import { sceneState } from "@/lib/scene";

type Props = {
  introFinished: boolean;
};

export default function CameraRig({ introFinished }: Props) {
  useFrame((state, delta) => {
    sceneState.camera = state.camera as PerspectiveCamera;

    // Far during the intro, eases in afterwards, and creeps slightly
    // closer as the page scrolls for a sense of approach.
    const radius = (introFinished ? 3 : 5) - sceneState.scrollProgress * 0.6;

    easing.damp3(state.camera.position, [0, 1.6, radius], 0.15, delta);

    // Always focus on the flower
    state.camera.lookAt(0, 0.15, 0);
  });

  return null;
}
