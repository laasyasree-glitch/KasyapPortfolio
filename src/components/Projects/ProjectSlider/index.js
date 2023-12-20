import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProjectItem from "../ProjectItem";
import "./index.css";

const ProjectSlider = (props) => {
  const { projectsList } = props;

  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 1,
    swipeToSlide: true,
    centerPadding: "0",
  };

  return (
    <Slider {...settings}>
      {projectsList.map((eachItem) => (
        <div key={eachItem.id}>
          <ProjectItem key={eachItem.id} details={eachItem} />
        </div>
      ))}
    </Slider>
  );
};

export default ProjectSlider;
