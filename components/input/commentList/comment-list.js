import classes from "./comment-list.module.css";

export default function CommentList(props) {
  const { items } = props;
  return (
    <ul className={classes.comments}>
      {items.map((item) => (
        <li key={item._id}>
          <p>{item.comment.text}</p>
          <div>
            By <address>{item.comment.name}</address>
          </div>
        </li>
      ))}
    </ul>
  );
}
