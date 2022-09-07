import React from "react";
import "./MyCarousel.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "../Card/Card";
import ag04 from "../../assets/images/ag04.jpeg";

const MyCarousel = () => {
  return (
    <div className="w-full">
      <Carousel
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
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 2,
            partialVisibilityGutter: 40,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
            partialVisibilityGutter: 30,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 1,
            partialVisibilityGutter: 30,
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
        <Card
            image = {ag04}
            title = {"Agency04s Devcademy"}
            location = {"Zagreb, Croatia"}
            description = {"Two month academy organized by Agency04. Won the best Flutter app award."}
          
        />
        <Card
          image = {ag04}
          title = {"Agency04s Devcademy"}
          location = {"Zagreb, Croatia"}
          description = {"2 month academy learning Flutter. Won the hackathon."}
        />
        <Card
          image = {ag04}
          title = {"Agency04s Devcademy"}
          location = {"Zagreb, Croatia"}
          description = {"2 month academy learning Flutter. Won the hackathon."}
        />
      </Carousel>
    </div>
  );
};

export default MyCarousel;
