import EventList from "@/components/landing/EventList"
import Header from "@/components/landing/Header"
import Image from "next/image"

export default function Home() {
  return (
    <div>
      <section className="container">
        <Header />
        <EventList />
      </section>
    </div>
  )
}
