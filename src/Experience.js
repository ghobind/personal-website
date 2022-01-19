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
          Integrated app to set up quick meetings into sidebar, teams chat, and
          video conferencing of MS Teams by applying PHP and JavaScript with
          Google OAuth saving each user at least 3 minutes to set up each
          meeting
        </li>
        <li>
          Established wireframe for MS Teams Integration with InVision and
          prototyped design with Adobe XD resulting in a clear goal and
          increased productivity when implementing integration
        </li>
        <li>
          Revamped 90% of web app to become responsive to changes in screen
          sizes to make app more mobile friendly
        </li>
        <li>
          Triaged 7 bugs in responsive frontend app by applying knowledge in
          JavaScript to mitigate user complaints
        </li>
      </ul>
    </div>
  );
  const secondItemText = (
    <div className="mt-3 card-body-text">
      <ul>
        <li>
          Streamlined grading rubric and assisted professor in grading all
          assignments within 5 days of submission
        </li>
        <li>
          Guided more than 50 students with assignments through one-on-one
          office hours and lab sessions in JavaFX
        </li>
        <li>
          Pinpointed improvements in student’s programs to be inclusive of
          accessibility for people with disability
        </li>
      </ul>
    </div>
  );
  const thirdItemText = (
    <div className="mt-3 card-body-text">
      <ul>
        <li>
          Formulated automated unit tests through GTest to grade all homework
          submissions more efficiently by reducing grading time by 6 hours per
          assignment
        </li>
        <li>
          Co-led a lab session to go over course material and guide students
          through programming exercises
        </li>
        <li>
          Held one-on-one tutoring sessions and drop-in office hours to help
          more than 60 students with debugging and labs, or help prepare for
          tests in concepts such as inheritance, polymorphism, data structures,
          etc.
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
          "August 2021 - December 2021",
          "Mountain View, CA",
          firstItemText
        )}
        {displayCard(
          "Teaching Assistant for Graphical User Interfaces",
          "August 2020 - December 2021",
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
