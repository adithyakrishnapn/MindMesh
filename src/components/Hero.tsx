"use client";

import { Suspense } from "react";
import dynamic from "next/dynamic";
import { hackathon } from "@/data/hackathon";
import AnimatedText from "@/components/ui/AnimatedText";
import MagneticButton from "@/components/ui/MagneticButton";
import { ArrowDown, ArrowUpRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

// Dynamically import 3D canvas for performance and SSR safety
const MindMeshScene = dynamic(() => import("@/components/MindMeshScene"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-16 h-16 rounded-full border-4 border-meshBlack border-t-meshYellow animate-spin" />
    </div>
  ),
});

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen pt-24 pb-16 flex flex-col justify-between overflow-hidden bg-meshOffWhite border-b-4 border-meshBlack">
      {/* Dots pattern overlay background */}
      <div className="absolute inset-0 bg-dot-pattern opacity-30 pointer-events-none" />

      {/* Top Banner / Subtitle */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b-2 border-meshBlack/10 pb-4">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-meshYellow animate-ping" />
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-meshBlack bg-meshYellow/30 px-2 py-0.5 border border-meshBlack/20">
              {hackathon.organizer.department}
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono font-bold text-meshBlack">
            <span>{hackathon.organizer.college}</span>
            <span className="hidden sm:inline">•</span>
            <span className="badge-sticker">{hackathon.date}</span>
          </div>
        </div>
      </div>

      {/* Main Hero Viewport Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[60vh]">
          
          {/* Left / Top Headline Column */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Playful Floating 24H Sticker */}
            <motion.div
              initial={{ rotate: -12, scale: 0.8 }}
              animate={{ rotate: [-12, -8, -12], scale: 1 }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="inline-self-start mb-2"
            >
              <span className="bg-meshYellow text-meshBlack font-mono font-black text-xs sm:text-sm px-3 py-1 border-2 border-meshBlack shadow-retro uppercase tracking-widest inline-flex items-center gap-1.5">
                <Sparkles className="w-4 h-4" /> 24-HOUR COLLEGE HACKATHON
              </span>
            </motion.div>

            {/* Oversized Typography MIND MESH */}
            <div className="relative">
              <h1 className="font-display font-black text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] leading-[0.82] tracking-tighter text-meshBlack select-none">
                <AnimatedText text="MIND" className="block text-meshBlack" />
                <span className="block pl-8 sm:pl-16 md:pl-24 text-meshYellow drop-shadow-[4px_4px_0px_#111111]">
                  <AnimatedText text="MESH" />
                </span>
              </h1>

              {/* Handwritten Style Annotation with Animated Arrow */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="hidden sm:flex items-center gap-2 absolute top-4 right-0 lg:-right-4 bg-white border-2 border-meshBlack p-2.5 shadow-retro transform rotate-3 z-20 max-w-[200px]"
              >
                <p className="font-handwriting text-sm font-bold text-meshBlack leading-tight">
                  24 Hours of non-stop building →
                </p>
              </motion.div>
            </div>

            {/* Tagline & College Attribution */}
            <p className="mt-6 font-body text-base sm:text-xl font-medium text-meshBlack/90 max-w-xl border-l-4 border-meshYellow pl-4">
              "{hackathon.tagline}" <br />
              <span className="text-xs font-mono font-bold text-meshGray uppercase tracking-wider block mt-2">
                Conducted by CSE Dept • SNS College of Engineering, Coimbatore
              </span>
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <MagneticButton
                href={hackathon.registrationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm px-8 py-4"
              >
                REGISTER YOUR TEAM NOW <ArrowUpRight className="w-5 h-5" />
              </MagneticButton>

              <a
                href="#about"
                className="inline-flex items-center gap-2 font-display font-bold text-xs uppercase tracking-wider px-6 py-4 border-2 border-meshBlack bg-white hover:bg-meshYellow transition-colors shadow-retro"
              >
                EXPLORE EVENT <ArrowDown className="w-4 h-4 animate-bounce" />
              </a>
            </div>
          </div>

          {/* Right Column: Interactive 3D MindMesh Object Canvas */}
          <div className="lg:col-span-5 relative h-[380px] sm:h-[480px] lg:h-[550px] w-full flex items-center justify-center">
            
            {/* Floating micro-labels surrounding the 3D canvas */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
              className="absolute top-4 left-4 z-20 bg-meshBlack text-meshYellow font-mono font-bold text-xs px-2.5 py-1 border border-meshBlack shadow-retro transform -rotate-6"
            >
              THINK
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 0.5 }}
              className="absolute top-12 right-6 z-20 bg-meshYellow text-meshBlack font-mono font-bold text-xs px-2.5 py-1 border border-meshBlack shadow-retro transform rotate-6"
            >
              BUILD
            </motion.div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-16 left-8 z-20 bg-white text-meshBlack font-mono font-bold text-xs px-2.5 py-1 border border-meshBlack shadow-retro transform rotate-3"
            >
              CONNECT
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 3.8, ease: "easeInOut", delay: 1.5 }}
              className="absolute bottom-8 right-12 z-20 bg-meshYellow text-meshBlack font-mono font-bold text-xs px-2.5 py-1 border border-meshBlack shadow-retro transform -rotate-6"
            >
              SHIP
            </motion.div>

            {/* R3F 3D Canvas */}
            <div className="w-full h-full relative z-10 bg-meshYellow/10 border-2 border-meshBlack shadow-retroLg rounded-2xl overflow-hidden">
              <Suspense fallback={null}>
                <MindMeshScene />
              </Suspense>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Footer Scroll Indicator */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex items-center justify-between border-t-2 border-meshBlack/10 pt-4">
        <div className="flex items-center gap-2 text-xs font-mono font-bold text-meshBlack">
          <span className="w-2 h-2 rounded-full bg-meshYellow" />
          <span>IN-PERSON @ SNSCE CAMPUS</span>
        </div>

        <a
          href="#about"
          className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-meshBlack hover:text-meshYellow transition-colors"
        >
          SCROLL TO CONNECT <ArrowDown className="w-4 h-4 animate-bounce text-meshYellow" />
        </a>
      </div>
    </section>
  );
}
