"use client";

import { hackathon } from "@/data/hackathon";
import MagneticButton from "@/components/ui/MagneticButton";
import AnimatedText from "@/components/ui/AnimatedText";
import { ArrowUpRight, Zap, QrCode } from "lucide-react";
import confetti from "canvas-confetti";

export default function FinalCTA() {
  const triggerConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#00E5FF", "#FFD21F", "#FFFFFF"],
    });
  };

  return (
    <section className="relative w-full py-32 bg-[#00E5FF] border-b-4 border-meshBlack overflow-hidden">
      {/* Background Dots Pattern */}
      <div className="absolute inset-0 bg-dot-pattern opacity-25 pointer-events-none" />

      {/* Background Cybernetic Glow Pattern */}
      <div className="absolute inset-0 opacity-30 pointer-events-none bg-[radial-gradient(#000_1.5px,transparent_1.5px)] [background-size:20px_20px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 bg-meshBlack text-[#00E5FF] font-mono font-black text-xs px-4 py-1.5 border-2 border-meshBlack shadow-retro mb-6 uppercase tracking-widest">
          <Zap className="w-4 h-4 text-[#00E5FF] fill-[#00E5FF]" /> REGISTRATION IS LIVE • LIMITED SLOTS
        </div>

        {/* Massive Typography with Font Scrambling */}
        <h2 className="font-display font-black text-5xl sm:text-7xl md:text-8xl lg:text-[8rem] leading-[0.85] tracking-tighter text-meshBlack uppercase select-none">
          <span className="block">
            <AnimatedText text="JOIN" />
          </span>
          <span className="block whitespace-nowrap overflow-visible">
            <AnimatedText text="HACKNEXT" />
          </span>
          <span className="block text-white drop-shadow-[5px_5px_0px_#111111] whitespace-nowrap">
            <AnimatedText text="'26 SERIES 2.0" />
          </span>
        </h2>

        {/* Subtitle */}
        <p className="mt-8 font-display font-extrabold text-xl sm:text-2xl text-meshBlack max-w-xl uppercase">
          ONE DAY. ENDLESS POSSIBILITIES.
        </p>

        <p className="mt-2 font-mono text-xs font-bold text-meshBlack/90 uppercase tracking-widest">
          {hackathon.organizer.college} • {hackathon.campusName} • {hackathon.date}
        </p>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <MagneticButton
            href="#register"
            onClick={triggerConfetti}
            className="text-base sm:text-lg px-10 py-5 bg-meshBlack text-[#00E5FF] hover:bg-white hover:text-meshBlack border-2 border-black shadow-retro"
          >
            REGISTER NOW (₹550) <ArrowUpRight className="w-6 h-6" />
          </MagneticButton>

          <a
            href="#register"
            className="inline-flex items-center gap-2 font-display font-black text-sm uppercase px-8 py-5 border-2 border-meshBlack bg-white text-black hover:bg-meshYellow transition-colors shadow-retro"
          >
            <QrCode className="w-5 h-5" /> SCAN QR CODE
          </a>
        </div>

        {/* Bottom Banner from Poster */}
        <div className="mt-12 bg-white text-meshBlack font-mono font-black text-sm sm:text-base px-6 py-3 border-2 border-meshBlack shadow-retro transform -rotate-1">
          {"</> "} THINK BEYOND. BUILD BEYOND. LEAD BEYOND. [AI]
        </div>
      </div>
    </section>
  );
}
