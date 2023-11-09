import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProjectItem from "../ProjectItem";

import "./index.css";

const ProjectSlider = (props) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const { projectsList } = props;
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {projectsList.map((eachItem) => (
          <ProjectItem details={eachItem} key={eachItem.id} />
        ))}
      </Slider>
    </div>
  );
};

export default ProjectSlider;
