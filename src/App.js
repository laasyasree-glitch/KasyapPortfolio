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
import VisitorCount from "./components/VisitorCount";
class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <br />
        <br />
        <div className="whole-body">
          <div id="sectionBio" className="each-component">
            <VisitorCount />

            <Biography />
          </div>
          <div id="sectionIntro" className="each-component">
            <Introduction />
          </div>
          <div id="sectionPeople" className="each-component">
            <People />
          </div>
          <div id="sectionProjects" className="each-component">
            <Projects />
            <Publications />
            <Patent />
          </div>

          <div id="sectionArts" className="each-component">
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
