import "./index.css";
import { TbSquareRoundedNumber1Filled } from "react-icons/tb";
import { TbSquareRoundedNumber2Filled } from "react-icons/tb";
import { TbSquareRoundedNumber3Filled } from "react-icons/tb";
import { TbSquareRoundedNumber4Filled } from "react-icons/tb";
import { MdOutlinePublish } from "react-icons/md";

const patentList = [
  {
    id: 1,
    componentName: <TbSquareRoundedNumber1Filled size={25} />,
    heading:
      "ML Based System And Methods For The Detection Of Cardiac Events Using Image Processing",
    link:
      "https://drive.google.com/file/d/1PhrfK1Fb_e09_K04tDiko_o-BJ-PHgb0/view?usp=sharing",
  },
  {
    id: 2,
    componentName: <TbSquareRoundedNumber2Filled size={25} />,
    heading:
      "A System for measuring Intra-site Heterogeneity in a tumor using Artificial",
    link:
      "https://drive.google.com/file/d/1-GXnaR2EUlzOF8IaowYeRv6GYLz8jwRL/view?usp=drive_link",
  },
  {
    id: 3,
    componentName: <TbSquareRoundedNumber3Filled size={25} />,
    heading:
      "Smart Glass For Assisting Visually Impaired Users With Voice Assistance",
    link:
      "https://drive.google.com/file/d/1-_0u6ixRJtQvmic9ucPOOBaIlCkDnfvO/view?usp=sharing",
  },
  {
    id: 4,
    componentName: <TbSquareRoundedNumber4Filled size={25} />,
    heading: "The Mechanical Arm Tele-control System Based On Virtual Reality",
    link:
      "https://drive.google.com/file/d/1PhrfK1Fb_e09_K04tDiko_o-BJ-PHgb0/view?usp=sharing",
  },
];

const Patent = () => (
  <div className="patent-container">
    <h1>Patent</h1>
    <br />
    <ol className="patent-list">
      {patentList.map((each) => (
        <li key={each.id}>
          <p>
            {each.componentName} {"  "}
            {each.heading} {"  "}
            <a href={each.link}>
              <MdOutlinePublish className="patent-link" />
            </a>
          </p>
        </li>
      ))}
    </ol>
  </div>
);

export default Patent;
