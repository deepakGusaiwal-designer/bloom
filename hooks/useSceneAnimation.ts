"use client";

import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "@/lib/gsap";
import { sceneState } from "@/lib/scene";

/**
 * Tracks page scroll progress (0..1) into sceneState.scrollProgress.
 *
 * The 3D side (Earth, CameraRig) reads this value every frame and eases
 * toward it, so scrolling down rotates the earth one way and scrolling up
 * rotates it back. Tweening plain state instead of three.js objects avoids
 * the mount-order trap where GSAP captures null camera/model refs.
 */
export default function useSceneAnimation() {
  useGSAP(() => {
    const update = (self: ScrollTrigger) => {
      sceneState.scrollProgress = self.progress;
    };

    ScrollTrigger.create({
      start: 0,
      end: () => ScrollTrigger.maxScroll(window),
      onUpdate: update,
      onRefresh: update,
    });
  });
}
