import { useRouter } from "next/router";
import { Fragment } from "react";

import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";
import ErrorAlert from "../../components/ui/errorAlert/error-alert";

import { getEventById } from "../../dummy-data";

function EventsDetailPage() {
  const router = useRouter();

  const eventId = router.query.id;
  const event = getEventById(eventId);

  if (!event) {
    return (
      <ErrorAlert>
        <p>Event not found</p>
      </ErrorAlert>
    );
  }

  return (
    <Fragment>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  );
}

export default EventsDetailPage;
