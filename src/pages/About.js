import React from "react";
import "../pages/About.css";
export default function About() {
  return (
    <section className="about_container">
      <div className="about_content">
        <h1>Currently</h1>
        <p>
          Self-taught frontend developer
          <span className="accent_color"> (almost*)</span> with a passion for
          UI, UX and design.
          <br />
          <br />
          Creating web applications using JavaScript, Reactjs, CSS & HTML. I
          also build mobile applications using React Native. <br />
          <br />
          <span className="accent_color">
            {" "}
            Currently looking for a trainee-position.
          </span>
        </p>

        <h1>Past</h1>
        <p>
          Coming from a background in film I have experience in creative
          directing, cinematography, post-production and graphic design.
          <br /> <br />
          Skills include but are not limited to - all Adobe programs, grading,
          vfx and I can tell you fun facts about all industry cameras & film
          until you fall asleep.
        </p>
      </div>
    </section>
  );
}
