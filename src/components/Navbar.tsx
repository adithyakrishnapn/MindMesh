"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { hackathon } from "@/data/hackathon";
import MagneticButton from "@/components/ui/MagneticButton";
import { ArrowUpRight, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "ABOUT", href: "#about" },
    { name: "STATS", href: "#stats" },
    { name: "CHALLENGE", href: "#challenge" },
    { name: "TIMELINE", href: "#timeline" },
    { name: "TEAM MESH", href: "#team" },
    { name: "PRIZES", href: "#prizes" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md border-b-2 border-meshBlack py-3 shadow-sm"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo / Text */}
        <Link href="#" className="group flex items-center gap-2">
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
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-display font-bold text-xs tracking-wider uppercase text-meshBlack hover:text-meshYellow hover:bg-meshBlack px-2.5 py-1 transition-all border border-transparent hover:border-meshBlack"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden sm:flex items-center gap-3">
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
        <div className="flex sm:hidden items-center gap-2">
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
        <div className="sm:hidden bg-meshYellow border-b-4 border-meshBlack px-4 pt-4 pb-6 mt-3 flex flex-col gap-3 shadow-retroLg animate-in slide-in-from-top-2 duration-200">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="font-display font-extrabold text-base tracking-wider text-meshBlack py-2 border-b border-meshBlack/20 hover:pl-2 transition-all"
            >
              {link.name}
            </a>
          ))}
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
