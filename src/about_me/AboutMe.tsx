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
          mt: Sxp.sp5,
          ml: { xs: Sxp.sp0, sm: Sxp.sp7 },
          alignSelf: { xs: "center", sm: "start" },
          mb: Sxp.sp6,
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
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; I'm a software engineer with four years of professional experience.
          I live in beautiful rural Wisconsin with my wife, two kids and tomato patch. I'm passionate about web and mobile frameworks and large scale
          cloud applications. I graduated from Utah Valley University in 2017 with a BASc in Software Engineering and immediately entered the
          workforce as a junior developer for Verisk Analytics.
          <br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; My hobbies include playing the piano, amateur carpentry, video game development and gardening.  I get a lot of satisfaction
          from using my professional skills to help people in my community.
        </Typography>
      </Box>
    </Page>
  );
}
