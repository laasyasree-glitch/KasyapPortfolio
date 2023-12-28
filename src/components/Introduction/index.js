import "./index.css";
import { CiLocationOn } from "react-icons/ci";
import { GiDuration } from "react-icons/gi";

const experienceList = [
  {
    id: 1,
    name: "Mitacs",
    title: "Mitacs GRI Intern",
    caption:
      "University of Toronto - Dept. of Computer Science (Guided by - Rahul G. Krishnan)",
    p1:
      "Surveyed on various methods to evaluate the AI-based breast cancer detection and constructed CancLite.",
    p2:
      "Developed a simple technique requiring less computation for breast cancer detection with good accuracy.",
    duration: "Jun 2023 - Aug 2023",
    location: "Toronto, Canada",
    img_url:
      "https://res.cloudinary.com/dxlyuzv7w/image/upload/v1703746080/mitacs_colour_iay5vu.jpg",
  },
  {
    id: 2,
    name: "Harvard Logo",
    title: "Winter Research Intern (Hybrid)",
    caption:
      "Harvard School Of Engineering And Applied Sciences (Guided by - Trishan Panch)",
    p1:
      "Conceptualized a novel comprehensive gene panel specifically for early-stage colorectal cancer detection.",
    p2:
      "Analyzed gene expression patterns in a large cohort of individuals using hybrid algorithms.",
    duration: "Dec 2022 - March 2023",
    location: "Cambridge, MA",
    img_url:
      "https://res.cloudinary.com/dxlyuzv7w/image/upload/v1703746074/harward_n9zdvz.png",
  },
  {
    id: 3,
    name: "Apple Logo",
    title: "Applied AI Intern (Remote)",
    caption: "Apple (AI/ML Team)",
    p1:
      "Modeled a compact deep-learning-based approach for watch to predict cardiac arrest using raw ECG data.",
    p2:
      "Reviewed various existing Hybrid models used for cardiac activity recognition and published a research paper.",
    duration: "Dec 2022 - March 2023",
    location: "Cupertino, CA",
    img_url:
      "https://res.cloudinary.com/dxlyuzv7w/image/upload/v1703746074/apple_bqcqwd.png",
  },
  {
    id: 4,
    name: "IIIT SriCity Logo",
    title: "Junior Research Fellow",
    caption:
      "IIIT SriCity - Dept. of Computer Science (Guided by - Chandra Mohan D)",
    p1:
      "Provided an efficacious method for recognising significant psychiatric illnesses using EEG patterns.",
    p2:
      "Capitalised rs-EEG as a biomarker for psychological disorders identification in deep learning algorithms.",
    duration: "Jun 2022 - Nov 2022",
    location: "Varanasi, India",
    img_url:
      "https://res.cloudinary.com/dxlyuzv7w/image/upload/v1703746074/IIIT_SriCity_l9ass8.png",
  },
  {
    id: 5,
    name: "Protohus.io Logo",
    title: "Deep Learning Intern",
    caption: "R and D at Protohus.io (Indian Startup)",
    p1:
      "Investigated the association between musical aspects such melody, rhythm and harmony with human emotions.",
    p2:
      "Innovated techniques for producing music in real-time that change based on emotional changes detected in EEG.",
    duration: "Jan 2022 - Aug 2022",
    location: "Chennai, India",
    img_url:
      "https://res.cloudinary.com/dxlyuzv7w/image/upload/v1703746093/R_and_D_at_Protohus.io_Indian_Startup_yvcwdk.jpg",
  },
];
const Introduction = () => (
  <div>
    <h1>Experience</h1>
    <ul className="intro-container">
      {experienceList.map((each) => (
        <li className="intro-description" key={each.id}>
          <div className="image-cont">
            <img className="intro-image" src={each.img_url} alt={each.name} />
            <h2 className="title">{each.title}</h2>
          </div>

          <p>{each.caption}</p>
          <p>
            <GiDuration />
            {"  "}
            {each.duration}
          </p>
          <p>
            <CiLocationOn /> {"  "}
            {each.location}
          </p>
          <ol>
            <li>{each.p1}</li>
            <li>{each.p2}</li>
          </ol>
        </li>
      ))}
    </ul>
  </div>
);

export default Introduction;
