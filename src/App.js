import "./App.css";
import Navigation from "./Navigation";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";
import Qualifications from "./Qualifications";

function App() {
  return (
    <Router>
      <div className="mt-3">
        <Navigation />
        <Home />
        <About />
        <Projects />
        <Qualifications />
        <Contact />
      </div>
    </Router>
  );
}

export default App;
