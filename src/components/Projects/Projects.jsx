import React from "react";
import "./Projects.css";
import MyCarousel from "../../shared/MyCarousel/MyCarousel";
import SectionHeader from "../../shared/SectionHeader/SectionHeader";
import Card from "../../shared/Card/Card";

import flutter from "../../assets/images/flutter.jpeg";
import ios from "../../assets/images/ios.jpeg";
import android from "../../assets/images/android.jpeg";


const Projects = () => {
  return (
    <section id="projects">
      
      <SectionHeader title={"Projects"}/>

      <div className="projects-container">
      
      <MyCarousel
          card1={
            <Card
              image={flutter}
              title={"Staycation - Flutter"}
              location={"Flutter - Figma - Swagger"}
              description={
                "Created a fully-functional accommodation booking app."
              }
            />
          }
          card2={
            <Card
              image={ios}
              title={"Pocket Apex - SwiftUI"}
              location={"iOS - SwiftUI - API"}
              description={
                "Created a companion app for the popular game Apex Legends."
              }
            />
          }
          card3={
            <Card
              image={android}
              title={"Flash Flix - Kotlin"}
              location={"Android - Kotlin - API"}
              description={
                "Created a movie database browsing application with filters similar to Netflix. "
              }
            />
          }
        />

      <div className='svg svg-icon3'></div>
      </div>


    </section>
  );
};

export default Projects;
