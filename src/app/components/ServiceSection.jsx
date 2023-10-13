import React from "react";
import Image from "next/image";

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

const fetchServiceData = async () => {
  try {
    const newsData = await fetch(
      "https://newwebsite.clst.com/api/v1/mission/get",
      {
        cache: "no-store",
      }
    );

    const mData = await newsData.json();

    if (mData.code !== 200) {
      console.log("Mission Error");
      return;
    }

    return {
      serviceData:
        mData.data && mData.data.data && mData.data.data.length > 0
          ? mData.data.data
          : null,
    };
  } catch (error) {
    console.log("Failed to fetch", error);
  }
};

const ServiceSection = async () => {
  const serviceData = await fetchServiceData();

  return (
    <section className="bg-white px-4 md:px-16 py-12" id="services">
      <div className=" md:grid md:grid-cols-3 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-28 xl:px-16">
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <hr className="w-28 h-0.5 my-4 bg-black border-0 rounded md:my-10"></hr>

          <h2 className="text-6xl font-medium text-black mb-4">Our Services</h2>
        </div>
        {serviceData &&
          serviceData.serviceData &&
          serviceData.serviceData.map((service, index) => {
            return (
              <div
                className="group mt-4 md:mt-0 text-left flex flex-col h-full hover:bg-black hover:text-white p-4 cursor-default transition duration-200 ease-in "
                key={index}
              >
                <hr className="w-12 h-0.5 my-4 bg-black border-0 rounded md:my-10 group-hover:bg-white"></hr>

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
