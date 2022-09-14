import { Fragment } from "react";
import EventList from "../../components/events/eventList/event-list";
import EventsSearch from "../../components/events/eventsSearch/events-search";
import { getAllEvents } from "../../dummy-data";

function EventsPage() {
  const events = getAllEvents();

  return (
    <Fragment>
      <EventsSearch />
      <EventList items={events} />
    </Fragment>
  );
}

export default EventsPage;
