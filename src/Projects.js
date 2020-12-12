import React from "react";

import grocery from "./assets/projects/grocery.png";

export default function Projects() {
  return (
    <div className="" id="projects">
      <h3 className="header">Projects</h3>
      <div className="container">
        <div className="row pt-3 pb-3">
          <div className="col logo">
            <img
              className="project-icon"
              src={grocery}
              alt="Grocery Checklist"
            />
          </div>
          <div className="col logo">
            <img
              className="project-icon"
              src={grocery}
              alt="Grocery Checklist"
            />
          </div>
          <div className="col logo">
            <img
              className="project-icon"
              src={grocery}
              alt="Grocery Checklist"
            />
          </div>
        </div>

        {/* <img
          className="project-icon mx-3"
          src={grocery}
          alt="Grocery Checklist"
        />
        <img
          className="project-icon mx-3"
          // src={grocery}
          alt="Starforce Simulator"
        />
        <img
          className="project-icon mx-3"
          // src={grocery}
          alt="X8 Clothing iOS App"
        />
      </div>
      <div className="pt-3 pb-3">
        <img
          className="project-icon mx-3"
          // src={grocery}
          alt="DueOh"
        />
        <img
          className="project-icon mx-3"
          // src={grocery}
          alt="Personal Website"
        /> */}
      </div>
    </div>
  );
}
