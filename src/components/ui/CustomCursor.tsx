"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [hoverState, setHoverState] = useState<"default" | "hover" | "card" | "button">("default");
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 350, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Disable on mobile/touch screens
    const checkTouch = () => {
      const isTouchDevice = window.matchMedia("(pointer: coarse)").matches || "ontouchstart" in window;
      setIsMobile(isTouchDevice);
    };

    checkTouch();
    window.addEventListener("resize", checkTouch);

    if (isMobile) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      const isButton = target.closest("button, a, .interactive-btn");
      const isCard = target.closest(".card-playful, .card-playful-yellow, .interactive-card");

      if (isButton) {
        setHoverState("button");
      } else if (isCard) {
        setHoverState("card");
      } else {
        setHoverState("default");
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleOver);
    document.body.addEventListener("mouseleave", handleMouseLeave);
    document.body.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("resize", checkTouch);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleOver);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
      document.body.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [mouseX, mouseY, isVisible, isMobile]);

  if (isMobile || !isVisible) return null;

  const cursorVariants = {
    default: {
      width: 24,
      height: 24,
      backgroundColor: "rgba(255, 210, 31, 0.4)",
      borderColor: "#111111",
      borderWidth: 2,
    },
    button: {
      width: 52,
      height: 52,
      backgroundColor: "rgba(255, 210, 31, 0.85)",
      borderColor: "#111111",
      borderWidth: 2,
    },
    card: {
      width: 42,
      height: 42,
      backgroundColor: "rgba(17, 17, 17, 0.85)",
      borderColor: "#FFD21F",
      borderWidth: 2,
    },
  };

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[9999] rounded-full flex items-center justify-center -translate-x-1/2 -translate-y-1/2 shadow-sm"
      style={{
        x: cursorX,
        y: cursorY,
      }}
      animate={hoverState}
      variants={cursorVariants}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
    >
      <motion.div
        className="w-2 h-2 rounded-full"
        animate={{
          backgroundColor: hoverState === "card" ? "#FFD21F" : "#111111",
          scale: hoverState === "button" ? 1.5 : 1,
        }}
      />
    </motion.div>
  );
}
