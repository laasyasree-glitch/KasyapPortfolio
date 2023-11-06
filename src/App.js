import Biography from "./components/Biography";
import "./App.css";
import Introduction from "./components/Introduction";
import People from "./components/People";
import Header from "./components/Header";
import { Component } from "react";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="content">
          <div id="sectionBio">
            <Biography />
          </div>
          <div id="sectionIntro">
            <Introduction />
          </div>
          <div id="sectionPeople">
            <People />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
