import Page from "../components/Page";
import "./Projects.css";
import Sxp from "../Sxp";
import { ProjectsCard } from "../components/ProjectsCard";
import { Grid, Typography } from "@mui/material";
import { Fragment, useState } from "react";
import { IFrameDialog } from "../components/IFrameDialog";

type ProjectsState = {
  laborTrackerDemoOpen: boolean;
  flowerCounterDemoOpen: boolean;
  towerBreakerDemoOpen: boolean;
};

export function Projects(): JSX.Element {
  const [projectsState, setProjectsState]: [ProjectsState, any] = useState({
    laborTrackerDemoOpen: false,
    flowerCounterDemoOpen: false,
    towerBreakerDemoOpen: false,
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

  const setTowerBreakerDemoOpen = (open: boolean) => {
    const newProjectsState = { ...projectsState };
    newProjectsState.towerBreakerDemoOpen = open;
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
          mb: Sxp.sp3,
        }}
      >
        Projects
      </Typography>
      <Grid container spacing={Sxp.sp5} sx={{ px: Sxp.sp5, mb: Sxp.sp5 }}>
        <Grid item sm={6} xs={12}>
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
              setOpen={setLaborTrackerDemoOpen}
              handleClose={(): void => {
                setLaborTrackerDemoOpen(false);
              }}
            ></IFrameDialog>
          </Fragment>
        </Grid>
        <Grid item sm={6} xs={12}>
          <Fragment>
            <ProjectsCard
              title={"Flower Counter"}
              subtitle={"Count categorized items."}
              body={[
                "I built this Flutter app for my mom when she",
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
              setOpen={setFlowerCounterDemoOpen}
              handleClose={(): void => {
                setFlowerCounterDemoOpen(false);
              }}
            ></IFrameDialog>
          </Fragment>
        </Grid>
        <Grid item sm={6} xs={12}>
          <Fragment>
            <ProjectsCard
              title={"AES Blog Post"}
              subtitle={"A layman's explanation of AES."}
              body={[
                "I wrote this blog post in order to",
                "learn the AES symmetric key algorithm.",
                "As part of this project I also built",
                "a reference implementation of AES",
                "in the Dart language.",
              ]}
              action={() => {
                window.location.pathname = "/aes_example/blog.html";
              }}
              actionLabel={"Read it!"}
              githubLink="https://github.com/ixonstater/learning_aes"
            ></ProjectsCard>
          </Fragment>
        </Grid>
        <Grid item sm={6} xs={12}>
          <Fragment>
            <ProjectsCard
              title={"Tower Breaker Game"}
              subtitle={"An angry-birds style game."}
              body={[
                "I built this game as part of an",
                "experiment with Google ad campaigns.",
                "It was downloaded around 2000 times",
                "before I removed it from the store.",
              ]}
              action={() => {
                setTowerBreakerDemoOpen(true);
              }}
              actionLabel={"Try it!"}
              githubLink="https://gitlab.com/ixonstater/tower-breaker"
            ></ProjectsCard>
            <IFrameDialog
              src={"tower-breaker/index.html"}
              height={400}
              width={600}
              backgroundColor={"white"}
              border={"0"}
              borderRadius={5}
              open={projectsState.towerBreakerDemoOpen}
              setOpen={setTowerBreakerDemoOpen}
              handleClose={(): void => {
                setTowerBreakerDemoOpen(false);
              }}
            ></IFrameDialog>
          </Fragment>
        </Grid>
      </Grid>
    </Page>
  );
}
