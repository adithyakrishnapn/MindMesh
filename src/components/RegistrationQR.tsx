"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { hackathon } from "@/data/hackathon";
import AnimatedText from "@/components/ui/AnimatedText";
import {
  QrCode,
  Sparkles,
  ArrowUpRight,
  Copy,
  Check,
  Zap,
  PhoneCall,
  ShieldCheck,
  Clock,
  MapPin,
  Maximize2,
  X,
} from "lucide-react";

export default function RegistrationQR() {
  const [copied, setCopied] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(hackathon.registrationUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="register"
      className="relative w-full py-24 bg-[#0A0E1A] text-white border-b-4 border-meshYellow overflow-hidden"
    >
      {/* Circuit Matrix Background Pattern */}
      <div className="absolute inset-0 bg-dot-pattern-light opacity-15 pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#00E5FF]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#FFD21F]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-[#00E5FF]/20 text-[#00E5FF] font-mono font-black text-xs px-4 py-1.5 border border-[#00E5FF] mb-4 uppercase tracking-widest">
            <Zap className="w-4 h-4 text-[#00E5FF]" /> OFFICIAL REGISTRATION PORTAL
          </div>

          <h2 className="font-display font-black text-5xl sm:text-7xl lg:text-8xl tracking-tight text-white uppercase leading-[0.9]">
            <span>
              <AnimatedText text="SCAN TO" />
            </span>{" "}
            <br />
            <span className="text-[#00E5FF] drop-shadow-[4px_4px_0px_#FFD21F]">
              <AnimatedText text="REGISTER" />
            </span>
          </h2>

          <p className="mt-4 font-body text-base sm:text-lg text-gray-300 font-medium leading-relaxed">
            Secure your slot for <strong className="text-white">HACKNEXT'26 SERIES 2.0</strong>. Scan the official QR code or use the direct registration portal below.
          </p>
        </div>

        {/* Main Interactive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: QR Code Display Card */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-md bg-[#111827] border-4 border-[#00E5FF] p-6 sm:p-8 shadow-[8px_8px_0px_0px_#FFD21F] relative group">
              
              {/* Corner Sci-Fi Tech Accents */}
              <div className="absolute -top-2 -left-2 w-4 h-4 bg-[#FFD21F] border border-black" />
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-[#FFD21F] border border-black" />
              <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-[#FFD21F] border border-black" />
              <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-[#FFD21F] border border-black" />

              {/* QR Header Tag */}
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-700">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#00E5FF] animate-ping" />
                  <span className="font-mono text-xs font-black tracking-widest text-[#00E5FF] uppercase">
                    SCAN WITH ANY UPI / LENS APP
                  </span>
                </div>
                <span className="badge-sticker bg-[#FFD21F] text-black text-[10px]">
                  SERIES 2.0
                </span>
              </div>

              {/* QR Container with Laser Scan Animation */}
              <div
                onClick={() => setIsModalOpen(true)}
                className="relative w-full max-w-[320px] aspect-square mx-auto bg-white border-4 border-[#00E5FF] flex items-center justify-center p-4 cursor-pointer overflow-hidden group/qr shadow-[6px_6px_0px_0px_#FFD21F]"
              >
                {/* QR Code Image */}
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src={hackathon.qrCodePath}
                    alt="HackNext'26 Registration QR Code"
                    width={280}
                    height={280}
                    className="object-contain w-full h-full"
                    priority
                  />
                </div>

                {/* Cyber Laser Scan Line */}
                <motion.div
                  className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00E5FF] to-transparent shadow-[0_0_12px_#00E5FF] pointer-events-none"
                  animate={{ top: ["5%", "92%", "5%"] }}
                  transition={{ repeat: Infinity, duration: 2.8, ease: "linear" }}
                />

                {/* Hover Click-to-Enlarge Overlay */}
                <div className="absolute inset-0 bg-[#050811]/70 opacity-0 group-hover/qr:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2">
                  <Maximize2 className="w-8 h-8 text-[#00E5FF] animate-bounce" />
                  <span className="font-mono text-xs font-bold text-white uppercase tracking-wider">
                    Click to Zoom QR
                  </span>
                </div>
              </div>

              {/* Bottom Badge from Poster: "LIMITED SLOTS! REGISTER NOW!" */}
              <div className="mt-4 pt-3 border-t border-gray-700 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
                <div>
                  <span className="font-display font-black text-sm text-[#FFD21F] uppercase tracking-wider block">
                    {hackathon.slotsNote}
                  </span>
                  <span className="font-mono text-[11px] text-gray-400">
                    Registration opens on rolling basis
                  </span>
                </div>

                <div className="bg-[#00E5FF] text-black font-display font-black text-xs px-3 py-1.5 border border-black shadow-retro">
                  ₹550 / PARTICIPANT
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Registration Details, Fee Breakdown & Action Links */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            {/* Participation Fee & Venue Highlight Box */}
            <div className="card-playful p-6 sm:p-8 bg-[#161F30] border-2 border-[#00E5FF] text-white">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <div>
                  <span className="font-mono text-xs font-bold text-[#00E5FF] uppercase tracking-widest block mb-1">
                    PARTICIPATION FEE
                  </span>
                  <div className="flex items-baseline gap-3">
                    <span className="font-display font-black text-5xl sm:text-6xl text-[#FFD21F] tracking-tight">
                      {hackathon.externalFee}
                    </span>
                    <span className="font-mono text-sm text-gray-300 font-bold uppercase">
                      {hackathon.feeNote}
                    </span>
                  </div>
                </div>

                <div className="bg-[#FFD21F] text-black p-3 border-2 border-black font-mono text-xs font-black uppercase text-center shadow-retro">
                  <span className="block">24-HOUR ACCESS</span>
                  <span className="text-[10px] opacity-80">ALL INCLUSIVE</span>
                </div>
              </div>

              {/* What Fee Includes (High Value) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 py-4 border-y border-gray-700 text-xs font-mono font-medium text-gray-300">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#00E5FF] shrink-0" />
                  <span>24-Hour Campus Lab Access</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#00E5FF] shrink-0" />
                  <span>Winner & Participation Certificates</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#00E5FF] shrink-0" />
                  <span>Mentoring by Industry AI Experts</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#00E5FF] shrink-0" />
                  <span>High-Speed Wi-Fi & Electricity</span>
                </div>
              </div>

              {/* Quick Event Summary Pills */}
              <div className="mt-4 flex flex-wrap items-center gap-4 text-xs font-mono font-bold text-gray-300">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-[#FFD21F]" /> {hackathon.date} • {hackathon.startTime}
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-[#00E5FF]" /> {hackathon.campusName}
                </span>
              </div>
            </div>

            {/* Direct Form Link Actions Card */}
            <div className="p-6 bg-[#111827] border-2 border-gray-700">
              <span className="font-mono text-xs font-bold text-gray-400 uppercase tracking-widest block mb-2">
                PREFER DIRECT FORM LINK?
              </span>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <a
                  href={hackathon.registrationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 font-display font-black text-sm uppercase bg-[#00E5FF] text-black px-6 py-3.5 border-2 border-black hover:bg-[#FFD21F] transition-all shadow-[4px_4px_0px_0px_#FFFFFF]"
                >
                  OPEN REGISTRATION FORM <ArrowUpRight className="w-4 h-4" />
                </a>

                <button
                  onClick={handleCopyLink}
                  className="inline-flex items-center justify-center gap-2 font-mono text-xs font-bold uppercase bg-white/10 hover:bg-white/20 text-white px-4 py-3.5 border border-gray-600 transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-[#00E5FF]" /> COPIED!
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-gray-400" /> COPY LINK
                    </>
                  )}
                </button>
              </div>

              <p className="mt-3 font-mono text-[11px] text-gray-400">
                * Note: Registration link and QR code can be updated at any moment. Confirmation will be verified upon arrival.
              </p>
            </div>

            {/* Student Coordinators Quick Contact Bar */}
            <div className="p-4 bg-[#FFD21F]/10 border border-[#FFD21F]/40 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <PhoneCall className="w-4 h-4 text-[#FFD21F]" />
                <span className="font-mono text-xs font-bold text-white">
                  NEED REGISTRATION HELP? CONTACT COORDINATORS:
                </span>
              </div>

              <div className="flex items-center gap-3 font-mono text-xs font-bold">
                {hackathon.coordinators.map((c) => (
                  <a
                    key={c.name}
                    href={`tel:${c.phone}`}
                    className="text-[#FFD21F] hover:underline"
                  >
                    {c.name}: {c.displayPhone}
                  </a>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* QR Zoom Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div
            className="fixed inset-0 z-[99999] bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-sm w-full bg-[#111827] border-4 border-[#00E5FF] p-6 shadow-[10px_10px_0px_0px_#FFD21F]"
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black text-white flex items-center justify-center border border-gray-600 hover:bg-[#FFD21F] hover:text-black transition-colors"
                aria-label="Close QR Modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="text-center mb-4">
                <span className="badge-sticker bg-[#FFD21F] text-black text-xs mb-2">
                  SCAN TO REGISTER
                </span>
                <h3 className="font-display font-black text-xl text-white uppercase">
                  HACKNEXT'26 SERIES 2.0
                </h3>
                <p className="font-mono text-xs text-gray-400 mt-1">
                  External Participants: ₹550
                </p>
              </div>

              <div className="relative aspect-square w-full max-w-[280px] mx-auto bg-white border-2 border-[#00E5FF] p-2 flex items-center justify-center">
                <Image
                  src={hackathon.qrCodePath}
                  alt="HackNext'26 Large QR"
                  width={260}
                  height={260}
                  className="object-contain w-full h-full"
                />
              </div>

              <div className="mt-4 text-center">
                <a
                  href={hackathon.registrationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full font-display font-black text-xs uppercase bg-[#00E5FF] text-black py-3 border border-black shadow-retro hover:bg-[#FFD21F] transition-colors"
                >
                  OPEN REGISTRATION FORM LINK <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
