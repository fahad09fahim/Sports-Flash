import React from "react";
import { Carousel } from "react-bootstrap";
import img1 from "../../../Images/Banner/image1.png";
import img2 from "../../../Images/Banner/image2.png";
import img3 from "../../../Images/Banner/image3.png";

const Banner = () => {
  return (
    <div>
      <Carousel fade>
        <Carousel.Item>
          <img className="d-block w-100" src={img1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img3} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
