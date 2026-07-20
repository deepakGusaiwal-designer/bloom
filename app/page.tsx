"use client";

import { useState } from "react";

import useLenis from "@/hooks/useLenis";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import Intro from "@/components/intro/Intro";
import Hero from "@/components/hero/Hero";
import HeroScene from "@/components/hero/HeroScene";

import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Works from "@/components/sections/Works";
import Testimonials from "@/components/sections/Testimonials";

export default function Home() {
  const [introFinished, setIntroFinished] = useState(false);

  useLenis();

  return (
    <>
      <HeroScene introFinished={introFinished} />

      <Hero />

      {!introFinished && (
        <Intro onComplete={() => setIntroFinished(true)} />
      )}

      <Header visible={introFinished} />

      <main className="relative z-10">

        <About />

        <Skills />

        <Works />

        <Testimonials />

      </main>

      <Footer />
    </>
  );
}
