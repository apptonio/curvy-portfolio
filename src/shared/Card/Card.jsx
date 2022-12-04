import React from "react";
import "./Card.css";

const Card = ({image, title, date, location, description}) => {
  return (
    <div id="card" className="grow">
      <img src={image} alt="Card Image" />
      <div className="card-text">
      
        <h4 className="title">{title}</h4>
        <p className="tag">{location}</p>
        <p className="description">{description}</p>
        <p className="tag bottomItem">{date}</p>
      </div>
    </div>
  );
};

export default Card;
