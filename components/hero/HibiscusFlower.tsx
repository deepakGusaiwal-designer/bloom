"use client";

import { useLayoutEffect, useRef } from "react";
import * as THREE from "three";
import { easing } from "maath";
import { useFrame } from "@react-three/fiber";
import { useAnimations, useGLTF } from "@react-three/drei";

import { sceneState } from "@/lib/scene";

const MODEL_PATH = "/models/blooming_hibiscus_time-lapse_animation.glb";

// How tall the fully bloomed plant stands in world units. The camera sits at
// radius ~3 with fov 22, so it sees roughly 1.2 units of height — anything
// much above that overflows the viewport. The GLB is ~0.51 tall at bind pose,
// which is the framing the hero was designed around.
const TARGET_HEIGHT = 0.55;

type Props = {
  introFinished: boolean;
};

export default function HibiscusFlower({ introFinished }: Props) {
  const group = useRef<THREE.Group>(null);
  const { scene, animations } = useGLTF(MODEL_PATH);
  const { mixer } = useAnimations(animations, group);

  const clip = animations[0];
  const playhead = useRef(0);

  useLayoutEffect(() => {
    scene.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.castShadow = true;
        child.receiveShadow = true;
        // The time-lapse moves parts far outside their bind-pose bounds.
        child.frustumCulled = false;

        const mat = child.material as THREE.MeshStandardMaterial;

        if (mat.name === "Petal" || mat.name === "Leaf") {
          mat.color.set("#ff2056");
        }
      }
    });

    // useGLTF hands back a shared, cached scene, so this effect can run
    // against a scene a previous run already fitted (StrictMode, HMR, a
    // remount). Measure from a clean transform every time, or the fit
    // compounds and dev stops matching production.
    scene.scale.setScalar(1);
    scene.position.set(0, 0, 0);

    // Measure the plant at the final (fully bloomed) frame, so the framing
    // fits the end of the time-lapse rather than the tiny sprout at t=0.
    const action = mixer.clipAction(clip);
    action.play();
    mixer.setTime(clip.duration - 1e-3);
    scene.updateMatrixWorld(true);

    const box = new THREE.Box3().setFromObject(scene);
    const size = box.getSize(new THREE.Vector3());
    const center = box.getCenter(new THREE.Vector3());
    const scale = TARGET_HEIGHT / size.y;

    scene.scale.setScalar(scale);
    scene.position.set(
      -center.x * scale,
      -box.min.y * scale,
      -center.z * scale,
    );

    mixer.setTime(0);

    sceneState.flower = group.current;
  }, [scene, mixer, clip]);

  useFrame((state, delta) => {
    if (!group.current) return;

    // Scroll scrubs the bloom: ease the playhead toward the scroll position
    // so fast scrolling still resolves into smooth growth. Held at the
    // sprout until the intro is done. Clamped just short of the clip end so
    // LoopRepeat never wraps the pose back to frame 0.
    const target = introFinished
      ? sceneState.scrollProgress * (clip.duration - 1e-3)
      : 0;

    playhead.current = THREE.MathUtils.damp(playhead.current, target, 3.5, delta);
    mixer.setTime(playhead.current);

    // Continuous idle sway plus cursor interaction: the plant turns on the
    // spot to follow the pointer, with a slight tilt toward it. Eased so the
    // leaves trail the cursor instead of snapping.
    const t = state.clock.elapsedTime;
    const sway = Math.sin(t * 0.25) * 0.15;

    easing.damp(
      group.current.rotation,
      "y",
      sway + state.pointer.x * 0.6,
      0.3,
      delta,
    );
    easing.damp(
      group.current.rotation,
      "x",
      state.pointer.y * -0.12,
      0.3,
      delta,
    );

    group.current.position.y = Math.sin(t * 0.8) * 0.05;
  });

  return (
    <group ref={group} dispose={null}>
      <primitive object={scene} />
    </group>
  );
}

useGLTF.preload(MODEL_PATH);
