import "./App.css";
import Education from "./components/Education/Education";
import WorkExperience from "./components/Work-Experience/WorkExperience";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Spacer from "./shared/Spacer/Spacer";

function App() {
  return (
    <div className="app">
      <Hero />
      <a href="#education" className="sticky">
        Education
      </a>
      <a href="#work-experience">Work experience</a>
      <a href="#projects">Projects</a>
      <a href="#footer">Contact</a>
      <Spacer layer="layer1" />
      <Education />
      <Spacer layer="layer2" />
      <WorkExperience />
      <Spacer layer="layer1" />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
