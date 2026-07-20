"use client";

import Section from "../ui/Section";
import Title from "../ui/Title";
import FadeUp from "../ui/FadeUp";
import TiltedCard from "@/components/reactbits/TiltedCard/TiltedCard";

// Photography from Wikimedia Commons. All three are CC BY-SA, which requires
// the photographer be credited wherever the image appears — hence `credit`,
// rendered in the card overlay. Don't drop it without swapping the image.
const works = [
  {
    title: "Rosa-sinensis",
    category: "The classic tropical hibiscus",
    image: "/images/rosa-sinensis.jpg",
    credit: "Jules Verne Times Two · CC BY-SA 4.0",
  },
  {
    title: "Roselle",
    category: "The bloom they steep into ruby tea",
    image: "/images/roselle.jpg",
    credit: "Horacio Cambeiro · CC BY-SA 3.0",
  },
  {
    title: "Rose of Sharon",
    category: "Hardy blooms for cooler gardens",
    image: "/images/rose-of-sharon.jpg",
    credit: "Gmihail · CC BY-SA 3.0 RS",
  },
];

export default function Works() {
  return (
    <Section id="works" className="">

      <Title eyebrow="The collection">Varieties worth knowing</Title>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {works.map((work, index) => (
          <FadeUp key={work.title} delay={index * 0.12}>
            <TiltedCard
              imageSrc={work.image}
              altText={work.title}
              containerHeight="360px"
              containerWidth="100%"
              imageHeight="360px"
              imageWidth="100%"
              rotateAmplitude={10}
              scaleOnHover={1.05}
              showMobileWarning={false}
              showTooltip={false}
              displayOverlayContent
              overlayContent={
                <div className="bg-white/80 backdrop-blur-sm m-6 rounded-xl px-5 py-3">
                  <p className="font-bold">{work.title}</p>
                  <p className="text-sm text-black/50">{work.category}</p>
                  <p className="mt-1 text-[10px] text-black/35">{work.credit}</p>
                </div>
              }
            />
          </FadeUp>
        ))}
      </div>

    </Section>
  );
}
