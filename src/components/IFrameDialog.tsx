import { Close } from "@mui/icons-material";
import { Dialog, IconButton, Slide } from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import React from "react";

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
  return (
    <Dialog fullScreen={true} open={props.open} onClose={props.handleClose} TransitionComponent={Transition}>
      <div style={{ alignItems: "center", display: "flex", flexDirection: "column" }}>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2, display: { xs: "inline-flex" } }}
          onClick={() => props.setOpen(false)}
        >
          <Close></Close>
        </IconButton>
        <iframe
          src={props.src}
          style={{
            height: props.height,
            width: props.width,
            backgroundColor: props.backgroundColor,
            border: props.border,
            borderRadius: props.borderRadius,
          }}
        ></iframe>
      </div>
    </Dialog>
  );
}
