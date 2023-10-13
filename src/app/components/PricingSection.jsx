import React from "react";
import Image from "next/image";
import { BsCheck2 } from "react-icons/bs";
import { IoIosCheckmarkCircle } from "react-icons/io";

const TAB_DATA = [
  {
    title: "Self Service",
    id: "skills",
    content: [
      "Credit Marketplace",
      "Compliance Portal",
      "Tri Party Collateral Service",
    ],
  },
  {
    title: "Managed Service",
    id: "skills",
    content: [
      "Credit Marketplace",
      "Compliance Portal",
      "Tri Party Collateral Service",
      "Collateral and Excess Liquidity Rehype Strategies",
      "Risk Underwriting Services",
    ],
  },
];

const fetchServiceData = async () => {
  try {
    const newsData = await fetch(
      "https://newwebsite.clst.com/api/v1/service/getAllService",
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

const PricingSection = async () => {
  const serviceData = await fetchServiceData();

  return (
    <section
      className="flex flex-col antialiased text-gray-600 min-h-screen p-4 bg-[#f6f6f6]"
      id="services"
    >
      <div className="lg:pt-32 h-full">
        <div className="mt-8 px-4 lg:px-24 mx-auto" x-data="{ annual: true }">
          {/* <hr className="w-48 h-0.5  my-4 bg-black border-0 rounded lg:my-10"></hr> */}
          <h2 className="text-4xl lg:pl-0 md:text-6xl text-black font-medium mb-12">
            Our Services
          </h2>

          <div className="py-12 grid grid-cols-12 gap-6">
            {serviceData &&
              serviceData.serviceData &&
              serviceData.serviceData.map((service, index) => {
                if (service.isActive) {
                  return (
                    <div
                      key={index}
                      className="group relative col-span-full md:col-span-6 bg-[#f6f6f6] shadow-md rounded-sm hover:bg-black hover:text-white p-4 cursor-pointer transition duration-200 ease-in"
                    >
                      <div
                        className="absolute top-0 left-0 right-0 h-0.5 bg-black"
                        aria-hidden="true"
                      ></div>

                      <div className="px-5 pt-5 pb-6 border-b-2">
                        <header className="flex items-center mb-2">
                          {/* <div className="w-6 h-6 rounded-full flex-shrink-0 bg-gradient-to-tr from-green-500 to-green-300 mr-3">
                         <svg
                           className="w-6 h-6 fill-current text-white"
                           viewBox="0 0 24 24"
                         >
                           <path d="M12 17a.833.833 0 01-.833-.833 3.333 3.333 0 00-3.334-3.334.833.833 0 110-1.666 3.333 3.333 0 003.334-3.334.833.833 0 111.666 0 3.333 3.333 0 003.334 3.334.833.833 0 110 1.666 3.333 3.333 0 00-3.334 3.334c0 .46-.373.833-.833.833z" />
                         </svg>
                       </div> */}
                          <h3 className="text-3xl text-black font-semibold group-hover:text-white">
                            {service.title}
                          </h3>
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
                        <div className="text-xl text-black group-hover:text-white font-semibold mb-4">
                          {" What's included?"}
                        </div>

                        <ul>
                          {service.features &&
                            service.features.length &&
                            service.features.map((dt, k) => {
                              return (
                                <li className="flex items-center py-1" key={k}>
                                  {/* <svg
                           className="w-3 h-3 flex-shrink-0 fill-current text-blue-600 group-hover:text-white mr-2"
                           viewBox="0 0 12 12"
                         >
                           <path d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z" />
                         </svg> */}
                                  <IoIosCheckmarkCircle
                                    // color={"bg-blue-600 hover:bg-white"}
                                    className="mr-2 text-blue-600 group-hover:text-white"
                                    size={28}
                                  />
                                  <div className="text-md text-gray-600 font-normal group-hover:text-white">
                                    {dt}
                                  </div>
                                </li>
                              );
                            })}
                        </ul>
                      </div>
                    </div>
                  );
                }
              })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
