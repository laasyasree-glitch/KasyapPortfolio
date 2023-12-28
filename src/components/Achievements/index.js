import { GiTrophyCup } from "react-icons/gi";
import "./index.css";
const Achievements = () => (
  <div>
    <h1>Achievements</h1>
    <div className="achievements-cont">
      <p className="ac">
        <GiTrophyCup className="trophy" />
        Ramanujan Young Researcher Awardee 2023 by Govt. of India
      </p>
      <p className="ac">
        <GiTrophyCup className="trophy" />
        Undergraduate Research Scholarship by TIFR-Bombay
      </p>
      <p className="ac">
        <GiTrophyCup className="trophy" />
        Best Undergraduate Research Student Award 2023
      </p>
      <p className="ac">
        <GiTrophyCup className="trophy" />
        ICAR-NAHEP 3.0 Third prize Winner
      </p>
      <p className="ac">
        <GiTrophyCup className="trophy" />
        Microsoft Imagine Cup 2022 Finalist
      </p>
      <p className="ac">
        <GiTrophyCup className="trophy" />
        Smart India Hackathon Winner
      </p>
    </div>
  </div>
);

export default Achievements;
