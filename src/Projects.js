import React, { useState } from "react";
import grocery from "./assets/projects/grocery.png";
import sf_sim from "./assets/projects/sf_sim.png";
import x8 from "./assets/projects/x8.jpeg";
import dueoh from "./assets/projects/dueoh.jpg";
import logo from "./assets/projects/logo.jpg";
import ProjectModal from "./ProjectModal";

export default function Projects() {
  const [isModalShown, setIsModalShown] = useState();
  const [heading, setHeading] = useState("");
  const [content, setContent] = useState("");
  const [img, setImg] = useState();
  const [webLink, setWebLink] = useState();
  const [srcLink, setSrcLink] = useState();
  const [tags, setTags] = useState();

  function hideModal() {
    setIsModalShown(false);
  }
  function showModal() {
    setIsModalShown(true);
  }
  function setProjectInfo(heading, content, img, webLink, srcLink, tags) {
    setHeading(heading);
    setContent(content);
    setImg(img);
    setWebLink(webLink);
    setSrcLink(srcLink);
    setTags(tags);
  }
  return (
    <div className="alt-body-color">
      <div className="projects-container page-margins" id="projects">
        {isModalShown && (
          <ProjectModal
            onClose={hideModal}
            heading={heading}
            content={content}
            img={img}
            webLink={webLink}
            srcLink={srcLink}
            tags={tags}
          />
        )}
        <h3 className="header mb-5">Projects</h3>
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
                  "https://github.com/ghobind/grocery-checklist",
                  "ReactJS / HTML / CSS"
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
            <div
              className="logo mx-3"
              onClick={() => {
                showModal();
                setProjectInfo(
                  "Starforce Simulator",
                  "Simulates probability and costs of enhancing equipments with Starforce in the MMORPG Maplestory",
                  sf_sim,
                  "None",
                  "https://github.com/ghobind/starforce-simulator",
                  "C++"
                );
              }}
            >
              <div className="overlay">
                <div className="overlay-text">+</div>
              </div>
              <img
                className="project-icon"
                src={sf_sim}
                alt="Starforce Simulator"
              />
            </div>
            <div
              className="logo mx-3"
              onClick={() => {
                showModal();
                setProjectInfo(
                  "X8 Clothing iOS App",
                  "An app to browse clothing from X8 clothing",
                  x8,
                  "None",
                  "None",
                  "Swift / Xcode / iOS"
                );
              }}
            >
              <div className="overlay">
                <div className="overlay-text">+</div>
              </div>
              <img
                className="project-icon"
                src={x8}
                alt="X8 Clothing iOS App"
              />
            </div>
          </div>
          <div className="container mb-3 mt-4">
            <div className="row justify-content-center mb-3">
              <div
                className="logo mx-3"
                onClick={() => {
                  showModal();
                  setProjectInfo(
                    "DueOh",
                    "Students tend to miss out on their deadlines due to assignments being on different platforms like " +
                      "Den Viterbi, Gradescope, Blackboard, Vocareum, etc. With DueOh, students can track the status of specific assignments" +
                      "and are thus less likely to lose points from missing deadlines.",
                    dueoh,
                    "None",
                    "https://github.com/ghobind/DueOh",
                    "Java / Javascript / HTML / CSS"
                  );
                }}
              >
                <div className="overlay">
                  <div className="overlay-text">+</div>
                </div>
                <img className="project-icon" src={dueoh} alt="DueOh" />
              </div>
              <div
                className="logo mx-3"
                onClick={() => {
                  showModal();
                  setProjectInfo(
                    "Personal Website",
                    "Created website to showcase resume",
                    logo,
                    "https://anthonyghobind.netlify.app",
                    "https://github.com/ghobind/personal-website",
                    "ReactJS / HTML / CSS"
                  );
                }}
              >
                <div className="overlay">
                  <div className="overlay-text">+</div>
                </div>
                <img
                  className="project-icon"
                  src={logo}
                  alt="Personal Website"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
