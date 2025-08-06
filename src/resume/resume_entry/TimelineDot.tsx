import { Box, Typography } from "@mui/material";
import Sxp from "../../Sxp";

export type TimelineDotProps = {
  start: Date;
  end?: Date;
};

export function TimelineDot(props: TimelineDotProps): JSX.Element {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: "5px", alignSelf: "flex-start", mt: Sxp.sp2 }}>
      <Box sx={{ backgroundColor: "white", borderRadius: "50%", width: "10px", height: "10px" }}></Box>
      <Typography variant="dateSm">
        {props.end ? props.end.toLocaleString("default", { month: "short", year: "numeric" }) : "Present"}
        <br />
        {props.start.toLocaleString("default", { month: "short", year: "numeric" })}
      </Typography>
    </Box>
  );
}
