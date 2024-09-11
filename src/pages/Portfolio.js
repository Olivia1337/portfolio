import React from "react";
import "../pages/Portfolio.css";
export default function Portfolio({ title, description, img }) {
  return (
    <section className="portfolio_container">
      <div className="portfolio_content">
        <h1>{title}</h1>
        <div className="img_text_container">
          <div>
            <img src={img} />
          </div>
          <div>
            <p>{description}</p>
          </div>
          <div className="extra_container">
            <p>ReactJS</p> <p>Vanilla CSS</p>
          </div>
        </div>
      </div>
    </section>
  );
}
