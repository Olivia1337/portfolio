import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import soapclub from "../assets/images/soapclub.png";
import strikefirst from "../assets/images/strikefirst.png";
import nemen from "../assets/images/nemen.png";
import portfolio from "../assets/images/portfolio.png";
import e3 from "../assets/images/element05.png";

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
      githubLink: "https://github.com/Olivia1337/nemensthlm.git",
      liveLink: "https://nemen.vercel.app/",
    },
    {
      id: 3,
      image: strikefirst,
      title: "Strike First",
      description:
        "Content rich website for a muay thai gym - made with Reactjs and Tailwind.",
      githubLink: "https://github.com/Olivia1337/strike_first.git",
      liveLink: "https://strike-first.vercel.app/",
    },
    {
      id: 4,
      image: portfolio,
      title: "Portfolio",
      description:
        "The webpage you're currently on - made with Reactjs and Tailwind.",
      githubLink: "https://github.com/Olivia1337/portfolio.git",
      liveLink: "https://olivia-eriksson-portfolio.vercel.app/",
    },
  ];

  return (
    <section className="flex flex-col justify-center items-center z-30">
      <header className="font-header text-[2em] md:text-[3em] lg:text-[4em] text-stone-900">
        PORTFOLIO
      </header>
      <div className="grid grid-cols-2 gap-4 p-4 w-full max-w-6xl">
        {cardItems.map((item) => (
          <article key={item.id} className="flex flex-col relative">
            <a
              href={item.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Live demo of ${item.title}`}
              className="block"
            >
              <img
                src={item.image}
                alt={item.title}
                className="object-cover w-full rounded-t-lg transition-opacity duration-300 hover:opacity-70"
                aria-hidden="true"
              />
            </a>
            <div className="bg-white rounded-b-lg px-2 py-4">
              <div className="flex justify-between items-center">
                <h2
                  id={`card-title-${item.id}`}
                  className="font-bold text-[1.2em] lg:text-[1.4em] mb-2 font-text"
                >
                  {item.title}
                </h2>
                <div className="flex gap-4">
                  <a
                    href={item.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`GitHub repository for ${item.title}`}
                    className="text-gray-700 hover:text-black"
                  >
                    <FaGithub size={24} />
                  </a>
                  <a
                    href={item.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Live demo of ${item.title}`}
                    className="text-gray-700 hover:text-black"
                  >
                    <FaExternalLinkAlt size={24} />
                  </a>
                </div>
              </div>
              <p
                id={`card-description-${item.id}`}
                className="text-gray-700 mb-1 font-text text-[1em] md:text-[1.1em]"
              >
                {item.description}
              </p>
            </div>
          </article>
        ))}
        <img
          src={e3}
          alt="Decorative element floating animation"
          className="hidden md:block z-0 absolute w-[30rem] md:w-[40rem] object-contain left-[40%] md:left-[30%] top-[90%]"
          style={{
            animation: "float 3s ease-in-out infinite",
          }}
        />
      </div>
    </section>
  );
}

export default Portfolio;
