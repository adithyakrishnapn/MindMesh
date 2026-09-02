"use client";

import dynamic from "next/dynamic";
import { hackathon } from "@/data/hackathon";
import MagneticButton from "@/components/ui/MagneticButton";
import AnimatedText from "@/components/ui/AnimatedText";
import { ArrowUpRight, Sparkles, Zap } from "lucide-react";
import confetti from "canvas-confetti";

const MindMeshScene = dynamic(() => import("@/components/MindMeshScene"), {
  ssr: false,
});

export default function FinalCTA() {
  const triggerConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#FFD21F", "#111111", "#FFFFFF"],
    });
  };

  return (
    <section className="relative w-full py-32 bg-meshYellow border-b-4 border-meshBlack overflow-hidden">
      {/* Background Dots Pattern */}
      <div className="absolute inset-0 bg-dot-pattern opacity-25 pointer-events-none" />

      {/* Background 3D Canvas reunion */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <MindMeshScene />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
        
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 bg-meshBlack text-meshYellow font-mono font-black text-xs px-4 py-1.5 border-2 border-meshBlack shadow-retro mb-6 uppercase tracking-widest">
          <Zap className="w-4 h-4 text-meshYellow fill-meshYellow" /> REGISTRATION IS LIVE
        </div>

        {/* Massive Typography */}
        <h2 className="font-display font-black text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] leading-[0.85] tracking-tighter text-meshBlack uppercase">
          <span>READY TO</span> <br />
          <span>JOIN THE</span> <br />
          <span className="text-white drop-shadow-[5px_5px_0px_#111111]">
            <AnimatedText text="MESH?" />
          </span>
        </h2>

        {/* Subtitle */}
        <p className="mt-8 font-display font-extrabold text-xl sm:text-2xl text-meshBlack max-w-xl">
          24 HOURS. COUNTLESS IDEAS. ONE UNFORGETTABLE HACKATHON.
        </p>

        <p className="mt-2 font-mono text-xs font-bold text-meshBlack/80 uppercase tracking-widest">
          SNS COLLEGE OF ENGINEERING • CSE DEPARTMENT • {hackathon.date}
        </p>

        {/* Big Yellow CTA Button */}
        <div className="mt-10">
          <MagneticButton
            href={hackathon.registrationUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={triggerConfetti}
            className="text-base sm:text-lg px-10 py-5 bg-meshBlack text-meshYellow hover:bg-white hover:text-meshBlack"
          >
            REGISTER NOW FOR MINDMESH <ArrowUpRight className="w-6 h-6" />
          </MagneticButton>
        </div>

        {/* Sticker Footer annotation */}
        <div className="mt-12 bg-white text-meshBlack font-handwriting text-lg font-bold px-4 py-2 border-2 border-meshBlack shadow-retro transform -rotate-2">
          "Don't build alone. Connect your mind to the mesh!" 🚀
        </div>

      </div>
    </section>
  );
}
