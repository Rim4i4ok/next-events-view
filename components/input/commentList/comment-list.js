import classes from "./comment-list.module.css";

export default function CommentList() {
  return (
    <ul className={classes.comments}>
      {/* Render list of comments - fetched from API */}
      <li>
        <p>My comment is amazing!</p>
        <div>
          By <address>People</address>
        </div>
      </li>
      <li>
        <p>My comment is amazing!</p>
        <div>
          By <address>People</address>
        </div>
      </li>
    </ul>
  );
}
