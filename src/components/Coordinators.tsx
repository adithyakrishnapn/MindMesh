"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { hackathon, Coordinator } from "@/data/hackathon";
import AnimatedText from "@/components/ui/AnimatedText";
import CardModal, { CardModalData } from "@/components/ui/CardModal";
import { Phone, MessageSquare, User, HelpCircle, MapPin, Building2, ArrowUpRight } from "lucide-react";

export default function Coordinators() {
  const [selectedCoord, setSelectedCoord] = useState<CardModalData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = (coord: Coordinator) => {
    setSelectedCoord({
      title: coord.name,
      subtitle: `${coord.role} • HACKNEXT'26 Organizing Committee`,
      category: "STUDENT HELPLINE",
      badge: coord.displayPhone,
      description: `Direct contact for ${coord.name}. Reach out for inquiries about team formation, fee submission, travel directions to SNS AI Campus, or hackathon rules.`,
      highlights: [
        `Direct Phone Line: ${coord.displayPhone}`,
        "WhatsApp Live Support Available",
        "Assistance with Team Verification",
        "SNS AI Campus Travel & Transit Guidance",
      ],
      details: [
        { label: "PHONE NUMBER", value: coord.displayPhone },
        { label: "CAMPUS", value: "SNS AI Campus" },
        { label: "LOCATION", value: "Coimbatore" },
      ],
      iconName: "Phone",
      accentColor: "#00E5FF",
      actionText: "OPEN REGISTRATION FORM (₹550)",
      actionUrl: hackathon.registrationUrl,
    });
    setIsModalOpen(true);
  };

  return (
    <section
      id="coordinators"
      className="relative w-full py-20 bg-meshOffWhite border-b-4 border-meshBlack overflow-hidden"
    >
      <div className="absolute inset-0 bg-dot-pattern opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="badge-sticker mb-3">STUDENT CONTACTS</span>
          <h2 className="font-display font-black text-4xl sm:text-6xl tracking-tight text-meshBlack uppercase leading-none">
            <span>
              <AnimatedText text="STUDENT" />
            </span>{" "}
            <br />
            <span className="text-meshYellow drop-shadow-[3px_3px_0px_#111111]">
              <AnimatedText text="COORDINATORS" />
            </span>
          </h2>
          <p className="mt-3 font-body text-sm sm:text-base text-meshGray font-semibold">
            Have questions regarding team registration, event rules, or reaching the SNS AI Campus? Reach out directly!
          </p>
          <p className="mt-2 font-mono text-xs text-meshBlack font-bold flex items-center justify-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#00E5FF] animate-ping" />
            Click any coordinator card to pop up contact and helpline details.
          </p>
        </div>

        {/* Coordinators Grid with Pop-Up Action */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {hackathon.coordinators.map((coordinator: Coordinator, idx: number) => (
            <motion.div
              key={coordinator.name}
              onClick={() => handleCardClick(coordinator)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.4 }}
              className="card-playful p-8 bg-white flex flex-col justify-between cursor-pointer transform hover:-translate-y-3 hover:scale-[1.02] hover:shadow-[12px_12px_0px_0px_#00E5FF] active:scale-[0.98] transition-all duration-200 group"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  handleCardClick(coordinator);
                }
              }}
            >
              <div>
                {/* Top Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold uppercase tracking-widest bg-meshYellow text-meshBlack px-2.5 py-1 border border-meshBlack">
                      {coordinator.role}
                    </span>
                    <span className="font-mono text-[10px] font-bold uppercase bg-[#00E5FF] text-black px-2 py-0.5 border border-black group-hover:bg-[#FFD21F] transition-colors">
                      POP UP ↗
                    </span>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-meshBlack text-meshYellow flex items-center justify-center border-2 border-meshBlack shadow-retro group-hover:rotate-12 transition-transform">
                    <User className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="font-display font-black text-2xl sm:text-3xl text-meshBlack uppercase group-hover:text-[#00E5FF] transition-colors">
                  {coordinator.name}
                </h3>

                <p className="font-mono text-xs text-meshGray font-bold mt-1">
                  HACKNEXT'26 Organizing Committee
                </p>

                <div className="my-6 p-4 bg-meshOffWhite border-2 border-meshBlack">
                  <span className="font-mono text-[10px] uppercase font-bold text-meshGray block mb-1">
                    PRIMARY PHONE / WHATSAPP
                  </span>
                  <span className="font-display font-black text-2xl text-meshBlack tracking-wider">
                    {coordinator.displayPhone}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div
                className="grid grid-cols-2 gap-3 pt-4 border-t-2 border-meshBlack"
                onClick={(e) => e.stopPropagation()}
              >
                <a
                  href={`tel:${coordinator.phone}`}
                  className="inline-flex items-center justify-center gap-2 font-display font-black text-xs uppercase bg-meshBlack text-meshYellow py-3 border border-meshBlack shadow-retro hover:bg-meshYellow hover:text-meshBlack transition-colors"
                >
                  <Phone className="w-4 h-4" /> CALL NOW
                </a>

                <a
                  href={`https://wa.me/${coordinator.phone.replace("+", "")}?text=Hi%20${coordinator.name},%20I%20have%20a%20query%20regarding%20HACKNEXT'26%20Hackathon`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 font-display font-black text-xs uppercase bg-white text-meshBlack py-3 border border-meshBlack shadow-retro hover:bg-green-500 hover:text-white transition-colors"
                >
                  <MessageSquare className="w-4 h-4" /> WHATSAPP
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Location & Support Info Strip */}
        <div className="mt-12 max-w-4xl mx-auto p-6 bg-white border-2 border-meshBlack shadow-retro flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-left">
            <div className="w-12 h-12 bg-meshYellow border-2 border-meshBlack flex items-center justify-center shrink-0">
              <MapPin className="w-6 h-6 text-meshBlack" />
            </div>
            <div>
              <span className="font-display font-bold text-sm text-meshBlack block">
                {hackathon.venue}
              </span>
              <span className="font-mono text-xs text-meshGray">
                SNS College of Technology • Coimbatore - 641035
              </span>
            </div>
          </div>

          <a
            href={hackathon.organizer.collegeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs font-bold uppercase bg-meshOffWhite text-meshBlack px-4 py-2 border border-meshBlack hover:bg-meshYellow transition-colors whitespace-nowrap"
          >
            CAMPUS PORTAL →
          </a>
        </div>
      </div>

      {/* Pop-Up Contact Modal */}
      <CardModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        data={selectedCoord}
      />
    </section>
  );
}
