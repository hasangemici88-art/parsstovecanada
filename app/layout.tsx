import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({ variable: "--font-geist", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pars Stove Canada | High-Efficiency Pellet Stoves",
  description: "Shop high-efficiency Pars pellet stoves in Canada with secure ordering, regional delivery, and qualified installation support.",
  openGraph: {
    title: "Pars Stove Canada | High-Efficiency Pellet Stoves",
    description: "Natural warmth. Smarter comfort.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Pars Stove pellet stove in a Canadian home" }],
  },
  twitter: { card: "summary_large_image", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en-CA"><body className={geist.variable}>{children}</body></html>;
}
