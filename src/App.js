import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import "./App.css";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import RotatingText from "./components/RotatingText";
import Contact from "./pages/Contact";
import web01 from "../src/assets/images/web01.png";
import web02 from "../src/assets/images/web02.png";
import web03 from "../src/assets/images/web03.png";
import web04 from "../src/assets/images/web04.png";
import TopBar from "./components/TopBar";
function App() {
  return (
    <div className="app">
      <Parallax pages={4} style={{ top: "0", left: "0" }} className="animation">
        {/*FIRST PAGE*/}

        <ParallaxLayer offset={0} speed={0.4}>
          <div className="animation_layer " id="hero_bg"></div>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.6}>
          <div id="rotating_hero_text">
            <RotatingText text={"Front-end React developer"} />
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={0}
          speed={1}
          sticky={false}
          style={{ mixBlendMode: "difference" }}
        >
          <TopBar />
        </ParallaxLayer>
        <ParallaxLayer offset={0.4} speed={0.1}>
          <h1 id="hero_title">Olivia Eriksson</h1>
        </ParallaxLayer>
        <ParallaxLayer offset={0.6} speed={0.8}>
          <h1 id="hero_select_text">*Specialized in UI, UX & Design.</h1>
        </ParallaxLayer>
        <ParallaxLayer
          offset={0.48}
          speed={0.2}
          style={{ mixBlendMode: "difference" }}
        >
          <h1 id="hero_subtitle">Front-end React developer*</h1>
        </ParallaxLayer>

        {/*SECOND PAGE*/}
        <ParallaxLayer
          offset={0.5}
          speed={0.8}
          style={{ mixBlendMode: "difference" }}
        >
          <div className="animation_layer " id="element02"></div>
        </ParallaxLayer>

        <ParallaxLayer offset={0.9} speed={0.1}>
          <div className="animation_layer " id="element03"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.25}>
          <About />
        </ParallaxLayer>
        <ParallaxLayer offset={1.25} speed={0.2}>
          <h1 id="hero_select_text">
            *With a front-end certificate{" "}
            <span id="accent_color">degree from META.</span>
          </h1>
        </ParallaxLayer>
        {/*THIRD PAGE*/}
        <ParallaxLayer offset={1.9} speed={0.6}>
          <h1 id="portfolio_title">Portfolio</h1>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1.4}
          speed={0.5}
          style={{ mixBlendMode: "difference" }}
        >
          <div className="animation_layer " id="element04"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={0.3}>
          <Portfolio
            title={"1 / 4 - Soapclub"}
            description={
              "SoapClub is a thoughtfully designed e-commerce project that emphasizes simplicity and user-centric design. The goal was to create a clean and intuitive shopping platform where users can effortlessly discover and purchase a range of high-quality soaps."
            }
            img={web01}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={2.3} speed={0.5}>
          <Portfolio
            title={"2 / 4 - Snake game"}
            description={"React, JS, HTML, CSS"}
            img={web02}
          />
        </ParallaxLayer>
        <ParallaxLayer offset={2.6} speed={0.3}>
          <Portfolio
            title={"3 / 4 - Party game"}
            description={"React, JS, HTML, CSS"}
            img={web03}
          />
        </ParallaxLayer>
        <ParallaxLayer offset={2.9} speed={0.2}>
          <Portfolio
            title={"4 / 4 - Weather App"}
            description={"React, JS, HTML, CSS"}
            img={web04}
          />
        </ParallaxLayer>
        <ParallaxLayer
          offset={3}
          speed={0.3}
          style={{ mixBlendMode: "difference" }}
        >
          <h1 id="github_title">
            Check out more on my <span id="accent_color">GitHub</span>
          </h1>
        </ParallaxLayer>
        <ParallaxLayer
          offset={2.9}
          speed={0.2}
          style={{ mixBlendMode: "difference" }}
        >
          <div className="animation_layer " id="element05"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={3.2} speed={0.2}>
          <Contact />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
