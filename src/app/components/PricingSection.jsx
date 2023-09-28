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

const PricingSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section
      className="flex flex-col justify-center antialiased text-gray-600 min-h-screen p-4 bg-black"
      id="services"
    >
      <div className="h-full">
        <div className="mt-8 max-w-5xl mx-auto" x-data="{ annual: true }">
          <h2 className="text-6xl text-black font-medium text-center text-white mb-12">
            Our Services
          </h2>
          <hr className="w-48 h-0.5 mx-auto my-4 bg-gray-300 border-0 rounded md:my-10"></hr>

          <div className="py-12 grid grid-cols-12 gap-6">
            <div className="relative col-span-full md:col-span-6 bg-black shadow-md rounded-sm border border-slate-800">
              <div
                className="absolute top-0 left-0 right-0 h-0.5 bg-green-500"
                aria-hidden="true"
              ></div>
              <div className="px-5 pt-5 pb-6 border-b border-slate-800">
                <header className="flex items-center mb-2">
                  <div className="w-6 h-6 rounded-full flex-shrink-0 bg-gradient-to-tr from-green-500 to-green-300 mr-3">
                    <svg
                      className="w-6 h-6 fill-current text-white"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17a.833.833 0 01-.833-.833 3.333 3.333 0 00-3.334-3.334.833.833 0 110-1.666 3.333 3.333 0 003.334-3.334.833.833 0 111.666 0 3.333 3.333 0 003.334 3.334.833.833 0 110 1.666 3.333 3.333 0 00-3.334 3.334c0 .46-.373.833-.833.833z" />
                    </svg>
                  </div>
                  <h3 className="text-3xl text-white font-semibold">Self</h3>
                </header>
                {/* <div className="text-sm mb-2">
                  Ideal for individuals that need a custom solution with custom
                  tools.
                </div> */}

                {/* <div className="text-gray-800 font-bold mb-4">
                  <span className="text-2xl">$</span>
                  <span className="text-3xl" x-text="annual ? '14' : '19'">
                    14
                  </span>
                  <span className="text-gray-500 font-medium text-sm">/mo</span>
                </div> */}

                {/* <button className="font-medium text-sm inline-flex items-center justify-center px-3 py-2 border border-gray-200 rounded leading-5 shadow-sm transition duration-150 ease-in-out focus:outline-none focus-visible:ring-2 hover:border-gray-300 text-gray-600 w-full">
                  Downgrade
                </button> */}
              </div>
              <div className="px-5 pt-4 pb-5">
                <div className="text-xl text-white font-normal mb-4">
                  {" What's included?"}
                </div>

                <ul>
                  <li className="flex items-center py-1">
                    <svg
                      className="w-3 h-3 flex-shrink-0 fill-current text-green-500 mr-2"
                      viewBox="0 0 12 12"
                    >
                      <path d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z" />
                    </svg>
                    <div className="text-md text-gray-200 font-light">
                      Credit Marketplace
                    </div>
                  </li>
                  <li className="flex items-center py-1">
                    <svg
                      className="w-3 h-3 flex-shrink-0 fill-current text-green-500 mr-2"
                      viewBox="0 0 12 12"
                    >
                      <path d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z" />
                    </svg>
                    <div className="text-md text-gray-200 font-light">
                      Compliance Portal
                    </div>
                  </li>
                  <li className="flex items-center py-1">
                    <svg
                      className="w-3 h-3 flex-shrink-0 fill-current text-green-500 mr-2"
                      viewBox="0 0 12 12"
                    >
                      <path d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z" />
                    </svg>
                    <div className="text-md text-gray-200 font-light">
                      Tri Party Collateral Service
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="relative col-span-full md:col-span-6 bg-black shadow-md rounded-sm border border-slate-800">
              <div
                className="absolute top-0 left-0 right-0 h-0.5 bg-blue-500"
                aria-hidden="true"
              ></div>
              <div className="px-5 pt-5 pb-6 border-b border-slate-800">
                <header className="flex items-center mb-2">
                  <div className="w-6 h-6 rounded-full flex-shrink-0 bg-gradient-to-tr from-blue-500 to-blue-300 mr-3">
                    <svg
                      className="w-6 h-6 fill-current text-white"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17a.833.833 0 01-.833-.833 3.333 3.333 0 00-3.334-3.334.833.833 0 110-1.666 3.333 3.333 0 003.334-3.334.833.833 0 111.666 0 3.333 3.333 0 003.334 3.334.833.833 0 110 1.666 3.333 3.333 0 00-3.334 3.334c0 .46-.373.833-.833.833z" />
                    </svg>
                  </div>
                  <h3 className="text-3xl text-white font-semibold">Managed</h3>
                </header>
                {/* <div className="text-sm mb-2">
                  Ideal for individuals that need a custom solution with custom
                  tools.
                </div> */}

                {/* <div className="text-gray-800 font-bold mb-4">
                  <span className="text-2xl">$</span>
                  <span className="text-3xl" x-text="annual ? '34' : '39'">
                    34
                  </span>
                  <span className="text-gray-500 font-medium text-sm">/mo</span>
                </div> */}

                {/* <button
                  className="font-medium text-sm inline-flex items-center justify-center px-3 py-2 border border-transparent rounded leading-5 shadow-sm transition duration-150 ease-in-out border-gray-200 focus:outline-none focus-visible:ring-2 bg-gray-100 text-gray-400 w-full cursor-not-allowed flex items-center"
                  disabled
                >
                  <svg
                    className="w-3 h-3 flex-shrink-0 fill-current mr-2"
                    viewBox="0 0 12 12"
                  >
                    <path d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z" />
                  </svg>
                  <span>Current Plan</span>
                </button> */}
              </div>
              <div className="px-5 pt-4 pb-5">
                <div className="text-xl text-white font-normal mb-4">
                  {"What's included?"}
                </div>

                <ul>
                  <li className="flex items-center py-1">
                    <svg
                      className="w-3 h-3 flex-shrink-0 fill-current text-green-500 mr-2"
                      viewBox="0 0 12 12"
                    >
                      <path d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z" />
                    </svg>
                    <div className="text-md text-gray-200 font-light">
                      Credit Marketplace
                    </div>
                  </li>
                  <li className="flex items-center py-1">
                    <svg
                      className="w-3 h-3 flex-shrink-0 fill-current text-green-500 mr-2"
                      viewBox="0 0 12 12"
                    >
                      <path d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z" />
                    </svg>
                    <div className="text-md text-gray-200 font-light">
                      Compliance Portal
                    </div>
                  </li>
                  <li className="flex items-center py-1">
                    <svg
                      className="w-3 h-3 flex-shrink-0 fill-current text-green-500 mr-2"
                      viewBox="0 0 12 12"
                    >
                      <path d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z" />
                    </svg>
                    <div className="text-md text-gray-200 font-light">
                      Tri Party Collateral Service
                    </div>
                  </li>
                  <li className="flex items-center py-1">
                    <svg
                      className="w-3 h-3 flex-shrink-0 fill-current text-green-500 mr-2"
                      viewBox="0 0 12 12"
                    >
                      <path d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z" />
                    </svg>
                    <div className="text-md text-gray-200 font-light">
                      Collateral and Excess Liquidity Rehype Strategies
                    </div>
                  </li>
                  <li className="flex items-center py-1">
                    <svg
                      className="w-3 h-3 flex-shrink-0 fill-current text-green-500 mr-2"
                      viewBox="0 0 12 12"
                    >
                      <path d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z" />
                    </svg>
                    <div className="text-md text-gray-200 font-light">
                      Risk Underwriting Services
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
