import { BsFillPersonVcardFill } from "react-icons/bs";
import { FaLaptop } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { BiSolidContact } from "react-icons/bi";
import { GiArchiveResearch } from "react-icons/gi";
import { GiTargetPrize } from "react-icons/gi";

import "./index.css";
const Header = () => (
  <nav>
    <div>
      <h1 className="name-portfolio">Varanasi Kasyap</h1>
    </div>

    <div>
      <ul id="navbar-larger">
        <li>
          <a href="#sectionBio">Biography</a>
        </li>

        <li>
          <a href="#sectionIntro">Know More</a>
        </li>
        <li>
          <a href="#sectionProjects">Research</a>
        </li>
        <li>
          <a href="#sectionAchievements">Achievements</a>
        </li>
        <li>
          <a href="#sectionResume">Resume</a>
        </li>
        <li>
          <a href="#sectionContact">Contact</a>
        </li>
      </ul>

      <ul id="navbar-mobile">
        <li>
          <a href="#sectionBio">
            <BsFillPersonVcardFill />
          </a>
        </li>

        <li>
          <a href="#sectionIntro">
            <FaLaptop />
          </a>
        </li>
        <li>
          <a href="#sectionProjects">
            <GiArchiveResearch className="head-projects" />
          </a>
        </li>
        <li>
          <a href="#sectionProjects">
            <GiTargetPrize className="head-projects" />
          </a>
        </li>

        <li>
          <a href="#sectionResume">
            <FaBook className="head-projects" />
          </a>
        </li>
        <li>
          <a href="#sectionContact">
            <BiSolidContact />
          </a>
        </li>
      </ul>
    </div>
  </nav>
);

export default Header;
