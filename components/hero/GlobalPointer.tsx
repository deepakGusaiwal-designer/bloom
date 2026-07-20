"use client";

import { useThree } from "@react-three/fiber";
import { useEffect } from "react";

/**
 * The canvas sits behind the page content (-z-10), so pointer events never
 * reach it and R3F's `state.pointer` stays frozen at (0, 0). This bridges
 * window-level pointer moves into R3F so cursor-driven effects (camera rig,
 * flower tilt, leaf interaction) work while hovering the page content.
 */
export default function GlobalPointer() {
  const pointer = useThree((state) => state.pointer);

  useEffect(() => {
    const onPointerMove = (event: PointerEvent) => {
      pointer.set(
        (event.clientX / window.innerWidth) * 2 - 1,
        -(event.clientY / window.innerHeight) * 2 + 1
      );
    };

    window.addEventListener("pointermove", onPointerMove);
    return () => window.removeEventListener("pointermove", onPointerMove);
  }, [pointer]);

  return null;
}
