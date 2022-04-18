import React from "react";
import { Link } from "react-router-dom";
import "./Service.css";
const Service = ({ service }) => {
  const { name, price, image, details } = service;

  return (
    <div className="service">
      <img src={image} alt="" />
      <h4 className="mt-2 ">{name}</h4>
      <p className="price">Price:{price}</p>
      <p className="details">
        <small>{details}</small>
      </p>
      <Link to="/checkout">
        <button>Book</button>
      </Link>
    </div>
  );
};

export default Service;
