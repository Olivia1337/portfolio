import React, { useEffect, useRef, useState } from "react";
import e1 from "../assets/images/element05.png";
import e2 from "../assets/images/element06.png";

function Contact() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const e1Ref = useRef(null);
  const e2Ref = useRef(null);

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
    <section className="flex justify-center items-center">
      <div className="flex flex-col justify-center items-center z-10">
        <h1 className="font-header text-[2em] md:text-[3em] lg:text-[4em]">
          Contact Me
        </h1>
        <p className="font-text text-[1.5em] md:text-[2em] lg:text-[2em]">
          <a
            href="mailto:Oliviaeriksson.dev@gmail.com"
            className="text-red-800 hover:text-red-700"
          >
            Oliviaeriksson.dev@gmail.com
          </a>
        </p>
      </div>
      <div
        className="absolute z-0 left-[0%] md:left-[5%] lg:left-[20%]
         w-[20rem] md:w-[40rem] h-[13rem] md:h-[25rem] bg-blue-300 overflow-hidden"
        style={{ transform: "rotate(100deg)" }}
      >
        <img
          src={e1}
          alt="Decorative element 1"
          ref={e1Ref}
          className="absolute object-cover w-[30rem] right-[13rem] md:right-[20rem]"
          style={{
            transform: moveEffect(mousePosition.x, mousePosition.y, 0, "e1"),
          }}
        />
        <img
          src={e2}
          alt="Decorative element 2"
          ref={e2Ref}
          className="absolute object-contain w-[40rem] left-[10rem] md:left-[20rem]"
          style={{
            transform: moveEffect(mousePosition.x, mousePosition.y, -80, "e2"),
          }}
        />
      </div>
    </section>
  );
}

export default Contact;
