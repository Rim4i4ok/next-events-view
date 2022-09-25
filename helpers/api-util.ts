export async function getAllEvents() {
  const response = await fetch(
    "https://nextjs-course-26d81-default-rtdb.europe-west1.firebasedatabase.app/events.json"
  );
  const data = await response.json();

  const events = [];

  console.log(events);

  for (const key in data) {
    events.push({ id: key, ...data[key] });
  }

  return events;
}

export async function getFeaturedEvents() {
  const allEvents = await getAllEvents();
  return allEvents.filter((event) => event.isFeatured);
}

export async function getEventById(id) {
  const allEvents = await getAllEvents();
  return allEvents.find((event) => event.id === id);
}
