import { TimelineDot } from "./TimelineDot";

export type TimelineSegmentProps = {
  date: Date;
  entryHeight: number;
};

export function TimelineSegment(props: TimelineSegmentProps): JSX.Element {
  return <TimelineDot date={props.date}></TimelineDot>;
}
