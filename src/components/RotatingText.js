import React, { useEffect, useRef } from "react";
import "../components/RotatingText.css";

export default function RotatingText({ text }) {
  const textRef = useRef(null);

  useEffect(() => {
    if (textRef.current) {
      const textElement = textRef.current;
      const letters = text.split("");
      const radius = 130; // Update this value based on the new size of the circle
      textElement.innerHTML = letters
        .map(
          (letter, index) =>
            `<span style="transform: rotate(${
              index * (360 / letters.length)
            }deg) translateY(-${radius}px)">${letter}</span>`
        )
        .join("");
    }
  }, [text]);

  return (
    <div className="circle">
      <div className="dot"></div>
      <div className="text" ref={textRef}></div>
    </div>
  );
}
