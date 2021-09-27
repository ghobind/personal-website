import React, { useState } from "react";
import grocery from "./assets/projects/grocery.png";
import sf_sim from "./assets/projects/sf_sim.png";
import x8 from "./assets/projects/x8.jpeg";
import dueoh from "./assets/projects/dueoh.jpg";
import logo from "./assets/projects/logo.jpg";
import stock from "./assets/projects/stock_portfolio.png";
import ilearning from "./assets/projects/ilearning.png";
import parkour_start from "./assets/projects/parkour_start.jpg";
import pacman from "./assets/projects/pacman.jpg";
import mariokart from "./assets/projects/mario_kart.jpg";
import ProjectModal from "./ProjectModal";

export default function Projects() {
  const [isModalShown, setIsModalShown] = useState();
  const [heading, setHeading] = useState("");
  const [content, setContent] = useState("");
  const [img, setImg] = useState();
  const [webLink, setWebLink] = useState();
  const [srcLink, setSrcLink] = useState();
  const [tags, setTags] = useState();

  const data = [
    [
      {
        name: "Grocery Checklist",
        info: (
          <div>
            <div>
              • Developed a single page application with ReactJS that
              streamlines the process of grocery shopping and tracks user
              expenditure over time to help manage grocery budget
            </div>
            <div>
              • Utilized CRUD operations when making AJAX calls to JSON server
              to display purchases on past grocery trips
            </div>
            <div>
              • Prepared unit tests for components and functions with MirageJS
              to mitigate program-breaking errors
            </div>
          </div>
        ),
        image: grocery,
        websiteUrl: "https://ghobind-grocery-checklist.netlify.app/",
        sourceCodeUrl: "https://github.com/ghobind/grocery-checklist",
        languages: "ReactJS / JavaScript / AJAX / jQuery / HTML / CSS",
      },
      {
        name: "iLearning Platform Tools",
        info: <div>Write Description</div>,
        image: ilearning,
        websiteUrl: "None",
        sourceCodeUrl: "None",
        languages: "ReactJS / Node.js / JavaScript / AJAX ",
      },
      {
        name: "X8 Clothing iOS App",
        info: (
          <div>
            <div>
              • Prototyped an iOS application using Swift to display inventory
              of X8, a clothing brand based in Indonesia
            </div>
            <div>
              • Utilized Firebase to store user information and their favorited
              items
            </div>
            <div>
              • Integrated Google Maps into the application as part of a Store
              Locator feature
            </div>
          </div>
        ),
        image: x8,
        websiteUrl: "None",
        sourceCodeUrl: "None",
        languages: "Swift / Xcode / iOS / Firebase",
      },
      {
        name: "Stock Portfolio Management",
        info: (
          <div>
            <div>
              • Utilized Scrum with a team of 4 to make a website that provided
              the value of portfolio stocks over time
            </div>
            <div>
              • Leveraged HighCharts API to visualize and reflect real time
              stock price changes
            </div>
            <div>
              • Implemented endpoints and stored necessary data using MySQL
            </div>
          </div>
        ),
        image: stock,
        websiteUrl: "None",
        sourceCodeUrl: "None",
        languages: "Java / JavaScript / AJAX / jQuery / HTML / CSS",
      },
    ],
    [
      {
        name: "DueOh",
        info:
          "Students tend to miss out on their deadlines due to assignments being on different platforms like " +
          "Den Viterbi, Gradescope, Blackboard, Vocareum, etc. With DueOh, students can track the status of specific assignments" +
          "and are thus less likely to lose points from missing deadlines.",
        image: dueoh,
        websiteUrl: "None",
        sourceCodeUrl: "https://github.com/ghobind/DueOh",
        languages: "Java / Javascript / HTML / CSS",
      },

      {
        name: "Parkour's Edge",
        info: "Created a 3D game similar to Mirror's Edge. Do all sorts of cool stuff like wall jumping.",
        image: parkour_start,
        websiteUrl: "None",
        sourceCodeUrl: "None",
        languages: "C++",
      },
      {
        name: "Pac Man",
        info: "Utilized A* search to find shortest path to current position of Pacman",
        image: pacman,
        websiteUrl: "None",
        sourceCodeUrl: "None",
        languages: "C++",
      },
      {
        name: "Mario Kart",
        info: "Play a replica of Mario Kart's famous Rainbow Bridge versus an AI",
        image: mariokart,
        websiteUrl: "None",
        sourceCodeUrl: "None",
        languages: "C++",
      },
    ],
    [
      {
        name: "Personal Website",
        info: "Created website to showcase resume",
        image: logo,
        websiteUrl: "https://anthonyghobind.netlify.app",
        sourceCodeUrl: "https://github.com/ghobind/personal-website",
        languages: "ReactJS / HTML / CSS",
      },
      {
        name: "Starforce Simulator",
        info: "Simulates probability and costs of enhancing equipments with Starforce in the MMORPG Maplestory",
        image: sf_sim,
        websiteUrl: "None",
        sourceCodeUrl: "https://github.com/ghobind/starforce-simulator",
        languages: "C++",
      },
    ],
  ];

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

  function projectContent(
    name,
    info,
    image,
    websiteUrl,
    sourceCodeUrl,
    languages
  ) {
    return (
      <div
        className="logo mx-3"
        onClick={() => {
          showModal();
          setProjectInfo(
            name,
            info,
            image,
            websiteUrl,
            sourceCodeUrl,
            languages
          );
        }}
      >
        <div className="overlay">
          <div className="overlay-text">+</div>
        </div>
        <img className="project-icon" src={image} alt={`project ${name}`} />
      </div>
    );
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
        <div className="subprojects-container">
          {data.map((row) => {
            return (
              <div className="row justify-content-center align-items-center my-3">
                {row.map((project) => {
                  return (
                    <div className="">
                      {projectContent(
                        project.name,
                        project.info,
                        project.image,
                        project.websiteUrl,
                        project.sourceCodeUrl,
                        project.languages
                      )}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
