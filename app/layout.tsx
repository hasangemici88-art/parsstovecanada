import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({ variable: "--font-geist", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pars Stove | Akıllı Pellet Sobaları",
  description: "Yüksek verimli Pars pellet sobalarını online keşfedin; güvenli sipariş, hızlı teslimat ve uzman kurulum.",
  openGraph: {
    title: "Pars Stove | Akıllı Pellet Sobaları",
    description: "Doğanın sıcaklığı, akıllı konforla.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Pars Stove pellet sobası" }],
  },
  twitter: { card: "summary_large_image", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="tr"><body className={geist.variable}>{children}</body></html>;
}
