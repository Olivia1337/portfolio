import React, { useState, useEffect } from "react";
import e1 from "../assets/images/element05.png";
import e2 from "../assets/images/element06.png";
import e3 from "../assets/images/element05.png";
import { SiTailwindcss, SiAdobe } from "react-icons/si";
import { FiFigma } from "react-icons/fi";

import {
  FaJs,
  FaCss3Alt,
  FaHtml5,
  FaReact,
  FaBootstrap,
} from "react-icons/fa6";

function About() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      setMousePosition({ x: clientX, y: clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const moveEffect = (x, y, initialRotation, type) => {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    let moveX, moveY, rotation;

    if (type === "e1") {
      moveX = ((x - centerX) / centerX) * 10; // Adjust the multiplier for movement sensitivity
      moveY = ((y - centerY) / centerY) * 10; // Adjust the multiplier for movement sensitivity
      rotation = (moveX + moveY) / 10; // Adjust rotation sensitivity
    } else if (type === "e2") {
      moveX = ((x - centerX) / centerX) * 5; // Different multiplier for movement sensitivity
      moveY = ((y - centerY) / centerY) * 5;
      rotation = (moveX - moveY) / 5; // Different rotation sensitivity
    }

    return `translate(${moveX}px, ${moveY}px) rotate(${
      initialRotation + rotation
    }deg)`;
  };
  return (
    <section className="w-full h-screen flex flex-col justify-center items-center text-stone-800 relative">
      <div
        className="absolute right-0 top-[40%] w-[40%] h-[40%] bg-rose-300 -z-10 overflow-hidden "
        style={{
          transform: "rotate(100deg)",
        }}
      >
        <img
          src={e1}
          className="absolute object-cover "
          style={{
            left: "0rem",
            transform: moveEffect(mousePosition.x, mousePosition.y, -0, "e1"),
          }}
        />
        <img
          src={e2}
          className="absolute  object-contain"
          style={{
            right: "-30rem",
            top: "-15rem",
            transform: moveEffect(mousePosition.x, mousePosition.y, -80, "e2"),
          }}
        />
      </div>
      <img
        src={e3}
        className="z-30 absolute w-[50rem] object-contain top-[80%] left-[15%]"
        style={{
          animation: "float 3s ease-in-out infinite", // Adjust the duration and easing as needed
        }}
      />
      <h1 className="font-header text-header">Currently</h1>
      <p className="font-text text-text w-[40%]">
        Self-taught frontend developer (almost*) with a passion for UI, UX and
        design. Creating web applications using JavaScript, Reactjs, CSS & HTML.
        I also build mobile applications using React Native. Currently looking
        for a trainee-position.
      </p>
      <p className="italic text-end font-text text-text w-[40%] text-rose-400">
        *With a front-end certificate degree from META.
      </p>
      <div className="flex flex-row gap-3 mt-10">
        <FaJs size={50} />

        <FaHtml5 size={50} />

        <FaCss3Alt size={50} />
        <FaReact size={50} />
        <SiTailwindcss size={50} />
        <FaBootstrap size={50} />
      </div>
      <h1 className="font-header text-header">Past</h1>
      <p className="font-text text-text w-[40%]">
        Coming from a background in film I have experience in creative
        directing, cinematography, post-production and graphic design. Skills
        include but are not limited to - all Adobe programs, grading, vfx and I
        can tell you fun facts about all industry cameras & film until you fall
        asleep.
      </p>
      <div className="flex flex-row gap-3 mt-10">
        <SiAdobe size={50} />

        <FiFigma size={50} />
      </div>
    </section>
  );
}

export default About;
