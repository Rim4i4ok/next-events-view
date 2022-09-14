import Link from "next/link";

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
    <li>
      <img src={`/${image}`} alt="" />
      <div>
        <div>
          <h2>{title}</h2>
          <div>
            <time>{readableDate}</time>
          </div>
          <div>
            <address>{readableAddress}</address>
          </div>
        </div>
        <div>
          <Link href={exploreLink}>Event</Link>
        </div>
      </div>
    </li>
  );
}

export default EventItem;
