import React from "react";
import Header from "./Header";
import "./Hero.css";
import antonio from "../../assets/images/me-grayscale.jpeg";
import { SocialIcon } from "react-social-icons";

const Hero = () => {
  return (
    <section id="hero">
      <div className="h-padding">
        <img src={antonio} alt="Profile Avatar of Antonio Butigan" className="grow"/>
        <Header />
        <p className="fadein">A freshly graduated Web & Mobile developer.</p>
        <hr className="fadein line" />
        <div className="fadein social-icons">
          <SocialIcon
            url="https://www.linkedin.com/in/antonio-butigan/"
            className="grow"
          />
          <SocialIcon
            url="https://github.com/Antonio725"
            className="grow"
          />
          <SocialIcon
            url="https://antoniodev.contactin.bio"
            network="email"
            className="grow"
          />
        </div>
        
        <div className="fadein sections">
          <a className="grow" href="#education">education</a>
          <a className="grow" href="#work-experience">experience</a>
          <a className="grow" href="#projects">projects</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
