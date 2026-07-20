"use client";

import Section from "../ui/Section";
import Title from "../ui/Title";
import FadeUp from "../ui/FadeUp";
import BlurText from "@/components/reactbits/BlurText/BlurText";

const stats = [
  { value: "200+", label: "Species in the genus" },
  { value: "1 Day", label: "The life of a single bloom" },
  { value: "5", label: "Nations that crown it their flower" },
];

export default function About() {
  return (
    <Section id="about" className="">

      <Title eyebrow="The flower">A flower that dares to be seen</Title>

      <div className="grid gap-14 md:grid-cols-2 md:gap-20">

        <BlurText
          text="The hibiscus has never learned to be subtle. Its blooms open the width of a hand, in reds that stop traffic and yellows that glow like lamplight. Each flower lasts a single day — it unfurls at dawn, holds court through the heat, and is gone by nightfall. From Hawaiian leis to Egyptian tea, from temple offerings to the hair of a bride, this is the flower the tropics reach for when they want to say something out loud."
          animateBy="words"
          delay={40}
          className="text-md leading-relaxed text-gray-700 md:text-lg"
        />

        <div className="grid grid-cols-3 gap-6 self-center">
          {stats.map((stat, index) => (
            <FadeUp key={stat.label} delay={index * 0.15}>
              <p className="text-4xl font-bold text-rose-500 md:text-5xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-gray-700">
                {stat.label}
              </p>
            </FadeUp>
          ))}
        </div>

      </div>

    </Section>
  );
}
