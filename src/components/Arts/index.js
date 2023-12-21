import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

const Arts = () => (
  <div className="art-container">
    <h1>Arts_Poetry_Books</h1>
    <br />
    <Carousel data-bs-theme="light">
      <Carousel.Item className="art-img">
        <img
          className="art"
          src="https://res.cloudinary.com/dxlyuzv7w/image/upload/v1703175878/l1_uetylw.png"
          alt="img-1"
        />
      </Carousel.Item>

      <Carousel.Item className="art-img">
        <img
          className="art"
          src="https://res.cloudinary.com/dxlyuzv7w/image/upload/v1703175878/l2_njmgew.png"
          alt="img-2"
        />
      </Carousel.Item>

      <Carousel.Item className="art-img">
        <img
          className="art"
          src="https://res.cloudinary.com/dxlyuzv7w/image/upload/v1703175878/l3_ulhsx7.png"
          alt="img-3"
        />
      </Carousel.Item>
    </Carousel>
  </div>
);

export default Arts;
