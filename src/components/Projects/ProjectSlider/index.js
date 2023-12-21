import React from "react";
import Carousel from "react-bootstrap/Carousel";
import ProjectItem from "../ProjectItem";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

const ProjectSlider = (props) => {
  const { projectsList } = props;

  return (
    <Carousel data-bs-theme="light">
      {projectsList.map((eachItem) => (
        <Carousel.Item key={eachItem.id}>
          <ProjectItem details={eachItem} />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ProjectSlider;
