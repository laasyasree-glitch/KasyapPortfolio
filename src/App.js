import Biography from "./components/Biography";
import "./App.css";
import Introduction from "./components/Introduction";
import Header from "./components/Header";
import Projects from "./components/Projects";
import { Component } from "react";
import Publications from "./components/Publications";
import Patent from "./components/Patent";
import Contact from "./components/Contact";
import Achievements from "./components/Achievements";
import PDFViewer from "./components/PDFReader";
class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <br />
        <br />
        <div className="whole-body">
          <div id="sectionBio" className="each-component">
            <Biography />
          </div>
          <div id="sectionIntro" className="each-component">
            <Introduction />
          </div>

          <div id="sectionProjects" className="each-component">
            <Projects />
            <Publications />
            <Patent />
          </div>

          {/* <div id="sectionArts" className="each-component">
            <Arts />
          </div> */}
          <div id="sectionAchievements" className="each-component">
            <Achievements />
          </div>
          <div id="sectionResume" className="each-component">
            <PDFViewer />
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
