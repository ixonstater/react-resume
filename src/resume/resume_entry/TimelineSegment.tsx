import { Box } from "@mui/material";
import { TimelineDot } from "./TimelineDot";

export type TimelineSegmentProps = {
  end?: Date;
  start: Date;
  entryHeight: number;
};

export function TimelineSegment(props: TimelineSegmentProps): JSX.Element {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <TimelineDot end={props.end} start={props.start}></TimelineDot>
      <Box
        sx={{
          backgroundColor: "white",
          width: "2px",
          marginLeft: "4px",
          marginTop: "10px",
          flexGrow: 1,
          height: props.entryHeight + "px",
        }}
      ></Box>
    </Box>
  );
}
