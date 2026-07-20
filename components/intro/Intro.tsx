"use client";

import { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";

type IntroProps = {
  onComplete: () => void;
};

export default function Intro({ onComplete }: IntroProps) {
  const root = useRef<HTMLDivElement>(null);

  // Lock scrolling while the intro plays
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
        onComplete,
      });

      tl.from(".intro-title", {
        y: 80,
        opacity: 0,
        duration: 1,
        stagger: 0.45,
      });

      tl.to(
        ".intro-title",
        {
          opacity: 0,
          y: -60,
          stagger: 0.2,
          duration: 0.8,
        },
        "+=1"
      );

      tl.to(
        root.current,
        {
          opacity: 0,
          duration: 1,
          pointerEvents: "none",
        },
        "-=0.2"
      );
    },
    { scope: root }
  );

  return (
    <div
      ref={root}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#F7F4EE]"
    >
      <div className="relative space-y-4 text-center">
        <h1 className="intro-title text-6xl font-bold">
          Bloom.
        </h1>

        <h1 className="intro-title text-6xl font-bold text-rose-500">
          Blush.
        </h1>

        <h1 className="intro-title text-6xl font-bold">
          Behold.
        </h1>
      </div>
    </div>
  );
}
