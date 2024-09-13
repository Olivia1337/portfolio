import React from "react";
import WheelPicker from "../components/WheelPicker";
import Hero from "../components/Hero";
import About from "../components/About";
import Contact from "../components/Contact";
import Portfolio from "../components/Portfolio";
import e1 from "../assets/images/element01.png";
function Home() {
  const items = [Hero, About, Portfolio, Contact];
  const colors = ["#c7d2fe", "#fecdd3", "#6b7280", "#c7d2fe"];
  return (
    <div className="h-screen w-screen bg-stone-300">
      <WheelPicker items={items} colors={colors} />
    </div>
  );
}

export default Home;
