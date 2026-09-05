"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { hackathon, Track } from "@/data/hackathon";
import AnimatedText from "@/components/ui/AnimatedText";
import CardModal, { CardModalData } from "@/components/ui/CardModal";
import {
  BrainCircuit,
  Globe,
  HeartPulse,
  ShieldCheck,
  ShieldAlert,
  Truck,
  Leaf,
  Sparkles,
  ArrowUpRight,
  LucideIcon,
  Cpu,
  Layers,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  BrainCircuit,
  Globe,
  HeartPulse,
  ShieldCheck,
  ShieldAlert,
  Truck,
  Leaf,
  Sparkles,
  Cpu,
};

export default function Challenge() {
  const [selectedTrack, setSelectedTrack] = useState<CardModalData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = (track: Track) => {
    setSelectedTrack({
      id: track.id,
      title: track.title,
      category: track.category,
      badge: "HACKATHON TRACK",
      description: track.description,
      longDescription: track.longDescription,
      highlights: track.highlights,
      tags: track.tags,
      iconName: track.iconName,
      accentColor: track.accentColor,
      actionText: `REGISTER FOR ${track.title.split(" ")[0]} (₹550)`,
    });
    setIsModalOpen(true);
  };

  return (
    <section
      id="challenge"
      className="relative w-full py-24 bg-white border-b-4 border-meshBlack overflow-hidden"
    >
      {/* Background Dots */}
      <div className="absolute inset-0 bg-dot-pattern opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Massive Screen Heading */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="badge-sticker bg-[#00E5FF] text-black">
              AI INNOVATION DOMAINS
            </span>
            <span className="font-handwriting text-base font-bold text-meshBlack">
              "Think Beyond. Build Beyond. Lead Beyond."
            </span>
          </div>

          <h2 className="font-display font-black text-5xl sm:text-7xl lg:text-9xl tracking-tight leading-[0.88] text-meshBlack uppercase">
            <span className="block">
              <AnimatedText text="CHOOSE YOUR" />
            </span>
            <span className="block text-[#00E5FF] drop-shadow-[4px_4px_0px_#111111]">
              <AnimatedText text="AI DOMAIN" />
            </span>
            <span className="block text-meshBlack">
              <AnimatedText text="& BUILD." />
            </span>
          </h2>

          <p className="mt-4 font-body text-sm sm:text-base text-meshGray font-bold flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#00E5FF] animate-ping" />
            Click any domain card to pop up problem scopes, deliverables & recommended tech stack.
          </p>
        </div>

        {/* Asymmetric Cards Grid with Pop-Up Action */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {hackathon.tracks.map((track: Track, idx: number) => {
            const IconComponent = iconMap[track.iconName] || Sparkles;

            // Determine card styling variations
            let cardLayoutClasses =
              "card-playful p-8 flex flex-col justify-between cursor-pointer transform hover:-translate-y-3 hover:scale-[1.02] hover:shadow-[12px_12px_0px_0px_#00E5FF] active:scale-[0.98] transition-all duration-200";

            if (track.cardStyle === "rotated") {
              cardLayoutClasses += " md:rotate-1 hover:rotate-0 bg-[#00E5FF]/10";
            } else if (track.cardStyle === "wide") {
              cardLayoutClasses += " md:col-span-2 bg-meshOffWhite";
            } else if (track.cardStyle === "circle") {
              cardLayoutClasses += " bg-meshYellow border-4 border-meshBlack shadow-retroLg";
            } else {
              cardLayoutClasses += " bg-white";
            }

            return (
              <motion.div
                key={track.id}
                onClick={() => handleCardClick(track)}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.4 }}
                className={`${cardLayoutClasses} relative group min-h-[340px]`}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleCardClick(track);
                  }
                }}
              >
                {/* Top Bar inside card */}
                <div className="flex items-start justify-between gap-4">
                  <div className="w-14 h-14 bg-meshYellow border-2 border-meshBlack flex items-center justify-center shadow-retro group-hover:scale-110 group-hover:rotate-6 transition-transform">
                    <IconComponent className="w-7 h-7 text-meshBlack" />
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[10px] font-bold uppercase tracking-widest bg-meshBlack text-meshWhite px-2.5 py-1">
                      {track.category}
                    </span>
                    <span className="font-mono text-[10px] font-bold uppercase bg-[#00E5FF] text-meshBlack px-2 py-1 border border-meshBlack shadow-retro group-hover:bg-meshYellow transition-colors flex items-center gap-1">
                      POP UP ↗
                    </span>
                  </div>
                </div>

                {/* Card Title & Description */}
                <div className="my-6">
                  <h3 className="font-display font-black text-2xl sm:text-3xl text-meshBlack uppercase group-hover:text-[#00E5FF] transition-colors">
                    {track.title}
                  </h3>
                  <p className="mt-3 font-body text-sm font-medium text-meshBlack/80 leading-relaxed">
                    {track.description}
                  </p>
                </div>

                {/* Tags & Action Link */}
                <div className="pt-4 border-t-2 border-meshBlack flex flex-wrap items-center justify-between gap-2">
                  <div className="flex flex-wrap gap-1.5">
                    {track.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[11px] font-semibold bg-white text-meshBlack px-2 py-0.5 border border-meshBlack/40"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <div className="p-2 bg-meshBlack text-[#00E5FF] border border-meshBlack shadow-retro group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform flex items-center gap-1 text-xs font-mono font-bold">
                    <span>VIEW</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Pop-Up Details Modal */}
      <CardModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        data={selectedTrack}
      />
    </section>
  );
}
