"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import AnimatedText from "@/components/ui/AnimatedText";
import { hackathon } from "@/data/hackathon";
import {
  Brain,
  Users,
  Lightbulb,
  Rocket,
  ArrowRight,
  Sparkles,
  Building2,
  CheckCircle2,
} from "lucide-react";

export default function About() {
  const [activePillarIndex, setActivePillarIndex] = useState<number>(0);

  const pillarIcons = [Brain, Users, Lightbulb, Rocket];
  const currentPillar = hackathon.pillars[activePillarIndex];
  const IconComponent = pillarIcons[activePillarIndex] || Brain;

  return (
    <section
      id="about"
      className="relative w-full py-24 bg-white border-b-4 border-meshBlack overflow-hidden"
    >
      {/* Background Accent Grid */}
      <div className="absolute inset-0 bg-dot-pattern opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Playful Top Annotation */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <span className="badge-sticker bg-[#00E5FF] text-black">THE MANIFESTO</span>
          <span className="font-handwriting text-lg font-bold text-meshBlack">
            "Innovate Today. Transform Tomorrow."
          </span>
        </div>

        {/* Section Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading & Institutional Mission */}
          <div className="lg:col-span-6">
            <h2 className="font-display font-black text-5xl sm:text-7xl lg:text-8xl tracking-tight leading-[0.9] text-meshBlack uppercase">
              <span className="block">
                <AnimatedText text="WHAT IS" />
              </span>
              <span className="block text-[#00E5FF] drop-shadow-[3px_3px_0px_#111111]">
                <AnimatedText text="HACKNEXT" />
              </span>
              <span className="block text-meshBlack">
                <AnimatedText text="'26?" />
              </span>
            </h2>

            <div className="mt-8 p-6 bg-meshOffWhite border-2 border-meshBlack shadow-retro space-y-4">
              <p className="font-body text-lg sm:text-xl font-bold text-meshBlack leading-relaxed">
                <span className="bg-[#00E5FF] px-2 py-0.5 border border-meshBlack">
                  HACKNEXT'26 SERIES 2.0
                </span>{" "}
                is an elite AI-Powered 24-Hour Hackathon held at{" "}
                <strong>{hackathon.organizer.college}</strong> ({hackathon.campusName}), Coimbatore.
              </p>

              <p className="font-body text-sm text-meshGray font-medium leading-relaxed">
                Powered by the renowned <strong>SNS Design Thinking Framework</strong>, this hackathon pushes students beyond basic prototypes to build scalable, market-viable AI solutions that create tangible real-world impact.
              </p>

              {/* Design Thinking Accolade Tag */}
              <div className="pt-3 border-t border-meshBlack/20 flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-meshYellow shrink-0" />
                <span className="font-mono text-xs font-bold text-meshBlack">
                  {hackathon.organizer.frameworkTag}
                </span>
              </div>
            </div>

            {/* Badges strip from Poster */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-3 bg-white border-2 border-meshBlack shadow-retro flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#00E5FF] shrink-0" />
                <span className="font-mono text-xs font-bold text-meshBlack">
                  1000 I-Startups in 10 Years
                </span>
              </div>

              <div className="p-3 bg-meshYellow/30 border-2 border-meshBlack shadow-retro flex items-center gap-2">
                <Building2 className="w-5 h-5 text-meshBlack shrink-0" />
                <span className="font-mono text-xs font-bold text-meshBlack">
                  Pathway to 10 LPA & Beyond
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: The 4 Core Pillars from the Poster */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div className="card-playful p-6 sm:p-8 bg-[#0A0E1A] text-white border-4 border-meshBlack shadow-retroLg relative">
              
              <div className="flex items-center justify-between mb-6 border-b border-gray-700 pb-3">
                <span className="font-mono text-xs font-bold text-[#00E5FF] uppercase tracking-widest">
                  THE 4 CORE PILLARS
                </span>
                <span className="font-mono text-xs font-black bg-meshYellow text-black px-2 py-0.5 border border-black">
                  POSTER BLUEPRINT
                </span>
              </div>

              {/* Pillars Interactive Stepper Tabs */}
              <div className="grid grid-cols-4 gap-2 mb-6">
                {hackathon.pillars.map((pillar, idx) => {
                  const isActive = activePillarIndex === idx;

                  return (
                    <button
                      key={pillar.id}
                      onClick={() => setActivePillarIndex(idx)}
                      className={`py-2 px-1 text-center font-display font-black text-xs sm:text-sm uppercase tracking-wider border-2 transition-all ${
                        isActive
                          ? "bg-[#00E5FF] text-black border-white shadow-[3px_3px_0px_0px_#FFD21F] scale-105"
                          : "bg-gray-800 text-gray-300 border-gray-700 hover:bg-gray-700"
                      }`}
                    >
                      {pillar.title}
                    </button>
                  );
                })}
              </div>

              {/* Active Pillar Card */}
              <motion.div
                key={currentPillar.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-[#111827] p-6 border-2 border-[#00E5FF] relative shadow-[6px_6px_0px_0px_#FFD21F]"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-[#00E5FF] text-black border-2 border-black flex items-center justify-center font-black shadow-retro shrink-0">
                    <IconComponent className="w-8 h-8" />
                  </div>

                  <div>
                    <span className="font-mono text-xs font-black text-[#FFD21F] uppercase tracking-wider">
                      PILLAR 0{activePillarIndex + 1}
                    </span>
                    <h3 className="font-display font-black text-2xl sm:text-3xl text-white uppercase leading-none mt-0.5">
                      {currentPillar.title}
                    </h3>
                  </div>
                </div>

                {/* Sub Action & Action from Poster */}
                <div className="my-4 p-3 bg-black/50 border border-[#00E5FF]/40">
                  <div className="font-mono text-xs font-black text-[#00E5FF] tracking-wider uppercase">
                    {currentPillar.action}
                  </div>
                  <div className="font-display font-black text-lg text-[#FFD21F] tracking-wide uppercase mt-0.5">
                    {currentPillar.subAction}
                  </div>
                </div>

                <p className="font-body text-sm font-medium text-gray-300 leading-relaxed">
                  {currentPillar.desc}
                </p>

                {/* Next Tab Button */}
                <div className="mt-6 pt-4 border-t border-gray-700 flex items-center justify-between">
                  <span className="font-mono text-[11px] text-gray-400">
                    TAP TABS OR CLICK NEXT
                  </span>
                  <button
                    onClick={() => setActivePillarIndex((prev) => (prev + 1) % hackathon.pillars.length)}
                    className="font-display font-bold text-xs uppercase bg-[#FFD21F] text-black px-3 py-1.5 border border-black flex items-center gap-1 hover:bg-[#00E5FF] transition-colors"
                  >
                    NEXT PILLAR <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>

            </div>
          </div>
        </div>

        {/* Bottom Banner Divider */}
        <div className="mt-16 pt-8 border-t-2 border-meshBlack/10 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="badge-sticker bg-[#FFD21F] text-black">
              SNS AI CAMPUS
            </span>
            <span className="font-mono text-xs font-bold text-meshBlack uppercase tracking-wider">
              {hackathon.durationTag}
            </span>
          </div>

          <span className="font-mono text-xs font-bold text-meshGray uppercase tracking-widest">
            {hackathon.name} • {hackathon.edition} • 2026
          </span>
        </div>

      </div>
    </section>
  );
}
