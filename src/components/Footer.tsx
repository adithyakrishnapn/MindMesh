"use client";

import Link from "next/link";
import { hackathon } from "@/data/hackathon";
import { Instagram, Linkedin, Globe, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative w-full bg-meshBlack text-meshWhite pt-16 pb-12 border-t-4 border-meshYellow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b-2 border-meshDarkGray">
          
          {/* Brand Column */}
          <div className="md:col-span-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-meshYellow text-meshBlack border-2 border-white flex items-center justify-center font-display font-black text-xl shadow-retroWhite">
                M
              </div>
              <span className="font-display font-black text-3xl text-meshWhite tracking-tight">
                {hackathon.name}
              </span>
            </div>

            <p className="font-mono text-xs font-bold text-meshYellow uppercase tracking-wider mb-2">
              {hackathon.subtitle}
            </p>

            <p className="font-body text-sm text-meshGray max-w-md leading-relaxed">
              {hackathon.organizer.department} <br />
              {hackathon.organizer.college}, {hackathon.organizer.location}
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3">
            <h3 className="font-display font-bold text-xs uppercase tracking-widest text-meshYellow mb-4">
              QUICK NAVIGATION
            </h3>
            <ul className="space-y-2 font-mono text-xs font-bold text-meshGray uppercase">
              <li>
                <a href="#about" className="hover:text-meshYellow transition-colors">
                  ABOUT EVENT
                </a>
              </li>
              <li>
                <a href="#challenge" className="hover:text-meshYellow transition-colors">
                  CHALLENGE TRACKS
                </a>
              </li>
              <li>
                <a href="#timeline" className="hover:text-meshYellow transition-colors">
                  24H SCHEDULE
                </a>
              </li>
              <li>
                <a href="#prizes" className="hover:text-meshYellow transition-colors">
                  PRIZES & REWARDS
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-meshYellow transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Socials & Actions Column */}
          <div className="md:col-span-3">
            <h3 className="font-display font-bold text-xs uppercase tracking-widest text-meshYellow mb-4">
              CONNECT WITH US
            </h3>

            <div className="flex items-center gap-3 mb-6">
              <a
                href={hackathon.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-meshDarkGray border border-meshGray flex items-center justify-center hover:bg-meshYellow hover:text-meshBlack transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>

              <a
                href={hackathon.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-meshDarkGray border border-meshGray flex items-center justify-center hover:bg-meshYellow hover:text-meshBlack transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>

              <a
                href={hackathon.socials.website}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-meshDarkGray border border-meshGray flex items-center justify-center hover:bg-meshYellow hover:text-meshBlack transition-colors"
                aria-label="SNSCE College Website"
              >
                <Globe className="w-5 h-5" />
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase text-meshBlack bg-meshYellow px-4 py-2.5 border border-meshBlack shadow-retroYellow hover:bg-white transition-colors"
            >
              BACK TO TOP <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom Legal & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-meshGray">
          <p>© 2026 MindMesh • SNSCE CSE. All rights reserved.</p>
          <p>Department of Computer Science & Engineering, SNSCE Coimbatore.</p>
        </div>

      </div>
    </footer>
  );
}
