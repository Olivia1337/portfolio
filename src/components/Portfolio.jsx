import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import soapclub from "../assets/images/soapclub.png";
import strikefirst from "../assets/images/strikefirst.png";
import nemen from "../assets/images/nemen.png";
function Portfolio() {
  const cardItems = [
    {
      id: 1,
      image: soapclub, // Replace with your image URL
      title: "Soap Club",
      description: "This is a brief description of the project.",
      githubLink: "#", // Replace with your GitHub link
      liveLink: "#", // Replace with your live demo link
    },
    {
      id: 2,
      image: nemen, // Replace with your image URL
      title: "Nemen",
      description: "This is a brief description of the project.",
      githubLink: "#", // Replace with your GitHub link
      liveLink: "#", // Replace with your live demo link
    },
    {
      id: 3,
      image: strikefirst, // Replace with your image URL
      title: "Strike First",
      description: "This is a brief description of the project.",
      githubLink: "#", // Replace with your GitHub link
      liveLink: "#", // Replace with your live demo link
    },
  ];

  return (
    <section className="w-[50%]  h-screen flex flex-col justify-center items-center">
      <h1 className="absolute rotate-90 right-[10%] font-header text-header text-red-900 mix-blend-difference">
        PORTFOLIO
      </h1>
      <div className="grid gap-8 lg:grid-cols-2">
        {cardItems.map((item) => (
          <div
            key={item.id}
            className="bg-stone-100 rounded-lg shadow-lg w-[100%] "
          >
            <img src={item.image} alt={item.title} className="object-cover" />
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
