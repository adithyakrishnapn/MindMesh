import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/ui/CustomCursor";
import GrainTexture from "@/components/ui/GrainTexture";

export const metadata: Metadata = {
  title: "HACKNEXT'26 SERIES 2.0 — AI-Powered 24-Hour Hackathon | SNS College of Technology",
  description:
    "HACKNEXT'26 Series 2.0 is an elite AI-Powered 24-Hour Hackathon held on 17-18 September 2026 at SNS AI Campus, SNS College of Technology (Autonomous), Coimbatore. External participants fee: ₹550.",
  keywords: [
    "HACKNEXT'26",
    "Series 2.0",
    "AI-Powered Hackathon",
    "24 Hour Hackathon",
    "SNS College of Technology",
    "SNSCT",
    "SNS AI Campus",
    "Coimbatore Hackathon",
    "Design Thinking Framework",
    "SNS Institutions",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased selection:bg-[#00E5FF] selection:text-black">
        <SmoothScroll>
          <GrainTexture />
          <CustomCursor />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
