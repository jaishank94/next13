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
    <section
      className="group bg-[#f6f6f6] px-4 md:px-16 pb-24 hover:bg-black hover:text-white cursor-default transition duration-200 ease-in"
      id="mission"
    >
      {/* <section className=" bg-[#f6f6f6] px-4 md:px-16 pb-24 " id="mission"> */}
      <div className=" text-white py-28">
        <div className="pt-12 md:pt-24 flex flex-col px-4 lg:px-16 text-4xl font-medium">
          {/* <hr className="w-28 h-0.5 my-4 bg-white border-0 rounded md:my-10"></hr> */}
          <h2 className="text-4xl mb-4 md:text-6xl text-black font-medium group-hover:text-white">
            Mission
          </h2>
          <p className="mt-4 text-sm md:text-base text-gray-700 tracking-wide font-light  lg:text-lg py-16 group-hover:text-white">
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
