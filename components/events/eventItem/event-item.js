import Link from "next/link";

import Button from "../../ui/button";
import DateIcon from "../../icons/date-icon";
import AddressIcon from "../../icons/address-icon";
import ArrowIcon from "../../icons/arrow-right-icon";

import styles from "./event-item.module.css";

function EventItem(props) {
  const { id, title, image, date, location } = props;

  const readableDate = new Date(date).toLocaleDateString("ru-RU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const readableAddress = location.replace(",", "\n");
  const imageUrl = `/${image}`;
  const exploreLink = `/events/${id}`;

  return (
    <li className={styles.item}>
      <img src={imageUrl} alt="some image" />
      <div className={styles.content}>
        <div className={styles.summary}>
          <h2>{title}</h2>
          <div className={styles.date}>
            <DateIcon />
            <time>{readableDate}</time>
          </div>
          <div className={styles.address}>
            <AddressIcon />
            <address>{readableAddress}</address>
          </div>
        </div>
        <div className={styles.actions}>
          <Button link={exploreLink}>
            <span>Explore link</span>
            <span className={styles.icon}>
              <ArrowIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
}

export default EventItem;
