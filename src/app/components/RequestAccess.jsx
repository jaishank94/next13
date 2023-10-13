"use client";

import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const RequestAccess = () => {
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [responseMsg, setResponseMsg] = useState("asdfsfd");
  const [isSubmitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSubmitting(true);

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
      setResponseMsg("All fields are required");
      setSubmitting(false);

      setTimeout(() => {
        setResponseMsg("");
      }, 3000);

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

      const resData = await res.json();
      if (resData.code !== 200) {
        setIsError(true);

        setResponseMsg("Failed to send request access. Please try again");
        setSubmitting(false);

        setTimeout(() => {
          setResponseMsg("");
          setIsError(false);
        }, 3000);

        return;
      }

      setIsSuccess(true);

      setResponseMsg("Succesfully! Submitted Access Request.");
      setSubmitting(false);

      setTimeout(() => {
        setResponseMsg("");
        setIsSuccess(false);
      }, 3000);

      e.target.name.value = "";
      e.target.organisation.value = "";
      e.target.email.value = "";
      e.target.message.value = "";
    } catch (err) {
      setIsError(true);

      setResponseMsg(err);
      setSubmitting(false);

      setTimeout(() => {
        setResponseMsg("");
        setIsError(false);
      }, 3000);

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
            {responseMsg !== "" && (
              <p
                className={`text-md m-2 drop-shadow-md rounded-md ${
                  isError ? "text-rose-500" : "text-teal-500"
                } border-2 bg-white p-2`}
              >
                {responseMsg}
              </p>
            )}
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
                disabled={isSubmitting}
                type="submit"
                className="w-fit bg-blue-600 hover:bg-black hover:text-white text-white font-light py-2.5 px-5 rounded-full"
              >
                {isSubmitting ? "Sending Request..." : "Send Request"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RequestAccess;
