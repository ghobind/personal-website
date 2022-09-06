import React from "react";
import code from "./assets/skills/code-solid.svg";
import web from "./assets/skills/chrome-brands.svg";
import appstore from "./assets/skills/app-store-ios-brands.svg";
import uikit from "./assets/skills/uikit-brands.svg";

export default function Skills() {
  function skillItem(img, skillType, skillDescription) {
    return (
      <div>
        <img className="skills-icon mx-auto" src={img} alt="languages" />
        <div className="skills-type">{skillType}</div>
        <div className="skills-text">{skillDescription}</div>
      </div>
    );
  }
  return (
    <div className="alt-body-color">
      <div className="skills-container page-margins" id="skills">
        <h3 className="header mb-5">Skills</h3>

        <div className="row align-items-center justify-content-center">
          <div className="col-sm text-center pb-3">
            {skillItem(
              code,
              "Programming Languages",
              "Python, C/C++, Java, JavaFX"
            )}
          </div>
          <div className="col-sm text-center offset-sm-1 pb-3">
            {skillItem(
              web,
              "Web Development",
              "React.js, Angular, Node.js, Typescript, JavaScript, jQuery, PHP, HTML/CSS, Firebase, SQL, Github, AWS, Heroku, Bootstrap, MaterialUI"
            )}
          </div>
          <div className="w-100"></div>
          <div className="col-sm text-center pt-3">
            {skillItem(
              appstore,
              "iOS Development",
              "Swift, Firebase, Google Maps API, WebKit, MapKit, Google SignIn"
            )}
          </div>
          <div className="col-sm text-center offset-sm-1">
            {skillItem(uikit, "UI/UX Design", "Figma, InVision, Adobe XD")}
          </div>
        </div>
      </div>
    </div>
  );
}
