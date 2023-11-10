import { Component } from "react";
import "./index.css";

const people = [
  {
    id: 1,
    name: "Dr. D Sumathi",
    images: null,
  },
  {
    id: 2,
    name: "Dr D Chandra Mohan",
    images: null,
  },
  {
    id: 3,
    name: "Dr M S Jagadeesh",
    images: null,
  },
  {
    id: 4,
    name: "Dr Karthika Natarajan",
    images: null,
  },
  {
    id: 5,
    name: "Dr Santanu Mandal",
    images: null,
  },
  {
    id: 6,
    name: "Dr Samaneh Mazaheri",
    images: null,
  },
  {
    id: 7,
    name: "Dr Rahul Krishnan",
    images: null,
  },
  {
    id: 8,
    name: "Dr Pradeep Reddy",
    images: null,
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
              <h2>{x.name}</h2>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default People;