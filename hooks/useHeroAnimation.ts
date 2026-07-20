"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";

export default function useHeroAnimation() {
  useGSAP(() => {

    const tl = gsap.timeline({

      scrollTrigger:{

        trigger:"#hero",

        start:"top top",

        end:"bottom bottom",

        scrub:1,

      }

    });

    tl.from(".hero-title",{

      y:100,

      opacity:0,

      duration:1,

    });

    tl.from(".hero-description",{

      y:60,

      opacity:0,

      duration:1,

    });

    tl.from(".hero-button",{

      y:60,

      opacity:0,

      duration:1,

    });

  });
}