"use client";

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
import RequestAccess from "./components/RequestAccess";

// Two arrays of objects
const dafaultArrangements = [
  { sectionName: <PartnersSection />, type: "partner", order: 0 },
  { sectionName: <MissionSection />, type: "mission", order: 1 },
  { sectionName: <MarketSection />, type: "market", order: 2 },
  { sectionName: <PricingSection />, type: "pricing", order: 3 },
  { sectionName: <TeamSection />, type: "team", order: 4 },
  { sectionName: <RequestAccess />, type: "requestaccess", order: 5 },
];

const secondArray = [
  { type: "partner", order: 0 },
  { type: "mission", order: 1 },
  { type: "market", order: 2 },
  { type: "pricing", order: 3 },
  { type: "team", order: 4 },
  { type: "requestaccess", order: 5 },
];

// Create a map for faster lookups
const secondArrayMap = new Map(secondArray.map((item) => [item.type, item]));

// Sort the first array based on the order from the second array
dafaultArrangements.sort(
  (a, b) => secondArrayMap.get(a.type).order - secondArrayMap.get(b.type).order
);

console.log("dafaultArrangements", dafaultArrangements);

export default function Home() {
  return (
    <main className="flex min-h-screen max-w-8xl flex-col w-full">
      <Navbar />
      <HeroSection />
      <div className="">
        {dafaultArrangements.map((v, k) => {
          return <div key={k}>{v.sectionName}</div>;
        })}
        {/* 
        <PartnersSection />
        <MissionSection />
        <MarketSection />
        <PricingSection />
        <TeamSection />
        <RequestAccess />
         */}
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
