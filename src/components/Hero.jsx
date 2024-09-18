import React, { useEffect, useRef, useState } from "react";
import e1 from "../assets/images/element01.png";
import e2 from "../assets/images/element03.png";
import e3 from "../assets/images/element04.png";
import e4 from "../assets/images/element02.png";

function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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
    <section className=" flex flex-col justify-center items-center ">
      <img
        src={e3}
        alt="Decorative element 3"
        className="z-10  absolute w-[10rem] md:w-[15rem] lg:w-[20rem] object-contain top-[0%] md:top-[10%] left-[60%] md:left-[60%] "
        style={{
          transform: moveEffect(mousePosition.x, mousePosition.y, -20, "e1"),
        }}
      />
      <img
        src={e4}
        alt="Decorative element 4"
        className="absolute  w-[10rem] md:w-[15rem] lg:w-[20rem] object-contain top-[80%] left-[20%]"
        style={{
          transform: moveEffect(mousePosition.x, mousePosition.y, -20, "e1"),
        }}
      />

      <h1 className=" z-10 text-center font-header text-[2.5em] md:text-[3em] lg:text-[5em] text-red-900  ">
        OLIVIA ERIKSSON
      </h1>
      <h1 className="z-10 font-subheader text-[1.8em] md:text-[2em] lg:text-[3em] text-stone-800 text-center">
        Front end developer*
      </h1>
      <h1 className="z-10 font-header text-[1em] text-red-900 ">
        *With love for UX & UI design
      </h1>
      <h1 className="animate-bounce absolute bottom-0 font-text text-[2em] text-red-900">
        SCROLL
      </h1>
    </section>
  );
}

export default Hero;
