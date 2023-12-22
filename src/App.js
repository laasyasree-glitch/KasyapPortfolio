import Biography from "./components/Biography";
import "./App.css";
import Introduction from "./components/Introduction";
import People from "./components/People";
import Header from "./components/Header";
import Projects from "./components/Projects";
import { Component } from "react";
import Publications from "./components/Publications";
import Patent from "./components/Patent";
import Arts from "./components/Arts";
import Contact from "./components/Contact";
class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <br />
        <br />
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
          <div id="sectionPatent">
            <Patent />
          </div>
          <div id="sectionArts">
            <Arts />
          </div>
        </div>
        <div id="sectionContact">
          <Contact />
        </div>
      </div>
    );
  }
}

export default App;
