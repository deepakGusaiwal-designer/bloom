"use client";

import SplitText from "@/components/reactbits/SplitText/SplitText";
import { cn } from "@/lib/utils";

type Props = {
  eyebrow?: string;
  children: string;
  className?: string;
};

export default function Title({ eyebrow, children, className }: Props) {
  return (
    <div className={cn("", className)}>

      {eyebrow && (
        <p className="mb-4 text-sm tracking-[0.35em] text-rose-500 uppercase">
          {eyebrow}
        </p>
      )}

      <SplitText
        text={children}
        tag="h2"
        className="text-4xl font-bold md:text-6xl leading-snug tracking-tight text-black/90"
        splitType="words, chars"
        delay={20}
        duration={0.9}
        from={{ opacity: 0, y: 50 }}
        to={{ opacity: 1, y: 0 }}
      />

    </div>
  );
}
