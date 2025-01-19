import { Container, Dialog } from "@mui/material";
import { useState } from "react";

export function ImageCarousel(props: { images: string[] }) {
  let [index, setIndex] = useState(0);

  function setIndexSafe(newIndex: number) {
    // Yay finite field addition :P
    if (newIndex >= props.images.length) {
      setIndex(0);
    } else {
      setIndex(newIndex);
    }
  }

  return (
    <Dialog open={false}>
      <Container sx={{ width: 300, height: 600 }}>
        <img src={props.images[index]}></img>
      </Container>
    </Dialog>
  );
}
