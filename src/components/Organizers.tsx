"use client";

import Image from "next/image";
import { hackathon } from "@/data/hackathon";
import AnimatedText from "@/components/ui/AnimatedText";
import { Building2, ExternalLink, GraduationCap, Award } from "lucide-react";

export default function Organizers() {
  return (
    <section className="relative w-full py-24 bg-white border-b-4 border-meshBlack overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-dot-pattern opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="badge-sticker mb-3">INSTITUTIONAL HOSTS</span>
          <h2 className="font-display font-black text-4xl sm:text-6xl text-meshBlack uppercase tracking-tight">
            ORGANIZED <span className="text-meshYellow drop-shadow-[2px_2px_0px_#111111]">BY</span>
          </h2>
          <p className="mt-4 font-body text-base text-meshGray font-semibold">
            Fostering innovation, research excellence, and next-generation engineering leadership.
          </p>
        </div>

        {/* Institutional Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch mb-12">
          
          {/* Department Card */}
          <div className="card-playful p-8 bg-meshOffWhite flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs font-bold bg-meshYellow text-meshBlack px-2.5 py-1 border border-meshBlack">
                  ORGANIZING DEPARTMENT
                </span>
                <GraduationCap className="w-6 h-6 text-meshBlack" />
              </div>

              <h3 className="font-display font-black text-2xl sm:text-3xl text-meshBlack leading-tight">
                {hackathon.organizer.department}
              </h3>

              <p className="mt-4 font-body text-sm font-medium text-meshBlack/80 leading-relaxed">
                The Department of Computer Science and Engineering at SNSCE is dedicated to nurturing technical talent through hands-on hackathons, research labs, industry collaborations, and modern software engineering practices.
              </p>
            </div>

            {/* Department Logo Placeholder */}
            <div className="mt-8 pt-6 border-t-2 border-meshBlack flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white border-2 border-meshBlack flex items-center justify-center font-display font-black text-lg shadow-retro">
                  CSE
                </div>
                <div>
                  <span className="font-display font-bold text-sm text-meshBlack">
                    CSE DEPARTMENT LOGO
                  </span>
                  <span className="font-mono text-[10px] block text-meshGray">
                    /public/assets/cse-logo.svg
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* College Card */}
          <div className="card-playful p-8 bg-meshYellow/30 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs font-bold bg-meshBlack text-meshYellow px-2.5 py-1 border border-meshBlack">
                  HOST INSTITUTION
                </span>
                <Building2 className="w-6 h-6 text-meshBlack" />
              </div>

              <h3 className="font-display font-black text-2xl sm:text-3xl text-meshBlack leading-tight">
                {hackathon.organizer.college}
              </h3>

              <p className="mt-4 font-body text-sm font-medium text-meshBlack/80 leading-relaxed">
                SNS College of Engineering (Coimbatore) is a premier autonomous institution committed to technical innovation, vibrant campus life, state-of-the-art incubation infrastructure, and holistic education.
              </p>
            </div>

            {/* College Logo Placeholder */}
            <div className="mt-8 pt-6 border-t-2 border-meshBlack flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-meshYellow border-2 border-meshBlack flex items-center justify-center font-display font-black text-lg shadow-retro">
                  SNS
                </div>
                <div>
                  <span className="font-display font-bold text-sm text-meshBlack">
                    SNSCE COLLEGE LOGO
                  </span>
                  <span className="font-mono text-[10px] block text-meshGray">
                    /public/assets/snsce-logo.svg
                  </span>
                </div>
              </div>

              <a
                href={hackathon.organizer.collegeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white text-meshBlack border-2 border-meshBlack shadow-retro hover:bg-meshYellow transition-colors"
                aria-label="Visit SNSCE College Website"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Accreditation Banner */}
        <div className="card-playful p-6 bg-white flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Award className="w-8 h-8 text-meshYellow shrink-0 stroke-[2.5]" />
            <div>
              <span className="font-display font-extrabold text-base text-meshBlack">
                {hackathon.organizer.accreditation}
              </span>
              <span className="font-mono text-xs text-meshGray block">
                Coimbatore, Tamil Nadu, India
              </span>
            </div>
          </div>

          <div className="font-mono text-xs font-bold text-meshBlack bg-meshYellow px-3 py-1 border border-meshBlack">
            MINDMESH 2026 OFFICIAL HOST
          </div>
        </div>

      </div>
    </section>
  );
}
