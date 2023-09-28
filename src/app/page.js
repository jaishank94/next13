import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import PartnersSection from "./components/PartnersSection";
import MarketSection from "./components/MarketSection";
import ServiceSection from "./components/ServiceSection";
import PricingSection from "./components/PricingSection";
import TeamSection from "./components/TeamSection";
import MissionSection from "./components/MissionSection";

export default function Home() {
  return (
    <main className="flex min-h-screen max-w-8xl flex-col w-full">
      <Navbar />
      <div className="">
        <HeroSection />
        <PartnersSection />
        <MarketSection />
        <MissionSection />
        {/* <ServiceSection /> */}
        <PricingSection />
        <TeamSection />
        {/* <AboutSection /> */}
        {/* <ProjectsSection /> */}
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
