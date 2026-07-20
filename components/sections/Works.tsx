"use client";

import Section from "../ui/Section";
import Title from "../ui/Title";
import FadeUp from "../ui/FadeUp";
import TiltedCard from "@/components/reactbits/TiltedCard/TiltedCard";

// Placeholder gradient art until real photography is available
const art = (from: string, to: string) =>
  `data:image/svg+xml;utf8,${encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' width='800' height='800'><defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'><stop offset='0%' stop-color='${from}'/><stop offset='100%' stop-color='${to}'/></linearGradient><radialGradient id='r' cx='0.3' cy='0.25' r='0.9'><stop offset='0%' stop-color='rgba(255,255,255,0.18)'/><stop offset='100%' stop-color='rgba(255,255,255,0)'/></radialGradient></defs><rect width='800' height='800' fill='url(#g)'/><rect width='800' height='800' fill='url(#r)'/></svg>`
  )}`;

const works = [
  {
    title: "Rosa-sinensis",
    category: "The classic tropical hibiscus",
    image: art("#ff4d6d", "#8b0028"),
  },
  {
    title: "Roselle",
    category: "The bloom they steep into ruby tea",
    image: art("#e11d48", "#4c0519"),
  },
  {
    title: "Rose of Sharon",
    category: "Hardy blooms for cooler gardens",
    image: art("#c084fc", "#5b21b6"),
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
                </div>
              }
            />
          </FadeUp>
        ))}
      </div>

    </Section>
  );
}
