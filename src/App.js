import "./App.css";
import AnimatedCursor from "react-animated-cursor";
import Home from "./pages/Home";
function App() {
  return (
    <section className="wheel-picker-container">
      <Home />
      <AnimatedCursor
        innerSize={20}
        outerSize={25}
        color="153, 27, 27"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
      />
    </section>
  );
}

export default App;
