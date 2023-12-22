import { IoIosMail } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { SiGooglescholar } from "react-icons/si";
import { IoLogoGithub } from "react-icons/io";
import { FaOrcid } from "react-icons/fa6";
import { MdAdsClick } from "react-icons/md";
import { MdAddCall } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaRegCopyright } from "react-icons/fa";

import "./index.css";

const Contact = () => (
  <div className="contact-container">
    <div className="contact-me">
      <h1 className="contact-header">Contact Me</h1>
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
      <p>{"       "}Let's Connect! Your message is just a click away :</p>

      <div className="icons-list">
        <p className="text">
          <a href="varanasikasyap@gmail.com">
            <IoIosMail className="icon" />
          </a>
        </p>

        <p className="text">
          <a href="https://www.linkedin.com/in/kasyap-varanasi-23334722a/">
            <FaLinkedin className="icon" />
          </a>
        </p>
        <p className="text">
          <a href="https://scholar.google.com/citations?user=aFHhXwoAAAAJ&hl=en">
            <SiGooglescholar className="icon" />
          </a>
        </p>
        <p className="text">
          <a href="https://github.com/Kasyap3">
            <IoLogoGithub className="icon" />
          </a>
        </p>
        <p className="text">
          <a href="https://orcid.org/0000-0002-5274-7144">
            <FaOrcid className="icon" />
          </a>
        </p>
      </div>
    </div>
    <div className="developer">
      <div>
        <h1 className="contact-header">Developer: Laasya Sree Kothamasu</h1>
        <p>
          Translating Visions into Code: Where Imagination Unfolds and
          Innovation Takes Flight!!!
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

      <div className="copyright">
        <p className="text">
          <FaRegCopyright className="icon" />
          {"  "}Copyright reserved Varanasi Kasyap, 2023
        </p>
      </div>
    </div>
  </div>
);

export default Contact;
