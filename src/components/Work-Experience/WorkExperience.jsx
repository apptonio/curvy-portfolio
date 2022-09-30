import React from "react";
import "./WorkExperience.css";

import MyCarousel from "../../shared/MyCarousel/MyCarousel";
import SectionHeader from "../../shared/SectionHeader/SectionHeader";
import Card from "../../shared/Card/Card";

import tutor from "../../assets/images/tutor.jpeg";
import cinnamon from "../../assets/images/cinnamon.png";

const WorkExperience = () => {
  return (
    <section id="work-experience">


      
      <SectionHeader title={'Work experience'} />
      <div className="work-experience-container">
      <div className='svg svg-icon2'></div>
      <MyCarousel
          card1={
            <Card
              image={tutor}
              title={"Teaching Assistant - Mobile Design"}
              location={"Dubrovnik, Croatia"}
              description={
                "Helped students create websites, hybrid & native apps with HTML, CSS, JS, React, Angular and Flutter."
              }
            />
          }
          card2={
            <Card
              image={cinnamon}
              title={"React Intern Developer"}
              location={"Zagreb, Croatia"}
              description={
                "Worked on completed version-controlled website projects. Worked with React, Angular, HTML, CSS, Git."
              }
            />
          }
          card3={
            null
          }
        />
      </div>
    </section>
  );
};

export default WorkExperience;
