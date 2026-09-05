"use client";

import Link from "next/link";
import { hackathon } from "@/data/hackathon";
import { Instagram, Linkedin, Globe, ArrowUp, FileText, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative w-full bg-[#0A0E1A] text-meshWhite pt-16 pb-12 border-t-4 border-[#00E5FF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b-2 border-gray-800">
          {/* Brand Column */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-[#00E5FF] text-black border-2 border-white flex items-center justify-center font-display font-black text-base shadow-retroWhite">
                AI
              </div>
              <div className="flex items-baseline gap-2">
                <span className="font-display font-black text-3xl text-white tracking-tight">
                  {hackathon.name}
                </span>
                <span className="font-mono text-xs font-black bg-[#FFD21F] text-black px-2 py-0.5 border border-black">
                  {hackathon.edition}
                </span>
              </div>
            </div>

            <p className="font-mono text-xs font-bold text-[#00E5FF] uppercase tracking-wider mb-2">
              {hackathon.subtitle}
            </p>

            <p className="font-mono text-xs font-black text-white bg-black/60 p-2 border border-gray-700 inline-block mb-3">
              {hackathon.codeTagline}
            </p>

            <p className="font-body text-sm text-gray-400 max-w-md leading-relaxed">
              {hackathon.organizer.college} <br />
              {hackathon.campusName} • Coimbatore - {hackathon.organizer.pincode}
            </p>
          </div>

          {/* Student Coordinators Column */}
          <div className="md:col-span-4">
            <h3 className="font-display font-bold text-xs uppercase tracking-widest text-[#00E5FF] mb-4">
              STUDENT COORDINATORS
            </h3>
            <div className="space-y-3 font-mono text-xs text-gray-300">
              {hackathon.coordinators.map((c) => (
                <div key={c.name} className="p-3 bg-gray-900 border border-gray-800">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-white uppercase">{c.name}</span>
                    <span className="text-[10px] text-[#FFD21F]">{c.role}</span>
                  </div>
                  <a
                    href={`tel:${c.phone}`}
                    className="inline-flex items-center gap-1.5 text-xs text-[#00E5FF] hover:underline mt-1 font-bold"
                  >
                    <Phone className="w-3.5 h-3.5" /> {c.displayPhone}
                  </a>
                </div>
              ))}
            </div>

            <div className="mt-4 flex items-center gap-2 text-xs font-mono text-gray-400">
              <MapPin className="w-3.5 h-3.5 text-[#00E5FF]" />
              <span>DT Playhouse, SNS AI Campus, Coimbatore</span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3">
            <h3 className="font-display font-bold text-xs uppercase tracking-widest text-[#00E5FF] mb-4">
              QUICK NAVIGATION
            </h3>
            <ul className="space-y-2 font-mono text-xs font-bold text-gray-400 uppercase">
              <li>
                <a href="/#about" className="hover:text-[#00E5FF] transition-colors">
                  ABOUT EVENT
                </a>
              </li>
              <li>
                <a href="/#expect" className="hover:text-[#00E5FF] transition-colors">
                  WHAT TO EXPECT
                </a>
              </li>
              <li>
                <a href="/#challenge" className="hover:text-[#00E5FF] transition-colors">
                  AI DOMAINS
                </a>
              </li>
              <li>
                <a href="/#timeline" className="hover:text-[#00E5FF] transition-colors">
                  24H SCHEDULE
                </a>
              </li>
              <li>
                <a href="/#register" className="hover:text-[#FFD21F] transition-colors text-white">
                  SCAN TO REGISTER (₹550)
                </a>
              </li>
              <li>
                <a href="/#prizes" className="hover:text-[#00E5FF] transition-colors">
                  EXCITING PRIZES
                </a>
              </li>
              <li className="pt-2 border-t border-gray-800">
                <Link
                  href="/terms"
                  className="text-[#00E5FF] hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <FileText className="w-3.5 h-3.5" /> TERMS & CONDITIONS
                </Link>
              </li>
            </ul>

            {/* Social Icons & Back to Top */}
            <div className="flex items-center gap-3 mt-6">
              <a
                href={hackathon.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-gray-900 border border-gray-700 flex items-center justify-center hover:bg-[#00E5FF] hover:text-black transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href={hackathon.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-gray-900 border border-gray-700 flex items-center justify-center hover:bg-[#00E5FF] hover:text-black transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href={hackathon.socials.website}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-gray-900 border border-gray-700 flex items-center justify-center hover:bg-[#00E5FF] hover:text-black transition-colors"
                aria-label="SNSCT Website"
              >
                <Globe className="w-4 h-4" />
              </a>

              <button
                onClick={scrollToTop}
                className="ml-auto inline-flex items-center gap-1 font-mono text-xs font-bold uppercase text-black bg-[#00E5FF] px-3 py-2 border border-black shadow-[3px_3px_0px_0px_#FFFFFF] hover:bg-white transition-colors"
                aria-label="Back to Top"
              >
                <ArrowUp className="w-3.5 h-3.5" /> TOP
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Banner from Poster */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-xs text-gray-400">
          <p>© 2026 HACKNEXT'26 SERIES 2.0 • SNS College of Technology. All rights reserved.</p>
          <p className="text-[#FFD21F] font-bold">
            {"</> "} THINK BEYOND. BUILD BEYOND. LEAD BEYOND. [AI]
          </p>
        </div>
      </div>
    </footer>
  );
}
