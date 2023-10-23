"use client";
import EventList from "@/Components/EventList"
import EventSearch from "@/Components/EventSearch/EventSearch"
import { getAllEvents } from "@/dummy-data"
import { useRouter } from "next/navigation"

function EventsPage() {
  const events=getAllEvents()
  const router=useRouter()

  function searchHandler(year,month){
  const path=`/events/${year}/${month}`
  router.push(path)

  }
  return (
    <div>
      <EventSearch onSearch={searchHandler}/>
      <EventList events={events}/>
    </div>
  )
}

export default EventsPage