import React from "react";
import "../style/Footer.css";

const Footer = () => {
  return (
    <div className="footer-main">
      <h2 className="title-footer">Lidor Lazar</h2>
      <div className="social">
        <a
          href="https://github.com/LidorLazar/"
          target="_blank"
          rel="Github-url"
        >
          <i className="fa-brands fa-github fa-lg"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/lidor-lazar"
          target="_blank"
          rel="Linkedin-url"
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a
          href="http://api.whatsapp.com/send?phone=+972526006313&text=היי%20לידור%20,ראיתי את האתר שלך אשמח לדבר איתך &source=&data="
          target="_blank"
          rel="whatsapp-url"
        >
          <i className="fa-brands fa-whatsapp"></i>
        </a>
      </div>
      <div className="reserved">
        © {new Date().getFullYear()} . All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
