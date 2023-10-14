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
import News from "./components//News";

// Two arrays of objects
const dafaultArrangements = [
  { sectionName: <PartnersSection />, section: "partner", order: 0 },
  { sectionName: <MissionSection />, section: "mission", order: 1 },
  { sectionName: <MarketSection />, section: "market", order: 2 },
  { sectionName: <PricingSection />, section: "pricing", order: 3 },
  { sectionName: <TeamSection />, section: "team", order: 4 },
  { sectionName: <RequestAccess />, section: "requestaccess", order: 5 },
];

const fetchPageData = async () => {
  try {
    const pageData = await fetch(
      "https://newwebsite.clst.com/api/v1/arrangement/getAllArrangement",
      {
        cache: "no-store",
      }
    );

    const mData = await pageData.json();

    if (mData.code !== 200) {
      console.log("Page Error");
      return;
    }

    return {
      pageData:
        mData.data &&
        mData.data &&
        mData.data.data &&
        mData.data.data.length > 0
          ? mData.data.data
          : null,
    };
  } catch (error) {
    console.log("Failed to fetch", error);
  }
};

export default async function Home() {
  const pageData = await fetchPageData();

  let dataLayout = null;
  if (pageData.pageData) {
    // Create a map for faster lookups
    dataLayout = new Map(pageData.pageData.map((item) => [item.section, item]));

    // Sort the first array based on the order from the second array
    dafaultArrangements.sort(
      (a, b) =>
        dataLayout.get(a.section).order - dataLayout.get(b.section).order
    );
  }

  return (
    <main className="flex min-h-screen max-w-8xl flex-col w-full">
      <Navbar />
      <HeroSection />
      <News />
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
