"use server";

import { getEventById } from "@/lib/actions/events.actions";
import { Calendar, Clock, ImageIcon, Link as LinkIcon, MapPin } from "lucide-react";
import { formatDateTime, formatTimeDifference } from "@/lib/utils";
import Link from "next/link";
import EventDetailsHeader from "@/components/event-details/EventDetailsHeader";
import EventDetailsOrganizer from "@/components/event-details/EventDetailsOrganizer";

async function EventDetails({ params }: { params: { id: string } }) {
  const response = await getEventById(params.id);

  if (response.statusCode === 404) {
    return <h1>Event not found</h1>;
  } else if (response.statusCode !== 200) {
    return <h1>Internal Server Error</h1>;
  }

  const event = response.data;

  return (
    <article className="flex flex-col gap-3 px-3 ">
      <EventDetailsHeader
        title={event.title}
        location={event.location}
        image_url={event.image_url}
        startDateTime={formatDateTime(event.startDateTime)}
        categoryName={event.category.name}
        duration={formatTimeDifference(event.startDateTime, event.endDateTime)}
      />

      <EventDetailsOrganizer organizerName={event.organizer.name} organizerPictureURL={event.organizer.picture_url} />

      <section className="card col-span-3 flex flex-col gap-7 p-6">
        <h2 className="text-xl font-bold leading-none">Description</h2>
        <p>{event.description}</p>
        <p className="flex items-center gap-2 text-sm">
          <LinkIcon size={16} />
          <Link href={event.external_url}>{event.external_url}</Link>
        </p>
      </section>
    </article>
  );
}

export default EventDetails;
