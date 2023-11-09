import { BsFillPersonVcardFill } from "react-icons/bs";
import { FaLaptop } from "react-icons/fa";
import { BsFillPeopleFill } from "react-icons/bs";
import { FaBook } from "react-icons/fa";
import { BsArrowUpRight } from "react-icons/bs";
import { IoMdPhotos } from "react-icons/io";
import { BiSolidContact } from "react-icons/bi";
import { GrProjects } from "react-icons/gr";
import "./index.css";
const Header = () => (
  <nav className="fixed-top">
    <div>
      <h1 className="header">Varanasi Kasyap</h1>
    </div>

    <div>
      <ul id="navbar-larger">
        <li>
          <a href="#sectionBio">Biography</a>
        </li>

        <li>
          <a href="#sectionIntro">Introduction</a>
        </li>

        <li>
          <a href="#sectionPeople">People</a>
        </li>
        <li>
          <a href="/">Arts_Poetry_Books</a>
        </li>
        <li>
          <a href="#sectionProjects">Projects</a>
        </li>
        <li>
          <a href="/">Patents</a>
        </li>
        <li>
          <a href="/">Photos</a>
        </li>
        <li>
          <a href="/">Contact</a>
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
          <a href="#sectionPeople">
            <BsFillPeopleFill />
          </a>
        </li>
        <li>
          <a href="/">
            <FaBook />
          </a>
        </li>
        <li>
          <a href="#sectionProjects">
            <GrProjects className="projects" />
          </a>
        </li>
        <li>
          <a href="/">
            <BsArrowUpRight />
          </a>
        </li>
        <li>
          <a href="/">
            <IoMdPhotos />
          </a>
        </li>
        <li>
          <a href="/">
            <BiSolidContact />
          </a>
        </li>
      </ul>
    </div>
  </nav>
);

export default Header;
