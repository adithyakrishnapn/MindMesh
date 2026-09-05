"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { hackathon } from "@/data/hackathon";
import AnimatedText from "@/components/ui/AnimatedText";

function CounterNumber({ targetValue }: { targetValue: string }) {
  const [currentValue, setCurrentValue] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const numericTarget = parseInt(targetValue, 10);
  const isNumeric = !isNaN(numericTarget);

  useEffect(() => {
    if (!isInView || !isNumeric) return;

    let start = 0;
    const duration = 1500;
    const increment = Math.max(1, Math.floor(numericTarget / 30));
    const stepTime = Math.abs(Math.floor(duration / (numericTarget / increment)));

    const timer = setInterval(() => {
      start += increment;
      if (start >= numericTarget) {
        setCurrentValue(numericTarget);
        clearInterval(timer);
      } else {
        setCurrentValue(start);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, numericTarget, isNumeric]);

  if (!isNumeric) {
    return <span>{targetValue}</span>;
  }

  const formatted = currentValue < 10 ? `0${currentValue}` : currentValue;
  return <div ref={ref}>{isInView ? formatted : "00"}</div>;
}

export default function Stats() {
  return (
    <section
      id="stats"
      className="relative w-full py-20 bg-meshOffWhite border-b-4 border-meshBlack overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="badge-sticker bg-[#00E5FF] text-black mb-2">
              HACKATHON SNAPSHOT
            </span>
            <h2 className="font-display font-black text-4xl sm:text-6xl text-meshBlack uppercase tracking-tight">
              <AnimatedText text="BY THE NUMBERS" />
            </h2>
          </div>
          <p className="font-mono text-xs font-bold text-meshGray uppercase tracking-widest max-w-xs">
            ONE DAY • ENDLESS POSSIBILITIES • REAL IMPACT
          </p>
        </div>

        {/* 4 Cards Grid with Pop-Up Action */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {hackathon.stats.map((stat, idx) => (
            <motion.div
              key={stat.unit}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              className={`card-playful p-6 flex flex-col justify-between min-h-[240px] relative overflow-hidden transform hover:-translate-y-3 hover:scale-[1.02] hover:shadow-[10px_10px_0px_0px_#00E5FF] transition-all duration-200 cursor-pointer ${
                idx % 2 === 1 ? "bg-white" : "bg-[#00E5FF]/10"
              }`}
            >
              {/* Background oversized unit text opacity */}
              <div className="absolute right-2 -bottom-4 font-display font-black text-6xl opacity-10 select-none text-meshBlack pointer-events-none">
                {stat.unit}
              </div>

              {/* Number display */}
              <div>
                <div className="font-display font-black text-6xl sm:text-7xl lg:text-8xl text-meshBlack tracking-tighter leading-none flex items-baseline gap-2">
                  <CounterNumber targetValue={stat.value} />
                </div>
                <div className="font-mono font-extrabold text-xs sm:text-sm uppercase tracking-widest text-meshBlack mt-2 bg-meshYellow px-2.5 py-0.5 inline-block border border-meshBlack">
                  {stat.unit}
                </div>
              </div>

              {/* Label & Description */}
              <div className="mt-6 pt-4 border-t-2 border-meshBlack">
                <h3 className="font-display font-bold text-base text-meshBlack uppercase">
                  {stat.label}
                </h3>
                <p className="font-body text-xs text-meshGray font-medium mt-1">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
