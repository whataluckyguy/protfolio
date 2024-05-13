import {
  Box,
  CssBaseline,
  ThemeProvider,
  ToggleButton,
  ToggleButtonGroup,
  createTheme,
} from "@mui/material";
import React from "react";
import { useState } from "react";
import AppAppBar from "./Components/AppAppBar";
import getLPTheme from "./getLPTheme";
import { AutoAwesomeRounded } from "@mui/icons-material";
import PropTypes from "prop-types";
import Hero from "./Components/Hero";
import Projects from "./Components/Projects";
import Socontact from "./Components/Socontact";
import Experience from "./Components/Experience";

function ToggleCustomTheme({ showCustomTheme, toggleCustomTheme }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100dvw",
        position: "fixed",
        bottom: 24,
      }}
    >
      <ToggleButtonGroup
        color="primary"
        exclusive
        value={showCustomTheme}
        onChange={toggleCustomTheme}
        aria-label="Platform"
        sx={{
          backgroundColor: "background.default",
          "& .Mui-selected": {
            pointerEvents: "none",
          },
        }}
      >
        <ToggleButton value>
          <AutoAwesomeRounded sx={{ fontSize: "20px", mr: 1 }} />
          Custom theme
        </ToggleButton>
        <ToggleButton value={false}>Material Design 2</ToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
}

// ToggleCustomTheme.propTypes = {
//   showCustomTheme: PropTypes.shape({
//     valueOf: PropTypes.func.isRequired,
//   }).isRequired,
//   toggleCustomTheme: PropTypes.func.isRequired,
// };

ToggleCustomTheme.propTypes = {
  showCustomTheme: PropTypes.bool.isRequired,
  toggleCustomTheme: PropTypes.func.isRequired,
};

const Landing = () => {
  const [mode, setMode] = useState("light");
  const [showCustomTheme, setShowCustomTheme] = useState(true);
  const LPtheme = createTheme(getLPTheme(mode));
  const defaultTheme = createTheme({
    palette: { mode },
  });

  const toggleColorMode = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const toggleCustomTheme = () => {
    setShowCustomTheme((prev) => !prev);
  };

  return (
    <ThemeProvider theme={showCustomTheme ? LPtheme : defaultTheme}>
      <CssBaseline />
      <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />
      <Hero />
      <Box sx={{ bgcolor: "background.default" }}>
        <Projects />
        <Experience />

        <Socontact />
      </Box>
    </ThemeProvider>
  );
};

export default Landing;
