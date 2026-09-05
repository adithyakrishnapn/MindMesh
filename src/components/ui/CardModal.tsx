"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ArrowUpRight,
  CheckCircle2,
  Sparkles,
  Zap,
  Tag,
  Shield,
  Layers,
  Calendar,
  MapPin,
  LucideIcon,
  BrainCircuit,
  Globe,
  HeartPulse,
  ShieldCheck,
  Leaf,
  Cpu,
  Trophy,
  Award,
  UserCheck,
  Network,
  Phone,
  MessageSquare,
} from "lucide-react";
import { hackathon } from "@/data/hackathon";

const modalIcons: Record<string, LucideIcon> = {
  BrainCircuit,
  Globe,
  HeartPulse,
  ShieldCheck,
  Leaf,
  Cpu,
  Trophy,
  Award,
  UserCheck,
  Network,
  Sparkles,
  Zap,
  Phone,
  MessageSquare,
};

export interface CardModalData {
  id?: string;
  title: string;
  subtitle?: string;
  category?: string;
  badge?: string;
  description: string;
  longDescription?: string;
  highlights?: string[];
  tags?: string[];
  details?: { label: string; value: string }[];
  iconName?: string;
  accentColor?: string;
  actionUrl?: string;
  actionText?: string;
  secondaryAction?: {
    text: string;
    url?: string;
    onClick?: () => void;
  };
}

interface CardModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: CardModalData | null;
}

export default function CardModal({ isOpen, onClose, data }: CardModalProps) {
  // Close modal on Escape key press and manage scroll locking
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!data) return null;

  const IconComp = (data.iconName && modalIcons[data.iconName]) || Sparkles;
  const accentColor = data.accentColor || "#00E5FF";
  const registerUrl = data.actionUrl || hackathon.registrationUrl;
  const actionText = data.actionText || "REGISTER FOR THIS NOW (₹550)";

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-[99999] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-labelledby="card-modal-title"
        >
          <motion.div
            initial={{ scale: 0.88, opacity: 0, y: 25 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.88, opacity: 0, y: 20 }}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl bg-white border-4 border-meshBlack shadow-[12px_12px_0px_0px_#00E5FF] my-auto overflow-hidden"
          >
            {/* Top Accent Strip */}
            <div
              className="h-3 w-full border-b-2 border-meshBlack"
              style={{ backgroundColor: accentColor }}
            />

            {/* Modal Header Bar */}
            <div className="p-6 sm:p-8 bg-meshOffWhite border-b-2 border-meshBlack flex items-start justify-between gap-4">
              <div className="flex items-start gap-4">
                <div
                  className="w-14 h-14 border-2 border-meshBlack flex items-center justify-center shrink-0 shadow-retro transform -rotate-3"
                  style={{ backgroundColor: accentColor }}
                >
                  <IconComp className="w-7 h-7 text-meshBlack" />
                </div>

                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    {data.category && (
                      <span className="font-mono text-[11px] font-black uppercase tracking-widest bg-meshBlack text-white px-2.5 py-0.5">
                        {data.category}
                      </span>
                    )}
                    {data.badge && (
                      <span className="font-mono text-[11px] font-black uppercase tracking-wider bg-meshYellow text-meshBlack px-2 py-0.5 border border-meshBlack">
                        {data.badge}
                      </span>
                    )}
                  </div>

                  <h3
                    id="card-modal-title"
                    className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-meshBlack uppercase leading-tight"
                  >
                    {data.title}
                  </h3>

                  {data.subtitle && (
                    <p className="font-mono text-xs sm:text-sm font-bold text-meshGray mt-1">
                      {data.subtitle}
                    </p>
                  )}
                </div>
              </div>

              {/* Close Button */}
              <button
                onClick={onClose}
                className="w-10 h-10 border-2 border-meshBlack bg-white hover:bg-meshYellow text-meshBlack flex items-center justify-center shadow-retro transition-colors shrink-0"
                aria-label="Close details modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content Body */}
            <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
              {/* Primary Overview */}
              <div>
                <h4 className="font-mono text-xs font-black uppercase tracking-wider text-meshGray mb-2 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-meshBlack" /> OVERVIEW & OBJECTIVE
                </h4>
                <p className="font-body text-base text-meshBlack/90 font-medium leading-relaxed bg-meshOffWhite p-4 border-2 border-meshBlack">
                  {data.description}
                </p>
              </div>

              {/* Long Detailed Description if provided */}
              {data.longDescription && (
                <div className="font-body text-sm text-meshBlack/80 leading-relaxed pl-3 border-l-4 border-[#00E5FF]">
                  {data.longDescription}
                </div>
              )}

              {/* Key Highlights / Features */}
              {data.highlights && data.highlights.length > 0 && (
                <div>
                  <h4 className="font-mono text-xs font-black uppercase tracking-wider text-meshGray mb-3 flex items-center gap-2">
                    <Shield className="w-4 h-4 text-meshBlack" /> KEY HIGHLIGHTS & DELIVERABLES
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {data.highlights.map((highlight, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 p-3 bg-white border border-meshBlack shadow-sm text-xs font-semibold text-meshBlack"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#00E5FF] fill-meshBlack shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Key Details / Stats */}
              {data.details && data.details.length > 0 && (
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {data.details.map((detail, idx) => (
                    <div
                      key={idx}
                      className="p-3 bg-meshOffWhite border border-meshBlack text-center"
                    >
                      <span className="font-mono text-[10px] uppercase font-bold text-meshGray block">
                        {detail.label}
                      </span>
                      <span className="font-display font-black text-sm sm:text-base text-meshBlack block mt-0.5">
                        {detail.value}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {/* Tags / Suggested Stack */}
              {data.tags && data.tags.length > 0 && (
                <div>
                  <h4 className="font-mono text-xs font-black uppercase tracking-wider text-meshGray mb-2 flex items-center gap-2">
                    <Tag className="w-4 h-4 text-meshBlack" /> RECOMMENDED TECH STACK & TAGS
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {data.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-xs font-bold bg-[#00E5FF]/20 text-meshBlack px-3 py-1 border border-meshBlack"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Venue & Event Mini Strip */}
              <div className="p-3 bg-meshYellow/20 border-2 border-meshBlack flex flex-wrap items-center justify-between gap-3 text-xs font-mono font-bold text-meshBlack">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-meshBlack" />
                  <span>{hackathon.shortDate} • 9:00 AM</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-meshBlack" />
                  <span>{hackathon.campusName}, Coimbatore</span>
                </div>
              </div>
            </div>

            {/* Modal Actions Footer */}
            <div className="p-6 sm:p-8 bg-meshOffWhite border-t-2 border-meshBlack flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="font-mono text-xs text-meshGray font-bold">
                PRESS <kbd className="px-1.5 py-0.5 bg-white border border-meshBlack font-mono text-[10px]">ESC</kbd> TO CLOSE
              </span>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  onClick={onClose}
                  className="w-1/2 sm:w-auto font-display font-bold text-xs uppercase px-5 py-3 border-2 border-meshBlack bg-white hover:bg-meshYellow transition-colors shadow-retro"
                >
                  CLOSE
                </button>

                <a
                  href={registerUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 sm:w-auto inline-flex items-center justify-center gap-2 font-display font-black text-xs uppercase px-6 py-3 bg-meshBlack text-meshYellow hover:bg-[#00E5FF] hover:text-black border-2 border-meshBlack shadow-retro transition-colors"
                >
                  {actionText} <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
