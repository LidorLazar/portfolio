import React from "react";
import "../style/AboutMe.css";

const AboutMe = () => {
  return (
    <div className="header-main" id="about-me">
      <div className="header">
        <div className="title">
          <h5>Hello I'm</h5>
          <h1>Lidor Lazar</h1>
          <small>Web Developer</small>
        </div>
        <div className="header-buttons">
          <a
            href="https://docs.google.com/document/d/1ZzAS3GnVHD8f6oio4SmQXactSoD2qmwF/edit?usp=share_link&ouid=102754899701068023754&rtpof=true&sd=true"
            target="_blank"
            rel="CV"
          >
            Dwonload CV
          </a>
        </div>
      </div>
      <a href={"#projects"} className="scroll-down">
        <i className="fa-sharp fa-solid fa-chevrons-down fa-bounce">
          Scroll Down
        </i>
      </a>
    </div>
  );
};

export default AboutMe;
