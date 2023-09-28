"use client";
import React from "react";
import dynamic from "next/dynamic";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import EmailSection from "../components/EmailSection";
import Link from "next/link";

const AnimatedNumbers = dynamic(
  () => {
    return import("react-animated-numbers");
  },
  { ssr: false }
);

const achievementsList = [
  {
    metric: "Projects",
    value: "100",
    postfix: "+",
  },
  {
    prefix: "~",
    metric: "Users",
    value: "100,000",
  },
  {
    metric: "Awards",
    value: "7",
  },
  {
    metric: "Years",
    value: "5",
  },
];

export default function Legals() {
  return (
    <main className="flex min-h-screen flex-col w-full">
      <Navbar />
      <section className="bg-gray-100 px-4 md:px-16" id="markets">
        {/* <hr className="w-28 h-0.5 mx-auto my-4 bg-black border-0 rounded md:my-10 dark:bg-gray-700"></hr> */}
        <div className="md:grid md:grid-cols-3 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
          <div className="mt-4 md:mt-0 text-left flex flex-col h-full col-span-1">
            <ul className="flex flex-col">
              <li className="text-md cursor-pointer font-light">
                <hr className="w-28 h-0.5 my-4 bg-black border-0 rounded md:my-10"></hr>

                <Link
                  href={"/legals/#privacy"}
                  className="block py-2 pl-3 pr-4 text-black text-2xl font-medium rounded md:p-0 hover:text-[#ADB7BE]"
                >
                  Privacy Policy {"->"}
                </Link>
              </li>
              <li className="text-md cursor-pointer font-light">
                <hr className="w-28 h-0.5 my-4 bg-black border-0 rounded md:my-10"></hr>

                <Link
                  href={"/legals/#cookie"}
                  className="block py-2 pl-3 pr-4 text-black text-2xl font-medium rounded md:p-0 hover:text-[#ADB7BE]"
                >
                  Cookie Policy {"->"}
                </Link>
              </li>
              <li className="text-md cursor-pointer font-light">
                <hr className="w-28 h-0.5 my-4 bg-black border-0 rounded md:my-10"></hr>

                <Link
                  href={"/legals/#termsandconditions"}
                  className="block py-2 pl-3 pr-4 text-black text-2xl font-medium rounded md:p-0 hover:text-[#ADB7BE]"
                >
                  Terms and Conditions {"->"}
                </Link>
              </li>
            </ul>
          </div>
          <div className="mt-12 md:mt-4 md:mt-0 text-left flex flex-col h-full col-span-2">
            {/* <hr className="w-28 h-0.5 my-4 bg-black border-0 rounded md:my-10"></hr> */}

            <div id="privacy">
              <h2 className="text-2xl md:text-4xl font-medium text-black mb-4">
                Privacy Policy
              </h2>
              <p className="text-sm md:text-base tracking-wide text-black font-light text-md text-gray-700 lg:text-lg">
                Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua orci
                dapibus ultrices in iaculis nunc sed mauris ultrices eros in
                cursus turpis massa itae ultricies leo integer malesuada utrum
                tellus pellentesque eu tincidunt tortor aliquam nulla facilisi
                cras ibh mauris cursus mattis molestie a iaculis u non diam
                phasellus vestibulum lorem sed risus ultricies t malesuada fames
                ac turpis egestas maecenas pharetra convallis it amet volutpat
                consequat mauris nunc congue nisi vitae suscipit auris rhoncus
                aenean vel elit scelerisque mauris pellentesque gestas erat
                imperdiet sed euismod orem ipsum dolor sit amet consectetur
                adipiscing.
              </p>
            </div>
            <div id="cookie">
              <hr className="w-full h-0.5 mx-auto my-4 bg-gray-300 border-0 rounded md:my-10"></hr>

              <h2 className="text-2xl md:text-4xl font-medium text-black mb-4">
                Cookie Policy
              </h2>
              <p className="text-sm md:text-base tracking-wide text-black font-light text-md text-gray-700 lg:text-lg">
                Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua orci
                dapibus ultrices in iaculis nunc sed mauris ultrices eros in
                cursus turpis massa itae ultricies leo integer malesuada utrum
                tellus pellentesque eu tincidunt tortor aliquam nulla facilisi
                cras ibh mauris cursus mattis molestie a iaculis u non diam
                phasellus vestibulum lorem sed risus ultricies t malesuada fames
                ac turpis egestas maecenas pharetra convallis it amet volutpat
                consequat mauris nunc congue nisi vitae suscipit auris rhoncus
                aenean vel elit scelerisque mauris pellentesque gestas erat
                imperdiet sed euismod orem ipsum dolor sit amet consectetur
                adipiscing.
              </p>
            </div>
            <div id="termsandconditions">
              <hr className="w-full h-0.5 mx-auto my-4 bg-gray-300 border-0 rounded md:my-10"></hr>

              <h2 className="text-2xl md:text-4xl font-medium text-black mb-4">
                Terms and Conditions
              </h2>
              <p className="text-sm md:text-base tracking-wide text-black font-light text-md text-gray-700 lg:text-lg">
                Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua orci
                dapibus ultrices in iaculis nunc sed mauris ultrices eros in
                cursus turpis massa itae ultricies leo integer malesuada utrum
                tellus pellentesque eu tincidunt tortor aliquam nulla facilisi
                cras ibh mauris cursus mattis molestie a iaculis u non diam
                phasellus vestibulum lorem sed risus ultricies t malesuada fames
                ac turpis egestas maecenas pharetra convallis it amet volutpat
                consequat mauris nunc congue nisi vitae suscipit auris rhoncus
                aenean vel elit scelerisque mauris pellentesque gestas erat
                imperdiet sed euismod orem ipsum dolor sit amet consectetur
                adipiscing.
              </p>
            </div>
          </div>
        </div>
      </section>
      <EmailSection />
      <Footer />
    </main>
  );
}
