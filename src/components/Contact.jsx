import React, { useEffect, useRef, useState } from "react";
import e1 from "../assets/images/element05.png";
import e2 from "../assets/images/element06.png";

function Contact() {
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
    <section className="w-full h-screen flex flex-col justify-center items-center text-stone-800">
      <div
        className="absolute right-0 top-[40%] w-[40%] h-[40%] bg-blue-300 -z-10 overflow-hidden"
        style={{
          transform: "rotate(100deg)",
        }}
      >
        <img
          src={e1}
          className="absolute object-cover"
          style={{
            right: "15rem",
            transform: moveEffect(mousePosition.x, mousePosition.y, -0, "e1"),
          }}
        />
        <img
          src={e2}
          className="absolute object-contain"
          style={{
            right: "-30rem",
            top: "-15rem",
            transform: moveEffect(mousePosition.x, mousePosition.y, -80, "e2"),
          }}
        />
      </div>
      <h1 className="font-header text-header">Contact Me</h1>
      <p className="font-text text-subheader text-center w-[50%]">
        <a
          href="mailto:Oliviaeriksson.dev@gmail.com"
          className="text-red-800 hover:text-red-700"
        >
          Oliviaeriksson.dev@gmail.com
        </a>
      </p>
    </section>
  );
}

export default Contact;
