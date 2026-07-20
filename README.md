# Bloom — The Art of the Hibiscus

An immersive landing page celebrating the hibiscus flower — its bold blooms,
endless colors, and timeless meaning. Built with Next.js, React Three Fiber
(a scroll-scrubbed 3D blooming-hibiscus time-lapse) and GSAP.

## Getting Started

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

Edit content in `components/sections/*` and the 3D scene in `components/hero/*`.
The page auto-updates as you edit.

## Structure

- `app/` — Next.js App Router entry, layout, and global styles.
- `components/hero/` — the WebGL scene (`HeroScene`, `HibiscusFlower`, camera rig, lights).
- `components/sections/` — About, Skills (traits), Works (varieties), Testimonials.
- `components/layout/` — Header and Footer.
- `public/models/` — the `blooming_hibiscus_time-lapse_animation.glb` asset.
