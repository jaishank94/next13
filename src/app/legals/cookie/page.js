import React from "react";
import dynamic from "next/dynamic";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import EmailSection from "../../components/EmailSection";
import Link from "next/link";
import parse from "html-react-parser";

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

const allData = async () => {
  try {
    const cookieData = await fetch(
      "https://newwebsite.clst.com/api/v1/cookiepolicy/get",
      {
        cache: "no-store",
      }
    );

    const cData = await cookieData.json();

    return {
      cookie: cData,
    };
  } catch (error) {
    console.log("Failed to fetch", error);
  }
};

export default async function Legals() {
  const data = await allData();

  return (
    <>
      <main className="flex min-h-screen flex-col w-full">
        {/* <Navbar /> */}
        <section className="bg-gray-100 px-4 md:px-16 py-24" id="markets">
          {/* <hr className="w-28 h-0.5 mx-auto my-4 bg-black border-0 rounded md:my-10 dark:bg-gray-700"></hr> */}

          <div className="md:grid md:grid-cols-3 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
            <div className="mt-4 md:mt-0 text-left flex flex-col h-full col-span-1 left-0 relative">
              {/* Content of the fixed sidebar */}

              <ul className="flex flex-col">
                <div className="py-8">
                  <Link
                    rel="stylesheet"
                    href="/"
                    className="text-black hover:underline"
                  >
                    {"<-"} Back to home
                  </Link>
                </div>

                <li className="text-md cursor-pointer font-light">
                  <hr className="w-28 h-0.5 my-4 bg-black border-0 rounded md:my-10"></hr>
                  <Link
                    href={""}
                    className="block py-2 pl-3 pr-4 text-black text-2xl font-medium rounded md:p-0"
                  >
                    Cookie Policy {"->"}
                  </Link>
                </li>
              </ul>
            </div>
            <div className="mt-12 md:mt-4 md:mt-0 text-left flex flex-col h-full col-span-2">
              {/* Content of the main section */}

              <div id="cookie sticky top-0 ">
                <hr className="w-full h-0.5 mx-auto my-4 bg-gray-300 border-0 rounded md:my-10"></hr>
                <h2 className="text-2xl md:text-4xl font-medium text-black mb-4">
                  Cookie Policy
                </h2>
                <div className="text-black break-normal tracking-wide leading-loose">
                  {data &&
                    data.cookie &&
                    data.cookie.data.length > 0 &&
                    parse(data.cookie.data[0].html)}
                </div>
              </div>
            </div>
          </div>
        </section>
        <EmailSection />
        <Footer />
      </main>
    </>
  );
}
