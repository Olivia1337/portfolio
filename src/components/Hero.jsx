import React, { useState, useEffect } from "react";
import e1 from "../assets/images/element01.png";
import e2 from "../assets/images/element03.png";
import e3 from "../assets/images/element04.png";
import e4 from "../assets/images/element02.png";

function Hero() {
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
    <section className="w-full h-screen flex flex-col justify-center items-center relative">
      <div
        className="absolute top-[35%] w-[25%] h-[30%] bg-indigo-300 -z-10 overflow-hidden "
        style={{
          transform: "rotate(-110deg)",
        }}
      >
        <img
          src={e1}
          className="absolute w-[20rem] object-contain top-0"
          style={{
            left: "-13rem",
            transform: moveEffect(mousePosition.x, mousePosition.y, -0, "e1"),
          }}
        />
        <img
          src={e2}
          className="absolute w-[20rem] object-contain"
          style={{
            right: "-12rem",
            top: "-4rem",
            transform: moveEffect(mousePosition.x, mousePosition.y, -80, "e2"),
          }}
        />
      </div>
      <img
        src={e3}
        className="z-30 absolute w-[20rem] object-contain top-[17%] right-[24%] "
        style={{
          transform: moveEffect(mousePosition.x, mousePosition.y, -20, "e1"),
        }}
      />
      <img
        src={e4}
        className="z-30 absolute w-[20rem] object-contain top-[80%] left-[30%] "
        style={{
          transform: moveEffect(mousePosition.x, mousePosition.y, -20, "e1"),
        }}
      />
      <h1 className="font-header text-header text-red-900 mix-blend-difference">
        OLIVIA ERIKSSON
      </h1>
      <h1 className="animate-b font-subheader text-subheader text-stone-800">
        Front end developer*
      </h1>
      <h1 className="font-header text-text text-red-900">
        *With love for UX & UI design
      </h1>{" "}
      <h1 className="animate-bounce absolute bottom-0 font-text text-text text-red-900">
        SCROLL
      </h1>
    </section>
  );
}

export default Hero;
