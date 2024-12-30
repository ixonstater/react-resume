import { Button, Card, CardActions, CardContent, Typography } from "@mui/material";
import Page from "../components/Page";
import "./Projects.css";
import Sxp from "../Sxp";

export function Projects(): JSX.Element {
  return (
    <Page>
      <Typography
        variant="h5"
        sx={{
          mt: Sxp.sp5,
          ml: { xs: Sxp.sp0, sm: Sxp.sp7 },
          alignSelf: { xs: "center", sm: "start" },
          mb: Sxp.sp6,
        }}
      >
        Projects
      </Typography>
      <Card variant="outlined">
        <CardContent>
          <Typography gutterBottom sx={{ color: "text.secondary", fontSize: 14 }}>
            Word of the Day
          </Typography>
          <Typography variant="h5" component="div">
            blah
          </Typography>
          <Typography sx={{ color: "text.secondary", mb: 1.5 }}>adjective</Typography>
          <Typography variant="body2">
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
      {/* <iframe src="labor-tracker/index.html" className="labor-tracker-frame"></iframe> */}
    </Page>
  );
}

// Cheapspeech
// Flower counter -- pics
// Tower breaker -- pics
// Tar recognition
// AES blog post -- ported
// Dart LC3 vm / assembler
// Geoquery
// Labor tracker -- pics
