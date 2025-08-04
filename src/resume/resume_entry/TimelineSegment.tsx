import { Box } from "@mui/material";
import { TimelineDot } from "./TimelineDot";

export type TimelineSegmentProps = {
  date: Date;
  entryHeight: number;
};

export function TimelineSegment(props: TimelineSegmentProps): JSX.Element {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <TimelineDot date={props.date}></TimelineDot>
      <Box
        sx={{
          backgroundColor: "white",
          width: "2px",
          marginLeft: "5px",
          marginTop: "15px",
          flexGrow: 1,
          height: props.entryHeight + "px",
        }}
      ></Box>
    </Box>
  );
}
