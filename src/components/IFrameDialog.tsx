import { Close } from "@mui/icons-material";
import { Box, Dialog, IconButton, Slide, useMediaQuery } from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import React from "react";
import Sxp from "../Sxp";
import theme from "../Theme";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<unknown>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export function IFrameDialog(props: {
  src: string;
  height: number | string;
  width: number | string;
  backgroundColor: string;
  border: string;
  borderRadius: number;
  open: boolean;
  setOpen: Function;
  handleClose: any;
}): JSX.Element {
  const iframeMobile = { flexGrow: 1, margin: Sxp.sp2 };
  const iframeDesktop = { height: props.height, width: props.width };
  const isMobile = useMediaQuery(theme.breakpoints.only("xs"));
  let iframeStyles = {
    backgroundColor: props.backgroundColor,
    border: props.border,
    borderRadius: props.borderRadius,
  };

  if (isMobile) {
    iframeStyles = { ...iframeStyles, ...iframeMobile };
  } else {
    iframeStyles = { ...iframeStyles, ...iframeDesktop };
  }

  return (
    <Dialog fullScreen={true} open={props.open} onClose={props.handleClose} TransitionComponent={Transition}>
      <Box
        sx={{
          alignItems: { xs: "stretch", sm: "center" },
          flexGrow: { xs: 1, sm: 0 },
          display: "flex",
          flexDirection: "column",
        }}
      >
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2, display: { xs: "inline-flex" } }}
          onClick={() => props.setOpen(false)}
        >
          <Close></Close>
        </IconButton>
        <iframe src={props.src} style={iframeStyles}></iframe>
      </Box>
    </Dialog>
  );
}
