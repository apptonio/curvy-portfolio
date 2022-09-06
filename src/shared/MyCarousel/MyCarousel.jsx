import React from "react";
import Carousel from "react-multi-carousel";
import "./MyCarousel.css";
import "react-multi-carousel/lib/styles.css";
import Card from "../Card/Card";

const CardCarousel = Carousel.default ? Carousel.default : Carousel;

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const MyCarousel = () => {
  return (
    <div className="w-full">
      <CardCarousel className="carousel" responsive={responsive} >
        <Card />
        <Card />
        <Card />
      </CardCarousel>
    </div>
  );
};

export default MyCarousel;
