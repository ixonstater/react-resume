import { Box, Typography } from "@mui/material";
import Page from "../components/Page";
import "./AboutMe.css";
import Sxp from "../Sxp";

export function AboutMe(): JSX.Element {
  return (
    <Page>
      <Typography
        variant="h5"
        sx={{
          mt: Sxp.sp4,
          ml: { xs: Sxp.sp0, sm: Sxp.sp7 },
          alignSelf: { xs: "center", sm: "start" },
          mb: Sxp.sp5,
        }}
      >
        About Me
      </Typography>
      <Box
        sx={{
          alignSelf: "center",
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          gap: Sxp.sp3,
          alignItems: "center",
          mx: Sxp.sp3,
        }}
      >
        <img className="headshot-image" src="assets/josh.jpg"></img>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
          aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Typography>
      </Box>
    </Page>
  );
}
