import React from "react";
import profile from "./assets/profile/profile_pic.jpg";
export default function About() {
  return (
    <div className="container page-margins" id="about">
      <div className="about-text">
        <h3 className="header">About Me</h3>
        <p className="my-3">
          Hello! <br />
          I'm currently a masters student studying Computer Science at
          University of Southern California <br />
          I'm also a Software Engineer Intern at{" "}
          <a
            className="highlight-text"
            href="https://teamcal.ai/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Teamcal.Ai
          </a>{" "}
          <br />
        </p>
        <div className="wrapper">
          <div className="left-side">
            <div>
              <h3 className="subheader my-3 pt-3">Education</h3>
              <div>M.S. Computer Science, May 2022</div>
              <small className="text-muted">
                University of Southern California
              </small>
              <div className="mt-3">B.S. Computer Science, May 2021</div>
              <small className="text-muted">
                University of Southern California
              </small>
            </div>
            <div></div>
            <div>
              <h3 className="subheader my-3 pt-3">Technical Interests</h3>
              <div>
                Full Stack Web Development <br />
                iOS Development <br />
                UI/UX Design
              </div>
            </div>
            <div>
              <h3 className="subheader my-3 pt-3">Other Interests</h3>
              <div>
                My dogs |{" "}
                <a
                  className="highlight-text"
                  href="https://www.instagram.com/flynngolden_briecorgi/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Flynn & Brie{" "}
                </a>
                <br />
                Video Games |{" "}
                <a
                  className="highlight-text"
                  href="https://blitz.gg/valorant/profile/polse-0000"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Valorant{" "}
                </a>
                <br />
                Photography <br />
                Exotic cars <br />
                Exploring food places
              </div>
            </div>
          </div>
          <div className="right-side">
            <img className="profile-img" src={profile} alt="profile" />
          </div>
        </div>
      </div>
    </div>
  );
}
