"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { hackathon } from "@/data/hackathon";
import MagneticButton from "@/components/ui/MagneticButton";
import { ArrowUpRight, Menu, X, ArrowLeft, FileText } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const isTermsPage = pathname === "/terms";

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("about");

  // Nav items configuration
  const navLinks = [
    { name: "ABOUT", href: "#about", id: "about" },
    { name: "STATS", href: "#stats", id: "stats" },
    { name: "CHALLENGE", href: "#challenge", id: "challenge" },
    { name: "TIMELINE", href: "#timeline", id: "timeline" },
    { name: "HOW IT WORKS", href: "#how-it-works", id: "how-it-works" },
    { name: "TEAM MESH", href: "#team", id: "team" },
    { name: "PRIZES", href: "#prizes", id: "prizes" },
    { name: "TERMS", href: "#terms", id: "terms" },
  ];

  // Scroll detection & IntersectionObserver for active section tracking
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
      
      // Bottom of page fallback for terms section
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 250) {
        setActiveSection("terms");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    if (isTermsPage) return () => window.removeEventListener("scroll", handleScroll);

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: "-10% 0px -30% 0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    navLinks.forEach((link) => {
      const el = document.getElementById(link.id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, [isTermsPage]);

  // Smooth scroll handler with offset for sticky navbar height
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (isTermsPage) return; // Allow normal link navigation from /terms
    e.preventDefault();
    const targetId = href.replace("#", "");
    setActiveSection(targetId);
    const element = document.getElementById(targetId);

    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isTermsPage
          ? "bg-white/90 backdrop-blur-md border-b-2 border-meshBlack py-3 shadow-sm"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo / Text */}
        <Link href="/" className="group flex items-center gap-2">
          <div className="w-8 h-8 bg-meshYellow border-2 border-meshBlack flex items-center justify-center font-display font-black text-meshBlack text-lg shadow-retro group-hover:rotate-6 transition-transform">
            M
          </div>
          <div className="flex flex-col">
            <span className="font-display font-black text-xl tracking-tight text-meshBlack leading-none">
              {hackathon.name}
            </span>
            <span className="font-mono text-[10px] font-bold text-meshGray tracking-widest leading-none mt-0.5">
              SNSCE CSE
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        {!isTermsPage ? (
          <nav className="hidden xl:flex items-center gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;

              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`font-display font-extrabold text-[11px] tracking-wider uppercase px-2.5 py-1.5 transition-all border ${
                    isActive
                      ? "bg-meshYellow text-meshBlack border-meshBlack shadow-retro scale-105"
                      : "text-meshBlack hover:bg-meshBlack hover:text-white border-transparent"
                  }`}
                >
                  {isActive ? `[ ${link.name} ]` : link.name}
                </a>
              );
            })}
          </nav>
        ) : (
          <div className="hidden sm:flex items-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 font-display font-bold text-xs uppercase bg-white text-meshBlack px-4 py-2 border-2 border-meshBlack shadow-retro hover:bg-meshYellow transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> BACK TO MINDMESH
            </Link>

            <span className="badge-sticker bg-meshYellow text-meshBlack border-meshBlack text-xs">
              TERMS & CONDITIONS
            </span>
          </div>
        )}

        {/* Right Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          {!isTermsPage && (
            <Link
              href="/terms"
              className="font-mono text-xs font-bold uppercase text-meshBlack hover:text-meshYellow hover:bg-meshBlack px-2.5 py-1.5 border border-meshBlack/30 transition-all flex items-center gap-1"
            >
              <FileText className="w-3.5 h-3.5" /> TERMS
            </Link>
          )}

          <MagneticButton
            href={hackathon.registrationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs px-4 py-2.5"
          >
            REGISTER NOW <ArrowUpRight className="w-4 h-4" />
          </MagneticButton>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="flex xl:hidden items-center gap-2">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 bg-meshYellow border-2 border-meshBlack shadow-retro focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6 text-meshBlack" /> : <Menu className="w-6 h-6 text-meshBlack" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <div className="xl:hidden bg-meshYellow border-b-4 border-meshBlack px-4 pt-4 pb-6 mt-3 flex flex-col gap-2 shadow-retroLg animate-in slide-in-from-top-2 duration-200">
          {!isTermsPage ? (
            <>
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;

                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`font-display font-black text-sm tracking-wider uppercase py-2 px-3 border transition-all ${
                      isActive
                        ? "bg-meshBlack text-meshYellow border-meshBlack shadow-retro"
                        : "text-meshBlack border-transparent hover:pl-4"
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
              <Link
                href="/terms"
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-display font-bold text-sm tracking-wider uppercase text-meshBlack py-2 px-3 border-t border-meshBlack/20 mt-2 flex items-center gap-2"
              >
                <FileText className="w-4 h-4" /> TERMS & CONDITIONS
              </Link>
            </>
          ) : (
            <Link
              href="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="font-display font-black text-sm uppercase bg-meshBlack text-meshYellow p-3 border-2 border-meshBlack shadow-retro flex items-center justify-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" /> BACK TO MINDMESH HOMEPAGE
            </Link>
          )}

          <div className="pt-2">
            <a
              href={hackathon.registrationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 font-display font-bold text-sm uppercase text-meshWhite bg-meshBlack border-2 border-meshBlack py-3 shadow-retro"
            >
              REGISTER NOW <ArrowUpRight className="w-4 h-4 text-meshYellow" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
