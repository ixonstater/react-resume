import Page from "../components/Page";
import "./Projects.css";
import Sxp from "../Sxp";
import { ProjectsCard } from "../components/ProjectsCard";
import { Typography } from "@mui/material";
import { Fragment, useState } from "react";
import { IFrameDialog } from "../components/IFrameDialog";

type ProjectsState = {
  laborTrackerDemoOpen: boolean;
  flowerCounterDemoOpen: boolean;
};

export function Projects(): JSX.Element {
  const [projectsState, setProjectsState]: [ProjectsState, any] = useState({
    laborTrackerDemoOpen: false,
    flowerCounterDemoOpen: false,
  });

  const setLaborTrackerDemoOpen = (open: boolean) => {
    const newProjectsState = { ...projectsState };
    newProjectsState.laborTrackerDemoOpen = open;
    setProjectsState(newProjectsState);
  };

  const setFlowerCounterDemoOpen = (open: boolean) => {
    const newProjectsState = { ...projectsState };
    newProjectsState.flowerCounterDemoOpen = open;
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
      <Fragment>
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
          githubLink={"https://github.com/ixonstater/labor-tracker"}
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
      </Fragment>
      <Fragment>
        <ProjectsCard
          title={"Flower Counter"}
          subtitle={"Count categorized items."}
          body={[
            "I built this flutter app for my mom when she",
            "worked at a local nursery. It allows users",
            "to define categories and count items in",
            "these categories.",
          ]}
          action={() => setFlowerCounterDemoOpen(true)}
          actionLabel={"Try it!"}
          githubLink={"https://github.com/ixonstater/item_counter"}
        ></ProjectsCard>
        <IFrameDialog
          src={"flower-counter/index.html"}
          height={700}
          width={400}
          backgroundColor={"white"}
          border={"0"}
          borderRadius={5}
          open={projectsState.flowerCounterDemoOpen}
          handleClose={(): void => {
            setFlowerCounterDemoOpen(false);
          }}
        ></IFrameDialog>
      </Fragment>
    </Page>
  );
}

// Cheapspeech
// Flower counter -- demo
// Tower breaker -- pics
// Tar recognition -- blog
// AES blog post -- ported
// Dart LC3 vm / assembler -- code
// Geoquery

// DONE
// Labor Tracker
