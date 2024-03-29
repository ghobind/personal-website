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
  const zeroItemText = (
    <div className="mt-3 card-body-text">
      <ul>
        <li>
          Automated cancellation fees by parsing receipts from third-party
          companies and directly entering to customer’s fee summary which saved
          the company at least $150 each time fees were missed when it was done
          manually
        </li>
        <li>
          Ported Coldfusion SQL query to Node.js endpoints to make code more
          readable for future developers
        </li>
        <li>
          Involved in redesigning CRM frontend to become more user-friendly
          using custom framework similar to React
        </li>
      </ul>
    </div>
  );
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
          prototyped design with Adobe XD resulting in a clear vision when
          implementing integration
        </li>
        <li>
          Revamped 90% of web app to become responsive to changes in screen
          sizes to make app more mobile friendly
        </li>
        <li>
          Triaged 7 bugs within 1 week in frontend app by applying knowledge in
          JavaScript to mitigate user complaints
        </li>
      </ul>
    </div>
  );
  const secondItemText = (
    <div className="mt-3 card-body-text">
      <ul>
        <li>
          Streamlined grading rubric and wrote Python scripts to accelerate
          grading assignments within 5 days
        </li>
        <li>
          Guided more than 50 students with assignments through one-on-one
          office hours and lab sessions in JavaFX
        </li>
        <li>
          Pinpointed improvements including audio cues of student’s programs to
          be accessible for people with disability
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
              <div className="text-muted card-body-subheader">{date}</div>
              <div className="card-body-subheader">{location}</div>
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
          "Software Engineer II at Amerisave",
          "August 2022 - Present",
          "Los Angeles, CA",
          zeroItemText
        )}
        {displayCard(
          "Software Engineer Intern at Teamcal.Ai",
          "August 2021 - December 2021",
          "Mountain View, CA",
          firstItemText
        )}
        {displayCard(
          "Teaching Assistant for Graphical User Interfaces",
          "August 2020 - December 2021",
          "Los Angeles, CA",
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
