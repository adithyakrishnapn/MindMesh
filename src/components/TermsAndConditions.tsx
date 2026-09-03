"use client";

import AnimatedText from "@/components/ui/AnimatedText";
import { ShieldCheck, FileCheck, CheckCircle2 } from "lucide-react";

export const termsList = [
  {
    id: 1,
    title: "Accurate Information",
    text: "Participants must provide accurate and valid information during registration.",
    highlight: "accurate and valid information",
  },
  {
    id: 2,
    title: "Single Team Membership",
    text: "Each participant can register as a member of only one team.",
    highlight: "only one team",
  },
  {
    id: 3,
    title: "Team Size & Composition",
    text: "Team size must be between 1 and 4 members. Inter-college and inter-specialization teams are allowed.",
    highlight: "1 and 4 members",
  },
  {
    id: 4,
    title: "On-the-Spot Problem Statement",
    text: "The problem statement will be provided on the spot and teams must develop their solution within the 24-hour hackathon duration.",
    highlight: "on the spot",
    secondaryHighlight: "24-hour hackathon duration",
  },
  {
    id: 5,
    title: "Compliance with Guidelines",
    text: "Participants must follow all instructions and guidelines provided by the organizers.",
    highlight: "all instructions and guidelines",
  },
  {
    id: 6,
    title: "Fair Play & Originality",
    text: "Plagiarism, copying, cheating, or submission of previously completed projects as the primary solution may result in disqualification.",
    highlight: "disqualification",
  },
  {
    id: 7,
    title: "Personal Belongings & Responsibility",
    text: "Participants are responsible for their own laptops, devices, documents, and personal belongings. The organizers will not be responsible for loss or damage.",
    highlight: "own laptops, devices, documents, and personal belongings",
  },
  {
    id: 8,
    title: "Code of Conduct",
    text: "Participants must maintain appropriate and respectful conduct throughout the event.",
    highlight: "appropriate and respectful conduct",
  },
  {
    id: 9,
    title: "Right to Disqualify",
    text: "The organizers reserve the right to disqualify participants/teams for violation of the rules or misconduct.",
    highlight: "disqualify participants/teams",
  },
  {
    id: 10,
    title: "Finality of Decisions",
    text: "The judges' decision will be final and binding.",
    highlight: "judges' decision will be final and binding",
  },
  {
    id: 11,
    title: "Media & Consent",
    text: "By registering, participants consent to the use of event-related photographs, videos, and project details for promotional and documentation purposes.",
    highlight: "photographs, videos, and project details",
  },
  {
    id: 12,
    title: "Event Modifications",
    text: "The organizers reserve the right to make necessary changes to the event schedule, rules, or arrangements and will communicate significant changes to participants.",
    highlight: "necessary changes to the event schedule, rules, or arrangements",
  },
  {
    id: 13,
    title: "Capacity & Eligibility",
    text: "Registration does not guarantee participation if the event reaches its capacity or if eligibility requirements are not met.",
    highlight: "does not guarantee participation",
  },
];

export default function TermsAndConditions() {
  return (
    <section id="terms" className="relative w-full py-24 bg-meshOffWhite border-b-4 border-meshBlack overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-dot-pattern opacity-30 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-meshYellow text-meshBlack font-mono font-black text-xs px-3.5 py-1.5 border-2 border-meshBlack shadow-retro mb-4 uppercase tracking-widest">
            <ShieldCheck className="w-4 h-4 text-meshBlack" /> OFFICIAL RULES & POLICIES
          </div>
          <h2 className="font-display font-black text-5xl sm:text-7xl tracking-tight text-meshBlack leading-none">
            TERMS & <br />
            <span className="text-meshYellow drop-shadow-[3px_3px_0px_#111111]">
              <AnimatedText text="CONDITIONS" />
            </span>
          </h2>
          <p className="mt-4 font-body text-base sm:text-lg text-meshBlack/90 font-semibold max-w-2xl mx-auto leading-relaxed">
            By registering for the <strong className="text-meshBlack bg-meshYellow/40 px-1">MindMesh 24-Hours Hackathon</strong>, participants agree to the following rules and guidelines:
          </p>
        </div>

        {/* Terms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {termsList.map((item) => (
            <div
              key={item.id}
              className="card-playful bg-white p-6 flex flex-col justify-between hover:bg-meshYellow/5 transition-all duration-200"
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-3">
                  <span className="font-mono font-black text-sm bg-meshBlack text-meshYellow px-3 py-1 border border-meshBlack shadow-retro">
                    #{item.id.toString().padStart(2, "0")}
                  </span>
                  <span className="font-display font-bold text-xs uppercase tracking-wider text-meshGray bg-meshOffWhite px-2.5 py-1 border border-meshBlack/20">
                    {item.title}
                  </span>
                </div>
                <p className="font-body text-sm font-medium text-meshBlack/90 leading-relaxed">
                  {renderFormattedText(item.text, item.highlight, item.secondaryHighlight)}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Confirmation Agreement Footer Box */}
        <div className="p-8 bg-meshYellow border-4 border-meshBlack shadow-retroLg flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-none bg-meshBlack text-meshYellow border-2 border-meshBlack flex items-center justify-center shrink-0 shadow-retro">
              <FileCheck className="w-6 h-6 stroke-[2.5]" />
            </div>
            <div>
              <h3 className="font-display font-black text-xl text-meshBlack uppercase mb-1 flex items-center gap-2">
                CONFIRMATION & AGREEMENT
              </h3>
              <p className="font-body text-sm font-extrabold text-meshBlack leading-relaxed">
                By submitting this form, I confirm that I have read, understood, and agree to the above Terms & Conditions.
              </p>
            </div>
          </div>
          <div className="shrink-0">
            <div className="inline-flex items-center gap-2 bg-meshBlack text-meshYellow font-mono font-bold text-xs px-4 py-2.5 border-2 border-meshBlack shadow-retro uppercase">
              <CheckCircle2 className="w-4 h-4 text-meshYellow" /> BINDING AGREEMENT
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

// Helper to highlight key text segments as specified in prompt
function renderFormattedText(text: string, highlight?: string, secondaryHighlight?: string) {
  if (!highlight) return text;

  let parts: Array<{ text: string; isBold: boolean }> = [];
  
  if (secondaryHighlight && text.includes(secondaryHighlight)) {
    // Handle both highlights if present
    const firstIdx = text.indexOf(highlight);
    const secondIdx = text.indexOf(secondaryHighlight);

    if (firstIdx < secondIdx) {
      const p1 = text.substring(0, firstIdx);
      const h1 = text.substring(firstIdx, firstIdx + highlight.length);
      const p2 = text.substring(firstIdx + highlight.length, secondIdx);
      const h2 = text.substring(secondIdx, secondIdx + secondaryHighlight.length);
      const p3 = text.substring(secondIdx + secondaryHighlight.length);
      return (
        <>
          {p1}
          <strong className="font-extrabold text-meshBlack bg-meshYellow/30 px-0.5">{h1}</strong>
          {p2}
          <strong className="font-extrabold text-meshBlack bg-meshYellow/30 px-0.5">{h2}</strong>
          {p3}
        </>
      );
    }
  }

  const partsArray = text.split(highlight);
  if (partsArray.length < 2) return text;

  return (
    <>
      {partsArray[0]}
      <strong className="font-extrabold text-meshBlack bg-meshYellow/30 px-0.5">{highlight}</strong>
      {partsArray[1]}
    </>
  );
}
