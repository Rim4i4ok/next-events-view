import { useRouter } from "next/router";
import { Fragment } from "react";

import EventList from "../../components/events/eventList/event-list";
import EventsSearch from "../../components/events/eventsSearch/events-search";
import { getAllEvents } from "../../dummy-data";

function EventsPage() {
  const router = useRouter();
  const events = getAllEvents();

  function findEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;

    router.push(fullPath);
  }

  return (
    <Fragment>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </Fragment>
  );
}

export default EventsPage;
