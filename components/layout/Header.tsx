"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import logo from "@/assets/logo.png";

import Button from "../ui/Button";

type HeaderProps = {
  visible: boolean;
};

const links = [
  { label: "The Flower", href: "#about" },
  { label: "Traits", href: "#skills" },
  { label: "Varieties", href: "#works" },
  { label: "Voices", href: "#testimonials" },
];

export default function Header({ visible }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-4 left-1/2 z-50 -translate-x-1/2 transition-all duration-700 ${
        visible ? "translate-y-0 opacity-100" : "-translate-y-24 opacity-0"
      }`}
    >
      <div
        className={`glass flex items-center rounded-full pl-6 transition-all duration-500 ${
          scrolled ? "gap-4 py-1.5 pr-1.5" : "gap-6 py-2.5 pr-2.5"
        }`}
      >
        <div className="flex items-center gap-2">
          <Image
            src={logo}
            alt="Bloom logo"
            priority
            className="h-auto w-15 object-contain shrink-0"
          />
        </div>

        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-medium whitespace-nowrap text-black/60 transition-colors hover:bg-white/50 hover:text-black"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <Button className="px-5 py-2.5 text-sm whitespace-nowrap">
          Grow Your Own
        </Button>
      </div>
    </header>
  );
}
