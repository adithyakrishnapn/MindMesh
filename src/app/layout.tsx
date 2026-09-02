import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/ui/CustomCursor";
import GrainTexture from "@/components/ui/GrainTexture";

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
    <html lang="en" className="scroll-smooth">
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
