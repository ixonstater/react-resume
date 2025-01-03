import { Dialog, Slide } from "@mui/material";
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
  height: number;
  width: number;
  backgroundColor: string;
  border: string;
  borderRadius: number;
  open: boolean;
  handleClose: any;
}): JSX.Element {
  return (
    <Dialog open={props.open} onClose={props.handleClose} TransitionComponent={Transition}>
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
    </Dialog>
  );
}
