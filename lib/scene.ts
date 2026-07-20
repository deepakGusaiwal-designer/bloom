import * as THREE from "three";

export const sceneState = {
  camera: null as THREE.PerspectiveCamera | null,

  flower: null as THREE.Group | null,

  // 0..1 across the entire page scroll — written by useSceneAnimation
  // (ScrollTrigger), read every frame inside the Canvas. Keeping it as a
  // plain number avoids GSAP grabbing three.js refs before the Canvas mounts.
  scrollProgress: 0,
};
