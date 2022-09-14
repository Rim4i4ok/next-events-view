import { useRouter } from "next/router";

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
    return <p className="center"> Invalid filter</p>;
  }

  const filteredEvents = getFeaturedEvents({
    year: numYear,
    month: numMonth,
  });

  if (!filteredEvents || filteredEvents.length === 0) {
    return <p className="center">No events found</p>;
  }

  return (
    <div>
      <h1>Filtered events page</h1>
    </div>
  );
}

export default FilteredEventsPage;
