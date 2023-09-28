"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>Express</li>
        <li>PostgreSQL</li>
        <li>Sequelize</li>
        <li>JavaScript</li>
        <li>React</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Fullstack Academy of Code</li>
        <li>University of California, Santa Cruz</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>AWS Cloud Practitioner</li>
        <li>Google Professional Cloud Developer</li>
      </ul>
    ),
  },
];

const MissionSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="bg-gray-100 px-4 md:px-16 pb-24" id="mission">
      <div className="bg-black text-white py-28">
        <div className="pt-12 md:pt-24 flex flex-col px-8 md:px-16 text-4xl font-medium">
          {/* <hr className="w-28 h-0.5 my-4 bg-white border-0 rounded md:my-10"></hr> */}
          <h2 className="text-4xl md:text-6xl font-medium">Mission</h2>
          <p className="text-sm md:text-base text-gray-200 tracking-wide font-light  lg:text-lg py-16 border-b-2 border-gray-500">
            CLST connects institutional lenders and borrowers via curated,
            risk-managed credit channels, enabling the pursuit of
            yield-generating opportunities. As a peer-to-peer agent lending
            marketplace, CLST provides the tools and services to eliminate the
            information gap between lenders and borrowers in the digital asset
            space.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
