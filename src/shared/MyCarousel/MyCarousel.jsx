import React from "react";
import "./MyCarousel.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const FixedCarousel = Carousel.default? Carousel.default: Carousel

const MyCarousel = ({ card1, card2, card3 }) => {
  return (
    <div className="width">
      <FixedCarousel
        additionalTransfrom={0}
        arrows
        autoPlay
        autoPlaySpeed={3000}
        centerMode={false}
        className=""
        containerClass=""
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite={true}
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          mobile: {
            breakpoint: {
              max: 500,
              min: 0,
            },
            items: 1,
            partialVisibilityGutter: 30,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 500,
            },
            items: 2,
            partialVisibilityGutter: 30,
          },
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 2,
            partialVisibilityGutter: 40,
          },
        }}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        {card1}
        {card2}
        {card3}
      </FixedCarousel>
    </div>
  );
};

export default MyCarousel;
