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
      <Education />
     

      <Spacer layer="layerblue" />
      <WorkExperience />
      <Spacer layer="layerbluer" />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
