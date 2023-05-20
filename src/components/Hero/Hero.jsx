import React from "react";
import Header from "./Header";
import "./Hero.css";
import antonio from "../../assets/images/me-grayscale.jpeg";
import { SocialIcon } from "react-social-icons";
import Alert from "../Alert";

const FixedSocialIcon = SocialIcon.default ? SocialIcon.default : SocialIcon;

const Hero = () => {
  return (
    <section id="hero">
      <Alert />
      <div className="h-padding">
        <img
          src={antonio}
          alt="Profile Avatar of Antonio Butigan"
          className="grow"
        />
        <Header />
        <p className="fadein">~ Flutter & React Developer ~</p>
        <hr className="fadein line" />
        <div className="fadein social-icons">
          <FixedSocialIcon
            url="https://www.linkedin.com/in/antonio-butigan/"
            className="grow"
          />
          <FixedSocialIcon url="https://github.com/apptonio" className="grow" />
          <FixedSocialIcon
            url="https://antoniodev.contactin.bio"
            network="email"
            className="grow"
          />
        </div>

        <div className="fadein sections">
          <a className="grow" href="#education">
            education
          </a>
          <a className="grow" href="#work-experience">
            experience
          </a>
          <a className="grow" href="#projects">
            projects
          </a>
        </div>

        <div className="simple-spacer">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
