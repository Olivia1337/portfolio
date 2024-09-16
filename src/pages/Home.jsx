import React, { useRef } from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Home() {
  const section1 = useRef();
  const section2 = useRef();
  const section3 = useRef();
  const section4 = useRef();
  const backgroundRef = useRef();

  function scrollTo(section) {
    section.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <main className="contain" ref={backgroundRef}>
      <section ref={section1} className="sec">
        <Hero scrollTo={scrollTo} goToSectionRef={section2} />
      </section>
      <section ref={section2} className="sec">
        <About scrollTo={scrollTo} goToSectionRef={section3} />
      </section>
      <section ref={section3} className="sec">
        <Portfolio />
      </section>
      <section ref={section4} className="sec">
        <Contact />
      </section>
    </main>
  );
}

export default Home;
