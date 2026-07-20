"use client";

import { Sun, Palette, Sparkles, Globe } from "lucide-react";

import Section from "../ui/Section";
import Title from "../ui/Title";
import FadeUp from "../ui/FadeUp";
import SpotlightCard from "@/components/reactbits/SpotlightCard/SpotlightCard";

const skills = [
  {
    icon: Sun,
    name: "Sun Worshipper",
    description:
      "The hibiscus blooms hardest where the light is fiercest — give it heat and full sun and it answers with color.",
    level: 96,
  },
  {
    icon: Palette,
    name: "Endless Color",
    description:
      "Crimson, coral, butter-yellow, blush and pure white — with thousands of cultivars, no two gardens wear the same shade.",
    level: 94,
  },
  {
    icon: Sparkles,
    name: "One Perfect Day",
    description:
      "Each flower opens at dawn and fades by dusk — a daily, fleeting spectacle that rewards anyone paying attention.",
    level: 90,
  },
  {
    icon: Globe,
    name: "Loved Worldwide",
    description:
      "National flower of Malaysia, Haiti and South Korea, and the heart of ruby-red teas brewed across the tropics.",
    level: 92,
  },
];

export default function Skills() {
  return (
    <Section id="skills" className="">

      <Title eyebrow="Why we love it">What makes a hibiscus</Title>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map((skill, index) => (
          <FadeUp key={skill.name} delay={index * 0.1} className="h-full">
            <SpotlightCard
              className="glass glass-hover flex h-full flex-col"
              spotlightColor="rgba(255, 47, 109, 0.18)"
            >
              <skill.icon className="h-8 w-8 text-rose-500" />

              <h3 className="mt-6 text-xl font-bold">
                {skill.name}
              </h3>

              <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-700">
                {skill.description}
              </p>

              <div className="mt-6">
                <div className="flex justify-between text-xs text-gray-700">
                  <span>Vibrance</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="mt-2 h-1 overflow-hidden rounded-full bg-black/10">
                  <div
                    className="h-full rounded-full bg-rose-500"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            </SpotlightCard>
          </FadeUp>
        ))}
      </div>

    </Section>
  );
}
