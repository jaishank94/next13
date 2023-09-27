"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const serviceList = [
  {
    title: "Compliance Portal",
    description:
      "A digital tool for tracking and ensuring regulatory compliance in financial operations",
  },
  {
    title: "Risk Underwriting Services",
    description:
      "Services assessing and mitigating financial risks, often involving credit analysis and risk management",
  },
  {
    title: "Credit Marketplace",
    description:
      "A platform where financial institutions can lend and borrow credit, facilitating liquidity management",
  },
  {
    title: "Collateral and Excess Liquidity Rehype Strategies",
    description:
      "Strategies to optimize collateral and excess liquidity deployment in financial markets",
  },
  {
    title: "Tri Party Collateral Service",
    description:
      "A service managing collateral between three parties to support financial transactions securely",
  },
];

const ServiceSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="bg-white px-4 md:px-16 py-12" id="services">
      <div className=" md:grid md:grid-cols-3 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-28 xl:px-16">
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <hr class="w-28 h-0.5 my-4 bg-black border-0 rounded md:my-10"></hr>

          <h2 className="text-6xl font-medium text-black mb-4">Our Services</h2>
        </div>
        {serviceList.map((service, index) => {
          return (
            <div
              className="group mt-4 md:mt-0 text-left flex flex-col h-full hover:bg-black hover:text-white p-4 cursor-default transition duration-200 ease-in "
              key={index}
            >
              <hr class="w-12 h-0.5 my-4 bg-black border-0 rounded md:my-10 group-hover:bg-white"></hr>

              <h2 className="text-xl font-medium text-black mb-4 group-hover:text-white">
                {service.title}
              </h2>
              <p className="text-sm text-black font-light text-md text-gray-700 lg:text-lg group-hover:text-white">
                {service.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ServiceSection;
