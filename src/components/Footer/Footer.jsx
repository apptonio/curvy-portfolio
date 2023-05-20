import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <section id="footer">
      <div className="simple-spacer-2">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>

      <a
        className="cv-button grow"
        href="https://drive.google.com/file/d/16chBHQZATIQVfOf1dim0MXrDmZNLuE23/view?usp=sharing"
        download
      >
        View my CV here
      </a>
      <hr className="footer-line" />
      <a
        href="https://www.flaticon.com/free-icons/letter-a"
        className="grow"
        title="letter a icons"
      >
        Letter a icons created by Icon.doit - Flaticon
      </a>
      <a
        href="https://freesvgillustration.com/"
        className="grow"
        title="free illustrations"
      >
        Illustrations - freesvgillustration
      </a>
    </section>
  );
};

export default Footer;
