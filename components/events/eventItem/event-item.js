import Image from "next/image";

import Button from "../../ui/button";
import DateIcon from "../../icons/date-icon";
import AddressIcon from "../../icons/address-icon";
import ArrowIcon from "../../icons/arrow-right-icon";

import styles from "./event-item.module.css";

function EventItem(props) {
  const { id, title, image, date, location } = props;

  const readableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const readableAddress = location.replace(",", "\n");
  const imageUrl = `/${image}`;
  const exploreLink = `/events/${id}`;

  return (
    <li className={styles.item}>
      <Image src={imageUrl} alt="some image" width={250} height={160} />
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
