"use client";

import { useState, Suspense } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { hackathon, Prize } from "@/data/hackathon";
import AnimatedText from "@/components/ui/AnimatedText";
import CardModal, { CardModalData } from "@/components/ui/CardModal";
import { Trophy, Award, Star, Check, Sparkles, Zap, ArrowUpRight } from "lucide-react";

// Abstract 3D Trophy Mesh component
const TrophyCanvas = dynamic(() => import("@/components/ui/TrophyCanvas"), {
  ssr: false,
  loading: () => (
    <div className="w-32 h-32 rounded-full bg-[#00E5FF]/20 animate-pulse" />
  ),
});

export default function Prizes() {
  const [selectedPrize, setSelectedPrize] = useState<CardModalData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = (prize: Prize) => {
    setSelectedPrize({
      title: prize.title,
      subtitle: prize.subtitle,
      category: prize.badge || "PRIZE TIER",
      badge: prize.amount,
      description: `${prize.title} award of HACKNEXT'26 SERIES 2.0 at SNS AI Campus. Compete with your team for direct cash disbursals, trophies, and accelerator access.`,
      longDescription: prize.longDescription,
      highlights: prize.highlights || prize.perks,
      iconName: "Trophy",
      accentColor: prize.featured ? "#00E5FF" : "#FFD21F",
      actionText: "COMPETE FOR THIS REWARD (₹550)",
    });
    setIsModalOpen(true);
  };

  return (
    <section
      id="prizes"
      className="relative w-full py-24 bg-meshBlack text-meshWhite border-b-4 border-meshYellow overflow-hidden"
    >
      {/* Dark Dot Pattern */}
      <div className="absolute inset-0 bg-dot-pattern-light opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Top Tag */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <span className="badge-sticker bg-[#00E5FF] text-meshBlack border-meshWhite mb-3">
              WHAT TO EXPECT: PRIZES & REWARDS
            </span>
            <h2 className="font-display font-black text-5xl sm:text-7xl lg:text-8xl tracking-tight leading-[0.88] text-white uppercase">
              <span className="block">
                <AnimatedText text="BUILD FOR THE" />
              </span>
              <span className="block text-[#00E5FF] drop-shadow-[4px_4px_0px_#FFFFFF]">
                <AnimatedText text="₹20,000" />
              </span>
              <span className="block text-white">
                <AnimatedText text="PRIZE POOL" />
              </span>
            </h2>

            <p className="mt-4 font-mono text-xs sm:text-sm text-gray-300 font-bold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#00E5FF] animate-ping" />
              Click any prize tier card to pop up breakdown, incubation access & award perks.
            </p>
          </div>

          {/* 3D Abstract Trophy Object Display */}
          <div className="flex items-center gap-4 bg-meshDarkGray p-5 border-2 border-[#00E5FF] shadow-[6px_6px_0px_0px_#00E5FF]">
            <div className="w-20 h-20 relative">
              <Suspense fallback={null}>
                <TrophyCanvas />
              </Suspense>
            </div>
            <div>
              <span className="font-mono text-[11px] font-black uppercase tracking-widest text-[#FFD21F] block">
                OFFICIAL CASH POOL
              </span>
              <p className="font-display font-black text-3xl text-white tracking-tight">
                {hackathon.totalPrizePool}
              </p>
              <p className="font-mono text-[11px] text-gray-400">
                + SNS 1000 I-Startups Incubation Access
              </p>
            </div>
          </div>
        </div>

        {/* Prize Cards Grid with Pop-Up Action */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {hackathon.prizes.map((prize: Prize, idx: number) => (
            <motion.div
              key={prize.title}
              onClick={() => handleCardClick(prize)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              className={`p-6 border-2 flex flex-col justify-between relative cursor-pointer transform hover:-translate-y-3 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 group ${
                prize.featured
                  ? "bg-[#00E5FF] text-meshBlack border-white shadow-retroWhite hover:shadow-[10px_10px_0px_0px_#FFD21F]"
                  : "bg-meshDarkGray text-meshWhite border-[#00E5FF]/60 shadow-[5px_5px_0px_0px_#00E5FF] hover:shadow-[10px_10px_0px_0px_#00E5FF]"
              }`}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  handleCardClick(prize);
                }
              }}
            >
              {/* Badge & Pop-Up chip */}
              <div className="flex items-center justify-between mb-4">
                {prize.badge && (
                  <span
                    className={`font-mono text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 border ${
                      prize.featured
                        ? "bg-meshBlack text-[#00E5FF] border-meshBlack"
                        : "bg-[#00E5FF] text-meshBlack border-[#00E5FF]"
                    }`}
                  >
                    {prize.badge}
                  </span>
                )}
                <span className="font-mono text-[10px] font-bold uppercase bg-black text-white px-2 py-0.5 border border-white/40 group-hover:bg-[#FFD21F] group-hover:text-black transition-colors">
                  POP UP ↗
                </span>
              </div>

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
                  <span className="font-display font-black text-4xl sm:text-5xl tracking-tight">
                    {prize.amount}
                  </span>
                </div>
              </div>

              {/* Perks List */}
              <div
                className={`pt-4 border-t-2 ${
                  prize.featured ? "border-meshBlack" : "border-[#00E5FF]/40"
                }`}
              >
                <ul className="space-y-2">
                  {prize.perks.map((perk) => (
                    <li key={perk} className="flex items-start gap-2 text-xs font-semibold">
                      <Check
                        className={`w-4 h-4 shrink-0 mt-0.5 ${
                          prize.featured ? "text-meshBlack" : "text-[#00E5FF]"
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

        {/* Action strip to register */}
        <div className="mt-12 p-6 bg-gray-900 border-2 border-gray-700 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Trophy className="w-8 h-8 text-[#FFD21F] shrink-0" />
            <div>
              <span className="font-display font-black text-lg text-white block">
                COMPETE FOR THE ₹20,000 PRIZE POOL AT SNS AI CAMPUS
              </span>
              <span className="font-mono text-xs text-gray-400">
                Winner & Participation Certificates provided to all participating teams.
              </span>
            </div>
          </div>

          <a
            href="#register"
            className="inline-flex items-center gap-2 font-display font-black text-xs uppercase bg-[#00E5FF] text-black px-6 py-3 border border-black shadow-retro hover:bg-[#FFD21F] transition-colors whitespace-nowrap"
          >
            REGISTER YOUR SQUAD <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Pop-Up Details Modal */}
      <CardModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        data={selectedPrize}
      />
    </section>
  );
}
