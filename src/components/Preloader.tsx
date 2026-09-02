"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Check } from "lucide-react";

interface PreloaderProps {
  onComplete?: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState("THINKING...");
  const [isReady, setIsReady] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check reduced motion setting
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const minDisplayTime = 1200; // ms
    const startTime = Date.now();

    let intervalId: NodeJS.Timeout;

    // Real readiness check
    const checkResourcesReady = () => {
      const isDomReady = document.readyState === "complete" || document.readyState === "interactive";
      const fontsLoaded = document.fonts ? document.fonts.status === "loaded" : true;
      return isDomReady && fontsLoaded;
    };

    intervalId = setInterval(() => {
      const elapsedTime = Date.now() - startTime;
      const timeRatio = Math.min(1, elapsedTime / minDisplayTime);
      const isFullyReady = checkResourcesReady();

      let targetProgress = Math.floor(timeRatio * 85);

      if (isFullyReady && timeRatio >= 1) {
        targetProgress = 100;
      }

      setProgress((prev) => {
        const next = Math.max(prev, targetProgress);
        
        // Update status text dynamically
        if (next < 35) {
          setStatusText("THINKING...");
        } else if (next < 70) {
          setStatusText("CONNECTING...");
        } else if (next < 100) {
          setStatusText("BUILDING...");
        } else {
          setStatusText("MESH READY.");
        }

        if (next >= 100) {
          clearInterval(intervalId);
          setIsReady(true);
          
          // Trigger exit transition
          setTimeout(() => {
            setIsExiting(true);
            if (onComplete) onComplete();
          }, 400);
        }

        return next;
      });
    }, 40);

