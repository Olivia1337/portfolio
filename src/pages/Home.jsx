import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import Hero from "../components/Hero";
import About from "../components/About";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
function Home() {
  const container = useRef(null);

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
    [0, 0.25, 0.5, 0.75, 1],
    ["#c7d2fe", "#fecdd3", "#fecdd3", "#6b7280", "#c7d2fe"] // Color stops
  );

  return (
    <motion.div
      ref={container}
      style={{ backgroundColor }}
      // Apply background color transformation
    >
      {/* First Section (Circle Animation) */}
      <motion.div
        className="fixed top-0 left-0 w-full h-screen flex justify-center items-center"
        style={{ scale, opacity }}
      >
        <motion.div
          className="bg-indigo-300"
          style={{
            width: 300,
            height: 500,
            rotate: "-20deg",
          }}
        />
      </motion.div>

      {/* Main Content */}
      <div className="h-screen flex justify-center items-center ">
        <Hero />
      </div>

      {/* Scrollable Section */}
      <div className="h-screen flex justify-center items-center ">
        <About />
      </div>

      {/* Additional Sections */}
      <div className="h-screen flex justify-center items-center ">
        <Portfolio />
      </div>
      <div className="h-screen flex justify-center items-center ">
        {" "}
        <Contact />
      </div>
    </motion.div>
  );
}

export default Home;
