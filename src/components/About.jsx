import React, { useEffect, useRef } from "react";
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
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

function About({ scrollTo, goToSectionRef }) {
  return (
    <section className="section">
      <img
        src={e3}
        alt="Decorative element floating animation"
        className="z-30 absolute w-[15rem] md:w-[50rem] object-contain top-[90%] md:top-[80%] left-[0%] md:left-[15%]"
        style={{
          animation: "float 3s ease-in-out infinite", // Adjust the duration and easing as needed
        }}
      />
      <header>
        <h1 className="font-header text-[2em] md:text-[3em] lg:text-[5em]">
          Currently
        </h1>
      </header>
      <p className="font-text text-[1em] md:text-[1.4em] w-[90%] md:w-[60%] lg:w-[40%]">
        Self-taught frontend developer (almost*) with a passion for UI, UX and
        design. Creating web applications using JavaScript, Reactjs, CSS & HTML.
        I also sometimes build mobile applications using React Native. I love
        and am eager to learn new parts of coding and am currently{" "}
        <strong>looking for a trainee-position.</strong>
      </p>
      <p className="italic text-end font-text text-[1.1em] md:text-[1.4em] text-rose-400">
        *With a front-end certificate degree from META.
      </p>
      <div
        className="flex flex-row gap-3 mt-[0.5rem]"
        aria-label="Technologies"
      >
        <FaJs size={50} aria-label="JavaScript" />
        <FaHtml5 size={50} aria-label="HTML5" />
        <FaCss3Alt size={50} aria-label="CSS3" />
        <FaReact size={50} aria-label="React" />
        <SiTailwindcss size={50} aria-label="Tailwind CSS" />
        <FaBootstrap size={50} aria-label="Bootstrap" />
      </div>
      <header>
        <h1 className="font-header text-[2em] md:text-[3em] lg:text-[5em]">
          Past
        </h1>
      </header>
      <p className="font-text text-[1em] md:text-[1.4em] w-[90%] md:w-[60%] lg:w-[40%]">
        Coming from a long background in film I have experience in creative
        directing, cinematography, post-production and graphic design. I also
        ran a commercial production company for 3 years before deciding to
        pursue coding. Past skills include but are not limited to - all Adobe
        programs, grading, VFX and I can tell you fun facts about all industry
        cameras & film until you fall asleep.
      </p>
      <div
        className="flex flex-row gap-3 mt-[0.5rem]"
        aria-label="Design Tools"
      >
        <SiAdobe size={50} aria-label="Adobe Suite" />
        <FiFigma size={50} aria-label="Figma" />
      </div>
    </section>
  );
}

export default About;
