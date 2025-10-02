import { Box, IconButton, Link, Menu, MenuItem, Typography } from "@mui/material";
import Page from "../components/Page";
import Sxp from "../Sxp";
import { ResumeEntry } from "./resume_entry/ResumeEntry";
import { DownloadIcon } from "../components/icons/DownloadIcon";
import React from "react";

export function Resume(): JSX.Element {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Page>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          pl: Sxp.sp7,
          pr: Sxp.sp4,
          py: Sxp.sp4,
          boxSizing: "border-box",
        }}
      >
        <Typography variant="h5">Resume</Typography>
        <IconButton onClick={handleClick}>
          <DownloadIcon></DownloadIcon>
        </IconButton>
        <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
          <Link href="/assets/resume.pdf" underline="none" color="inherit" download="resume.pdf">
            <MenuItem onClick={handleClose}>PDF</MenuItem>
          </Link>
          <Link href="/assets/resume.docx" underline="none" color="inherit" download="resume.docx">
            <MenuItem onClick={handleClose}>Word Document</MenuItem>
          </Link>
        </Menu>
      </Box>
      <ResumeEntry
        start={new Date("09/01/2022")}
        header={"Verisk"}
        impactStatement={
          "I participated in retooling and redeploying a web codebase from the claims side of insurance to the underwriting side. This drove revenue growth at low cost by enabling carriers to leverage our technology across more of their business."
        }
        technologiesUsed={["Java | Angular | Postgres", "AWS | Snowflake | Azure", "Intellij | VS Code"]}
      ></ResumeEntry>
      <ResumeEntry
        end={new Date("08/01/2022")}
        start={new Date("08/01/2017")}
        header="Utah Valley University"
        impactStatement="I took a break from fulltime employment during this period to finish my bachelor's degree.  I studied Computer Science with an emphasis in Software Engineering."
        technologiesUsed={["C# | C++ | Javascript", "Python | Android | Flutter"]}
      ></ResumeEntry>
      <ResumeEntry
        end={new Date("05/01/2021")}
        start={new Date("10/01/2019")}
        header={"ABGRM"}
        impactStatement={
          "I build an integration with Morningstar Investment which allowed automatic 401K fund rebalancing to take place. This integration protected our clients pension funds from significant losses by allowing strong investment advice to be automatically applied."
        }
        technologiesUsed={["PHP | Python | Javascript", "MYSQL | Oracle | Windows Server", "Gitlab | Ubuntu"]}
      ></ResumeEntry>
    </Page>
  );
}
