import React from "react";
import "./Card.css";
import { GoLocation } from "react-icons/go";
import { MdDateRange } from "react-icons/md";

const Card = ({ image, title, date, location, description }) => {
  return (
    <div id="card" className="grow">
      <img src={image} alt="Card Image" />
      <div className="card-text">
        <h4 className="title">{title}</h4>
        <p className="tag">
          <GoLocation size={12} className="icon" />
          &nbsp;&nbsp;{location}
        </p>
        <p className={`description ${!date ? 'bottomItem' : ''}`}>{description}</p>

        {date ? (
          <p className="tag bottomItem">
            <MdDateRange size={12} className="icon" />
            &nbsp;&nbsp;{date}
          </p>
        ) : null}
      </div>
    </div>
  );
};

export default Card;
