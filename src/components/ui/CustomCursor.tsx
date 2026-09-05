"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [hoverState, setHoverState] = useState<"default" | "hover" | "card" | "button">("default");
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Snappy, low-latency spring physics that follows the mouse immediately
  const springConfig = { damping: 28, stiffness: 500, mass: 0.15 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Disable on touch screens
    const checkTouch = () => {
      const isTouchDevice =
        window.matchMedia("(pointer: coarse)").matches || "ontouchstart" in window;
      setIsMobile(isTouchDevice);
    };

    checkTouch();
    window.addEventListener("resize", checkTouch);

    if (isMobile) return;

    let lastTarget: EventTarget | null = null;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      // Only check closest ancestor if target element changed
      if (e.target !== lastTarget) {
        lastTarget = e.target;
        const target = e.target as HTMLElement;
        if (!target || !target.closest) return;

        const isButton = target.closest("button, a, .interactive-btn");
        if (isButton) {
          setHoverState((prev) => (prev === "button" ? prev : "button"));
          return;
        }

        const isCard = target.closest(".card-playful, .card-playful-yellow, .interactive-card");
        if (isCard) {
          setHoverState((prev) => (prev === "card" ? prev : "card"));
          return;
        }

        setHoverState((prev) => (prev === "default" ? prev : "default"));
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.body.addEventListener("mouseleave", handleMouseLeave);
    document.body.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("resize", checkTouch);
      window.removeEventListener("mousemove", handleMouseMove);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
      document.body.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [mouseX, mouseY, isVisible, isMobile]);

  if (isMobile || !isVisible) return null;

  const cursorVariants = {
    default: {
      width: 22,
      height: 22,
      backgroundColor: "rgba(0, 229, 255, 0.4)",
      borderColor: "#111111",
      borderWidth: 2,
    },
    button: {
      width: 48,
      height: 48,
      backgroundColor: "rgba(0, 229, 255, 0.85)",
      borderColor: "#111111",
      borderWidth: 2,
    },
    card: {
      width: 38,
      height: 38,
      backgroundColor: "rgba(17, 17, 17, 0.85)",
      borderColor: "#00E5FF",
      borderWidth: 2,
    },
  };

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[9999] rounded-full flex items-center justify-center -translate-x-1/2 -translate-y-1/2 shadow-sm will-change-transform"
      style={{
        x: cursorX,
        y: cursorY,
      }}
      animate={hoverState}
      variants={cursorVariants}
      transition={{ type: "spring", stiffness: 450, damping: 25 }}
    >
      <motion.div
        className="w-2 h-2 rounded-full"
        animate={{
          backgroundColor: hoverState === "card" ? "#00E5FF" : "#111111",
          scale: hoverState === "button" ? 1.5 : 1,
        }}
      />
    </motion.div>
  );
}
