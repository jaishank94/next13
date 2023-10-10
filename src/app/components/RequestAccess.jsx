"use client";

import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const teamList = [
  {
    name: "Michael Guzik",
    position: "CEO",
    value: "/images/michael1.png",
    postfix: "+",
  },
  {
    name: "Hugh Macmillen",
    position: "CPO",

    metric: "Users",
    value: "/images/hugh1.png",
  },
  {
    name: "Roshan Robert",
    value: "/images/roshan.png",
    position: "President",
  },
  {
    name: "Hassan Al-Lawati",
    value: "/images/hasan.png",
    position: "CSO",
  },
  {
    name: "Amit Sinha",
    value: "/images/amit.png",
    position: "CTO & CRO",
  },
];

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>Express</li>
        <li>PostgreSQL</li>
        <li>Sequelize</li>
        <li>JavaScript</li>
        <li>React</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Fullstack Academy of Code</li>
        <li>University of California, Santa Cruz</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>AWS Cloud Practitioner</li>
        <li>Google Professional Cloud Developer</li>
      </ul>
    ),
  },
];

const RequestAccess = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [organisation, setOrganisation] = useState("");
  const [message, setMessage] = useState("");

  const handleSumbit = async (e) => {
    e.preventDefault();

    if (!name || !email || !organisation || !message) {
      alert("All fields are required");
      return;
    }

    try {
      const res = await fetch("sadfsdf", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, organisation, message }),
      });

      if (res.ok) {
        console.log("successfully submited", res);
        setName("");
        setEmail("");
        setMessage("");
        setOrganisation("");
      }
      console.log("failed submited", res);
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
            <form className="flex flex-col" onSubmit={handleSumbit}>
              <div className="mb-6">
                <input
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  id="email"
                  required
                  className="bg-[#f6f6f6] border-b-2 border-[#33353F] placeholder-[#9CA2A9] text-gray-700 text-xl block w-full p-2.5"
                  placeholder="Name"
                />
              </div>
              <div className="mb-6">
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  id="subject"
                  required
                  className="bg-[#f6f6f6] border-b-2 border-[#33353F] placeholder-[#9CA2A9] text-gray-700 text-xl block w-full p-2.5"
                  placeholder="Email"
                />
              </div>
              <div className="mb-6">
                <input
                  onChange={(e) => setOrganisation(e.target.value)}
                  type="text"
                  id="organisation"
                  required
                  className="bg-[#f6f6f6] border-b-2 border-[#33353F] placeholder-[#9CA2A9] text-gray-700 text-xl block w-full p-2.5"
                  placeholder="Organisation"
                />
              </div>

              <div className="mb-6">
                <textarea
                  onChange={(e) => setMessage(e.target.value)}
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
                Send Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RequestAccess;
