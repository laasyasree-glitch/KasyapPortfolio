import { IoIosMail } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { SiGooglescholar } from "react-icons/si";
import { IoLogoGithub } from "react-icons/io";
import { FaOrcid } from "react-icons/fa6";
import { MdAdsClick } from "react-icons/md";
import { MdAddCall } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";

import "./index.css";

const Contact = () => (
  <div className="contact-container">
    <div className="contact-me">
      <h1>Contact Me</h1>
      <p>Let's Connect! Your message is just a click away.</p>
      <p>
        <MdAddCall className="icon" />
        {"  "}
        +91 8074582936{" "}
      </p>
      <p>
        <FaLocationDot className="icon" />
        {"  "}
        Guntur, AP, India - 522005
      </p>
      <p>
        <a href="https://kasyapdocs1.wixsite.com/kasyap-website">
          <MdAdsClick className="icon" />
        </a>{" "}
        Know More
      </p>
      <p className="text">
        <a href="varanasikasyap@gmail.com">
          <IoIosMail className="icon" />
        </a>{" "}
        <span>
          Unlock Opportunities: Dive into my Inbox and Let Ideas Flow!
        </span>
      </p>

      <p className="text">
        <a href="https://www.linkedin.com/in/kasyap-varanasi-23334722a/">
          <FaLinkedin className="icon" />
        </a>{" "}
        <span> Connect me on LinkedIn!</span>
      </p>
      <p className="text">
        <a href="https://scholar.google.com/citations?user=aFHhXwoAAAAJ&hl=en">
          <SiGooglescholar className="icon" />
        </a>{" "}
        <span>
          Elevate Ideas, Not Just Pages: Discover my Scholarly Universe on
          Google Scholar!
        </span>
      </p>
      <p className="text">
        {" "}
        <a href="https://github.com/Kasyap3">
          <IoLogoGithub className="icon" />
        </a>{" "}
        <span>
          {" "}
          Code with Collaboration: Find my Digital Odyssey on GitHub!
        </span>
      </p>
      <p className="text">
        {" "}
        <a href="https://orcid.org/0000-0002-5274-7144">
          <FaOrcid className="icon" />
        </a>{" "}
        <span>
          ORCID Chronicles: Where My Research Story Intersects with
          Possibilities!
        </span>
      </p>
    </div>
    <div className="developer">
      <h1>Developer</h1>
      <p>
        Translating Visions into Code: Where Imagination Unfolds and Innovation
        Takes Flight!!!
      </p>
      <div className="icons-list">
        <p>
          <a href="laasyaibhubs@gmail.com">
            <IoIosMail className="icon" />
          </a>
        </p>
        <p className="text">
          <a href="https://www.linkedin.com/in/laasya-sree-kothamasu">
            <FaLinkedin className="icon" />
          </a>
        </p>
        <p className="text">
          <a href="https://github.com/laasyasree-glitch">
            <IoLogoGithub className="icon" />
          </a>
        </p>
        <p className="text">
          <a href="https://youtube.com/channel/UCMn9ilNvfgW9B0yBor5_FPw">
            <FaYoutube className="icon" />
          </a>
        </p>
      </div>
    </div>
  </div>
);

export default Contact;
