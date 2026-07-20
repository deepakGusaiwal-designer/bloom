import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";

import "lenis/dist/lenis.css";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "Bloom — The Art of the Hibiscus",
  description:
    "A celebration of the hibiscus flower: its bold blooms, endless colors, and timeless meaning. Discover the varieties, learn the lore, and fall for the flower that colors the tropics.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={dmSans.variable}>{children}</body>
    </html>
  );
}