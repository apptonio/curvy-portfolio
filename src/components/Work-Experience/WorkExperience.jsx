import React from "react";
import MyCarousel from "../../shared/MyCarousel/MyCarousel";
import SectionHeader from "../../shared/SectionHeader/SectionHeader";
import "./WorkExperience.css";

const WorkExperience = () => {
  return (
    <section id="work-experience">


      
      <SectionHeader title={'Work experience'} />
      <MyCarousel />
    </section>
  );
};

export default WorkExperience;
