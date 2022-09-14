import { getFeaturedEvents } from "../dummy-data";
import EventList from "../components/events/eventList/event-list";

function HomePage() {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <EventList items={featuredEvents} />
    </div>
  );
}

export default HomePage;
