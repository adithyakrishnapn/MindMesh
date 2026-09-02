"use client";

import { motion } from "framer-motion";
import { hackathon } from "@/data/hackathon";
import AnimatedText from "@/components/ui/AnimatedText";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function HowItWorks() {
  return (
    <section className="relative w-full py-24 bg-white border-b-4 border-meshBlack overflow-hidden">
      {/* Dots Pattern */}
      <div className="absolute inset-0 bg-dot-pattern opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="mb-16">
          <span className="badge-sticker mb-3">STEP-BY-STEP PROCESS</span>
          <h2 className="font-display font-black text-5xl sm:text-7xl lg:text-8xl tracking-tight text-meshBlack leading-none">
            <span>HOW IT</span> <br />
            <span className="text-meshYellow drop-shadow-[4px_4px_0px_#111111]">
              <AnimatedText text="WORKS" />
            </span>
          </h2>
        </div>

        {/* 4 Step Cards with Giant Overlapping Numbers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {hackathon.howItWorks.map((item, idx) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              className="card-playful p-6 bg-meshOffWhite relative flex flex-col justify-between min-h-[300px] group overflow-hidden"
            >
              {/* Giant Overlapping Background Number */}
              <div className="absolute -right-2 -top-6 font-display font-black text-8xl sm:text-9xl text-meshBlack/10 group-hover:text-meshYellow/30 transition-colors pointer-events-none select-none">
                {item.step}
              </div>

              {/* Top Step Badge */}
              <div className="relative z-10">
                <span className="font-mono text-xs font-bold uppercase tracking-widest bg-meshBlack text-meshYellow px-2.5 py-1 inline-block border border-meshBlack mb-4">
                  STEP {item.step}
                </span>

                <h3 className="font-display font-black text-2xl text-meshBlack mt-2 leading-tight">
                  {item.title}
                </h3>
              </div>

              {/* Description */}
              <div className="relative z-10 mt-6 pt-4 border-t-2 border-meshBlack">
                <p className="font-body text-sm font-medium text-meshBlack/80 leading-relaxed">
                  {item.desc}
                </p>

                <div className="mt-4 flex items-center gap-1.5 text-xs font-mono font-bold text-meshBlack group-hover:text-meshYellow group-hover:bg-meshBlack px-2 py-1 inline-block transition-all border border-meshBlack">
                  <span>CHECKLIST READY</span> <CheckCircle2 className="w-3.5 h-3.5 inline" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Action CTA */}
        <div className="mt-16 text-center">
          <a
            href={hackathon.registrationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 font-display font-black text-base uppercase bg-meshYellow text-meshBlack px-8 py-4 border-2 border-meshBlack shadow-retro hover:shadow-retroLg hover:-translate-y-1 transition-all"
          >
            START STEP 01 — REGISTER YOUR TEAM <ArrowRight className="w-5 h-5" />
          </a>
        </div>

      </div>
    </section>
  );
}
