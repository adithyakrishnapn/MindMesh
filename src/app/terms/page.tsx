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
    <main className="min-h-screen bg-meshOffWhite text-meshBlack overflow-x-hidden selection:bg-[#00E5FF] selection:text-meshBlack relative">
      <Navbar />

      {/* Hero Header Section */}
      <section className="relative w-full pt-32 pb-16 bg-[#0A0E1A] text-white border-b-4 border-[#00E5FF] overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern-light opacity-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#00E5FF] text-black font-mono font-black text-xs px-3 py-1 border border-white mb-4 uppercase tracking-widest">
                <ShieldCheck className="w-4 h-4" /> OFFICIAL EVENT GUIDELINES
              </div>

              <h1 className="font-display font-black text-5xl sm:text-7xl lg:text-8xl tracking-tight leading-none text-white uppercase">
                TERMS & <br />
                <span className="text-[#00E5FF] drop-shadow-[4px_4px_0px_#FFFFFF]">
                  <AnimatedText text="CONDITIONS" />
                </span>
              </h1>

              <div className="mt-6 pt-4 border-t border-gray-800">
                <p className="font-display font-bold text-xl text-[#FFD21F]">
                  {termsData.subtitle}
                </p>
                <p className="font-mono text-xs text-gray-400 mt-1 uppercase tracking-wider">
                  {termsData.organizer.college} • {termsData.organizer.campus} • {termsData.organizer.dates}
                </p>
              </div>
            </div>

            {/* Accent Badge Box */}
            <div className="card-playful p-6 bg-[#00E5FF] text-black max-w-sm border-2 border-white shadow-[6px_6px_0px_0px_#FFFFFF]">
              <div className="flex items-center gap-2 font-display font-black text-lg mb-2">
                <FileText className="w-5 h-5" /> GUIDELINES NOTICE
              </div>
              <p className="font-body text-xs font-bold leading-relaxed">
                External participant fee: {termsData.organizer.fee}. All registered teams must adhere to event policies throughout the 24-hour sprint.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Horizontal Pill Scroll Navigation */}
      <div className="lg:hidden sticky top-16 z-40 bg-[#0A0E1A] border-b-2 border-[#00E5FF] py-3 px-4 overflow-x-auto no-scrollbar shadow-retro">
        <div className="flex items-center gap-2 whitespace-nowrap">
          {termsData.sections.map((sec) => {
            const isActive = activeSectionId === sec.id;
            return (
              <button
                key={sec.id}
                onClick={() => scrollToSection(sec.id)}
                className={`font-mono text-xs font-bold px-3 py-1.5 border transition-all ${
                  isActive
                    ? "bg-[#00E5FF] text-black border-white"
                    : "bg-gray-800 text-gray-400 border-gray-700 hover:text-white"
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
              <span className="font-mono text-[10px] bg-[#00E5FF] text-black px-2 py-0.5">
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
                        ? "bg-[#00E5FF] text-meshBlack border-meshBlack shadow-retro font-extrabold"
                        : "bg-transparent text-meshBlack/80 border-transparent hover:bg-meshOffWhite hover:border-meshBlack/30"
                    }`}
                  >
                    <span className="truncate pr-2">
                      <span className="mr-2 opacity-60">{sec.num}</span> {sec.title}
                    </span>
                    {isActive && (
                      <ChevronRight className="w-4 h-4 shrink-0 text-meshBlack stroke-[3]" />
                    )}
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
                    isActive ? "ring-4 ring-[#00E5FF]/50 border-meshBlack" : ""
                  }`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-mono font-black text-sm bg-meshBlack text-[#00E5FF] px-3 py-1 border border-meshBlack">
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
                        <span className="w-2 h-2 rounded-full bg-[#00E5FF] shrink-0 mt-2 border border-meshBlack" />
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
                  OFFICIAL EVENT POLICY
                </h3>
                <p className="font-body text-sm font-bold text-meshBlack leading-relaxed">
                  "{termsData.disclaimer}"
                </p>
                <p className="font-mono text-xs text-meshBlack/80 mt-2">
                  Official inquiries can be directed to the student coordinators: Gugan KM (9361278375) or Akshaya S (9894906986).
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
