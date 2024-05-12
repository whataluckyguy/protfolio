import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  MenuItem,
  Toolbar,
  Typography,
  Divider,
} from "@mui/material";
import React, { useState } from "react";
import ToggleColorMode from "./ToggleColorMode";
import { Menu } from "@mui/icons-material";
import PropTypes from "prop-types";

const AppAppBar = ({ mode, toggleColorMode }) => {
  const [open, setOpen] = useState(false);
  const toggleDrawer = (newOpen) => {
    setOpen(newOpen);
  };

  const scrollToSection = (sectionID) => {
    const sectionElement = document.getElementById(sectionID);
    const offset = 128;
    if (sectionElement) {
      const targetScroll = sectionElement.offsetTop - offset;
      sectionElement.scrollIntoView({ behavior: "smooth" });
      window.scrollTo({
        top: targetScroll,
        behavior: "smooth",
      });
      setOpen(false);
    }
  };

  return (
    <div className="appbar">
      <AppBar
        position="fixed"
        sx={{
          boxShadow: 0,
          bgcolor: "transparent",
          backgroundImage: "none",
          mt: 2,
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            variant="regular"
            sx={(theme) => ({
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexShrink: 0,
              borderRadius: "999px",
              bgcolor:
                theme.palette.mode === "light"
                  ? "rgba(255, 255, 255, 0.4)"
                  : "rgba(0, 0, 0, 0.4)",
              backdropFilter: "blur(24px)",
              maxHeight: 40,
              border: "1px solid",
              borderColor: "divider",
              boxShadow:
                theme.palette.mode === "light"
                  ? `0 0 1px rgba(85, 166, 246, 0.1), 1px 1.5px 2px -1px rgba(85, 166, 246, 0.15), 4px 4px 12px -2.5px rgba(85, 166, 246, 0.15)`
                  : "0 0 1px rgba(2, 31, 59, 0.7), 1px 1.5px 2px -1px rgba(2, 31, 59, 0.65), 4px 4px 12px -2.5px rgba(2, 31, 59, 0.65)",
            })}
          >
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <MenuItem
                onClick={() => scrollToSection("about")}
                sx={{ py: "6px", px: "12px" }}
              >
                <Typography variant="body2" color="text.primary">
                  About
                </Typography>
              </MenuItem>
              <MenuItem
                onClick={() => scrollToSection("experience")}
                sx={{ py: "6px", px: "12px" }}
              >
                <Typography variant="body2" color="text.primary">
                  Experience
                </Typography>
              </MenuItem>
              <MenuItem
                onClick={() => scrollToSection("projects")}
                sx={{ py: "6px", px: "12px" }}
              >
                <Typography variant="body2" color="text.primary">
                  Projects
                </Typography>
              </MenuItem>
              <MenuItem
                onClick={() => scrollToSection("resume")}
                sx={{ py: "6px", px: "12px" }}
              >
                <Typography variant="body2" color="text.primary">
                  Resume
                </Typography>
              </MenuItem>
            </Box>
            <Box>
              <ToggleColorMode mode={mode} toggleColorMode={toggleColorMode} />
            </Box>
            <Box sx={{ display: { sm: "", md: "none" } }}>
              <Button
                variant="text"
                color="primary"
                aria-label="menu"
                onClick={() => toggleDrawer(true)}
                sx={{ minWidth: "30px", p: "4px" }}
              >
                <Menu />
              </Button>
              <Drawer
                anchor="right"
                open={open}
                onClose={() => toggleDrawer(false)}
              >
                <Box
                  sx={{
                    minWidth: "60dvw",
                    p: 2,
                    backgroundColor: "background.paper",
                    flexGrow: 1,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "end",
                      flexGrow: 1,
                    }}
                  >
                    <ToggleColorMode
                      mode={mode}
                      toggleColorMode={toggleColorMode}
                    />
                  </Box>
                  <MenuItem onClick={() => scrollToSection("about")}>
                    About
                  </MenuItem>
                  <MenuItem onClick={() => scrollToSection("experience")}>
                    Experience
                  </MenuItem>
                  <MenuItem onClick={() => scrollToSection("projects")}>
                    Projects
                  </MenuItem>
                </Box>
              </Drawer>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

AppAppBar.propTypes = {
  mode: PropTypes.oneOf(["dark", "light"]).isRequired,
  toggleColorMode: PropTypes.func.isRequired,
};

export default AppAppBar;
