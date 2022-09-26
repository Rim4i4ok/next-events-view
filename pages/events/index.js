import Head from "next/head";
import { useRouter } from "next/router";
import { Fragment } from "react";

import EventList from "../../components/events/eventList/event-list";
import EventsSearch from "../../components/events/eventsSearch/events-search";
import { getAllEvents } from "../../helpers/api-util";

function EventsPage(props) {
  const router = useRouter();
  const { events } = props;

  function findEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;

    router.push(fullPath);
  }

  return (
    <Fragment>
      <Head>
        <title>All events</title>
        <meta name="description" content="Hello world with events" />
      </Head>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </Fragment>
  );
}

export async function getStaticProps() {
  const events = await getAllEvents();

  return {
    props: {
      events: events,
    },
    revalidate: 60,
  };
}

export default EventsPage;
