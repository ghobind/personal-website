import React, { useState } from "react";

import grocery from "./assets/projects/grocery.png";
import ProjectModal from "./ProjectModal";

export default function Projects() {
  const [isModalShown, setIsModalShown] = useState();
  const [heading, setHeading] = useState("");
  const [content, setContent] = useState("");
  const [img, setImg] = useState();
  const [webLink, setWebLink] = useState();
  const [srcLink, setSrcLink] = useState();

  function hideModal() {
    setIsModalShown(false);
  }
  function showModal() {
    setIsModalShown(true);
  }
  function setProjectInfo(heading, content, img, webLink, srcLink) {
    setHeading(heading);
    setContent(content);
    setImg(img);
    setWebLink(webLink);
    setSrcLink(srcLink);
  }
  return (
    <div className="" id="projects">
      {isModalShown && (
        <ProjectModal
          onClose={hideModal}
          heading={heading}
          content={content}
          img={img}
          webLink={webLink}
          srcLink={srcLink}
        />
      )}
      <h3 className="header">Projects</h3>
      <div className="container mb-3">
        <div className="row justify-content-center mb-3">
          <div
            className="logo mx-3"
            onClick={() => {
              showModal();
              setProjectInfo(
                "Grocery Checklist",
                "Keeps track of expenditure in groceries over time",
                grocery,
                "https://ghobind-grocery-checklist.netlify.app/",
                "https://github.com/ghobind/grocery-checklist"
              );
            }}
          >
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
