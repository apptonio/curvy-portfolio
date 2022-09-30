import React from "react";
import "./Education.css";
import MyCarousel from "../../shared/MyCarousel/MyCarousel";
import SectionHeader from "../../shared/SectionHeader/SectionHeader";
import Card from "../../shared/Card/Card";

import ag04 from "../../assets/images/ag04.jpeg";
import rit from "../../assets/images/rit.jpeg";
import gimna from "../../assets/images/gimna.jpeg";

const Education = () => {
  return (
    <section id="education">
      <SectionHeader title={"Education"} />

      <div className="education-container">
        <MyCarousel
          card1={
            <Card
              image={ag04}
              title={"Agency04 Devcademy (Flutter)"}
              location={"Zagreb, Croatia"}
              description={
                "Two month academy in Flutter development, organized by Agency04. Won the best Flutter app award."
              }
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
