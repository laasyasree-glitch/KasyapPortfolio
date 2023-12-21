//import Popup from "reactjs-popup";
//import { IoMdClose } from "react-icons/io";
import "./index.css";
//import "reactjs-popup/dist/index.css";
//import { each } from "immer/dist/internal";
const PublicationModal = (props) => {
  const { publicationsList } = props;
  return (
    <ul className="publications">
      {publicationsList.map((each) => (
        <li className="publications-content">
          <img className="thumbnail" src={each.imageUrl} alt="imageUrl" />
          <div className="content">
            <h1 className="head">{each.heading}</h1>
            <p>
              Read More :{" "}
              <a href={each.link} className="link">
                {each.link}
              </a>
            </p>
            <p>{each.description}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};
export default PublicationModal;
