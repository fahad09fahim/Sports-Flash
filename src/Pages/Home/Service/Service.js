import React from "react";
import "./Service.css";
const Service = ({ service }) => {
  const { name, price, image, details } = service;
  return (
    <div className="service">
      <img src={image} alt="" />
      <h4 className="mt-2 ">{name}</h4>
      <p>Price:{price}</p>
      <p className="details">
        <small>{details}</small>
      </p>
      <button>Book</button>
    </div>
  );
};

export default Service;
