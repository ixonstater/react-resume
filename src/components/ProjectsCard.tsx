import { Button, Card, CardActions, CardContent, IconButton, Typography } from "@mui/material";
import Sxp from "../Sxp";
import { GithubIcon } from "./icons/GithubIcon";
import { uniqueElementId } from "../service/GloballyUniqueId";

export function ProjectsCard(props: {
  children?: any;
  title: string;
  subtitle: string;
  body: string[];
  action: any;
  actionLabel: string;
  githubLink?: JSX.Element;
}): JSX.Element {
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h5" component="div" sx={{ mb: Sxp.sp1 }}>
          {props.title}
        </Typography>
        <Typography sx={{ color: "text.secondary", mb: Sxp.sp3, ml: Sxp.sp2 }}>{props.subtitle}</Typography>
        <Typography variant="body2">&nbsp;&nbsp;&nbsp;&nbsp;{joinOnLineBreak(props.body)}</Typography>
      </CardContent>
      <CardActions>
        <Button onClick={props.action} size="small" variant="contained" sx={{ mb: Sxp.sp3, ml: Sxp.sp3 }}>
          {props.actionLabel}
        </Button>
        <IconButton sx={{ mb: Sxp.sp3 }}>
          <GithubIcon></GithubIcon>
        </IconButton>
      </CardActions>
      {props.children}
    </Card>
  );
}

function joinOnLineBreak(lines: string[]): (string | JSX.Element)[] {
  return lines
    .map((value, _, __) => {
      return [<span key={uniqueElementId()}>{value}</span>, <br key={uniqueElementId()} />];
    })
    .flat();
}
