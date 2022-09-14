import EventItem from "../eventItem/event-item";

import styles from "./event-list.module.css";

function EventList(props) {
  const { items } = props;

  return (
    <ul className={styles.list}>
      {items.map((item) => (
        <EventItem key={item.id} {...item} />
      ))}
    </ul>
  );
}

export default EventList;
