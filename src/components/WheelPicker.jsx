import React, { useState, useRef, useEffect } from "react";
import e1 from "../assets/images/element07.png";
import e2 from "../assets/images/element08.png";

function WheelPicker({ items, spacing = 20, colors }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [backgroundColor, setBackgroundColor] = useState(colors[0]);
  const [scrollTop, setScrollTop] = useState(0);
  const containerRef = useRef(null);
  const itemRefs = useRef([]);

  useEffect(() => {
    const container = containerRef.current;
    if (container && itemRefs.current[selectedIndex]) {
      const itemHeight = itemRefs.current[selectedIndex].clientHeight;
      const containerHeight = container.clientHeight;

      const targetScrollTop =
        selectedIndex * (itemHeight + spacing) -
        (containerHeight / 2 - itemHeight / 2);

      requestAnimationFrame(() => {
        container.scrollTo({
          top: targetScrollTop,
          behavior: "smooth",
        });
      });
    }

    setBackgroundColor(colors[selectedIndex]);
  }, [selectedIndex, items.length, spacing, colors]);

  useEffect(() => {
    const container = containerRef.current;
    if (container && itemRefs.current[0]) {
      const itemHeight = itemRefs.current[0].clientHeight;
      const containerHeight = container.clientHeight;

      const initialScrollTop =
        0 * (itemHeight + spacing) - (containerHeight / 2 - itemHeight / 2);

      requestAnimationFrame(() => {
        container.scrollTo({
          top: initialScrollTop,
          behavior: "smooth",
        });
      });
    }
  }, [items.length, spacing]);

  const handleWheel = (event) => {
    event.preventDefault();
    const { deltaY } = event;
    if (deltaY !== 0) {
      setSelectedIndex((prevIndex) => {
        const newIndex =
          (prevIndex + (deltaY > 0 ? 1 : -1) + items.length) % items.length;
        return newIndex;
      });
    }
  };

  const handleScroll = () => {
    // Update scrollTop state based on container scroll
    const container = containerRef.current;
    if (container) {
      setScrollTop(container.scrollTop);
    }
  };

  const handleDotClick = (index) => {
    setSelectedIndex(index);
  };

  const renderItems = () => {
    return items.map((ItemComponent, index) => {
      const distance = index - selectedIndex;
      const transform = `translateY(${distance * (100 + spacing)}px)`;
      const scale = distance === 0 ? 1 : 0.9; // Scale the selected item to full size and others to smaller
      const opacity = distance === 0 ? 1 : 0.5; // Highlight the selected item
      return (
        <div
          key={index}
          ref={(el) => (itemRefs.current[index] = el)}
          className="wheel-item"
          style={{
            transform,
            opacity,
            transform: `translateY(${
              distance * (100 + spacing)
            }px) scale(${scale})`,
          }}
        >
          <ItemComponent />
        </div>
      );
    });
  };

  const renderScrollIndicator = () => {
    return (
      <div className="scroll-indicator-container">
        {items.map((_, index) => (
          <div
            key={index}
            className={`scroll-indicator-item ${
              index === selectedIndex ? "active" : ""
            }`}
            style={{
              opacity: index === selectedIndex ? 1 : 0.5,
            }}
            onClick={() => handleDotClick(index)} // Add click handler
          />
        ))}
      </div>
    );
  };

  return (
    <section
      className="wheel-picker-wrapper"
      style={{
        backgroundColor,
        transition: "background-color 0.5s ease",
      }}
    >
      <img
        src={e1}
        className="hidden lg:block ml:hidden lg:w-[25rem] z-30 absolute object-contain top-[90%] ml:left-[0] left-[2%]"
        style={{ transform: `translateY(${scrollTop * -0.1}px)` }}
        alt="Decorative element 1"
      />
      <img
        src={e2}
        className="hidden lg:block ml:w-[15rem] lg:w-[30rem] z-30 absolute w-[30rem] object-contain mix-blend-difference"
        style={{
          transform: `translateY(${scrollTop * -0.2}px)`,
          right: "-12rem",
          top: "0rem",
        }}
        alt="Decorative element 2"
      />
      <div
        ref={containerRef}
        onWheel={handleWheel}
        onScroll={handleScroll}
        className="wheel-picker-container"
      >
        <div className="wheel-picker-content">{renderItems()}</div>
      </div>
      {renderScrollIndicator()}
    </section>
  );
}

export default WheelPicker;
