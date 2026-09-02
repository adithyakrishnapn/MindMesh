import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Stats from "@/components/Stats";
import Challenge from "@/components/Challenge";
import Timeline from "@/components/Timeline";
import HowItWorks from "@/components/HowItWorks";
import TeamMesh from "@/components/TeamMesh";
import Prizes from "@/components/Prizes";
import Organizers from "@/components/Organizers";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-meshOffWhite text-meshBlack overflow-x-hidden selection:bg-meshYellow selection:text-meshBlack">
      <Navbar />
      <Hero />
      <About />
      <Stats />
      <Challenge />
      <Timeline />
      <HowItWorks />
      <TeamMesh />
      <Prizes />
      <Organizers />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
