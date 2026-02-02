import EventDetails from "@/components/details/EventDetails"
import EventVenue from "@/components/details/EventVenue"
import HeroSection from "@/components/details/HeroSection"
import { getEventById } from "@/queries"

export async function generateMetadata({ params }) {
  const { id } = await params;
  const event = await getEventById(id);

  return {
    title: `Eventry - ${event.name}`,
    description: event.details,
    openGraph: {
      title: `Eventry - ${event.name}`,
      description: event.details,
      images: [event?.imageUrl],
    },
  }
}

export default async function EventDetailsPage({ params }) {
  const { id } = await params;
  
  const event = await getEventById(id);

  return (
    <>
      <HeroSection event={event} />
      <section className="container">
        <div className="grid grid-cols-5 gap-12 my-12">
          <EventDetails event={event} />
          <EventVenue event={event} />
        </div>
      </section>
    </>
  )
}
