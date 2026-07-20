"use client";

import TrueFocus from "../reactbits/TrueFocus/TrueFocus";
import Button from "../ui/Button";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen"
    >
      <div className="sticky top-0 flex h-screen justify-center overflow-hidden pt-40">

        {/* <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/50" /> */}

        <div className="relative z-10 mx-auto max-w-4xl text-center">

          <TrueFocus
            sentence="Wild Beauty"
            manualMode={false}
            blurAmount={5}
            borderColor="#ff2f6d"
            animationDuration={0.5}
            pauseBetweenAnimations={1.5}
          />

          <h1 className="hero-title text-4xl font-semibold md:text-6xl tracking-wide mt-4 uppercase">
            Bloom boldly.
          </h1>


          <p className="hero-description mt-4 text-md text-slate-900 max-w-2xl font-medium">
            The hibiscus opens wide and asks to be seen — a single, brilliant
            day of color, then gone. No flower makes a stronger case for
            noticing beauty while it's here.
          </p>

          <div className="hero-button mt-12">
            <Button>
              Discover the Bloom
            </Button>
          </div>

        </div>

      </div>
    </section>
  );
}