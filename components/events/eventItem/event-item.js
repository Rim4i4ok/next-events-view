import Link from "next/link";

import styles from "./event-item.module.css";

function EventItem(props) {
  const { id, title, image, date, location } = props;

  const readableDate = new Date(date).toLocaleDateString("ru-RU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const readableAddress = location.replace(",", "\n");
  const exploreLink = `/events/${id}`;

  return (
    <li className={styles.item}>
      <img src={`/${image}`} alt="" />
      <div className={styles.content}>
        <div className={styles.summary}>
          <h2>{title}</h2>
          <div className={styles.date}>
            <time>{readableDate}</time>
          </div>
          <div className={styles.address}>
            <address>{readableAddress}</address>
          </div>
        </div>
        <div className={styles.actions}>
          <Link href={exploreLink}>Event</Link>
        </div>
      </div>
    </li>
  );
}

export default EventItem;
