import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProjectItem from "../ProjectItem";

import "./index.css";

const ProjectSlider = (props) => {
  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const { projectsList } = props;
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
