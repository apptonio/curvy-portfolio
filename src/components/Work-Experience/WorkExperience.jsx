import React from "react";
import MyCarousel from "../../shared/MyCarousel/MyCarousel";
import SectionHeader from "../../shared/SectionHeader/SectionHeader";
import "./WorkExperience.css";

const WorkExperience = () => {
  return (
    <section id="work-experience">


      
      <SectionHeader title={'Work experience'} isEducation={false} />
      <div className="work-experience-container">
      <div className='svg svg-icon2'></div>
      <MyCarousel />
      </div>
    </section>
  );
};

export default WorkExperience;
