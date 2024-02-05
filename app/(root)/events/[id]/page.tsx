"use server";

import { getEventById } from "@/lib/actions/events.actions";
import { Calendar, Clock, ImageIcon, Link as LinkIcon, MapPin } from "lucide-react";
import Image from "next/image";
import { formatDateTime, formatTimeDifference } from "@/lib/utils";
import Link from "next/link";

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
        className="w-full object-cover object-center mb-5 shadow-xl"
      />

      <div className="flex items-center mb-4 gap-3">
        <div>
          <h1 className="text-2xl font-bold leading-none mb-1">{event.title}</h1>
          <p className="flex items-center text-sm gap-2">
            <MapPin size={20} /> {event.location}
          </p>
        </div>
        <p className="inline-block rounded-full bg-gray-300 px-4 py-1 text-sm ml-auto">{event.category.name}</p>
      </div>

      <div className="flex items-center">
        <div className="flex gap-3 items-center text-sm mb-4">
          {event.organizer.picture_url ? (
            <Image
              src={event.organizer.picture_url}
              alt="profile image"
              className="rounded-full"
              width={40}
              height={40}
            />
          ) : (
            <ImageIcon size={24} />
          )}
          <div>
            <div className="mb-1 text-gray-500">Organizer: </div>
            <div className="font-semibold">{event.organizer.name}</div>
          </div>
        </div>
      </div>

      <p className="flex items-center text-sm gap-2 mb-2">
        <Calendar size={20} />
        <span>{formatDateTime(event.startDateTime)}</span>
      </p>
      <p className="flex items-center text-sm gap-2 mb-6">
        <Clock size={20} />
        <span>Lasts for {formatTimeDifference(event.startDateTime, event.endDateTime)}</span>
      </p>

      <p className="mb-6">{event.description}</p>

      <p className="flex items-center text-sm gap-2 mb-6">
        <LinkIcon size={20} />
        <Link href={event.external_url}>{event.external_url}</Link>
      </p>

      <p className="text-right mb-3">by {event.organizer.name}</p>
    </article>
  );
}

export default EventDetails;
