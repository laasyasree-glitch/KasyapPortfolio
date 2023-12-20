import Popup from "reactjs-popup";
import { IoMdClose } from "react-icons/io";
import "./index.css";
import "reactjs-popup/dist/index.css";
//import { each } from "immer/dist/internal";

const PublicationModal = (props) => {
  const { publicationsList } = props;
  //   return (
  //     <ul className="row-type">
  //       {publicationsList.map((each) => (
  //         <li className="publication-item" key={each.id}>
  //           <div className="popup-container">
  //             <Popup
  //               modal
  //               trigger={
  //                 <button className="trigger-button" type="button">
  //                   <img
  //                     className="thumbnailUrl"
  //                     src={each.imageUrl}
  //                     alt="imageUrl"
  //                   />
  //                 </button>
  //               }
  //               className="popup-content"
  //             >
  //               {(close) => (
  //                 <div className="card">
  //                   <div>
  //                     <h1 className="head">{each.heading}</h1>
  //                     <a href={each.link}>{each.link}</a>
  //                     <p className="head">{each.description}</p>
  //                   </div>

  //                   <div className="closeButtonContainer">
  //                     <button
  //                       type="button"
  //                       className="trigger-button"
  //                       onClick={() => close()}
  //                     >
  //                       <IoMdClose class="icon" />
  //                     </button>
  //                   </div>
  //                 </div>
  //               )}
  //             </Popup>
  //           </div>
  //         </li>
  //       ))}
  //     </ul>
  //   );
  return (
    <ul>
      {publicationsList.map((each) => (
        <li>
          <img className="thumbnailUrl" src={each.imageUrl} alt="imageUrl" />
          <h1 className="head">{each.heading}</h1>
          <a href={each.link}>{each.link}</a>
          <p className="head">{each.description}</p>
        </li>
      ))}
    </ul>
  );
};
export default PublicationModal;
