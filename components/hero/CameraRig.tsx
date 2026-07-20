"use client";

import { easing } from "maath";
import { useFrame } from "@react-three/fiber";
import { PerspectiveCamera } from "three";
import { sceneState } from "@/lib/scene";

type Props = {
  introFinished: boolean;
};

// How far the plant's base sits above the bottom edge of the frame, in world
// units. 0 plants it flush on the edge; a little room keeps the idle sway from
// clipping off-screen.
const GROUND_MARGIN = 0.07;

export default function CameraRig({ introFinished }: Props) {
  useFrame((state, delta) => {
    const camera = state.camera as PerspectiveCamera;
    sceneState.camera = camera;

    // Far during the intro, eases in afterwards, and creeps slightly
    // closer as the page scrolls for a sense of approach.
    const radius = (introFinished ? 3 : 5) - sceneState.scrollProgress * 0.6;

    // The flower is modelled standing on y=0, so keeping its base pinned to the
    // bottom edge is a framing problem: half the camera's visible height at the
    // subject's distance is exactly how high the eye must sit for the bottom of
    // the frame to land on the ground plane. fov is vertical, so this holds at
    // any aspect ratio — the plant stays bottom-anchored on every viewport.
    const halfHeight =
      Math.tan((camera.fov * Math.PI) / 360) * radius;
    const eyeHeight = halfHeight - GROUND_MARGIN;

    easing.damp3(camera.position, [0, eyeHeight, radius], 0.15, delta);

    // Level gaze: any downward tilt would lift the ground plane back up into
    // the frame and undo the anchoring.
    camera.lookAt(0, camera.position.y, 0);
  });

  return null;
}
