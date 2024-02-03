"use server";

import { getEventById } from "@/lib/actions/events.actions";
import { Calendar, Clock } from "lucide-react";
import Image from "next/image";
import { formatDateTime, formatTimeDifference } from "@/lib/utils";

async function EventDetails({ params }: { params: { id: string } }) {
  const response = await getEventById(params.id);

  if (response.statusCode === 404) {
    return <h1>Event not found</h1>;
  } else if (response.statusCode !== 200) {
    return <h1>Internal Server Error</h1>;
  }

  const event = response.data;

  return (
    <article>
      <Image
        src={event.image_url}
        alt="event banner"
        width={1000}
        height={1000}
        className="w-full object-cover object-center mb-4 shadow-xl"
      />
      <h1 className="text-2xl font-bold">{event.title}</h1>
      <p className="mb-4">by {event.organizer.name}</p>
      <p className="flex items-center text-sm gap-2 mb-3">
        <Calendar size={20} />
        <span>{formatDateTime(event.startDateTime)}</span>
      </p>
      <p className="flex items-center text-sm gap-2 mb-3">
        <Clock size={20} />
        <span>Lasts for {formatTimeDifference(event.startDateTime, event.endDateTime)}</span>
      </p>
    </article>
  );
}

export default EventDetails;
