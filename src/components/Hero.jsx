import React, { useEffect, useRef, useState } from "react";
import e1 from "../assets/images/element01.png";
import e2 from "../assets/images/element03.png";
import e3 from "../assets/images/element04.png";
import e4 from "../assets/images/element02.png";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Hero({ scrollTo, goToSectionRef }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const backgroundRef = useRef();
  const textRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      backgroundRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 2,
        scrollTrigger: {
          scroller: ".contain",
          trigger: backgroundRef.current,
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  //MOUSE
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

    switch (type) {
      case "e1":
        moveX = ((x - centerX) / centerX) * 10;
        moveY = ((y - centerY) / centerY) * 10;
        rotation = (moveX + moveY) / 10;
        break;
      case "e2":
        moveX = ((x - centerX) / centerX) * 5;
        moveY = ((y - centerY) / centerY) * 5;
        rotation = (moveX - moveY) / 5;
        break;
      default:
        moveX = moveY = rotation = 0;
    }

    return `translate(${moveX}px, ${moveY}px) rotate(${
      initialRotation + rotation
    }deg)`;
  };

  return (
    <section className="section" style={{ zIndex: 40 }}>
      <div
        className="absolute top-[35%] w-[25rem] md:w-[35rem] lg:w-[40rem] h-[30%] md:h-[30%] bg-indigo-300 -z-10 overflow-hidden"
        style={{ transform: "rotate(-110deg)" }}
        ref={backgroundRef}
      >
        <img
          src={e1}
          alt="Decorative element 1"
          className="absolute w-[20rem] object-contain top-0"
          style={{
            left: "-13rem",
            transform: moveEffect(mousePosition.x, mousePosition.y, 0, "e1"),
          }}
        />
        <img
          src={e2}
          alt="Decorative element 2"
          className="absolute w-[20rem] object-contain "
          style={{
            right: "-12rem",
            top: "-4rem",
            transform: moveEffect(mousePosition.x, mousePosition.y, -80, "e2"),
          }}
        />
      </div>
      <img
        src={e3}
        alt="Decorative element 3"
        className="z-30 absolute w-[10rem] md:w-[15rem] lg:w-[20rem] object-contain top-[0%] md:top-[17%] right-[0%] md:right-[24%]"
        style={{
          transform: moveEffect(mousePosition.x, mousePosition.y, -20, "e1"),
        }}
      />
      <img
        src={e4}
        alt="Decorative element 4"
        className="z-30  absolute w-[10rem] md:w-[15rem] lg:w-[20rem] object-contain top-[80%] left-[20%]"
        style={{
          transform: moveEffect(mousePosition.x, mousePosition.y, -20, "e1"),
        }}
      />
      <h1
        ref={textRef}
        className="text-center font-header text-[2.5em] md:text-[5em] lg:text-[8em] text-red-900 mix-blend-difference z-10"
      >
        OLIVIA ERIKSSON
      </h1>
      <h1 className="animate-b font-subheader text-[1.8em] md:text-[3em] lg:text-[4em] text-stone-800 text-center">
        Front end developer*
      </h1>
      <h1 className="font-header text-[1em] md:text-[1.4em] text-red-900">
        *With love for UX & UI design
      </h1>
      <h1
        className="animate-bounce absolute bottom-0 font-text text-text text-red-900"
        onClick={() => scrollTo(goToSectionRef)}
      >
        SCROLL
      </h1>
    </section>
  );
}

export default Hero;
