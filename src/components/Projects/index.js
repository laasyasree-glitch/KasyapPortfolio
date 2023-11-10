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
      "Focused on creating smart algorithms for AUVs, enabling autonomous underwater vision-guided navigation. Worked on SIFT algorithm (Difference of Gaussians and Space Generation) to describe local features under water.",
    skillsUsed:
      "Underwater robotics, Sensor integration, Control systems, System integration",
  },
  {
    id: 2,
    imageUrl:
      "https://res.cloudinary.com/dp4e9sqxj/image/upload/v1699596396/p2-1_vuepux.png",
    heading: "Water to Cloud: Realtime River Monitoring System",
    description:
      "Encompasses setting up sensors in rivers, gathering data like water quality, temp., pH, and revealing correlations. Used fog computing to establish a seamless and efficient system, ensuring data reliability and timely insights.",
    skillsUsed:
      "Cloud computing, Remote monitoring, Real-time visualization, GIS Mapping, System scalability.",
  },
  {
    id: 3,
    imageUrl:
      "https://res.cloudinary.com/dp4e9sqxj/image/upload/v1699595349/p3_tqrlpw.png",
    heading:
      "AI-enhanced Breast Health Assessment: Advancing Early Detection and Care",

    description:
      "DL model that empowers timely breast health detection, and monitoring with Hadamard approach and LSTMs. Developed circularly polarized wearable sensor for monitoring breast health all the time and monitoring women.",
    skillsUsed: null,
  },
  {
    id: 4,
    imageUrl:
      "https://res.cloudinary.com/dp4e9sqxj/image/upload/v1699595702/p4_isgji3.png",
    heading: "Frontier Forge: Dynamic 3D Scene Generation in Virtual Reality",
    description:
      "Created immersive VR environments through AI and generating dynamic 3D scenes enhancing VR interactions. Incorporating 3D Artificial Intelligence models with AR and VR sets with motion-based audio and music generation.",
  },
  {
    id: 5,
    imageUrl:
      "https://res.cloudinary.com/dp4e9sqxj/image/upload/v1699595959/p5_hxpijq.png",
    heading: "Contactless Heart Rate monitoring using Hartley Transform and AI",
    description:
      "Applied Hartley Transform for remote heart rate monitoring, for analyzing cardiovascular and systolic rhythms. Utilised Eulerian Video method and GoogleNet architecture to fabricate accurate non-inavsive heart rate sensor.",
  },
];

class Projects extends Component {
  render() {
    return (
      <div>
        <h1 className="projects-heading">Projects</h1>
        <ProjectSlider projectsList={projectList} />
      </div>
    );
  }
}

export default Projects;
