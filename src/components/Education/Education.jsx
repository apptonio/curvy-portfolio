import React from "react";
import MyCarousel from "../../shared/MyCarousel/MyCarousel";
import SectionHeader from "../../shared/SectionHeader/SectionHeader";
import "./Education.css";
import ag04 from "../../assets/images/ag04.jpeg";
import Card from "../../shared/Card/Card";

const Education = () => {
  return (
    <section id="education">

      <SectionHeader title={"Education"} />

      <div className="education-container">
        <MyCarousel
          card1={
            <Card
              image={ag04}
              title={"Agency04s Devcademy"}
              location={"Zagreb, Croatia"}
              description={
                "Two month academy organized by Agency04. Won the best Flutter app award."
              }
            />
          }
          card2={
            <Card
              image={ag04}
              title={"Agency04s Devcademy"}
              location={"Zagreb, Croatia"}
              description={
                "Two month academy organized by Agency04. Won the best Flutter app award."
              }
            />
          }
          card3={
            <Card
              image={ag04}
              title={"Agency04s Devcademy"}
              location={"Zagreb, Croatia"}
              description={
                "Two month academy organized by Agency04. Won the best Flutter app award."
              }
            />
          }
        />
        <div className="svg svg-icon"></div>
      </div>
    </section>
  );
};

export default Education;
