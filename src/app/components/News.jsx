"use client";

import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import Image from "next/image";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import { BsLinkedin, BsMedium, BsTwitter, BsCircle } from "react-icons/bs";
import parse from "html-react-parser";

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

const fetchNewsData = async () => {
  try {
    const newsData = await fetch(
      "https://newwebsite.clst.com/api/v1/news/get",
      {
        cache: "no-store",
      }
    );

    const mData = await newsData.json();

    if (mData.code !== 200) {
      console.log("News Error");
      return;
    }

    return {
      newsData:
        mData.data.length > 0 && mData.data[0].isActive
          ? mData.data[0].html
          : null,
    };
  } catch (error) {
    console.log("Failed to fetch", error);
  }
};

const News = async () => {
  const newsData = await fetchNewsData();

  return (
    <>
      {newsData && newsData.newsData && (
        <div className="text-white bg-blue-600 p-2 md:px-14 flex flex-col lg:flex-row text-sm lg:text-md items-center justify-center">
          <span className="animate-pulse mr-2  font-semibold text-sm lg:text-lg">
            Announcement :
          </span>{" "}
          <p className="text-sm">{parse(newsData.newsData)}</p>
        </div>
      )}
    </>
  );
};

export default News;
