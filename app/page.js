import EventList from "@/components/landing/EventList"
import Header from "@/components/landing/Header"
import Image from "next/image"

export default async function Home({ searchParams }) {
  const { query } = await searchParams || {}
  return (
    <div>
      <section className="container">
        <Header />
        <EventList query={query} />
      </section>
    </div>
  )
}
