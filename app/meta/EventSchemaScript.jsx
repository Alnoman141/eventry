export default function EventSchemaScript({ event }) {
  const formattedData = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: encodeURIComponent(event.name),
    startDate: new Date(),
    endDate: new Date(
      new Date().getTime() + 2 * 60 * 60 * 1000,
    ), // Assuming event lasts 2 hours
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    location: event?.location,
    image: [event?.imageUrl],
    description: event?.description,
    performer: {
      "@type": "Person",
      name: "Abdullah Al Noman",
    },
    organizer: {
      "@type": "Organization",
      name: "Abdullah Al Noman",
      url: "https://www.eventry.com",
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(formattedData) }}
      />
    </>
  )
}
