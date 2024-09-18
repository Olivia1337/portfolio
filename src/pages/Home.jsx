import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Hero from "../components/Hero";
import About from "../components/About";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";

import e2 from "../assets/images/element08.png";

function Home() {
  const container = useRef(null);
  const contactRef = useRef(null);

  // Set up scroll tracking
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  // Transform scale for the circle zooming effect
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 50]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  // Background color transformation between sections
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.25, 0.75, 1],
    ["#c7d2fe", "#fecdd3", "#fed7aa", "#c7d2fe"] // Color stops
  );

  // Transformations for each section
  const aboutScale = useTransform(
    scrollYProgress,
    [0, 0.25, 0.25, 1],
    [0.4, 1, 1, 0.4] // Adjust these values to control the scale effect
  );

  const portfolioScale = useTransform(
    scrollYProgress,
    [0, 0.65, 0.65, 1],
    [0.1, 1, 1, 0.7] // Adjust these values to match the effect for the Portfolio section
  );

  // Contact section animation
  const contactY = useTransform(scrollYProgress, [0.85, 1], [100, 0]); // Change Y-axis position
  const contactScale = useTransform(scrollYProgress, [0.85, 1], [0.7, 1]); // Adjusted initial scale
  const contactOpacity = useTransform(scrollYProgress, [0.85, 1], [0.5, 1]); // Opacity animation

  return (
    <motion.div ref={container} style={{ backgroundColor }}>
      {/* First Section (Circle Animation) */}
      <motion.div
        className=" fixed top-0 left-0 w-full h-screen flex justify-center items-center  "
        style={{ scale, opacity }}
      >
        <motion.div
          className="bg-indigo-300 w-[10rem] md:w-[20rem] h-[15rem] md:h-[30rem]"
          style={{ rotate: "-20deg" }}
        />
      </motion.div>
      {/* Main Content */}
      <motion.div className="h-screen flex justify-center items-center">
        <Hero />{" "}
      </motion.div>
      <motion.div
        className="h-screen flex justify-center items-center"
        style={{ scale: aboutScale }}
      >
        <About />
        <img
          src={e2}
          alt="Decorative element floating animation "
          className="hidden md:block z-0 absolute w-[10rem] md:w-[20rem] object-contain md:top-[70%] right-[0%] md:right-[80%]"
          style={{
            animation: "float 3s ease-in-out infinite",
          }}
        />
      </motion.div>
      <motion.div
        className="h-screen flex justify-center items-center"
        style={{ scale: portfolioScale }}
      >
        <Portfolio />
      </motion.div>
      <motion.div
        ref={contactRef}
        className="h-screen flex justify-center items-center"
        style={{
          y: contactY,
          scale: contactScale,
          opacity: contactOpacity,
        }}
      >
        <Contact />
      </motion.div>
    </motion.div>
  );
}

export default Home;