    return () => clearInterval(intervalId);
  }, [onComplete]);

  // Node positions for dynamic SVG assembly
  const baseNodes = [
    { id: 1, cx: 80, cy: 60, targetCx: 150, targetCy: 100, color: "#FFD21F" },
    { id: 2, cx: 320, cy: 70, targetCx: 250, targetCy: 100, color: "#FFFFFF" },
    { id: 3, cx: 60, cy: 240, targetCx: 120, targetCy: 200, color: "#FFFFFF" },
    { id: 4, cx: 340, cy: 230, targetCx: 280, targetCy: 200, color: "#FFD21F" },
    { id: 5, cx: 200, cy: 30, targetCx: 200, targetCy: 80, color: "#FFD21F" },
    { id: 6, cx: 200, cy: 270, targetCx: 200, targetCy: 220, color: "#FFFFFF" },
  ];

  // Calculate current node positions based on loading progress
  const factor = progress / 100;

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          key="preloader-overlay"
          initial={{ y: 0, opacity: 1 }}
          exit={
            prefersReducedMotion
              ? { opacity: 0 }
              : {
                  y: "-100%",
                  transition: { duration: 0.85, ease: [0.76, 0, 0.24, 1] },
                }
          }
          className="fixed inset-0 z-[99999] bg-meshBlack text-white flex flex-col justify-between p-6 sm:p-12 overflow-hidden select-none"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between w-full relative z-10 border-b border-meshDarkGray pb-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-meshYellow text-meshBlack border-2 border-white flex items-center justify-center font-display font-black text-lg">
                M
              </div>
              <span className="font-display font-black text-2xl tracking-tight text-white">
                MINDMESH
              </span>
            </div>

            <div className="badge-sticker bg-meshYellow text-meshBlack border-white text-xs">
              24-HOUR HACKATHON
            </div>
          </div>

          {/* Center Graphic: Connected Vector Mesh & Status */}
          <div className="my-auto flex flex-col items-center justify-center relative z-10 py-8">
            
            {/* SVG Node Assembly Graphic */}
            <div className="relative w-[300px] h-[240px] sm:w-[400px] sm:h-[300px] flex items-center justify-center">
              <svg className="w-full h-full overflow-visible" viewBox="0 0 400 300">
                {/* Dynamic Connecting Lines */}
                {factor > 0.2 && (
                  <line
                    x1={80 + (150 - 80) * factor}
                    y1={60 + (100 - 60) * factor}
                    x2={320 + (250 - 320) * factor}
                    y2={70 + (100 - 70) * factor}
                    stroke="#FFD21F"
                    strokeWidth="2"
                    strokeDasharray="4 4"
                    opacity={factor}
                  />
                )}

                {factor > 0.4 && (
                  <line
                    x1={60 + (120 - 60) * factor}
                    y1={240 + (200 - 240) * factor}
                    x2={340 + (280 - 340) * factor}
                    y2={230 + (200 - 230) * factor}
                    stroke="#FFFFFF"
                    strokeWidth="2"
                    opacity={factor}
                  />
                )}

                {factor > 0.6 && (
                  <>
                    <line
                      x1={150 * factor + 80 * (1 - factor)}
                      y1={100 * factor + 60 * (1 - factor)}
                      x2={120 * factor + 60 * (1 - factor)}
                      y2={200 * factor + 240 * (1 - factor)}
                      stroke="#FFD21F"
                      strokeWidth="2.5"
                    />
                    <line
                      x1={250 * factor + 320 * (1 - factor)}
                      y1={100 * factor + 70 * (1 - factor)}
                      x2={280 * factor + 340 * (1 - factor)}
                      y2={200 * factor + 230 * (1 - factor)}
                      stroke="#FFD21F"
                      strokeWidth="2.5"
                    />
                  </>
                )}

                {factor > 0.8 && (
                  <polygon
                    points={`${200},${80} ${280},${200} ${120},${200}`}
                    fill="rgba(255, 210, 31, 0.15)"
                    stroke="#FFD21F"
                    strokeWidth="3"
                  />
                )}

                {/* Animated Node Circles */}
                {baseNodes.map((node) => {
                  const currentX = node.cx + (node.targetCx - node.cx) * factor;
                  const currentY = node.cy + (node.targetCy - node.cy) * factor;

                  return (
                    <circle
                      key={node.id}
                      cx={currentX}
                      cy={currentY}
                      r={isReady ? 12 : 8}
                      fill={node.color}
                      stroke="#111111"
                      strokeWidth="2"
                      className="transition-all duration-300"
                    />
                  );
                })}
              </svg>

              {/* Center Ready Pulsing Icon */}
              {isReady && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-16 h-16 rounded-full bg-meshYellow border-2 border-white flex items-center justify-center shadow-retroWhite animate-ping" />
                </div>
              )}
            </div>

            {/* Dynamic Status Text */}
            <div className="mt-6 text-center">
              <motion.div
                key={statusText}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 font-display font-black text-2xl sm:text-3xl tracking-wider text-meshYellow uppercase"
              >
                {isReady ? <Check className="w-6 h-6 text-white stroke-[3]" /> : <Sparkles className="w-5 h-5 text-meshYellow animate-spin" />}
                <span>{statusText}</span>
              </motion.div>
              
              <p className="font-mono text-xs text-meshGray font-bold mt-1 uppercase tracking-widest">
                DEPARTMENT OF COMPUTER SCIENCE AND ENGINEERING • SNSCE
              </p>
            </div>

          </div>

          {/* Bottom Bar: Progress Indicator & Staged Bar */}
          <div className="relative z-10 border-t border-meshDarkGray pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
            
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <span className="font-mono text-xs font-bold text-meshYellow uppercase tracking-widest">
                INITIALIZING MESH
              </span>
              <div className="w-36 sm:w-48 h-3 bg-meshDarkGray border border-meshGray rounded-none overflow-hidden relative">
                <motion.div
                  className="h-full bg-meshYellow"
                  style={{ width: `${progress}%` }}
                  transition={{ ease: "easeOut" }}
                />
              </div>
            </div>

            {/* Digital Percentage Counter */}
            <div className="font-display font-black text-4xl sm:text-5xl text-white tracking-tighter">
              {progress < 10 ? `0${progress}` : progress}
              <span className="text-meshYellow text-2xl sm:text-3xl">%</span>
            </div>

          </div>

        </motion.div>
      )}
    </AnimatePresence>
  );
}
