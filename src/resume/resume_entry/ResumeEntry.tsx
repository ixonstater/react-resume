import { Box, Typography } from "@mui/material";
import { TimelineSegment } from "./TimelineSegment";
import Sxp from "../../Sxp";
import { uniqueElementId } from "../../service/GloballyUniqueId";

export type ResumeEntryProps = {
  start: Date;
  header: string;
  impactStatement: string;
  technologiesUsed: Array<string>;
};

export function ResumeEntry(props: ResumeEntryProps): JSX.Element {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignSelf: { xs: "center", sm: "flex-start" },
        ml: { sm: Sxp.sp8 },
        minWidth: { xs: "350px", sm: "550px" },
        justifyContent: "space-between",
      }}
    >
      <TimelineSegment date={props.start} entryHeight={100}></TimelineSegment>
      <Box sx={{ display: "flex", flexDirection: "column", maxWidth: { xs: "250px", sm: "400px" } }}>
        <Typography variant="h6">{props.header}</Typography>
        <Typography>{props.impactStatement}</Typography>
        {props.technologiesUsed.map((elem: string): JSX.Element => {
          return <Typography key={uniqueElementId()}>{elem}</Typography>;
        })}
      </Box>
    </Box>
  );
}
