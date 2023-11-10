import Biography from "./components/Biography";
import "./App.css";
import Introduction from "./components/Introduction";
import People from "./components/People";
import Header from "./components/Header";
import Projects from "./components/Projects";
import { Component } from "react";
import Publications from "./components/Publications";

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
          <div id="sectionProjects">
            <Projects />
            <Publications />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
