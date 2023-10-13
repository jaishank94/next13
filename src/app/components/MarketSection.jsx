import React from "react";
import Image from "next/image";
import parse from "html-react-parser";

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

const fetchMarketData = async () => {
  try {
    const marketData = await fetch(
      "https://newwebsite.clst.com/api/v1/market/getAllMarket",
      {
        cache: "no-store",
      }
    );

    const mData = await marketData.json();

    return {
      marketData: mData.data,
    };
  } catch (error) {
    console.log("Failed to fetch", error);
  }
};

const MarketSection = async () => {
  const marketData = await fetchMarketData();

  return (
    <section className="bg-white px-4 md:px-16 md:pb-24 pt-24" id="markets">
      <h2 className="pt-24 mb-4 flex text-black text-4xl pl-4 lg:pl-14 md:text-6xl font-medium">
        Markets
      </h2>
      {/* <hr className="w-28 h-0.5 mx-auto my-4 bg-black border-0 rounded md:my-10 dark:bg-gray-700"></hr> */}
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        {/* <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <hr className="w-28 h-0.5 my-4 bg-black border-0 rounded md:my-10"></hr>

          <h2 className="text-xl md:text-2xl font-medium text-black mb-4">
            Private Credit
          </h2>
          <p className="text-md tracking-wide text-gray-600 font-light">
            CLST serves as a catalyst for private credit lending opportunities.
            Through rigorous underwriting services and a deep understanding of
            risk dynamics, we offer curated private credit channels that are
            aligned with our commitment to transparency and value creation.
          </p>
        </div> */}
        {/* <div className="group mt-4 md:mt-0 text-left flex flex-col h-full hover:bg-black hover:text-white p-4 cursor-pointer transition duration-200 ease-in">
          <hr className="w-28 h-0.5 my-4 bg-black border-0 rounded md:my-10 group-hover:bg-white"></hr>

          <h2 className="text-xl md:text-2xl font-medium text-black mb-4 group-hover:text-white">
            Corporate Credit
          </h2>
          <p className="text-md tracking-wide text-gray-600 font-light group-hover:text-white">
            CLST serves as a catalyst for private credit lending opportunities.
            Through rigorous underwriting services and a deep understanding of
            risk dynamics, we offer curated private credit channels that are
            aligned with our commitment to transparency and value creation.
          </p>
        </div> */}
        {/* <div className="group mt-4 md:mt-0 text-left flex flex-col h-full hover:bg-black hover:text-white p-4 cursor-pointer transition duration-200 ease-in">
          <hr className="w-28 h-0.5 my-4 bg-black border-0 rounded md:my-10 group-hover:bg-white"></hr>

          <h2 className="text-xl md:text-2xl font-medium text-black mb-4 group-hover:text-white">
            Capital Markets Credit
          </h2>
          <p className="text-md tracking-wide text-gray-600 font-light group-hover:text-white">
            Seamlessly deploy digital capital into curated credit channels,
            managed to mitigate risk. Drive strategic growth with favorable
            yields and streamlined operations, bridging the gap between
            institutional borrowers and lenders in the crypto financial
            landscape.
          </p>
        </div> */}
        {marketData &&
          marketData.marketData.data.length > 0 &&
          marketData.marketData.data.map((market, index) => {
            if (market.isActive) {
              return (
                <div
                  key={index}
                  className="group mt-4 md:mt-0 text-left flex flex-col h-full hover:bg-black hover:text-white p-4 cursor-pointer transition duration-200 ease-in"
                >
                  <hr className="w-28 h-0.5 my-4 bg-black border-0 rounded md:my-10 group-hover:bg-white"></hr>

                  <h2 className="text-xl md:text-2xl font-medium text-black mb-4 group-hover:text-white">
                    {market.title}
                  </h2>
                  <p className="text-md tracking-wide text-gray-600 font-light group-hover:text-white">
                    {parse(market.description)}
                  </p>
                </div>
              );
            }
          })}
      </div>
    </section>
  );
};

export default MarketSection;
