"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, useInView } from "framer-motion";

const CYBER_GLYPHS = "!<>-_\\/[]{}—=+*^?#_0123456789ABCDEF~";

interface AnimatedTextProps {
  text: string;
  className?: string;
  letterClassName?: string;
  scrambleOnView?: boolean;
  scrambleOnHover?: boolean;
  autoInterval?: number; // In ms, e.g. 10000 for periodic scramble
  speed?: number; // Frame interval in ms, default 30
}

export default function AnimatedText({
  text,
  className = "",
  letterClassName = "",
  scrambleOnView = true,
  scrambleOnHover = true,
  autoInterval,
  speed = 30,
}: AnimatedTextProps) {
  const [displayText, setDisplayText] = useState(text);
  const [isScrambling, setIsScrambling] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const containerRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(containerRef, { once: false, margin: "-5% 0px -5% 0px" });
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const hasTriggeredOnView = useRef(false);

  const triggerScramble = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    setIsScrambling(true);
    let iteration = 0;
    const maxIterations = text.length * 3;

    intervalRef.current = setInterval(() => {
      setDisplayText(() => {
        return text
          .split("")
          .map((char, index) => {
            if (char === " ") return " ";
            if (index < iteration / 3) {
              return text[index];
            }
            return CYBER_GLYPHS[Math.floor(Math.random() * CYBER_GLYPHS.length)];
          })
          .join("");
      });

      iteration++;

      if (iteration >= maxIterations) {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
        setDisplayText(text);
        setIsScrambling(false);
      }
    }, speed);
  }, [text, speed]);

  // Trigger when entering viewport
  useEffect(() => {
    if (scrambleOnView && isInView && !hasTriggeredOnView.current) {
      hasTriggeredOnView.current = true;
      triggerScramble();
    } else if (!isInView) {
      hasTriggeredOnView.current = false;
    }
  }, [isInView, scrambleOnView, triggerScramble]);

  // Periodic auto-scramble if configured (e.g. for Hero heading)
  useEffect(() => {
    if (!autoInterval || !isInView) return;

    const autoTimer = setInterval(() => {
      triggerScramble();
    }, autoInterval);

    return () => clearInterval(autoTimer);
  }, [autoInterval, isInView, triggerScramble]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  // Split into words so wrapping (if allowed between words) never breaks individual words or letters
  const words = displayText.split(" ");
  const originalWords = text.split(" ");

  return (
    <motion.span
      ref={containerRef}
      className={`inline-flex flex-nowrap whitespace-nowrap cursor-pointer select-none ${className}`}
      onMouseEnter={() => {
        setIsHovered(true);
        if (scrambleOnHover && !isScrambling) {
          triggerScramble();
        }
      }}
      onMouseLeave={() => setIsHovered(false)}
      onClick={triggerScramble}
      title="Hover or click to decrypt"
    >
      {words.map((word, wordIdx) => {
        const origWord = originalWords[wordIdx] || word;

        return (
          <span key={wordIdx} className="inline-flex flex-nowrap whitespace-nowrap">
            {word.split("").map((char, charIdx) => {
              const isResolved = char === origWord[charIdx];
              const isGlitching = isScrambling && !isResolved;

              return (
                <span
                  key={charIdx}
                  className={`inline-block transition-colors duration-150 ${letterClassName} ${
                    isGlitching
                      ? "text-[#00E5FF] drop-shadow-[0_0_8px_#00E5FF] font-mono"
                      : isHovered && charIdx % 2 === 0
                      ? "text-meshYellow"
                      : ""
                  }`}
                >
                  {char}
                </span>
              );
            })}
            {wordIdx < words.length - 1 && (
              <span className="inline-block w-[0.28em]">&nbsp;</span>
            )}
          </span>
        );
      })}
    </motion.span>
  );
}
