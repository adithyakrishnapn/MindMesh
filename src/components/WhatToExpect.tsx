"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { hackathon, Expectation } from "@/data/hackathon";
import AnimatedText from "@/components/ui/AnimatedText";
import CardModal, { CardModalData } from "@/components/ui/CardModal";
import {
  Trophy,
  Award,
  UserCheck,
  Network,
  Sparkles,
  LucideIcon,
  CheckCircle2,
  ArrowUpRight,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Trophy,
  Award,
  UserCheck,
  Network,
  Sparkles,
};

export default function WhatToExpect() {
  const [selectedItem, setSelectedItem] = useState<CardModalData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = (item: Expectation, idx: number) => {
    setSelectedItem({
      title: item.title,
      category: `PERK 0${idx + 1}`,
      badge: "OFFICIAL BENEFIT",
      description: item.desc,
      longDescription: item.longDescription,
      highlights: item.highlights,
      iconName: item.icon,
      accentColor: idx % 2 === 0 ? "#FFD21F" : "#00E5FF",
      actionText: "CLAIM YOUR HACKATHON SLOT (₹550)",
    });
    setIsModalOpen(true);
  };

  return (
    <section
      id="expect"
      className="relative w-full py-24 bg-white border-b-4 border-meshBlack overflow-hidden"
    >
      {/* Background Dot Pattern */}
      <div className="absolute inset-0 bg-dot-pattern opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="badge-sticker mb-3">DIRECT FROM POSTER</span>
          <h2 className="font-display font-black text-5xl sm:text-7xl lg:text-8xl tracking-tight text-meshBlack leading-none uppercase">
            <span>
              <AnimatedText text="WHAT TO" />
            </span>{" "}
            <br />
            <span className="text-meshYellow drop-shadow-[4px_4px_0px_#111111]">
              <AnimatedText text="EXPECT?" />
            </span>
          </h2>
          <p className="mt-4 font-body text-base sm:text-lg text-meshGray font-semibold leading-relaxed">
            HACKNEXT'26 SERIES 2.0 is more than just code — it's an innovation launchpad built to accelerate student talent.
          </p>
          <p className="mt-2 font-mono text-xs text-meshBlack font-bold flex items-center justify-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#FFD21F] animate-ping" />
            Click any perk card below to pop up complete details and eligibility.
          </p>
        </div>

        {/* 5 Cards Grid with Pop-Up Action */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {hackathon.whatToExpect.map((item, idx) => {
            const IconComp = iconMap[item.icon] || Sparkles;
            const isWide = idx === 4; // 5th item spans on large screens for balanced grid

            return (
              <motion.div
                key={item.title}
                onClick={() => handleCardClick(item, idx)}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.4 }}
                className={`card-playful p-8 flex flex-col justify-between relative group cursor-pointer transform hover:-translate-y-3 hover:scale-[1.02] hover:shadow-[12px_12px_0px_0px_#FFD21F] active:scale-[0.98] transition-all duration-200 ${
                  isWide
                    ? "lg:col-span-2 bg-meshYellow/20"
                    : idx % 2 === 1
                    ? "bg-meshOffWhite"
                    : "bg-white"
                }`}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleCardClick(item, idx);
                  }
                }}
              >
                <div>
                  {/* Top Badge & Icon */}
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="w-14 h-14 bg-meshYellow border-2 border-meshBlack flex items-center justify-center shadow-retro group-hover:rotate-6 group-hover:scale-110 transition-transform">
                      <IconComp className="w-7 h-7 text-meshBlack" />
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-black bg-meshBlack text-meshYellow px-2.5 py-1">
                        PERK 0{idx + 1}
                      </span>
                      <span className="font-mono text-[10px] font-bold uppercase bg-[#FFD21F] text-meshBlack px-2 py-1 border border-meshBlack shadow-retro group-hover:bg-[#00E5FF] transition-colors flex items-center gap-1">
                        POP UP ↗
                      </span>
                    </div>
                  </div>

                  <h3 className="font-display font-black text-2xl sm:text-3xl text-meshBlack uppercase leading-tight group-hover:text-[#00E5FF] transition-colors">
                    {item.title}
                  </h3>

                  <p className="mt-4 font-body text-sm font-medium text-meshBlack/80 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t-2 border-meshBlack flex items-center justify-between font-mono text-xs font-bold text-meshBlack">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-meshBlack fill-meshYellow" />
                    <span>GUARANTEED BENEFIT</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Banner from Poster */}
        <div className="mt-12 p-6 bg-meshBlack text-white border-2 border-meshYellow shadow-retroYellow flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div>
            <span className="font-mono text-xs font-bold text-[#00E5FF] tracking-wider uppercase block">
              SNS COLLEGE OF TECHNOLOGY • SNS AI CAMPUS
            </span>
            <p className="font-display font-black text-xl text-[#FFD21F] mt-1">
              "Redesigning Common Minds & Business Towards Excellence"
            </p>
          </div>

          <a
            href="#register"
            className="inline-flex items-center gap-2 font-display font-black text-xs uppercase bg-[#FFD21F] text-black px-6 py-3 border border-white shadow-retroWhite hover:bg-white transition-colors"
          >
            CLAIM YOUR SLOT NOW
          </a>
        </div>
      </div>

      {/* Pop-Up Details Modal */}
      <CardModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        data={selectedItem}
      />
    </section>
  );
}
