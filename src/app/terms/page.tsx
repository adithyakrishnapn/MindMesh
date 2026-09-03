"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { termsData, TermsSection } from "@/data/terms";
import AnimatedText from "@/components/ui/AnimatedText";
import { AlertTriangle, ShieldCheck, ChevronRight, FileText } from "lucide-react";

export default function TermsPage() {
  const [activeSectionId, setActiveSectionId] = useState<string>("accurate-information");

  useEffect(() => {
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSectionId(entry.target.id);
        }
      });
    };

    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: "-20% 0px -60% 0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    termsData.sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -90;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <main className="min-h-screen bg-meshOffWhite text-meshBlack overflow-x-hidden selection:bg-meshYellow selection:text-meshBlack relative">
      <Navbar />

      {/* Hero Header Section */}
      <section className="relative w-full pt-32 pb-16 bg-meshBlack text-white border-b-4 border-meshYellow overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern-light opacity-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 bg-meshYellow text-meshBlack font-mono font-black text-xs px-3 py-1 border border-white mb-4 uppercase tracking-widest">
                <ShieldCheck className="w-4 h-4" /> OFFICIAL EVENT GUIDELINES
              </div>

              <h1 className="font-display font-black text-5xl sm:text-7xl lg:text-8xl tracking-tight leading-none text-white">
                TERMS & <br />
                <span className="text-meshYellow drop-shadow-[4px_4px_0px_#FFFFFF]">
                  <AnimatedText text="CONDITIONS" />
                </span>
              </h1>

              <div className="mt-6 pt-4 border-t border-meshDarkGray">
                <p className="font-display font-bold text-xl text-meshYellow">
                  {termsData.subtitle}
                </p>
                <p className="font-mono text-xs text-meshGray mt-1 uppercase tracking-wider">
                  {termsData.organizer.department} • {termsData.organizer.college}
                </p>
              </div>
            </div>

            {/* Accent Badge Box */}
            <div className="card-playful-yellow p-6 bg-meshYellow text-meshBlack max-w-sm">
              <div className="flex items-center gap-2 font-display font-black text-lg mb-2">
                <FileText className="w-5 h-5" /> GUIDELINES NOTICE
              </div>
              <p className="font-body text-xs font-semibold leading-relaxed">
                Please read all event terms carefully. All registered teams must adhere to these policies during the 24-hour hackathon sprint.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Horizontal Pill Scroll Navigation */}
      <div className="lg:hidden sticky top-16 z-40 bg-meshBlack border-b-2 border-meshYellow py-3 px-4 overflow-x-auto no-scrollbar shadow-retro">
        <div className="flex items-center gap-2 whitespace-nowrap">
          {termsData.sections.map((sec) => {
            const isActive = activeSectionId === sec.id;
            return (
              <button
                key={sec.id}
                onClick={() => scrollToSection(sec.id)}
                className={`font-mono text-xs font-bold px-3 py-1.5 border transition-all ${
                  isActive
                    ? "bg-meshYellow text-meshBlack border-white"
                    : "bg-meshDarkGray text-meshGray border-meshDarkGray hover:text-white"
                }`}
              >
                {sec.num} {sec.title}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Content Grid: Sticky Sidebar + Legal Sections */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Desktop Sticky Scroll-Spy Sidebar */}
          <aside className="hidden lg:block lg:col-span-4 sticky top-24 self-start bg-white border-2 border-meshBlack shadow-retro p-6 max-h-[calc(100vh-120px)] overflow-y-auto no-scrollbar">
            <h3 className="font-display font-black text-xs uppercase tracking-widest text-meshGray mb-4 flex items-center justify-between border-b-2 border-meshBlack pb-2">
              <span>SECTION NAVIGATION</span>
              <span className="font-mono text-[10px] bg-meshYellow text-meshBlack px-2 py-0.5">
                {termsData.sections.length} CLAUSES
              </span>
            </h3>

            <nav className="space-y-1">
              {termsData.sections.map((sec) => {
                const isActive = activeSectionId === sec.id;
                return (
                  <button
                    key={sec.id}
                    onClick={() => scrollToSection(sec.id)}
                    className={`w-full text-left font-mono text-xs font-bold py-2.5 px-3 border transition-all flex items-center justify-between ${
                      isActive
                        ? "bg-meshYellow text-meshBlack border-meshBlack shadow-retro font-extrabold"
                        : "bg-transparent text-meshBlack/80 border-transparent hover:bg-meshOffWhite hover:border-meshBlack/30"
                    }`}
                  >
                    <span className="truncate pr-2">
                      <span className="mr-2 opacity-60">{sec.num}</span> {sec.title}
                    </span>
                    {isActive && <ChevronRight className="w-4 h-4 shrink-0 text-meshBlack stroke-[3]" />}
                  </button>
                );
              })}
            </nav>
          </aside>

          {/* Right Column: Terms Sections List */}
          <div className="lg:col-span-8 space-y-8">
            {termsData.sections.map((sec: TermsSection) => {
              const isActive = activeSectionId === sec.id;

              return (
                <article
                  key={sec.id}
                  id={sec.id}
                  className={`card-playful p-8 bg-white transition-all duration-300 ${
                    isActive ? "ring-4 ring-meshYellow/50 border-meshBlack" : ""
                  }`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-mono font-black text-sm bg-meshBlack text-meshYellow px-3 py-1 border border-meshBlack">
                      {sec.num}
                    </span>
                    <h2 className="font-display font-black text-2xl sm:text-3xl text-meshBlack uppercase">
                      {sec.title}
                    </h2>
                  </div>

                  <div className="space-y-3 pt-4 border-t-2 border-meshBlack/10">
                    {sec.content.map((paragraph, pIdx) => (
                      <p
                        key={pIdx}
                        className="font-body text-base font-medium text-meshBlack/90 leading-relaxed flex items-start gap-3"
                      >
                        <span className="w-2 h-2 rounded-full bg-meshYellow shrink-0 mt-2 border border-meshBlack" />
                        <span>{paragraph}</span>
                      </p>
                    ))}
                  </div>
                </article>
              );
            })}

            {/* Legal Disclaimer Box */}
            <div className="p-8 bg-meshYellow border-4 border-meshBlack shadow-retroLg flex flex-col sm:flex-row items-start gap-4">
              <AlertTriangle className="w-8 h-8 text-meshBlack shrink-0 stroke-[2.5]" />
              <div>
                <h3 className="font-display font-black text-xl text-meshBlack uppercase mb-1">
                  LEGAL DISCLAIMER & DRAFT NOTICE
                </h3>
                <p className="font-body text-sm font-bold text-meshBlack leading-relaxed">
                  "{termsData.disclaimer}"
                </p>
                <p className="font-mono text-xs text-meshBlack/80 mt-2">
                  Official final terms will be communicated by the SNSCE CSE Organizing Committee prior to event day.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
