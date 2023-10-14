import React from "react";
import Image from "next/image";
import Link from "next/link";

const fetchHeroData = async () => {
  try {
    const newsData = await fetch(
      "https://newwebsite.clst.com/api/v1/hero/get",
      {
        cache: "no-store",
      }
    );

    const mData = await newsData.json();

    if (mData.code !== 200) {
      console.log("Hero Error");
      return;
    }

    return {
      heroData: mData.data.length > 0 ? mData.data[0] : null,
    };
  } catch (error) {
    console.log("Failed to fetch", error);
  }
};

const HeroSection = async () => {
  const heroData = await fetchHeroData();

  return (
    <section className="bg-black px-8 md:px-24">
      <div className="grid grid-cols-1 sm:grid-cols-12 py-32 lg:py-12">
        <div className="col-span-8 place-self-center text-center sm:text-left justify-self-start">
          <h1 className="text-white mb-4 mt-12 text-4xl sm:text-4xl lg:text-7xl lg:leading-normal font-medium">
            <span className="">
              {heroData && heroData.heroData && heroData.heroData.title}{" "}
              <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-no-repeat bg-bottom bg-[length:100%_35px]">
                {heroData && heroData.heroData && heroData.heroData.highlighted}{" "}
              </span>
            </span>
            <br></br>
            {/* <TypeAnimation
              sequence={[
                "Judy",
                1000,
                "Web Developer",
                1000,
                "Mobile Developer",
                1000,
                "UI/UX Designer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            /> */}
          </h1>
          <p className="text-[#ADB7BE] text-lg mb-6">
            {heroData && heroData.heroData && heroData.heroData.description}{" "}
          </p>
          <div>
            {/* <Link
              href="/contact"
              className="px-10 inline-block py-5 w-full sm:w-fit rounded-full mr-4 bg-blue-600 hover:bg-white hover:text-blue-600 text-white"
            >
              Get Started {"->"}
            </Link> */}
            <Link
              href="/#requestDemo"
              className="px-1 inline-block py-4 w-full sm:w-fit "
            >
              <span className="block border-2 text-white border-white hover:bg-blue-600 hover:border-blue-600 rounded-full px-10 py-4">
                Request Access {"->"}
              </span>
            </Link>
          </div>
        </div>
        <div className="col-span-4 place-self-center mt-4 lg:mt-0">
          <div className="hidden md:block rounded-full w-[250px] h-[450px] lg:w-[400px] lg:h-[600px] relative">
            {/* <Image
              src="/images/hero-image.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={500}
              height={500}
            /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
