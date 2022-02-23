import "./App.css";
// import Navigation from "./Navigation";
import { BrowserRouter as Router } from "react-router-dom";
import Sidebar from "./Sidebar";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";
import Skills from "./Skills";
import Experience from "./Experience";

function App() {
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag("js", new Date());

  gtag("config", "G-MQE9H3DY04");
  return (
    <Router>
      <div className="">
        <Sidebar />
        {/* <Navigation /> */}
        <Home />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </Router>
  );
}

export default App;
