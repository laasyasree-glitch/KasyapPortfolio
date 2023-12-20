import { Component } from "react";
import "./index.css";

const people = [
  {
    id: 1,
    name: "Dr. D Sumathi",
    images:
      "https://res.cloudinary.com/dxlyuzv7w/image/upload/v1703085625/1_yeepuc.png",
  },
  {
    id: 2,
    name: "Dr D Chandra Mohan",
    images:
      "https://res.cloudinary.com/dxlyuzv7w/image/upload/v1703085625/2_rabaca.png",
  },
  {
    id: 3,
    name: "Dr M S Jagadeesh",
    images:
      "https://res.cloudinary.com/dxlyuzv7w/image/upload/v1703085626/3_apc0a7.png",
  },
  {
    id: 4,
    name: "Dr Karthika Natarajan",
    images:
      "https://res.cloudinary.com/dxlyuzv7w/image/upload/v1703085626/4_q6pzzw.png",
  },
  {
    id: 5,
    name: "Dr Santanu Mandal",
    images:
      "https://res.cloudinary.com/dxlyuzv7w/image/upload/v1703085626/5_yyvoix.png",
  },
  {
    id: 6,
    name: "Dr Samaneh Mazaheri",
    images:
      "https://res.cloudinary.com/dxlyuzv7w/image/upload/v1703085628/6_pjd2mg.png",
  },
  {
    id: 7,
    name: "Dr Rahul Krishnan",
    images:
      "https://res.cloudinary.com/dxlyuzv7w/image/upload/v1703085627/7_etp8c3.png",
  },
  {
    id: 8,
    name: "Dr Pradeep Reddy",
    images:
      "https://res.cloudinary.com/dxlyuzv7w/image/upload/v1703085626/8_cahdcp.png",
  },
  {
    id: 9,
    name: "Dr. Sibi Chakkaravarthy",
    images:
      "https://res.cloudinary.com/dxlyuzv7w/image/upload/v1703085628/9_bjen3h.png",
  },
  {
    id: 10,
    name: "Dr. Anjali Gautam",
    images:
      "https://res.cloudinary.com/dxlyuzv7w/image/upload/v1703085627/10_rjkp19.png",
  },
];

class People extends Component {
  render() {
    return (
      <div className="people-main-container">
        <h1>Members Of the Team</h1>
        <ul className="people-container">
          {people.map((x) => (
            <li key={x.id} className="people">
              <img className="profile-img" src={x.images} />
              <p>{x.name}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default People;
