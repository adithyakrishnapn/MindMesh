"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface AnimatedTextProps {
  text: string;
  className?: string;
  letterClassName?: string;
  spreadOnClick?: boolean;
}

export default function AnimatedText({
  text,
  className = "",
  letterClassName = "",
}: AnimatedTextProps) {
  const [isHovered, setIsHovered] = useState(false);
  const letters = text.split("");

  return (
    <motion.span
      className={`inline-flex flex-wrap cursor-default select-none ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {letters.map((char, index) => {
        if (char === " ") {
          return <span key={index} className="inline-block w-[0.25em]">&nbsp;</span>;
        }

        // Calculate slight spread offsets based on letter position
        const offsetMultiplier = (index % 2 === 0 ? 1 : -1) * (index + 1);
        const xOffset = isHovered ? offsetMultiplier * 4 : 0;
        const yOffset = isHovered ? (index % 3 === 0 ? -6 : 6) : 0;
        const rotateOffset = isHovered ? (index % 2 === 0 ? 4 : -4) : 0;

        return (
          <motion.span
            key={index}
            className={`inline-block transition-colors duration-200 ${letterClassName}`}
            animate={{
              x: xOffset,
              y: yOffset,
              rotate: rotateOffset,
              color: isHovered && index % 3 === 0 ? "#FFD21F" : "inherit",
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 15,
              delay: index * 0.015,
            }}
          >
            {char}
          </motion.span>
        );
      })}
    </motion.span>
  );
}
