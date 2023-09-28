import React from "react";
import NavLink from "./NavLink";
import Link from "next/link";

const navLinks = [
  {
    title: "Markets",
    path: "#markets",
  },
  {
    title: "Mission",
    path: "#mission",
  },
  {
    title: "Services",
    path: "#services",
  },
  {
    title: "Team",
    path: "#team",
  },
];

const Footer = () => {
  return (
    <footer className="footer bg-black text-white px-4 md:px-24 py-12 ">
      <div className="">
        {/* <span>LOGO</span>
        <p className="text-slate-600">All rights reserved.</p> */}
        <hr className="w-full h-0.5 mx-auto my-4 bg-gray-600 border-0 rounded md:my-10"></hr>
        <div className="flex flex-col md:flex-row justify-between">
          <div className="" id="navbar">
            <span className="text-gray-400 uppercase font-semibold">
              Company
            </span>

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
          <div className="">
            <span className="text-gray-400 uppercase font-semibold">Legal</span>
            <ul className="flex flex-row">
              <li className="text-md cursor-pointer font-light">
                <Link
                  href={"/legals/#privacy"}
                  className="block py-2 pl-3 pr-4 text-white font-light rounded md:p-0 hover:text-[#ADB7BE]"
                >
                  Privacy Policy
                </Link>
              </li>
              <li className="mx-2 text-md cursor-pointer font-light">
                <Link
                  href={"/legals/#cookie"}
                  className="block py-2 pl-3 pr-4 text-white font-light rounded md:p-0 hover:text-[#ADB7BE]"
                >
                  Cookie Policy
                </Link>
              </li>
              <li className="mx-2 text-md cursor-pointer font-light">
                <Link
                  href={"/legals/#termsandconditions"}
                  className="block py-2 pl-3 pr-4 text-white font-light rounded md:p-0 hover:text-[#ADB7BE]"
                >
                  Terms and Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <hr className="w-full h-0.5 mx-auto my-4 bg-gray-600 border-0 rounded md:my-10"></hr>
        <div className="w-full flex flex-row justify-center ">
          <span className="text-md font-light">
            Copyright © CLST | All rights reserved
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
