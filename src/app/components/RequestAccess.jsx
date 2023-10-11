"use client";

import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const RequestAccess = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log("asdkhfbs1122akdhfb", e);
    // // return;

    const data = {
      name: e.target.name.value,
      org: e.target.organisation.value,
      email: e.target.email.value,
      msg: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);

    if (
      !e.target.name.value ||
      !e.target.email.value ||
      !e.target.organisation.value ||
      !e.target.message.value
    ) {
      alert("All fields are required");
      return;
    }

    try {
      const res = await fetch(
        "https://newwebsite.clst.com/api/v1/requestAccess/addRequestAccess",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTE2ZDdlYjY4YTQwOGY5MGY3ZWI0YmIiLCJpYXQiOjE2OTYwNjE4OTYsImV4cCI6MTcwMzgzNzg5Nn0.Cyt-bDIWAavKl-e61YDIgwURWhZun6xp1J0VKayyX_w",
          },
          body: JSONdata,
        }
      );

      console.log("asdkhfbs1122akdhfb");

      const resData = await res.json();
      if (resData.code !== 200) {
        alert("Failed to add request access.Please try again");

        return;
      }
      console.log("asdkh22222fbs1122akdhfb");

      alert("Saved request access");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <section
      className="bg-white text-white py-12 flex justify-center align-item-center"
      id="requestDemo"
    >
      <div className="w-4/5  bg-[#f6f6f6]">
        <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
          <div>
            <h2 className="text-4xl md:text-6xl text-black font-medium">
              Request Access
            </h2>
          </div>

          <div className=" mt-12 md:mt-0">
            <form className="flex flex-col" onSubmit={handleSubmit}>
              <div className="mb-6">
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="bg-[#f6f6f6] border-b-2 border-[#33353F] placeholder-[#9CA2A9] text-gray-700 text-xl block w-full p-2.5"
                  placeholder="Name"
                />
              </div>
              <div className="mb-6">
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="bg-[#f6f6f6] border-b-2 border-[#33353F] placeholder-[#9CA2A9] text-gray-700 text-xl block w-full p-2.5"
                  placeholder="Email"
                />
              </div>
              <div className="mb-6">
                <input
                  type="text"
                  id="organisation"
                  name="organisation"
                  required
                  className="bg-[#f6f6f6] border-b-2 border-[#33353F] placeholder-[#9CA2A9] text-gray-700 text-xl block w-full p-2.5"
                  placeholder="Organisation"
                />
              </div>

              <div className="mb-6">
                <textarea
                  name="message"
                  id="message"
                  className="bg-[#f6f6f6] border-b-2 border-[#33353F] placeholder-[#9CA2A9] text-gray-700 text-xl block w-full p-2.5"
                  placeholder="Let's talk about..."
                />
              </div>
              <button
                type="submit"
                className="w-fit bg-blue-600 hover:bg-black hover:text-white text-white font-light py-2.5 px-5 rounded-full"
              >
                Send Request1
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RequestAccess;
