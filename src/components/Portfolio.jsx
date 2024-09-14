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
        "A video production company site - made with Reactjs and Tailwind.",
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
      liveLink: "https://olivia-eriksson-portfolio.vercel.app/",
    },
  ];

  return (
    <section className="w-[80%] md:w-[80%] h-screen flex flex-col justify-center items-center">
      <header className="hidden lg:block absolute lg:rotate-90 right-0 md:right-0 font-header text-[3em] md:text-[5em] lg:text-[8em] text-stone-900 mix-blend-difference">
        PORTFOLIO
      </header>
      <div className="grid gap-2 md:gap-8 grid-cols-1 lg:grid-cols-2 z-10">
        {cardItems.map((item) => (
          <article
            key={item.id}
            className="rounded-lg shadow-lg overflow-hidden h-[20vh] lg:h-[35vh] bg-white"
            aria-labelledby={`card-title-${item.id}`}
            aria-describedby={`card-description-${item.id}`}
          >
            <img
              src={item.image}
              alt={item.title}
              className="object-cover w-full h-[60%] transition-transform duration-300 hover:scale-105"
              aria-hidden="true" // Decorative image, not needed for screen readers
            />
            <div className="flex flex-col py-2 px-4 lg:mt-[1rem]">
              <header className="flex justify-between items-center">
                <h2
                  id={`card-title-${item.id}`}
                  className="font-bold text-[1.4em] lg:text-[1.8em] mb-2 font-text"
                >
                  {item.title}
                </h2>
                <div className="flex space-x-4 lg:hidden">
                  <a
                    href={item.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-black"
                    aria-label={`GitHub repository for ${item.title}`}
                  >
                    <FaGithub size={24} />
                  </a>
                  <a
                    href={item.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-black"
                    aria-label={`Live demo of ${item.title}`}
                  >
                    <FaExternalLinkAlt size={24} />
                  </a>
                </div>
              </header>
              <p
                id={`card-description-${item.id}`}
                className="text-gray-700 mb-1 font-text text-[1em] md:text-[1.4em]"
              >
                {item.description}
              </p>
              <div className="flex space-x-4 hidden lg:flex">
                <a
                  href={item.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-black"
                  aria-label={`GitHub repository for ${item.title}`}
                >
                  <FaGithub size={24} />
                </a>
                <a
                  href={item.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-black"
                  aria-label={`Live demo of ${item.title}`}
                >
                  <FaExternalLinkAlt size={24} />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
