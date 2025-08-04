import { Typography } from "@mui/material";
import Page from "../components/Page";
import Sxp from "../Sxp";
import { ResumeEntry } from "./resume_entry/ResumeEntry";

export function Resume(): JSX.Element {
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
        Resume
      </Typography>
      <ResumeEntry
        start={new Date("01/10/2021")}
        header={"blah"}
        impactStatement={"statement"}
        technologiesUsed={["afds", "fda", "afda", "adfsa"]}
      ></ResumeEntry>
      <ResumeEntry
        start={new Date("01/10/2021")}
        header={"blah"}
        impactStatement={"statement"}
        technologiesUsed={["afds", "fda", "afda", "adfsa"]}
      ></ResumeEntry>
      <ResumeEntry
        start={new Date("01/10/2021")}
        header={"blah"}
        impactStatement={"statement"}
        technologiesUsed={["afds", "fda", "afda", "adfsa"]}
      ></ResumeEntry>
      <ResumeEntry
        start={new Date("01/10/2021")}
        header={"blah"}
        impactStatement={"statement"}
        technologiesUsed={["afds", "fda", "afda", "adfsa"]}
      ></ResumeEntry>
      <ResumeEntry
        start={new Date("01/10/2021")}
        header={"blah"}
        impactStatement={"statement"}
        technologiesUsed={["afds", "fda", "afda", "adfsa"]}
      ></ResumeEntry>
    </Page>
  );
}
