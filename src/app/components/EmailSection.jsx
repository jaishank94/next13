import React from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";
import { BsLinkedin, BsMedium, BsTwitter } from "react-icons/bs";

const EmailSection = () => {
  return (
    <section id="contact" className="px-12 md:px-24 py-12 relative bg-black">
      <div className="grid  md:grid-cols-2  gap-4">
        {/* <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div> */}
        <div className="z-10 pt-12">
          {/* <h5 className="text-xl font-bold text-white my-2">
          Let`&apos;s Connect
        </h5> */}

          <Link
            href={"/"}
            className="flex flex-row text-lg items-center md:text-2xl text-white"
          >
            <div className="mr-2 ">
              <Image
                src="/images/logo.png"
                alt="hero image"
                className=""
                width={30}
                height={30}
              />{" "}
            </div>
            <span className="font-light text-lg md:text-3xl">CLST</span>
          </Link>
          <p className="text-[#ADB7BE] text-sm mb-4 max-w-md mt-4">
            The Institutional Credit Liquidity Hub For Digital Assets
          </p>
          <div className="socials flex flex-row gap-4">
            <Link href="github.com">
              {/* <Image src={GithubIcon} alt="Github Icon" /> */}
              <BsTwitter size={20} />
            </Link>
            <Link href="linkedin.com">
              {/* <Image src={LinkedinIcon} alt="Linkedin Icon" /> */}
              <BsLinkedin size={20} />
            </Link>
            <Link href="linkedin.com">
              {/* <Image src={LinkedinIcon} alt="Linkedin Icon" /> */}
              <BsMedium size={20} />
            </Link>
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
      {/* <hr class="w-full h-0.5 mx-auto my-4 bg-gray-600 border-0 rounded md:my-10"></hr> */}
    </section>
  );
};

export default EmailSection;
