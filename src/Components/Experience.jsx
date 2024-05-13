import React, { useState, useEffect } from "react";
import { Typography, Grid, Card, CardContent } from "@mui/material";
import { styled } from "@mui/material/styles";

const Heading = styled(Typography)(({ theme }) => ({
  position: "sticky",
  top: theme.spacing(4),
  textAlign: "left",
}));

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

const Experience = ({ data }) => {
  const [isHeadingSticky, setIsHeadingSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsHeadingSticky(true);
      } else {
        setIsHeadingSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={4}>
        <Heading
          variant="h5"
          sx={{ ...(isHeadingSticky && { position: "fixed", zIndex: 1 }) }}
        >
          Experience
        </Heading>
      </Grid>
      <Grid item xs={12} md={8}>
        {experienceData.map((item, index) => (
          <Card key={index} sx={{ margin: 1 }}>
            <CardContent>
              <Typography variant="h6">{item.title}</Typography>
              <Typography>{item.description}</Typography>
            </CardContent>
          </Card>
        ))}
      </Grid>
    </Grid>
  );
};

export default Experience;
