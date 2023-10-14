"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import Image from "next/image";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import { BsLinkedin, BsMedium, BsTwitter, BsCircle } from "react-icons/bs";
import News from "./News";

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
  {
    title: "Request Access",
    path: "/#requestDemo",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-black">
      {/* <News /> */}
      <div className=" p-0 pt-4 md:p-4 md:px-14">
        <div className="flex container flex-row lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
          <div className="flex flex-row items-center justify-between">
            <Link
              href={"/"}
              className="flex flex-row text-lg items-center md:text-2xl text-white"
            >
              {/* <div className="">
                <Image
                src="/images/logo.png"
                alt="hero image"
                className=""
                width={30}
                height={30}
              />{" "}
                <BsCircle />
              </div> */}
              <p className="font-semibold text-lg md:text-3xl">CLST</p>
            </Link>
            <div className="menu hidden lg:block md:w-auto ml-10" id="navbar">
              <div className="flex flex-row items-center justify-end ">
                <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
                  {navLinks.map((link, index) => (
                    <li key={index}>
                      <NavLink href={link.path} title={link.title} />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center">
            <Link
              href={"https://app.clst.com/"}
              target="_blank"
              className="ml-4 rounded-full md:p-3 md:px-6 p-2 px-4 bg-blue-600 text-white text-sm font-light hover:text-blue-600 hover:bg-white"
            >
              SignIn {"->"}
            </Link>
            <div className="mobile-menu block lg:hidden">
              {!navbarOpen ? (
                <button
                  onClick={() => setNavbarOpen(true)}
                  className="flex items-center px-3 py-2 border-none rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
                >
                  <Bars3Icon className="h-5 w-5" />
                </button>
              ) : (
                <button
                  onClick={() => setNavbarOpen(false)}
                  className="flex items-center px-3 py-2 border-none rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
                >
                  <XMarkIcon className="h-5 w-5" />
                </button>
              )}
            </div>
          </div>
        </div>
        {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
      </div>
    </nav>
  );
};

export default Navbar;
