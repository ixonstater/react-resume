import { Box, Typography } from "@mui/material";
import { TimelineSegment } from "./TimelineSegment";
import Sxp from "../../Sxp";
import { uniqueElementId } from "../../service/GloballyUniqueId";

export type ResumeEntryProps = {
  end?: Date;
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
        gap: Sxp.sp4,
      }}
    >
      <TimelineSegment end={props.end} start={props.start} entryHeight={100}></TimelineSegment>
      <Box sx={{ display: "flex", flexDirection: "column", maxWidth: { xs: "250px", sm: "400px" } }}>
        <Typography sx={{ marginBottom: Sxp.sp1 }} variant="h6">
          {props.header}
        </Typography>
        {props.technologiesUsed.map((elem: string): JSX.Element => {
          return (
            <Typography variant="dateSm" key={uniqueElementId()}>
              {elem}
            </Typography>
          );
        })}
        <Typography sx={{ marginTop: Sxp.sp2, marginBottom: Sxp.sp3 }} variant="impactStatement">
          {props.impactStatement}
        </Typography>
      </Box>
    </Box>
  );
}
