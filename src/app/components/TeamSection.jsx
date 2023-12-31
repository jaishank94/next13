import React from "react";
import Image from "next/image";

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
    position: "CSO1",
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

const fetchTeamData = async () => {
  try {
    const teamData = await fetch(
      "https://newwebsite.clst.com/api/v1/team/getAllTeam",
      {
        cache: "no-store",
      }
    );

    const mData = await teamData.json();

    return {
      teamData: mData.data,
    };
  } catch (error) {
    console.log("Failed to fetch", error);
  }
};

const TeamSection = async () => {
  const teamData = await fetchTeamData();

  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [organisation, setOrganisation] = useState("");
  // const [message, setMessage] = useState("");

  // const handleSumbit = async (e) => {
  //   e.preventDefault();

  //   if (!name || !email || !organisation || !message) {
  //     alert("All fields are required");
  //     return;
  //   }

  //   try {
  //     const res = await fetch("sadfsdf", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({ name, email, organisation, message }),
  //     });

  //     if (res.ok) {
  //       console.log("successfully submited", res);
  //       setName("");
  //       setEmail("");
  //       setMessage("");
  //       setOrganisation("");
  //     }
  //     console.log("failed submited", res);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  return (
    <section className="bg-white px-4 lg:px-16 pb-12 pt-24" id="team">
      <div className="pt-4 md:pt-16">
        {/* <hr className="w-16 h-0.5 mx-auto my-4 bg-black border-0 rounded md:my-10"></hr> */}

        <h2 className="pt-2 mb-4 flex text-black text-4xl pl-4 lg:pl-16 lg:text-6xl font-medium">
          Our Team
        </h2>
      </div>
      <div className="md:grid md:grid-cols-3 gap-2 items-center py-8 px-4 xl:gap-4 sm:py-16 xl:px-16">
        {teamData &&
          teamData.teamData.data.length > 0 &&
          teamData.teamData.data.map((team, index) => {
            if (team.isActive) {
              return (
                <div
                  key={index}
                  className="max-w-xl group cursor-default  bg-white m-2 border border-gray-200 shadow-md transition duration-200 ease-in transform sm:hover:scale-105"
                >
                  <div className="w-full ">
                    <Image
                      src={team.imageUrl}
                      alt={team.name}
                      className=""
                      width={400}
                      height={300}
                    />
                  </div>
                  <div className="p-5 flex flex-col justify-center items-center">
                    <a href="#">
                      <h5 className="mb-2 text-2xl font-normal tracking-tight text-gray-900 ">
                        {team.name}
                      </h5>
                    </a>
                    <p className="mb-3 font-normal text-lg text-gray-500">
                      {team.designation}
                    </p>
                    {/* <a
                  href="#"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Read more
                  <svg
                    className="w-3.5 h-3.5 ml-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a> */}
                  </div>
                </div>
              );
            }
          })}
      </div>
      {/* <div className="bg-[#f6f6f6] text-white py-12" id="requestDemo">
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
      </div> */}
    </section>
  );
};

export default TeamSection;
