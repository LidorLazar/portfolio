import React from "react";
import "../style/Navbar.css";

const Navbar = () => {
  return (
    <div className="nav-main">
      <nav>
        <img src={"logo.png"} alt={"logo-nav"} className={"logo"} />
        <ul>
          <li>
            <a href={"#about-me"}></a>About me
          </li>
          <li>
            <a href={"#projects"}>Projects</a>
          </li>
          <li>
            <a href={"#skills"}>Skills</a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/lidor-lazar"
              target="_blank"
              rel="Linkedin-url"
            >
              Linkedin
            </a>
          </li>

          <li>
            <a
              href={
                "http://api.whatsapp.com/send?phone=+972526006313&text=היי%20לידור%20,ראיתי את האתר שלך אשמח לדבר איתך &source=&data="
              }
            >
              Contact me
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
