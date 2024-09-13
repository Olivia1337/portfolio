import React, { useState, useEffect } from "react";

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
  return (
    <section className="w-full h-screen flex flex-col justify-center items-center text-stone-800 relative">
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
        I also sometimes build mobile applications using React Native. I love
        and am eager to learn new parts of coding and am currently{" "}
        <strong>looking for a trainee-position.</strong>
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
        Coming from a long background in film I have experience in creative
        directing, cinematography, post-production and graphic design. I also
        ran a commercial production company for 3 years before deciding to
        pursue coding. Past skills include but are not limited to - all Adobe
        programs, grading, VFX and I can tell you fun facts about all industry
        cameras & film until you fall asleep.
      </p>
      <div className="flex flex-row gap-3 mt-10">
        <SiAdobe size={50} />

        <FiFigma size={50} />
      </div>
    </section>
  );
}

export default About;
