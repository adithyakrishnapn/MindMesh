"use client";

import { useState } from "react";
import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Stats from "@/components/Stats";
import WhatToExpect from "@/components/WhatToExpect";
import Challenge from "@/components/Challenge";
import RegistrationQR from "@/components/RegistrationQR";
import Timeline from "@/components/Timeline";
import HowItWorks from "@/components/HowItWorks";
import TeamMesh from "@/components/TeamMesh";
import Prizes from "@/components/Prizes";
import Organizers from "@/components/Organizers";
import Coordinators from "@/components/Coordinators";
import TermsAndConditions from "@/components/TermsAndConditions";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  const [preloaderFinished, setPreloaderFinished] = useState(false);

  return (
    <main className="min-h-screen bg-meshOffWhite text-meshBlack overflow-x-hidden selection:bg-[#00E5FF] selection:text-black relative">
      <Preloader onComplete={() => setPreloaderFinished(true)} />

      <Navbar />
      <Hero />
      <About />
      <Stats />
      <WhatToExpect />
      <Challenge />
      <RegistrationQR />
      <Timeline />
      <HowItWorks />
      <TeamMesh />
      <Prizes />
      <Organizers />
      <Coordinators />
      <TermsAndConditions />
      <FinalCTA />
      <Footer />
    </main>
  );
}
