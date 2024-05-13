import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/system";
import { GitHub, Instagram, LinkedIn } from "@mui/icons-material";
import { IconButton } from "@mui/material";

const Logos = [<GitHub />, <LinkedIn />, <Instagram />];

const logoStyle = {
  width: "50px",
  height: "50px",
  margin: "0 12px",
  //   opacity: 0.7,
};

const Socontact = () => {
  //   const theme = useTheme();
  //   const logos = theme.palette.mode === "light" ? darkLogos : whiteLogos;

  return (
    <Box id="logoCollection" sx={{ py: 4 }}>
      <Typography
        component="p"
        variant="subtitle2"
        align="center"
        color="text.secondary"
      >
        Follow me on...
      </Typography>
      <Grid container justifyContent="center" sx={{ mt: 0.5, opacity: 0.6 }}>
        {Logos.map((logo, index) => (
          <Grid item key={index}>
            <IconButton sx={logoStyle}>{logo}</IconButton>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
export default Socontact;
