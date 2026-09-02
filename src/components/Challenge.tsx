"use client";

import { motion } from "framer-motion";
import { hackathon, Track } from "@/data/hackathon";
import AnimatedText from "@/components/ui/AnimatedText";
import {
  BrainCircuit,
  Globe,
  HeartPulse,
  ShieldCheck,
  GraduationCap,
  Leaf,
  Sparkles,
  ArrowUpRight,
  LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  BrainCircuit,
  Globe,
  HeartPulse,
  ShieldCheck,
  GraduationCap,
  Leaf,
  Sparkles,
};

export default function Challenge() {
  return (
    <section id="challenge" className="relative w-full py-24 bg-white border-b-4 border-meshBlack overflow-hidden">
      {/* Background Dots */}
      <div className="absolute inset-0 bg-dot-pattern opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Massive Screen Heading */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="badge-sticker">DOMAINS OF INNOVATION</span>
            <span className="font-handwriting text-base font-bold text-meshBlack">
              Choose your domain & solve real problems
            </span>
          </div>

          <h2 className="font-display font-black text-5xl sm:text-7xl lg:text-9xl tracking-tight leading-[0.88] text-meshBlack">
            <span className="block">WHAT</span>
            <span className="block text-meshYellow drop-shadow-[4px_4px_0px_#111111]">WILL YOU</span>
            <AnimatedText text="BUILD?" className="block text-meshBlack" />
          </h2>
        </div>

        {/* Asymmetric Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {hackathon.tracks.map((track: Track, idx: number) => {
            const IconComponent = iconMap[track.iconName] || Sparkles;

            // Determine card shape variations
            let cardLayoutClasses = "card-playful p-8 flex flex-col justify-between";
            if (track.cardStyle === "rotated") {
              cardLayoutClasses += " transform md:rotate-2 hover:rotate-0 bg-meshYellow/30";
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
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.4 }}
                className={`${cardLayoutClasses} relative group min-h-[320px]`}
              >
                {/* Top Bar inside card */}
                <div className="flex items-start justify-between gap-4">
                  <div className="w-14 h-14 bg-meshYellow border-2 border-meshBlack flex items-center justify-center shadow-retro group-hover:scale-110 group-hover:rotate-6 transition-transform">
                    <IconComponent className="w-7 h-7 text-meshBlack" />
                  </div>

                  <span className="font-mono text-[10px] font-bold uppercase tracking-widest bg-meshBlack text-meshWhite px-2.5 py-1">
                    {track.category}
                  </span>
                </div>

                {/* Card Title & Description */}
                <div className="my-6">
                  <h3 className="font-display font-black text-2xl sm:text-3xl text-meshBlack group-hover:text-meshBlack transition-colors">
                    {track.title}
                  </h3>
                  <p className="mt-3 font-body text-sm font-medium text-meshBlack/80 leading-relaxed">
                    {track.description}
                  </p>
                </div>

                {/* Tags & Action Link */}
                <div className="pt-4 border-t-2 border-meshBlack flex flex-wrap items-center justify-between gap-2">
                  <div className="flex flex-wrap gap-1.5">
                    {track.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[11px] font-semibold bg-meshOffWhite text-meshBlack px-2 py-0.5 border border-meshBlack/40"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={hackathon.registrationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 bg-meshBlack text-meshYellow border border-meshBlack shadow-retro group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                    aria-label={`Register for ${track.title}`}
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
