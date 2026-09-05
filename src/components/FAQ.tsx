"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { hackathon } from "@/data/hackathon";
import AnimatedText from "@/components/ui/AnimatedText";
import { Plus, Minus, HelpCircle } from "lucide-react";

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggleFAQ = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="relative w-full py-24 bg-meshOffWhite border-b-4 border-meshBlack overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-dot-pattern opacity-30 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="badge-sticker mb-3">CLEARING YOUR DOUBTS</span>
          <h2 className="font-display font-black text-5xl sm:text-7xl tracking-tight text-meshBlack leading-none">
            <span>
              <AnimatedText text="FREQUENTLY ASKED" />
            </span>{" "}
            <br />
            <span className="text-meshYellow drop-shadow-[3px_3px_0px_#111111]">
              <AnimatedText text="QUESTIONS" />
            </span>
          </h2>
          <p className="mt-4 font-body text-base text-meshGray font-semibold">
            Everything you need to know before stepping into the 24-hour sprint.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {hackathon.faqs.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className={`card-playful transition-colors duration-200 ${
                  isOpen ? "bg-white border-2 border-meshBlack" : "bg-white hover:bg-meshYellow/10"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full text-left p-6 flex items-center justify-between gap-4 focus:outline-none"
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle className={`w-5 h-5 shrink-0 ${isOpen ? "text-meshYellow fill-meshBlack" : "text-meshBlack"}`} />
                    <span className="font-display font-black text-lg sm:text-xl text-meshBlack leading-tight">
                      {faq.question}
                    </span>
                  </div>

                  <div
                    className={`w-8 h-8 rounded-full border-2 border-meshBlack flex items-center justify-center shrink-0 shadow-retro transition-transform ${
                      isOpen ? "bg-meshYellow rotate-180" : "bg-meshOffWhite"
                    }`}
                  >
                    {isOpen ? (
                      <Minus className="w-5 h-5 text-meshBlack stroke-[3]" />
                    ) : (
                      <Plus className="w-5 h-5 text-meshBlack stroke-[3]" />
                    )}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-2 font-body text-base font-medium text-meshBlack/80 leading-relaxed border-t border-meshBlack/10">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className="mt-12 p-6 bg-meshYellow border-2 border-meshBlack shadow-retro flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h3 className="font-display font-black text-xl text-meshBlack">
              HAVE MORE QUESTIONS?
            </h3>
            <p className="font-body text-xs font-bold text-meshBlack/80">
              Reach out directly to the CSE Department organizing team at SNSCE campus.
            </p>
          </div>
          <a
            href={hackathon.organizer.collegeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-display font-bold text-xs uppercase bg-meshBlack text-meshYellow px-5 py-3 border border-meshBlack shadow-retro hover:bg-white hover:text-meshBlack transition-colors text-center"
          >
            CONTACT ORGANIZERS
          </a>
        </div>

      </div>
    </section>
  );
}
