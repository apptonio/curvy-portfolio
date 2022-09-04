import React from "react";
import Carousel from "react-multi-carousel";
import "./MyCarousel.css";
import "react-multi-carousel/lib/styles.css";

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
      <CardCarousel className="carousel" responsive={responsive}>
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
      </CardCarousel>
    </div>
  );
};

export default MyCarousel;
