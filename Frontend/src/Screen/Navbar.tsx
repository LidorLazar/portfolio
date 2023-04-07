import React from "react";
import "../Style/Navbar.css";

const Navbar = () => {
  return (
    <div className="nav-main">
      <nav>
        <img src={"logo.png"} alt={"logo-nav"} className={"logo"} />
        <ul>
          <li>
            <a href={"#"}></a> Home
          </li>
          <li>
            <a href={"#"}></a>About me
          </li>
          <li>
            <a href={"#"}></a>Linkedin
          </li>
          <li>
            <a href={"#"}></a>Projects
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