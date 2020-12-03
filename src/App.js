import "./App.css";
import Navigation from "./Navigation";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./Home";
import About from "./About";

function App() {
  return (
    <Router>
      <div className="mt-3">
        <Navigation />
        {/* <Switch> */}
        {/* <Route path="/" exact={true}> */}
        <Home />
        {/* </Route> */}
        {/* <Route path="/" exact={true}> */}
        <About />
        {/* </Route> */}
        {/* </Switch> */}
      </div>
    </Router>
  );
}

export default App;
