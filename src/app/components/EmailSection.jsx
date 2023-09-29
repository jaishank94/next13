import React from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";
import { BsLinkedin, BsMedium, BsTwitter, BsCircle } from "react-icons/bs";
import NavLink from "./NavLink";

const navLinks = [
  {
    title: "Mission",
    path: "/#mission",
  },
  {
    title: "Markets",
    path: "/#markets",
  },
  {
    title: "Services",
    path: "/#services",
  },
  {
    title: "Team",
    path: "/#team",
  },
];

const EmailSection = () => {
  return (
    <section id="contact" className="px-12 md:px-24 py-12 relative bg-black">
      <div className="">
        {/* <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div> */}
        <div className="w-full z-10 pt-12 flex flex-row items-center justify-between">
          {/* <h5 className="text-xl font-bold text-white my-2">
          Let`&apos;s Connect
        </h5> */}

          <Link
            href={"/"}
            className="flex flex-row text-lg items-center md:text-2xl text-white"
          >
            <div>
              <div className="flex flex-row items-center">
                <div className="">
                  {/* <Image
                    src="/images/logo.png"
                    alt="hero image"
                    className=""
                    width={30}
                    height={30}
                  />{" "} */}
                  {/* <BsCircle color="white" /> */}
                </div>

                <span className="font-semibold text-lg md:text-3xl">CLST</span>
              </div>
              <p className="w-60 md:w-full text-[#ADB7BE] text-sm mb-4  mt-4 break-normal">
                The Institutional Credit Liquidity Hub For Digital Assets
              </p>
            </div>
          </Link>
          <div className="socials flex flex-row gap-4">
            <Link href="https://twitter.com/CLSTofficial" target="_blank">
              {/* <Image src={GithubIcon} alt="Github Icon" /> */}
              <BsTwitter size={20} color={"white"} />
            </Link>
            <Link href="https://www.linkedin.com/company/clst/" target="_blank">
              {/* <Image src={LinkedinIcon} alt="Linkedin Icon" /> */}
              <BsLinkedin size={20} color={"white"} />
            </Link>
            <Link href="https://medium.com/@CLSTofficial" target="_blank">
              {/* <Image src={LinkedinIcon} alt="Linkedin Icon" /> */}
              <BsMedium size={20} color={"white"} />
            </Link>
          </div>
        </div>
        <div className="pt-4 flex flex-col md:flex-row justify-between">
          <div className="">
            {/* <span className="text-gray-400 uppercase font-semibold">Legal</span> */}
            <ul className="flex flex-row gap-4">
              <li className="text-md cursor-pointer font-light">
                <Link
                  // href={"/legals/#privacy"}
                  href="#"
                  className="text-white"
                  // className="block py-2 pl-3 pr-4 text-white font-light rounded md:p-0 hover:text-[#ADB7BE]"
                >
                  Privacy Policy
                </Link>
              </li>
              <li className="mx-2 text-md cursor-pointer font-light">
                <Link
                  // href={"/legals/#cookie"}
                  href="#"
                  className="text-white"

                  // className="block py-2 pl-3 pr-4 text-white font-light rounded md:p-0 hover:text-[#ADB7BE]"
                >
                  Cookie Policy
                </Link>
              </li>
              <li className="mx-2 text-md cursor-pointer font-light">
                <Link
                  // href={"/legals/#termsandconditions"}
                  href="#"
                  className="text-white"

                  // className="block py-2 pl-3 pr-4 text-white font-light rounded md:p-0 hover:text-[#ADB7BE]"
                >
                  Terms and Conditions
                </Link>
              </li>
            </ul>
          </div>
          <div className="" id="navbar">
            {/* <span className="text-gray-400 uppercase font-semibold">
              Company
            </span> */}

            <div className="flex flex-row items-center justify-center">
              <ul className="flex p-4 md:p-0 flex-row md:space-x-8 mt-0">
                {navLinks.map((link, index) => (
                  <li key={index}>
                    <NavLink href={link.path} title={link.title} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        {/* <div className="z-10 mt-12 md:mt-0">
          <form className="flex flex-col">
            <div className="mb-6">
              <input
                type="text"
                id="email"
                required
                className="bg-black border-b-2 border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-xl block w-full p-2.5"
                placeholder="Name"
              />
            </div>
            <div className="mb-6">
              <input
                type="email"
                id="subject"
                required
                className="bg-black border-b-2 border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-xl block w-full p-2.5"
                placeholder="Email"
              />
            </div>
            <div className="mb-6">
              <textarea
                name="message"
                id="message"
                className="bg-black border-b-2 border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-xl block w-full p-2.5"
                placeholder="Let's talk about..."
              />
            </div>
            <button
              type="submit"
              className="w-fit bg-blue-600 hover:bg-white hover:text-blue-600 text-white font-light py-2.5 px-5 rounded-full"
            >
              Send Message
            </button>
          </form>
        </div> */}
      </div>
      {/* <hr className="w-full h-0.5 mx-auto my-4 bg-gray-600 border-0 rounded md:my-10"></hr> */}
    </section>
  );
};

export default EmailSection;
