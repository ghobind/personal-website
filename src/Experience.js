import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from "@mui/lab";
import { CardContent } from "@mui/material";

import React from "react";
import { Card } from "react-bootstrap";

export default function Experience() {
  const firstItemText = (
    <div className="mt-3 card-body-text">
      <ul>
        <li>
          Integrate app to set up quick meetings into sidebar, teams or group
          chat, and video conferencing of <strong>MS Teams</strong> using{" "}
          <strong>PHP</strong> and <strong>JavaScript</strong>
        </li>
        <li>
          Construct wireframe for MS Teams Integration features using{" "}
          <strong>InVision</strong> and prototype design with{" "}
          <strong>Adobe XD</strong>
        </li>
        <li>
          Apply knowledge in <strong>jQuery</strong> and{" "}
          <strong>JavaScript</strong> to identify and triage bugs in responsive
          frontend web app
        </li>
      </ul>
    </div>
  );
  const secondItemText = (
    <div className="mt-3 card-body-text">
      <ul>
        <li>
          Assist professor in lecture to teach GUI concepts to students using{" "}
          <strong>JavaFX</strong> and grade assignments
        </li>
        <li>Hold one-on-one office hours to help students with assignments </li>
        <li>
          Pinpoint ways to improve program’s user experience like considering
          accessibility for people with disability
        </li>
      </ul>
    </div>
  );
  const thirdItemText = (
    <div className="mt-3 card-body-text">
      <ul>
        <li>
          Developed automated unit tests using <strong>GTest</strong> to grade
          all homework submissions more efficiently
        </li>
        <li>
          Co-led a lab session to go over course material and guide students
          through programming exercises
        </li>
        <li>
          Held one-on-one tutoring sessions and drop-in office hours to help
          students with debugging and labs, or help prepare for tests in
          concepts such as inheritance, polymorphism, data structures, etc.
        </li>
      </ul>
    </div>
  );

  function displayCard(header, date, location, text) {
    return (
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="inherit" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Card variant="outlined">
            <CardContent className="card-body-color text-left">
              <div className="card-body-header">{header}</div>
              <div className="row">
                <div className="col text-muted card-body-subheader">{date}</div>
                <div className="col text-right card-body-subheader">
                  {location}
                </div>
              </div>
              {text}
            </CardContent>
          </Card>
        </TimelineContent>
      </TimelineItem>
    );
  }

  return (
    <div className="experience-container page-margins" id="experience">
      <h3 className="header mb-5">Work Experience</h3>

      <Timeline position="alternate">
        {displayCard(
          "Software Engineer Intern at Teamcal.Ai",
          "August 2021 - Present",
          "Mountain View, CA",
          firstItemText
        )}
        {displayCard(
          "Teaching Assistant for Graphical User Interfaces",
          "August 2020 - Present",
          "Los Angeles , CA",
          secondItemText
        )}
        {displayCard(
          "Course Producer for Data Structures and Object Oriented Design",
          "May 2021 - August 2021",
          "Los Angeles, CA",
          thirdItemText
        )}
      </Timeline>
    </div>
  );
}
