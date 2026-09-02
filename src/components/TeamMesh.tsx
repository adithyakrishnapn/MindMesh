"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { hackathon } from "@/data/hackathon";
import AnimatedText from "@/components/ui/AnimatedText";
import { Code2, Palette, Lightbulb, Wrench, Search, Sparkles } from "lucide-react";

const roleIcons: Record<string, any> = {
  dev: Code2,
  des: Palette,
  ide: Lightbulb,
  bld: Wrench,
  res: Search,
};

export default function TeamMesh() {
  const [hoveredRoleId, setHoveredRoleId] = useState<string>("dev");

  const activeRole = hackathon.teamRoles.find((r) => r.id === hoveredRoleId) || hackathon.teamRoles[0];

  return (
    <section id="team" className="relative w-full py-24 bg-meshOffWhite border-b-4 border-meshBlack overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-dot-pattern opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div>
            <span className="badge-sticker mb-3">COLLABORATION ENGINE</span>
            <h2 className="font-display font-black text-5xl sm:text-7xl lg:text-8xl tracking-tight text-meshBlack leading-none">
              <span>YOUR TEAM IS</span> <br />
              <span className="text-meshYellow drop-shadow-[4px_4px_0px_#111111]">
                <AnimatedText text="YOUR MESH." />
              </span>
            </h2>
          </div>
          <p className="font-mono text-xs font-bold text-meshGray uppercase tracking-widest max-w-sm">
            HOVER OVER EACH ROLE NODE TO SEE HOW COMPLEMENTARY SKILLS INTERLOCK
          </p>
        </div>

        {/* Interactive Roles Mesh Display Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Interactive Floating Role Nodes */}
          <div className="lg:col-span-7 card-playful p-8 bg-white relative min-h-[420px] flex flex-col justify-center">
            
            <span className="font-mono text-xs font-bold text-meshGray uppercase tracking-widest mb-6 block">
              HOVER A NODE TO ACTIVATE CONNECTIONS
            </span>

            {/* Circular Role Nodes Container */}
            <div className="relative w-full h-[300px] flex items-center justify-center">
              
              {/* Central Core Connection Badge */}
              <div className="absolute w-24 h-24 rounded-full bg-meshYellow border-2 border-meshBlack flex flex-col items-center justify-center text-center shadow-retro z-10 animate-pulse-slow">
                <Sparkles className="w-6 h-6 text-meshBlack" />
                <span className="font-display font-black text-[10px] uppercase tracking-wider text-meshBlack">
                  CORE MESH
                </span>
              </div>

              {/* Orbital Connected Lines & Nodes */}
              {hackathon.teamRoles.map((role, idx) => {
                const total = hackathon.teamRoles.length;
                const angle = (idx / total) * Math.PI * 2 - Math.PI / 2;
                const radius = 110; // px
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;

                const isSelected = hoveredRoleId === role.id;
                const IconComponent = roleIcons[role.id] || Sparkles;

                return (
                  <div key={role.id} className="absolute">
                    
                    {/* Connection Line to Core */}
                    <svg
                      className="absolute overflow-visible pointer-events-none"
                      style={{
                        width: Math.abs(x) + 20,
                        height: Math.abs(y) + 20,
                        left: x < 0 ? x : 0,
                        top: y < 0 ? y : 0,
                      }}
                    >
                      <line
                        x1={x < 0 ? Math.abs(x) : 0}
                        y1={y < 0 ? Math.abs(y) : 0}
                        x2={x < 0 ? 0 : x}
                        y2={y < 0 ? 0 : y}
                        stroke={isSelected ? "#111111" : "#FFD21F"}
                        strokeWidth={isSelected ? "3" : "2"}
                        strokeDasharray={isSelected ? "none" : "4 4"}
                      />
                    </svg>

                    {/* Interactive Role Circle Node */}
                    <motion.button
                      style={{ x, y }}
                      onMouseEnter={() => setHoveredRoleId(role.id)}
                      onClick={() => setHoveredRoleId(role.id)}
                      animate={{
                        scale: isSelected ? 1.25 : 1,
                      }}
                      transition={{ type: "spring", stiffness: 350, damping: 20 }}
                      className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-meshBlack flex flex-col items-center justify-center shadow-retro transition-colors ${
                        isSelected
                          ? "bg-meshYellow text-meshBlack z-30 ring-4 ring-meshBlack/10"
                          : "bg-white text-meshBlack hover:bg-meshYellow/40 z-20"
                      }`}
                    >
                      <IconComponent className="w-6 h-6 sm:w-7 sm:h-7" />
                      <span className="font-display font-black text-[9px] sm:text-[10px] uppercase tracking-tighter mt-0.5">
                        {role.title.split(" ")[0]}
                      </span>
                    </motion.button>

                  </div>
                );
              })}
            </div>

          </div>

          {/* Right Column: Dynamic Role Explanation Card */}
          <div className="lg:col-span-5">
            <motion.div
              key={activeRole.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="card-playful-yellow p-8 relative"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="font-mono text-xs font-bold uppercase bg-meshBlack text-meshYellow px-2.5 py-0.5">
                  SELECTED ROLE
                </span>
                <span className="font-mono text-xs font-bold text-meshBlack">
                  2-4 MEMBERS SQUAD
                </span>
              </div>

              <h3 className="font-display font-black text-3xl sm:text-4xl text-meshBlack my-3">
                {activeRole.title}
              </h3>

              <p className="font-body text-base font-semibold text-meshBlack leading-relaxed border-l-4 border-meshBlack pl-4 my-4">
                {activeRole.desc}
              </p>

              <div className="mt-6 pt-4 border-t-2 border-meshBlack/40 flex items-center justify-between">
                <span className="font-handwriting text-base font-bold text-meshBlack">
                  "Every role makes the mesh stronger."
                </span>
                <span className="font-mono text-xs font-bold bg-white text-meshBlack px-2 py-1 border border-meshBlack">
                  TEAM SIZE: 2-4
                </span>
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
