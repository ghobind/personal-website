import React from "react";

import grocery from "./assets/projects/grocery.png";

export default function Projects() {
  return (
    <div className="" id="projects">
      <h3 className="header">Projects</h3>
      <div className="container mb-3">
        <div className="row justify-content-center mb-3">
          <div className="logo mx-3">
            <div className="overlay">
              <div className="overlay-text">+</div>
            </div>
            <img
              className="project-icon"
              src={grocery}
              alt="Grocery Checklist"
            />
          </div>
          <div className="logo mx-3">
            <div className="overlay">
              <div className="overlay-text">+</div>
            </div>
            <img
              className="project-icon"
              src={grocery}
              alt="Grocery Checklist"
            />
          </div>
          <div className="logo mx-3">
            <div className="overlay">
              <div className="overlay-text">+</div>
            </div>
            <img
              className="project-icon"
              src={grocery}
              alt="Grocery Checklist"
            />
          </div>
        </div>
        <div className="row justify-content-center mb-3">
          <div className="logo mx-3">
            <div className="overlay">
              <div className="overlay-text">+</div>
            </div>
            <img
              className="project-icon"
              src={grocery}
              alt="Grocery Checklist"
            />
          </div>
          <div className="logo mx-3">
            <div className="overlay">
              <div className="overlay-text">+</div>
            </div>
            <img
              className="project-icon"
              src={grocery}
              alt="Grocery Checklist"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
