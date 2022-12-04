import React from "react";
import "./Education.css";
import MyCarousel from "../../shared/MyCarousel/MyCarousel";
import SectionHeader from "../../shared/SectionHeader/SectionHeader";
import Card from "../../shared/Card/Card";

import notch from "../../assets/images/notch.jpg";
import rit from "../../assets/images/rit.jpeg";

const Education = () => {
  return (
    <section id="education">
      <SectionHeader title={"Education"} />

      <div className="education-container">
        <MyCarousel
          card1={
            <Card
              image={notch}
              title={"Notch Devcademy (Flutter)"}
              location={"Zagreb, Croatia"}
              description={
                "Two month academy in Flutter development, organized by Notch. Won the best Flutter app award."
              }
              date={"Jul 2022 - Aug 2022"}
            />
          }
          card2={
            <Card
              image={rit}
              title={"Rochester Institute of Technology"}
              location={"Dubrovnik, Croatia"}
              description={
                "Web & Mobile Computing. Graduated as Bachelor of Science, along with honors and awards. 3.7 / 4.0 GPA."
              }
              date={"Sep 2018 - May 2022"}
            />
          }
          card3={null}
        />
        <div className="svg svg-icon"></div>
      </div>
    </section>
  );
};

export default Education;
