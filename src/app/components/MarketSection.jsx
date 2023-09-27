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

const MarketSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="bg-gray-100 px-4 md:px-16" id="markets">
      <h2 className="pt-24 mb-4 flex justify-center text-black text-4xl  md:text-6xl font-medium">
        Markets
      </h2>
      {/* <hr class="w-28 h-0.5 mx-auto my-4 bg-black border-0 rounded md:my-10 dark:bg-gray-700"></hr> */}
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        {/* <Image src="/images/about-image.png" width={500} height={500} /> */}
        {/* <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-black mb-4">
            The story behind our company
          </h2>
          <p className="text-base text-black lg:text-lg">
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Redux, Node.js, Express, PostgreSQL,
            Sequelize, HTML, CSS, and Git. I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div> */}
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <hr class="w-28 h-0.5 my-4 bg-black border-0 rounded md:my-10"></hr>

          <h2 className="text-2xl md:text-4xl font-medium text-black mb-4">
            Private Credit
          </h2>
          <p className="text-sm md:text-base tracking-wide text-black font-light text-md text-gray-700 lg:text-lg">
            CLST Serves As A Catalyst For Private Credit Lending Opportunities.
            Through Rigorous Underwriting Services And A Deep Understanding Of
            Risk Dynamics, We Offer Curated Private Credit Channels That Are
            Aligned With Our Commitment To Transparency And Value Creation.
          </p>
        </div>
        <div className="mt-12 md:mt-4 md:mt-0 text-left flex flex-col h-full">
          <hr class="w-28 h-0.5 my-4 bg-black border-0 rounded md:my-10"></hr>

          <h2 className="text-2xl md:text-4xl font-medium text-black mb-4">
            Crypto Money Markets
          </h2>
          <p className="text-sm md:text-base tracking-wide text-black font-light text-md text-gray-700 lg:text-lg">
            Seamlessly Deploy Digital Capital Into Curated Credit Channels,
            Managed To Mitigate Risk. Drive Strategic Growth With Favorable
            Yields And Streamlined Operations, Bridging The Gap Between
            Institutional Borrowers And Lenders In The Crypto Financial
            Landscape.
          </p>
        </div>
      </div>
      <div className="bg-black text-white py-12" id="mission">
        <div className="pt-12 md:pt-24 flex flex-col px-8 md:px-16 text-4xl font-medium">
          <hr class="w-28 h-0.5 my-4 bg-white border-0 rounded md:my-10"></hr>
          <h2 className="text-4xl md:text-6xl font-medium">Our mission</h2>
          <p className="text-sm md:text-base font-light text-white lg:text-lg py-16 border-b-2 border-gray-500">
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

export default MarketSection;
