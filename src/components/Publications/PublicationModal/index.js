//import Popup from "reactjs-popup";
//import { IoMdClose } from "react-icons/io";
import "./index.css";
//import "reactjs-popup/dist/index.css";
//import { each } from "immer/dist/internal";
import { FiPaperclip } from "react-icons/fi";

const PublicationModal = (props) => {
  const { publicationsList } = props;
  return (
    <ul className="publications">
      {publicationsList.map((each) => (
        <li className="publications-content" key={each.id}>
          <img className="thumbnail" src={each.imageUrl} alt="imageUrl" />
          <div className="content">
            <h1 className="head">
              {each.heading}
              {"  "}
              <a href={each.link} className="link">
                <FiPaperclip />
              </a>
            </h1>

            <p>{each.description}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};
export default PublicationModal;
