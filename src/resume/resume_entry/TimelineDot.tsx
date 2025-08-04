import { Box, Typography } from "@mui/material";
import Sxp from "../../Sxp";

export type TimelineDotProps = {
  date: Date;
};

export function TimelineDot(props: TimelineDotProps): JSX.Element {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: "5px", alignSelf: "flex-start", mt: Sxp.sp3 }}>
      <Box sx={{ backgroundColor: "white", borderRadius: "50%", width: "12px", height: "12px" }}></Box>
      <Typography variant="dateSm">
        {props.date.toLocaleString("default", { day: "2-digit", month: "short", year: "2-digit" })}
      </Typography>
    </Box>
  );
}
