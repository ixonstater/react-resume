import { Box, Typography } from "@mui/material";
import { TimelineSegment } from "./TimelineSegment";
import Sxp from "../../Sxp";

export type ResumeEntryProps = {
  start: Date;
  header: string;
  impactStatement: string;
  technologiesUsed: Array<string>;
};

export function ResumeEntry(props: ResumeEntryProps): JSX.Element {
  return (
    <Box sx={{ display: "flex", flexDirection: "row", alignSelf: { xs: "center", sm: "flex-start" }, ml: { sm: Sxp.sp8 } }}>
      <TimelineSegment date={props.start} entryHeight={100}></TimelineSegment>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography variant="h6">{props.header}</Typography>
        <Typography>{props.impactStatement}</Typography>
        {props.technologiesUsed.map((elem: string): JSX.Element => {
          return <Typography>{elem}</Typography>;
        })}
      </Box>
    </Box>
  );
}
