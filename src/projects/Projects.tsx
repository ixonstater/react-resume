import Page from "../components/Page";
import "./Projects.css";
import Sxp from "../Sxp";
import { ProjectsCard } from "../components/ProjectsCard";
import { Typography } from "@mui/material";
import { useState } from "react";
import { IFrameDialog } from "../components/IFrameDialog";

type ProjectsState = {
  laborTrackerDemoOpen: boolean;
};

export function Projects(): JSX.Element {
  const [projectsState, setProjectsState]: [ProjectsState, any] = useState({
    laborTrackerDemoOpen: false,
  });

  const setLaborTrackerDemoOpen = (open: boolean) => {
    const newProjectsState = { ...projectsState };
    newProjectsState.laborTrackerDemoOpen = open;
    setProjectsState(newProjectsState);
  };

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
        action={() => setLaborTrackerDemoOpen(true)}
        actionLabel="Try it!"
      ></ProjectsCard>
      <IFrameDialog
        src={"labor-tracker/index.html"}
        height={700}
        width={400}
        backgroundColor={"white"}
        border={"0"}
        borderRadius={5}
        open={projectsState.laborTrackerDemoOpen}
        handleClose={(): void => {
          setLaborTrackerDemoOpen(false);
        }}
      ></IFrameDialog>
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
