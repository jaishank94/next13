import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";

const AnimatedNumbers = dynamic(
  () => {
    return import("react-animated-numbers");
  },
  { ssr: false }
);

const partnersList = [
  {
    metric: "Projects",
    value: "/images/partners-logo-1.png",
    postfix: "+",
  },
  {
    prefix: "~",
    metric: "Users",
    value: "/images/partners-logo-2.png",
  },
  {
    metric: "Awards",
    value: "/images/partners-logo-3.png",
  },
  {
    metric: "Years",
    value: "/images/partners-logo-4.png",
  },
  {
    metric: "Years",
    value: "/images/partners-logo-5.png",
  },
  {
    metric: "Years",
    value: "/images/partners-logo-6.png",
  },
  {
    metric: "Years",
    value: "/images/partners-logo-7.png",
  },
  {
    metric: "Years",
    value: "/images/partners-logo-8.png",
  },
  {
    metric: "Years",
    value: "/images/partners-logo-9.png",
  },
  {
    metric: "Years",
    value: "/images/partners-logo-10.png",
  },
];

const fetchPartnersData = async () => {
  try {
    const partnersData = await fetch(
      "https://newwebsite.clst.com/api/v1/partner/getAllPartner",
      {
        cache: "no-store",
      }
    );

    const mData = await partnersData.json();

    return {
      partnersData: mData.data,
    };
  } catch (error) {
    console.log("Failed to fetch", error);
  }
};

const PartnersSection = async () => {
  const partnersData = await fetchPartnersData();

  return (
    <div className="bg-white px-8 md:px-24">
      {/* <div className="py-12 lg:px-16 flex flex-col sm:flex-row items-center justify-between">
        {partnersList.map((achievement, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
            >
              <Image
                src={achievement.value}
                alt="hero image"
                className=""
                width={150}
                height={100}
              />
            </div>
          );
        })}
      </div> */}
      <div className="w-full py-8 lg:px-16 inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)">
        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
          {partnersData &&
            partnersData.partnersData.data.length > 0 &&
            partnersData.partnersData.data.map((partners, index) => {
              if (partners.isActive) {
                return (
                  <li
                    key={index}
                    className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
                  >
                    <Image
                      src={partners.imageUrl}
                      alt="hero image"
                      className=""
                      width={150}
                      height={100}
                    />
                  </li>
                );
              }
            })}
        </ul>
        <ul
          className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
          aria-hidden="true"
        >
          {partnersData &&
            partnersData.partnersData.data.length > 0 &&
            partnersData.partnersData.data.map((partners, index) => {
              if (partners.isActive) {
                return (
                  <li
                    key={index}
                    className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
                  >
                    <Image
                      src={partners.imageUrl}
                      alt="hero image"
                      className=""
                      width={150}
                      height={100}
                    />
                  </li>
                );
              }
            })}
        </ul>
      </div>
    </div>
  );
};

export default PartnersSection;
