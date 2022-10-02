import classes from "./event-content.module.css";

export default function EventContent(props) {
  return <section className={classes.content}>{props.children}</section>;
}
