"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import AnimatedText from "@/components/ui/AnimatedText";
import { hackathon } from "@/data/hackathon";
import { ArrowRight, Lightbulb, Users, Trophy } from "lucide-react";

export default function About() {
  const [activeStep, setActiveStep] = useState<number>(1);

  const connectionSteps = [
    {
      id: 1,
      title: "INDIVIDUAL IDEAS",
      desc: "Isolated sparks of creativity, raw concepts, and unique skill sets waiting to find their missing piece.",
      icon: Lightbulb,
    },
    {
      id: 2,
      title: "CONNECTED MINDS",
      desc: "Developers, designers, and domain thinkers converge in a 24-hour high-octane sprint.",
      icon: Users,
    },
    {
      id: 3,
      title: "ONE SOLUTION",
      desc: "Collaborative execution transforms abstract thoughts into tested, deployable products.",
      icon: Trophy,
    },
  ];

  return (
    <section id="about" className="relative w-full py-24 bg-white border-b-4 border-meshBlack overflow-hidden">
      {/* Background Accent Grid */}
      <div className="absolute inset-0 bg-dot-pattern opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Playful Top Annotation */}
        <div className="flex items-center gap-3 mb-6">
          <span className="badge-sticker">THE CONCEPT</span>
          <span className="font-handwriting text-lg font-bold text-meshBlack">
            "Different minds connect to create something bigger."
          </span>
        </div>

        {/* Section Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Massive Heading */}
          <div className="lg:col-span-6">
            <h2 className="font-display font-black text-5xl sm:text-7xl lg:text-8xl tracking-tight leading-[0.9] text-meshBlack">
              <span className="block">WHAT</span>
              <span className="block text-meshYellow drop-shadow-[3px_3px_0px_#111111]">IS</span>
              <AnimatedText text="MINDMESH?" className="block text-meshBlack" />
            </h2>

            <div className="mt-8 p-6 bg-meshOffWhite border-2 border-meshBlack shadow-retro">
              <p className="font-body text-lg sm:text-xl font-semibold text-meshBlack leading-relaxed">
                MindMesh is a 24-hour innovation challenge conducted by the{" "}
                <span className="bg-meshYellow px-1.5 py-0.5 border border-meshBlack">
                  {hackathon.organizer.department}
                </span>{" "}
                at {hackathon.organizer.college}, Coimbatore.
              </p>
              <p className="mt-4 font-body text-base text-meshGray leading-relaxed">
                It's an experimental playground where student developers, designers, and problem solvers connect to turn bold ideas into working software and hardware prototypes under tight deadlines.
              </p>
            </div>
          </div>

          {/* Right Column: Node Connection Story Visualizer */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            
            <div className="card-playful p-8 bg-meshOffWhite relative">
              <h3 className="font-display font-bold text-xs uppercase tracking-widest text-meshGray mb-6 flex items-center justify-between">
                <span>VISUAL STORYLINE</span>
                <span className="bg-meshYellow text-meshBlack px-2 py-0.5 border border-meshBlack text-[10px]">
                  INTERACTIVE MESH
                </span>
              </h3>

              {/* Node Connection Graphic */}
              <div className="relative my-8 py-6 flex items-center justify-between border-y-2 border-dashed border-meshBlack">
                
                {/* Connecting Wire */}
                <div className="absolute left-6 right-6 top-1/2 -translate-y-1/2 h-1 bg-meshBlack z-0" />
                
                {/* Active Progress Highlight Wire */}
                <motion.div
                  className="absolute left-6 top-1/2 -translate-y-1/2 h-2 bg-meshYellow z-0"
                  animate={{
                    width: activeStep === 1 ? "0%" : activeStep === 2 ? "50%" : "90%",
                  }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                />

                {connectionSteps.map((step) => {
                  const Icon = step.icon;
                  const isActive = activeStep >= step.id;
                  const isCurrent = activeStep === step.id;

                  return (
                    <button
                      key={step.id}
                      onClick={() => setActiveStep(step.id)}
                      className={`relative z-10 w-12 h-12 sm:w-16 sm:h-16 rounded-full border-2 border-meshBlack flex items-center justify-center font-display font-black text-lg transition-all duration-300 ${
                        isCurrent
                          ? "bg-meshYellow scale-110 shadow-retro"
                          : isActive
                          ? "bg-meshBlack text-meshWhite"
                          : "bg-white text-meshBlack"
                      }`}
                    >
                      <Icon className={`w-5 h-5 sm:w-7 sm:h-7 ${isCurrent ? "text-meshBlack animate-bounce" : isActive ? "text-meshYellow" : "text-meshBlack"}`} />
                    </button>
                  );
                })}
              </div>

              {/* Dynamic Description Box */}
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-white p-5 border-2 border-meshBlack shadow-retro"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-mono text-xs font-bold text-meshYellow bg-meshBlack px-2 py-0.5">
                    STAGE 0{activeStep}
                  </span>
                  <h4 className="font-display font-extrabold text-xl text-meshBlack">
                    {connectionSteps[activeStep - 1].title}
                  </h4>
                </div>
                <p className="font-body text-sm text-meshBlack/90 font-medium">
                  {connectionSteps[activeStep - 1].desc}
                </p>
              </motion.div>

              {/* Step Selector Buttons */}
              <div className="mt-6 flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-meshGray">
                  CLICK NODES TO REVEAL TRANSFORMATION
                </span>
                <button
                  onClick={() => setActiveStep((prev) => (prev % 3) + 1)}
                  className="font-display font-bold text-xs uppercase bg-meshYellow px-3 py-1.5 border border-meshBlack flex items-center gap-1 hover:bg-meshBlack hover:text-meshWhite transition-colors"
                >
                  NEXT <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* Playful Animated SVG Line Divider */}
        <div className="mt-16 pt-8 border-t-2 border-meshBlack/10 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <svg width="120" height="24" viewBox="0 0 120 24" fill="none" className="text-meshBlack">
              <path
                d="M2 12C20 4 40 20 60 12C80 4 100 20 118 12"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                className="animate-dash-line"
              />
            </svg>
            <span className="font-handwriting text-base font-bold text-meshBlack">
              KEEP SCROLLING → EXPLORE METRICS & TRACKS
            </span>
          </div>
          
          <span className="font-mono text-xs font-bold text-meshGray uppercase tracking-widest">
            SNSCE CSE • 2026 EDITION
          </span>
        </div>

      </div>
    </section>
  );
}
