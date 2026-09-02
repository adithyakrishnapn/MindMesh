"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { hackathon, TimelineItem } from "@/data/hackathon";
import AnimatedText from "@/components/ui/AnimatedText";
import {
  DoorOpen,
  Code,
  UserCheck,
  Utensils,
  Zap,
  GitCommit,
  Trophy,
  LucideIcon,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";

const timelineIcons: Record<string, LucideIcon> = {
  DoorOpen,
  Code,
  UserCheck,
  Utensils,
  Zap,
  GitCommit,
  Trophy,
};

export default function Timeline() {
  const [activeStage, setActiveStage] = useState<number>(0);

  const handleNext = () => {
    setActiveStage((prev) => Math.min(prev + 1, hackathon.timeline.length - 1));
  };

  const handlePrev = () => {
    setActiveStage((prev) => Math.max(prev - 1, 0));
  };

  const currentItem: TimelineItem = hackathon.timeline[activeStage];
  const IconComp = timelineIcons[currentItem.icon] || Code;

  return (
    <section id="timeline" className="relative w-full py-24 bg-meshOffWhite border-b-4 border-meshBlack overflow-hidden">
      {/* Dots Pattern */}
      <div className="absolute inset-0 bg-dot-pattern opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="mb-16">
          <span className="badge-sticker mb-3">THE SPRINT SCHEDULE</span>
          <h2 className="font-display font-black text-5xl sm:text-7xl lg:text-8xl tracking-tight text-meshBlack leading-none">
            <span>24 HOURS.</span> <br />
            <span className="text-meshYellow drop-shadow-[4px_4px_0px_#111111]">
              <AnimatedText text="ONE JOURNEY." />
            </span>
          </h2>
        </div>

        {/* Timeline Horizontal Stepper Bar */}
        <div className="relative mb-12 py-6 px-4 bg-white border-2 border-meshBlack shadow-retro overflow-x-auto no-scrollbar">
          
          {/* Main Connecting Track Wire */}
          <div className="relative min-w-[700px] flex items-center justify-between">
            <div className="absolute left-8 right-8 top-1/2 -translate-y-1/2 h-1.5 bg-meshBlack z-0" />
            
            {/* Animated Yellow Wire Fill */}
            <motion.div
              className="absolute left-8 top-1/2 -translate-y-1/2 h-2 bg-meshYellow z-0"
              animate={{
                width: `${(activeStage / (hackathon.timeline.length - 1)) * 92}%`,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            />

            {hackathon.timeline.map((item, idx) => {
              const isActive = idx === activeStage;
              const isPassed = idx <= activeStage;

              return (
                <button
                  key={item.phase}
                  onClick={() => setActiveStage(idx)}
                  className={`relative z-10 flex flex-col items-center group focus:outline-none`}
                >
                  <div
                    className={`w-12 h-12 rounded-full border-2 border-meshBlack flex items-center justify-center font-display font-black text-xs transition-all duration-300 ${
                      isActive
                        ? "bg-meshYellow scale-125 shadow-retro ring-4 ring-meshBlack/10"
                        : isPassed
                        ? "bg-meshBlack text-meshYellow"
                        : "bg-white text-meshBlack hover:bg-meshYellow/30"
                    }`}
                  >
                    {idx + 1}
                  </div>
                  
                  <span className="font-mono text-[11px] font-bold text-meshBlack mt-2 bg-meshOffWhite px-1.5 py-0.5 border border-meshBlack/30 whitespace-nowrap">
                    {item.time}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Stage Detailed Display Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Stage Metadata & Details */}
          <div className="lg:col-span-7">
            <motion.div
              key={activeStage}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="card-playful p-8 bg-white relative"
            >
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <span className="font-mono text-xs font-bold uppercase tracking-widest bg-meshYellow text-meshBlack px-3 py-1 border border-meshBlack">
                  {currentItem.phase}
                </span>

                <span className="badge-sticker bg-meshBlack text-meshYellow border-meshBlack">
                  {currentItem.highlight}
                </span>
              </div>

              <div className="flex items-center gap-4 my-4">
                <div className="w-16 h-16 bg-meshYellow border-2 border-meshBlack flex items-center justify-center shadow-retro">
                  <IconComp className="w-8 h-8 text-meshBlack" />
                </div>

                <div>
                  <span className="font-mono text-xs font-bold text-meshGray">
                    TIMELINE MILESTONE {activeStage + 1} OF {hackathon.timeline.length}
                  </span>
                  <h3 className="font-display font-black text-3xl sm:text-4xl text-meshBlack leading-tight">
                    {currentItem.title}
                  </h3>
                </div>
              </div>

              <p className="font-body text-base font-medium text-meshBlack/90 leading-relaxed my-6 border-l-4 border-meshYellow pl-4">
                {currentItem.description}
              </p>

              {/* Navigation Arrows */}
              <div className="flex items-center justify-between pt-4 border-t-2 border-meshBlack">
                <button
                  onClick={handlePrev}
                  disabled={activeStage === 0}
                  className={`font-display font-bold text-xs uppercase px-4 py-2 border border-meshBlack flex items-center gap-1 shadow-retro ${
                    activeStage === 0
                      ? "opacity-40 cursor-not-allowed bg-meshOffWhite"
                      : "bg-white hover:bg-meshYellow"
                  }`}
                >
                  <ChevronLeft className="w-4 h-4" /> PREVIOUS HOUR
                </button>

                <span className="font-mono text-xs font-bold text-meshBlack">
                  {activeStage + 1} / {hackathon.timeline.length}
                </span>

                <button
                  onClick={handleNext}
                  disabled={activeStage === hackathon.timeline.length - 1}
                  className={`font-display font-bold text-xs uppercase px-4 py-2 border border-meshBlack flex items-center gap-1 shadow-retro ${
                    activeStage === hackathon.timeline.length - 1
                      ? "opacity-40 cursor-not-allowed bg-meshOffWhite"
                      : "bg-meshYellow hover:bg-meshBlack hover:text-meshWhite"
                  }`}
                >
                  NEXT HOUR <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Visual Stage Badge & Reunion */}
          <div className="lg:col-span-5 flex flex-col justify-center items-center text-center p-8 bg-meshYellow border-4 border-meshBlack shadow-retroLg">
            <div className="w-20 h-20 rounded-full bg-white border-2 border-meshBlack flex items-center justify-center font-display font-black text-3xl text-meshBlack shadow-retro mb-4">
              0{activeStage + 1}
            </div>

            <h4 className="font-display font-black text-2xl text-meshBlack uppercase">
              {currentItem.title}
            </h4>

            <p className="font-handwriting text-lg font-bold text-meshBlack mt-2">
              "Stay focused, collaborate, and push code!"
            </p>

            <div className="mt-6 pt-4 border-t-2 border-meshBlack/30 w-full flex items-center justify-center gap-2 text-xs font-mono font-bold text-meshBlack">
              <span>VENUE: SNSCE CAMPUS</span>
              <span>•</span>
              <span>24H SPRINT</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
