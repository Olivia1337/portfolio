import React, { useState, useRef, useEffect } from "react";
import e1 from "../assets/images/element07.png";
import e2 from "../assets/images/element08.png";

function WheelPicker({ items, spacing = 20, colors }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [backgroundColor, setBackgroundColor] = useState(colors[0]);
  const [scrollTop, setScrollTop] = useState(0); // State to track the container's scroll position
  const containerRef = useRef(null); // Ref for the scrolling container
  const itemRefs = useRef([]); // Ref for each item in the picker

  const touchStartY = useRef(0); // Track where the touch started
  const scrollStartY = useRef(0); // Track the initial scroll position when the touch starts

  // Effect to center the selected item on index change and update background color
  useEffect(() => {
    const container = containerRef.current;
    if (container && itemRefs.current[selectedIndex]) {
      const itemHeight = itemRefs.current[selectedIndex].clientHeight;
      const containerHeight = container.clientHeight;

      // Calculate target scroll position to center the selected item
      const targetScrollTop =
        selectedIndex * (itemHeight + spacing) -
        (containerHeight / 2 - itemHeight / 2);

      // Smoothly scroll to the target position
      requestAnimationFrame(() => {
        container.scrollTo({
          top: targetScrollTop,
          behavior: "smooth",
        });
      });
    }

    // Update background color based on selected index
    setBackgroundColor(colors[selectedIndex]);
  }, [selectedIndex, items.length, spacing, colors]);

  // Effect to scroll to the initial position when items are rendered
  useEffect(() => {
    const container = containerRef.current;
    if (container && itemRefs.current[0]) {
      const itemHeight = itemRefs.current[0].clientHeight;
      const containerHeight = container.clientHeight;

      // Initial scroll position
      const initialScrollTop =
        0 * (itemHeight + spacing) - (containerHeight / 2 - itemHeight / 2);

      // Smoothly scroll to initial position
      requestAnimationFrame(() => {
        container.scrollTo({
          top: initialScrollTop,
          behavior: "smooth",
        });
      });
    }
  }, [items.length, spacing]);

  // Handle mouse wheel scroll events to select the next/previous item
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

  // Handle scroll event to track the current scroll position
  const handleScroll = () => {
    const container = containerRef.current;
    if (container) {
      setScrollTop(container.scrollTop);
    }
  };

  // Handle touch start event to track initial touch position and scroll position
  const handleTouchStart = (event) => {
    touchStartY.current = event.touches[0].clientY; // Store the starting Y position of the touch
    scrollStartY.current = containerRef.current.scrollTop; // Store the initial scroll position
  };

  // Handle touch move event to calculate the new scroll position
  const handleTouchMove = (event) => {
    const container = containerRef.current;
    const touchY = event.touches[0].clientY; // Get the current touch position

    // Calculate the difference in touch position and apply it to the scroll position
    const scrollDelta = touchStartY.current - touchY;
    container.scrollTop = scrollStartY.current + scrollDelta;
  };

  // Handle touch end event to update the selected index after the user finishes dragging
  const handleTouchEnd = () => {
    const container = containerRef.current;
    const itemHeight = itemRefs.current[0]?.clientHeight || 0;

    // Calculate the closest item based on the current scroll position
    const newIndex = Math.round(container.scrollTop / (itemHeight + spacing));
    setSelectedIndex((newIndex + items.length) % items.length); // Update the selected index
  };

  // Handle dot click to update selected index
  const handleDotClick = (index) => {
    setSelectedIndex(index);
  };

  // Render items in the wheel picker with scaling and opacity effects
  const renderItems = () => {
    return items.map((ItemComponent, index) => {
      const distance = index - selectedIndex; // Calculate distance from the selected item
      const scale = distance === 0 ? 1 : 0.9; // Scale down non-selected items
      const opacity = distance === 0 ? 1 : 0.5; // Dim non-selected items

      return (
        <div
          key={index}
          ref={(el) => (itemRefs.current[index] = el)}
          className="wheel-item"
          style={{
            transform: `translateY(${
              distance * (100 + spacing)
            }px) scale(${scale})`,
            opacity,
          }}
        >
          <ItemComponent />
        </div>
      );
    });
  };

  // Render scroll indicators (dots) for navigation
  const renderScrollIndicator = () => {
    return (
      <div className="scroll-indicator-container">
        {items.map((_, index) => (
          <div
            key={index}
            className={`scroll-indicator-item ${
              index === selectedIndex ? "active" : ""
            }`}
            style={{ opacity: index === selectedIndex ? 1 : 0.5 }}
            onClick={() => handleDotClick(index)} // Add click handler to dots
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
        transition: "background-color 0.5s ease", // Smooth background color transition
      }}
    >
      {/* Decorative element 1 with parallax effect */}
      <img
        src={e1}
        className="hidden lg:block ml:hidden lg:w-[25rem] z-30 absolute object-contain top-[90%] ml:left-[0] left-[2%]"
        style={{ transform: `translateY(${scrollTop * -0.1}px)` }}
        alt="Decorative element 1"
      />
      {/* Decorative element 2 with parallax effect */}
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
      {/* Wheel picker container with touch event listeners */}
      <div
        ref={containerRef}
        onWheel={handleWheel} // Mouse wheel scrolling
        onScroll={handleScroll} // Track scroll position
        onTouchStart={handleTouchStart} // Start tracking touch
        onTouchMove={handleTouchMove} // Handle touch dragging
        onTouchEnd={handleTouchEnd} // Snap to nearest item after touch end
        className="wheel-picker-container"
      >
        <div className="wheel-picker-content">{renderItems()}</div>
      </div>
      {/* Render scroll indicator dots */}
      {renderScrollIndicator()}
    </section>
  );
}

export default WheelPicker;
