"use client";

import { Suspense } from "react";
import dynamic from "next/dynamic";
import { hackathon } from "@/data/hackathon";
import AnimatedText from "@/components/ui/AnimatedText";
import MagneticButton from "@/components/ui/MagneticButton";
import {
  ArrowDown,
  ArrowUpRight,
  Sparkles,
  Zap,
  Calendar,
  Clock,
  MapPin,
  QrCode,
  CheckCircle2,
} from "lucide-react";
import { motion } from "framer-motion";

// Dynamically import 3D canvas for performance and SSR safety
const MindMeshScene = dynamic(() => import("@/components/MindMeshScene"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-16 h-16 rounded-full border-4 border-meshBlack border-t-[#00E5FF] animate-spin" />
    </div>
  ),
});

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen pt-24 pb-16 flex flex-col justify-between overflow-hidden bg-meshOffWhite border-b-4 border-meshBlack">
      {/* Dots pattern overlay background */}
      <div className="absolute inset-0 bg-dot-pattern opacity-30 pointer-events-none" />

      {/* Top Institutional Banner from Poster */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b-2 border-meshBlack/10 pb-4">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#00E5FF] animate-ping" />
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-meshBlack bg-white px-2.5 py-1 border border-meshBlack shadow-retro">
              {hackathon.organizer.college} • {hackathon.organizer.location}
            </span>
          </div>

          <div className="flex items-center gap-3 text-xs font-mono font-bold text-meshBlack">
            <span className="hidden sm:inline bg-meshYellow/30 px-2 py-0.5 border border-meshBlack/30">
              AUTONOMOUS INSTITUTION
            </span>
            <span>•</span>
            <span className="badge-sticker bg-[#00E5FF] text-black">
              {hackathon.date}
            </span>
          </div>
        </div>
      </div>

      {/* Main Hero Viewport Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[60vh]">
          
          {/* Left Column: Headline & Event Badges */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* AI-POWERED 24-HOUR HACKATHON Pill from Poster */}
            <motion.div
              initial={{ rotate: -4, scale: 0.95 }}
              animate={{ rotate: [-4, -1, -4], scale: 1 }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="inline-self-start mb-3"
            >
              <span className="bg-[#00E5FF] text-black font-mono font-black text-xs sm:text-sm px-3.5 py-1.5 border-2 border-meshBlack shadow-retro uppercase tracking-widest inline-flex items-center gap-2">
                <Zap className="w-4 h-4 fill-black" /> {hackathon.subtitle}
              </span>
            </motion.div>

            {/* Oversized Typography HACKNEXT'26 + SERIES 2.0 */}
            <div className="relative overflow-visible">
              <h1 className="font-display font-black text-5xl sm:text-7xl md:text-8xl lg:text-[5.6rem] xl:text-[7.2rem] 2xl:text-[8.4rem] leading-[0.85] tracking-tight text-meshBlack select-none whitespace-nowrap overflow-visible">
                <div className="overflow-visible whitespace-nowrap flex-nowrap">
                  <AnimatedText
                    text="HACKNEXT"
                    autoInterval={10000}
                    className="inline-flex flex-nowrap whitespace-nowrap text-meshBlack"
                  />
                </div>
                <div className="flex flex-wrap items-baseline gap-3 sm:gap-6 pl-1 sm:pl-4 mt-1">
                  <span className="text-meshYellow drop-shadow-[4px_4px_0px_#111111] whitespace-nowrap">
                    <AnimatedText text="'26" autoInterval={12000} />
                  </span>
                  <span className="text-xl sm:text-3xl md:text-4xl font-mono font-black tracking-widest text-black bg-[#00E5FF] px-3 py-1 border-2 border-black shadow-retro transform -rotate-3 whitespace-nowrap">
                    {hackathon.edition}
                  </span>
                </div>
              </h1>

              {/* Hand-styled Pill Annotation */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="hidden sm:flex items-center gap-2 absolute -top-4 right-0 lg:-right-4 bg-white border-2 border-meshBlack p-2.5 shadow-retro transform rotate-3 z-20 max-w-[210px]"
              >
                <p className="font-handwriting text-sm font-bold text-meshBlack leading-tight">
                  One Day. Endless Possibilities →
                </p>
              </motion.div>
            </div>

            {/* Code Tagline & Secondary Tagline from Poster */}
            <div className="mt-6 space-y-2">
              <div className="font-mono text-xs sm:text-sm font-black text-[#00E5FF] bg-black px-3 py-1.5 border-2 border-black shadow-retro inline-block">
                {hackathon.codeTagline}
              </div>

              <p className="font-body text-base sm:text-xl font-bold text-meshBlack leading-snug border-l-4 border-meshYellow pl-4">
                "{hackathon.tagline}" <br />
                <span className="text-xs font-mono font-bold text-meshGray uppercase tracking-wider block mt-1">
                  Hosted at {hackathon.campusName} • Coimbatore
                </span>
              </p>
            </div>

            {/* Quick Metadata Strip matching Poster Icons */}
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-mono font-bold">
              <div className="bg-white p-2.5 border-2 border-black shadow-retro flex items-center gap-2">
                <Clock className="w-4 h-4 text-black shrink-0" />
                <span>{hackathon.duration}</span>
              </div>
              <div className="bg-white p-2.5 border-2 border-black shadow-retro flex items-center gap-2">
                <Calendar className="w-4 h-4 text-black shrink-0" />
                <span>17-18 SEP</span>
              </div>
              <div className="bg-white p-2.5 border-2 border-black shadow-retro flex items-center gap-2">
                <MapPin className="w-4 h-4 text-black shrink-0" />
                <span className="truncate">AI CAMPUS</span>
              </div>
              <div className="bg-meshYellow p-2.5 border-2 border-black shadow-retro flex items-center gap-2">
                <span className="font-black text-sm">₹550</span>
                <span className="text-[10px]">EXT. FEE</span>
              </div>
            </div>

            {/* Main CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <MagneticButton
                href="#register"
                className="text-sm px-8 py-4 bg-meshBlack text-meshYellow hover:bg-[#00E5FF] hover:text-black"
              >
                REGISTER NOW (₹550) <ArrowUpRight className="w-5 h-5" />
              </MagneticButton>

              <a
                href="#register"
                className="inline-flex items-center gap-2 font-display font-bold text-xs uppercase tracking-wider px-6 py-4 border-2 border-meshBlack bg-white hover:bg-meshYellow transition-colors shadow-retro"
              >
                <QrCode className="w-4 h-4" /> SCAN FORM QR
              </a>
            </div>
          </div>

          {/* Right Column: 3D Scene / AI Neural Brain Hologram Canvas */}
          <div className="lg:col-span-5 relative h-[400px] sm:h-[480px] lg:h-[550px] w-full flex items-center justify-center">
            
            {/* Floating 4 Pillars Labels from Poster */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
              className="absolute top-4 left-4 z-20 bg-meshBlack text-[#00E5FF] font-mono font-bold text-xs px-2.5 py-1 border border-meshBlack shadow-retro transform -rotate-6"
            >
              CODE
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 0.5 }}
              className="absolute top-12 right-6 z-20 bg-meshYellow text-meshBlack font-mono font-bold text-xs px-2.5 py-1 border border-meshBlack shadow-retro transform rotate-6"
            >
              CREATE
            </motion.div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-16 left-8 z-20 bg-white text-meshBlack font-mono font-bold text-xs px-2.5 py-1 border border-meshBlack shadow-retro transform rotate-3"
            >
              CONQUER
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 3.8, ease: "easeInOut", delay: 1.5 }}
              className="absolute bottom-8 right-12 z-20 bg-[#00E5FF] text-meshBlack font-mono font-bold text-xs px-2.5 py-1 border border-meshBlack shadow-retro transform -rotate-6"
            >
              TRANSFORM
            </motion.div>

            {/* 3D Canvas Box */}
            <div className="w-full h-full relative z-10 bg-[#0A0E1A] border-4 border-meshBlack shadow-retroLg rounded-2xl overflow-hidden">
              <Suspense fallback={null}>
                <MindMeshScene />
              </Suspense>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Footer Bar */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-wrap items-center justify-between gap-4 border-t-2 border-meshBlack/10 pt-4">
        <div className="flex items-center gap-2 text-xs font-mono font-bold text-meshBlack">
          <span className="w-2 h-2 rounded-full bg-[#00E5FF]" />
          <span>IN-PERSON @ SNS AI CAMPUS, COIMBATORE</span>
        </div>

        <a
          href="#about"
          className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-meshBlack hover:text-meshYellow transition-colors"
        >
          EXPLORE THE 4 PILLARS <ArrowDown className="w-4 h-4 animate-bounce text-meshBlack" />
        </a>
      </div>
    </section>
  );
}
