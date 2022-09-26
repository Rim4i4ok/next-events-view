import Head from "next/head";

import EventList from "../components/events/eventList/event-list";
import { getFeaturedEvents } from "../helpers/api-util";

function HomePage(props) {
  return (
    <div>
      <Head>
        <title>Nextjs events</title>
        <meta name="description" content="Hello world with events" />
      </Head>
      <EventList items={props.events} />
    </div>
  );
}

export async function getStaticProps(context) {
  const featuredEvents = await getFeaturedEvents();

  return {
    props: {
      events: featuredEvents,
    },
    revalidate: 1800,
  };
}

export default HomePage;
