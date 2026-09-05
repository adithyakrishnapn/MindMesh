"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { hackathon } from "@/data/hackathon";
import MagneticButton from "@/components/ui/MagneticButton";
import { ArrowUpRight, Menu, X, ArrowLeft, FileText, QrCode } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const isTermsPage = pathname === "/terms";

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("about");

  // Nav items configuration
  const navLinks = [
    { name: "ABOUT", href: "#about", id: "about" },
    { name: "EXPECT", href: "#expect", id: "expect" },
    { name: "DOMAINS", href: "#challenge", id: "challenge" },
    { name: "SCHEDULE", href: "#timeline", id: "timeline" },
    { name: "PRIZES", href: "#prizes", id: "prizes" },
    { name: "REGISTER & QR", href: "#register", id: "register" },
    { name: "CONTACT", href: "#coordinators", id: "coordinators" },
    { name: "TERMS", href: "#terms", id: "terms" },
  ];

  // Scroll detection & IntersectionObserver for active section tracking
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 250
      ) {
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
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (isTermsPage) return;
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
          ? "bg-white/95 backdrop-blur-md border-b-2 border-meshBlack py-3 shadow-sm"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo / Text */}
        <Link href="/" className="group flex items-center gap-2">
          <div className="w-8 h-8 bg-[#00E5FF] border-2 border-meshBlack flex items-center justify-center font-display font-black text-black text-sm shadow-retro group-hover:rotate-6 transition-transform">
            AI
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-display font-black text-xl tracking-tight text-meshBlack leading-none">
                {hackathon.name}
              </span>
              <span className="text-[9px] font-mono font-black bg-[#FFD21F] text-black px-1.5 py-0.5 border border-black leading-none">
                {hackathon.edition}
              </span>
            </div>
            <span className="font-mono text-[9px] font-bold text-meshGray tracking-widest leading-none mt-1 uppercase">
              SNS COLLEGE OF TECHNOLOGY
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        {!isTermsPage ? (
          <nav className="hidden xl:flex items-center gap-1.5">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;

              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`font-display font-extrabold text-[11px] tracking-wider uppercase px-2.5 py-1.5 transition-all border ${
                    isActive
                      ? "bg-[#00E5FF] text-meshBlack border-meshBlack shadow-retro scale-105"
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
              <ArrowLeft className="w-4 h-4" /> BACK TO HACKNEXT'26
            </Link>

            <span className="badge-sticker bg-[#00E5FF] text-meshBlack border-meshBlack text-xs">
              TERMS & CONDITIONS
            </span>
          </div>
        )}

        {/* Right Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          {!isTermsPage && (
            <a
              href="#register"
              className="font-mono text-xs font-bold uppercase text-meshBlack hover:text-white hover:bg-meshBlack px-2.5 py-1.5 border border-meshBlack/30 transition-all flex items-center gap-1"
            >
              <QrCode className="w-3.5 h-3.5" /> SCAN QR
            </a>
          )}

          <MagneticButton
            href="#register"
            className="text-xs px-4 py-2.5 bg-meshBlack text-[#00E5FF] hover:bg-[#00E5FF] hover:text-black"
          >
            REGISTER NOW (₹550) <ArrowUpRight className="w-4 h-4" />
          </MagneticButton>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="flex xl:hidden items-center gap-2">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 bg-[#00E5FF] border-2 border-meshBlack shadow-retro focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-meshBlack" />
            ) : (
              <Menu className="w-6 h-6 text-meshBlack" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <div className="xl:hidden bg-meshOffWhite border-b-4 border-meshBlack px-4 pt-4 pb-6 mt-3 flex flex-col gap-2 shadow-retroLg animate-in slide-in-from-top-2 duration-200">
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
                        ? "bg-[#00E5FF] text-meshBlack border-meshBlack shadow-retro"
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
              className="font-display font-black text-sm uppercase bg-meshBlack text-[#00E5FF] p-3 border-2 border-meshBlack shadow-retro flex items-center justify-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" /> BACK TO HACKNEXT'26 HOMEPAGE
            </Link>
          )}

          <div className="pt-2">
            <a
              href="#register"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2 font-display font-bold text-sm uppercase text-meshBlack bg-[#00E5FF] border-2 border-meshBlack py-3 shadow-retro"
            >
              REGISTER NOW (₹550) <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
