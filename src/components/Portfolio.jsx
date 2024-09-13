import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import soapclub from "../assets/images/soapclub.png";
import strikefirst from "../assets/images/strikefirst.png";
import nemen from "../assets/images/nemen.png";
import portfolio from "../assets/images/portfolio.png";

function Portfolio() {
  const cardItems = [
    {
      id: 1,
      image: soapclub,
      title: "Soap Club",
      description:
        "Clean E-Commerce website made with Reactjs and Vanilla CSS.",
      githubLink: "https://github.com/Olivia1337/soap_club.git",
      liveLink: "https://soap-club.vercel.app/",
    },
    {
      id: 2,
      image: nemen,
      title: "Nemen",
      description:
        "A video production company portfolio - made with Reactjs and Tailwind.",
      githubLink: "https://github.com/Olivia1337/nemen.git",
      liveLink: "https://nemen.vercel.app/",
    },
    {
      id: 3,
      image: strikefirst,
      title: "Strike First",
      description:
        "Website for a muay thai gym - made with Reactjs and Tailwind.",
      githubLink: "https://github.com/Olivia1337/strike_first.git",
      liveLink: "https://strike-first.vercel.app/",
    },
    {
      id: 4,
      image: portfolio,
      title: "Portfolio",
      description:
        "The webpage you're currently on - made with Reactjs and Tailwind.",
      githubLink: "https://github.com/Olivia1337/strike_first.git",
      liveLink: "https://olivia-eriksson-portfolio.vercel.app//",
    },
  ];

  return (
    <section className="w-[50%] h-screen flex flex-col justify-center items-center">
      <h1 className="absolute rotate-90 right-[10%] font-header text-header text-stone-900 mix-blend-difference">
        PORTFOLIO
      </h1>
      <div className="grid gap-8 lg:grid-cols-2">
        {cardItems.map((item) => (
          <div
            key={item.id}
            className="bg-stone-100 rounded-lg shadow-lg w-[100%] overflow-hidden"
          >
            <img
              src={item.image}
              alt={item.title}
              className="object-cover transition-transform duration-300 hover:scale-105"
            />
            <div className="p-4">
              <h2 className="font-bold text-xl mb-2">{item.title}</h2>
              <p className="text-gray-700 mb-4">{item.description}</p>
              <div className="flex space-x-4">
                <a
                  href={item.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-black"
                >
                  <FaGithub size={24} />
                </a>
                <a
                  href={item.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-black"
                >
                  <FaExternalLinkAlt size={24} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
