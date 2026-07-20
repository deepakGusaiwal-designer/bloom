"use client";

import Section from "../ui/Section";
import Title from "../ui/Title";
import FadeUp from "../ui/FadeUp";
import SpotlightCard from "@/components/reactbits/SpotlightCard/SpotlightCard";

const testimonials = [
  {
    quote:
      "My grandmother kept a red hibiscus by the door for luck. I've kept one by mine for twenty years now — it blooms like clockwork every morning.",
    name: "Amara Okafor",
    role: "Lifelong gardener",
  },
  {
    quote:
      "I photograph a single flower every morning before it fades. Same plant, same window — and somehow no two blooms are ever quite the same.",
    name: "Kenji Watanabe",
    role: "Botanical photographer",
  },
  {
    quote:
      "We tuck the petals into tea and wear the flowers behind our ears. On the islands the hibiscus isn't decoration — it's part of who we are.",
    name: "Leilani Kahale",
    role: "Island florist",
  },
];

export default function Testimonials() {
  return (
    <Section id="testimonials" className="">

      <Title eyebrow="Voices">In their own words</Title>

      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <FadeUp key={testimonial.name} delay={index * 0.12} className="h-full">
            <SpotlightCard
              className="glass glass-hover flex h-full flex-col"
              spotlightColor="rgba(238, 159, 194, 0.25)"
            >
              <p className="flex-1 text-lg leading-relaxed text-black/70">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              <div className="mt-8">
                <p className="font-bold">{testimonial.name}</p>
                <p className="text-sm text-black/50">{testimonial.role}</p>
              </div>
            </SpotlightCard>
          </FadeUp>
        ))}
      </div>

    </Section>
  );
}
