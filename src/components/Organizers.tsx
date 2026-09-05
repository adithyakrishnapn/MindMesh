"use client";

import { hackathon } from "@/data/hackathon";
import AnimatedText from "@/components/ui/AnimatedText";
import { Building2, ExternalLink, Award, Sparkles, Rocket, Lightbulb } from "lucide-react";

export default function Organizers() {
  return (
    <section className="relative w-full py-24 bg-white border-b-4 border-meshBlack overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-dot-pattern opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="badge-sticker bg-[#00E5FF] text-black mb-3">
            INSTITUTIONAL LEADERSHIP
          </span>
          <h2 className="font-display font-black text-4xl sm:text-6xl text-meshBlack uppercase tracking-tight">
            <AnimatedText text="ORGANIZED BY" />
          </h2>
          <p className="mt-4 font-body text-base text-meshGray font-semibold">
            {hackathon.organizer.slogan}
          </p>
        </div>

        {/* Institutional Cards with Pop-Up Hover */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch mb-12">
          {/* Host College Card: SNS College of Technology */}
          <div className="card-playful p-8 bg-meshOffWhite flex flex-col justify-between transform hover:-translate-y-3 hover:scale-[1.02] hover:shadow-[12px_12px_0px_0px_#00E5FF] transition-all duration-200">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs font-bold bg-[#00E5FF] text-meshBlack px-2.5 py-1 border border-meshBlack">
                  HOST INSTITUTION
                </span>
                <Building2 className="w-6 h-6 text-meshBlack" />
              </div>

              <h3 className="font-display font-black text-2xl sm:text-3xl text-meshBlack leading-tight uppercase">
                {hackathon.organizer.college}
              </h3>

              <div className="my-2 font-mono text-xs font-black text-[#00E5FF] bg-black px-2 py-0.5 inline-block">
                {hackathon.campusName} • {hackathon.organizer.pincode}
              </div>

              <p className="mt-4 font-body text-sm font-medium text-meshBlack/80 leading-relaxed">
                SNS College of Technology (Autonomous) is a premier engineering institution in Coimbatore committed to disruptive technology, high-end computational infrastructure, and nurturing student entrepreneurs.
              </p>
            </div>

            {/* Accreditation Badge */}
            <div className="mt-8 pt-6 border-t-2 border-meshBlack flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white border-2 border-meshBlack flex items-center justify-center font-display font-black text-lg shadow-retro">
                  SNSCT
                </div>
                <div>
                  <span className="font-display font-bold text-sm text-meshBlack block">
                    SNS COLLEGE OF TECHNOLOGY
                  </span>
                  <span className="font-mono text-[10px] text-meshGray">
                    An Autonomous Institution • Coimbatore
                  </span>
                </div>
              </div>

              <a
                href={hackathon.organizer.collegeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white text-meshBlack border-2 border-meshBlack shadow-retro hover:bg-[#00E5FF] transition-colors"
                aria-label="Visit SNSCT Website"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Group Card: SNS Institutions */}
          <div className="card-playful p-8 bg-meshYellow/30 flex flex-col justify-between transform hover:-translate-y-3 hover:scale-[1.02] hover:shadow-[12px_12px_0px_0px_#111111] transition-all duration-200">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs font-bold bg-meshBlack text-meshYellow px-2.5 py-1 border border-meshBlack">
                  EDUCATION GROUP
                </span>
                <Sparkles className="w-6 h-6 text-meshBlack" />
              </div>

              <h3 className="font-display font-black text-2xl sm:text-3xl text-meshBlack leading-tight uppercase">
                {hackathon.organizer.groupName}
              </h3>

              <div className="my-2 font-mono text-xs font-bold text-meshBlack/80">
                www.snsgroups.com
              </div>

              <p className="mt-4 font-body text-sm font-medium text-meshBlack/80 leading-relaxed">
                Pioneering the revolutionary <strong>Design Thinking Framework</strong> across education and industry to transform common minds and businesses towards excellence.
              </p>

              {/* Accolades List from Poster */}
              <div className="mt-4 space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-meshBlack bg-white/70 p-2 border border-meshBlack/30">
                  <Rocket className="w-4 h-4 text-black shrink-0" />
                  <span>{hackathon.organizer.startupsMilestone}</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-meshBlack bg-white/70 p-2 border border-meshBlack/30">
                  <Lightbulb className="w-4 h-4 text-black shrink-0" />
                  <span>{hackathon.organizer.playbookSlogan}</span>
                </div>
              </div>
            </div>

            {/* Group Link */}
            <div className="mt-8 pt-6 border-t-2 border-meshBlack flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-meshYellow border-2 border-meshBlack flex items-center justify-center font-display font-black text-lg shadow-retro">
                  SNS
                </div>
                <div>
                  <span className="font-display font-bold text-sm text-meshBlack block">
                    SNS INSTITUTIONS
                  </span>
                  <span className="font-mono text-[10px] text-meshGray">
                    Design Thinking Framework
                  </span>
                </div>
              </div>

              <a
                href={hackathon.organizer.groupUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white text-meshBlack border-2 border-meshBlack shadow-retro hover:bg-meshYellow transition-colors"
                aria-label="Visit SNS Groups Website"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Accreditation & Slogan Banner from Poster */}
        <div className="card-playful p-6 bg-white flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Award className="w-8 h-8 text-[#00E5FF] shrink-0 stroke-[2.5]" />
            <div>
              <span className="font-display font-extrabold text-base text-meshBlack block">
                {hackathon.organizer.accreditation}
              </span>
              <span className="font-mono text-xs text-meshGray">
                {hackathon.organizer.frameworkTag}
              </span>
            </div>
          </div>

          <div className="font-mono text-xs font-bold text-meshBlack bg-[#00E5FF] px-3 py-1 border border-meshBlack">
            HACKNEXT'26 OFFICIAL HOST
          </div>
        </div>
      </div>
    </section>
  );
}
