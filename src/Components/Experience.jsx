import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from "@mui/lab";
import { Typography } from "@mui/material";
import React from "react";

const experienceData = [
  {
    title: "Software Engineer Intern",
    description:
      "Worked on developing web applications using React.js and Node.js.",
  },
  {
    title: "UI/UX Designer",
    description:
      "Designed user interfaces for mobile applications and conducted user research.",
  },
  {
    title: "Project Manager",
    description:
      "Led a team of developers in delivering projects on time and within budget.",
  },
  {
    title: "Frontend Developer",
    description:
      "Developed responsive web interfaces using HTML, CSS, and JavaScript frameworks.",
  },
];

const Experience = () => {
  return (
    <Timeline position="alternate-reverse" id="experience">
      {experienceData.map((exp, index) => (
        <TimelineItem key={index}>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="h6" component="span">
              {exp.title}
            </Typography>
            <Typography>{exp.description}</Typography>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
};

export default Experience;
