import Page from "../components/Page";
import "./Projects.css";
import Sxp from "../Sxp";
import { ProjectsCard } from "../components/ProjectsCard";
import { Typography } from "@mui/material";

export function Projects(): JSX.Element {
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
        Projects
      </Typography>
      <ProjectsCard
        title={"Labor Tracker"}
        subtitle={"Track and analyze labor contractions."}
        body={[
          "I built this when my wife and I were",
          "expecting our first child. The application",
          "uses Angular with a local storage wrapper",
          "for persistence.",
        ]}
        action={() => {}}
        actionLabel="Try it!"
      ></ProjectsCard>
      {/* <iframe src="labor-tracker/index.html" className="labor-tracker-frame"></iframe> */}
    </Page>
  );
}

// Cheapspeech
// Flower counter -- pics
// Tower breaker -- pics
// Tar recognition
// AES blog post -- ported
// Dart LC3 vm / assembler
// Geoquery
