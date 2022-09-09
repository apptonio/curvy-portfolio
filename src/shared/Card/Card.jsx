import React from "react";
import "./Card.css";

const Card = ({image, title, location, description}) => {
  return (
    <div id="card" className="grow">
      <img src={image} alt="Card Image" />
      <div className="card-text">
        <h4 className="title">{title}</h4>
        <p className="location">{location}</p>
        <p className="description">{description}</p>
      </div>
    </div>
  );
};

export default Card;
