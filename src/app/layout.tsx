import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono, Caveat } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/ui/CustomCursor";
import GrainTexture from "@/components/ui/GrainTexture";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "700"],
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-handwriting",
  weight: ["700"],
});

export const metadata: Metadata = {
  title: "MINDMESH 2026 — 24-Hour Hackathon | SNSCE CSE Coimbatore",
  description:
    "MindMesh is a 24-hour college innovation hackathon conducted by the Department of Computer Science and Engineering, SNS College of Engineering (SNSCE), Coimbatore.",
  keywords: [
    "MindMesh",
    "SNSCE",
    "Hackathon",
    "24 Hour Hackathon",
    "Coimbatore Hackathon",
    "SNS College of Engineering",
    "CSE Department",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} ${caveat.variable} scroll-smooth`}
    >
      <body className="antialiased selection:bg-meshYellow selection:text-meshBlack">
        <SmoothScroll>
          <GrainTexture />
          <CustomCursor />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
