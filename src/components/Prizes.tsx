"use client";

import { Suspense } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { hackathon, Prize } from "@/data/hackathon";
import AnimatedText from "@/components/ui/AnimatedText";
import { Trophy, Award, Star, Check, Sparkles } from "lucide-react";

// Abstract 3D Trophy Mesh component
const TrophyCanvas = dynamic(() => import("@/components/ui/TrophyCanvas"), {
  ssr: false,
  loading: () => <div className="w-32 h-32 rounded-full bg-meshYellow/20 animate-pulse" />,
});

export default function Prizes() {
  return (
    <section id="prizes" className="relative w-full py-24 bg-meshBlack text-meshWhite border-b-4 border-meshYellow overflow-hidden">
      {/* Dark Dot Pattern */}
      <div className="absolute inset-0 bg-dot-pattern-light opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Top Tag */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div>
            <span className="badge-sticker bg-meshYellow text-meshBlack border-meshWhite mb-3">
              REWARDS & RECOGNITION
            </span>
            <h2 className="font-display font-black text-5xl sm:text-7xl lg:text-8xl tracking-tight leading-[0.88] text-white">
              <span className="block">BUILD</span>
              <span className="block text-meshYellow drop-shadow-[4px_4px_0px_#FFFFFF]">
                SOMETHING
              </span>
              <AnimatedText text="WORTH WINNING." className="block text-white" />
            </h2>
          </div>

          {/* 3D Abstract Trophy Object Display */}
          <div className="flex items-center gap-4 bg-meshDarkGray p-4 border-2 border-meshYellow shadow-retroYellow">
            <div className="w-24 h-24 relative">
              <Suspense fallback={null}>
                <TrophyCanvas />
              </Suspense>
            </div>
            <div>
              <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-meshYellow">
                ABSTRACT MESH TROPHY
              </span>
              <p className="font-display font-extrabold text-lg text-white">
                CASH POOL & PERKS
              </p>
              <p className="font-mono text-xs text-meshGray">
                + Incubator Access
              </p>
            </div>
          </div>
        </div>

        {/* Prize Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {hackathon.prizes.map((prize: Prize, idx: number) => (
            <motion.div
              key={prize.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              className={`p-6 border-2 flex flex-col justify-between relative transition-transform hover:-translate-y-2 ${
                prize.featured
                  ? "bg-meshYellow text-meshBlack border-white shadow-retroWhite"
                  : "bg-meshDarkGray text-meshWhite border-meshYellow shadow-retroYellow"
              }`}
            >
              {/* Badge if exists */}
              {prize.badge && (
                <span
                  className={`font-mono text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 border mb-4 inline-block self-start ${
                    prize.featured
                      ? "bg-meshBlack text-meshYellow border-meshBlack"
                      : "bg-meshYellow text-meshBlack border-meshYellow"
                  }`}
                >
                  {prize.badge}
                </span>
              )}

              <div>
                <h3 className="font-display font-black text-2xl uppercase">
                  {prize.title}
                </h3>
                <p
                  className={`font-mono text-xs font-bold mt-1 ${
                    prize.featured ? "text-meshBlack/80" : "text-meshGray"
                  }`}
                >
                  {prize.subtitle}
                </p>

                {/* Amount */}
                <div className="my-6">
                  <span className="font-display font-black text-5xl sm:text-6xl tracking-tight">
                    {prize.amount}
                  </span>
                </div>
              </div>

              {/* Perks List */}
              <div
                className={`pt-4 border-t-2 ${
                  prize.featured ? "border-meshBlack" : "border-meshYellow/40"
                }`}
              >
                <ul className="space-y-2">
                  {prize.perks.map((perk) => (
                    <li key={perk} className="flex items-start gap-2 text-xs font-semibold">
                      <Check
                        className={`w-4 h-4 shrink-0 mt-0.5 ${
                          prize.featured ? "text-meshBlack" : "text-meshYellow"
                        }`}
                      />
                      <span>{perk}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Disclaimer */}
        <p className="mt-12 text-center font-mono text-xs text-meshGray uppercase tracking-widest">
          * Prize details subject to official final confirmation by SNSCE CSE Department.
        </p>

      </div>
    </section>
  );
}
