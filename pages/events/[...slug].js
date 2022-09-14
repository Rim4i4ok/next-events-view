import { useRouter } from "next/router";
import { Fragment } from "react";

import EventList from "../../components/events/eventList/event-list";
import ResultsTitle from "../../components/events/resultsTitle/results-title";
import Button from "../../components/ui/button";
import ErrorAlert from "../../components/ui/errorAlert/error-alert";

import { getFeaturedEvents } from "../../dummy-data";

function FilteredEventsPage() {
  const router = useRouter();

  const filterData = router.query.slug;
  if (!filterData) {
    return <p className="center">Loading...</p>;
  }

  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  if (isNaN(numYear) || isNaN(numMonth) || numMonth < 1 || numMonth > 12) {
    return (
      <Fragment>
        <ErrorAlert>
          <p> Invalid filter</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show all events</Button>
        </div>
      </Fragment>
    );
  }

  const filteredEvents = getFeaturedEvents({
    year: numYear,
    month: numMonth,
  });

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>No events found</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show all events</Button>
        </div>
      </Fragment>
    );
  }

  const date = new Date(numYear, numMonth - 1);

  return (
    <Fragment>
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />
    </Fragment>
  );
}

export default FilteredEventsPage;
