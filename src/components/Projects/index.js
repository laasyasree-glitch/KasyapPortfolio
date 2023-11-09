import "./index.css";
import { Component } from "react";
import ProjectSlider from "./ProjectSlider";
const projectList = [
  {
    id: 1,
    imageUrl:
      "https://res.cloudinary.com/dxlyuzv7w/image/upload/v1699502145/p1_lhnvcn.png",
    heading:
      "Design and Development of Autonomous Underwater Vehicle: Ocean Voyager",
    description:
      "Focused on creating smart algorithms for AUVs, enabling autonomous underwater vision-guided navigation. Worked on SIFT algorithm (Difference of Gaussians and Space Generation) to describe local features under water. Skills Used: Underwater robotics, Sensor integration, Control systems, System integration",
  },
   {
    id: 2,
    imageUrl:
      "https://res.cloudinary.com/dxlyuzv7w/image/upload/v1699509447/p2_h9rtej.png",
    heading:
      "Water to Cloud: Realtime River Monitoring System",
    description:
    "Encompasses setting up sensors in rivers, gathering data like water quality, temp., pH, and revealing correlations. Used fog computing to establish a seamless and efficient system, ensuring data reliability and timely insights. Skills Used: Cloud computing, Remote monitoring, Real-time visualization, GIS Mapping, System scalability."
  },
];

class Projects extends Component {
  render() {
    return <ProjectSlider projectsList={projectList} />;
  }
}

export default Projects;
