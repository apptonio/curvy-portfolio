import React from "react";
import "./WorkExperience.css";

import MyCarousel from "../../shared/MyCarousel/MyCarousel";
import SectionHeader from "../../shared/SectionHeader/SectionHeader";
import Card from "../../shared/Card/Card";

import tutor from "../../assets/images/tutor.jpeg";
import cinnamon from "../../assets/images/cinnamon.png";
import notch from "../../assets/images/notch.jpg";

const WorkExperience = () => {
  return (
    <section id="work-experience">



      <SectionHeader title={'Work experience'} />
      <div className="work-experience-container">
        <div className='svg svg-icon2'></div>
        <MyCarousel
          card1={
            <Card
              image={notch}
              title={"Flutter Developer"}
              date={"Oct 2022 - Present"}
              location={"Zagreb, Croatia"}
              description={
                "Working full-time as a Flutter Developer @ Notch. Expanding my knowledge through work day by day."
              }
            />
          }
          card2={
            <Card
              image={tutor}
              title={"Teaching Assistant - Mobile Design"}
              date={"Jan 2022 - May 2022"}
              location={"Dubrovnik, Croatia"}
              description={
                "Helped students create websites, hybrid & native apps with HTML, CSS, JS, React, Angular and Flutter."
              }
            />
          }
          card3={
            <Card
              image={cinnamon}
              title={"React Intern Developer"}
              date={"May 2021 - Aug 2021"}
              location={"Zagreb, Croatia"}
              description={
                "Worked on completed version-controlled website projects. Worked with React, Angular, HTML, CSS, Git."
              }
            />
          }
        />
      </div>
    </section>
  );
};

export default WorkExperience;
