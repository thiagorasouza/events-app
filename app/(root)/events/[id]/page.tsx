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
    <article className="flex flex-col gap-3 px-3 ">
      <header className="card col-span-4 flex w-full flex-col lg:flex-row">
        <div className="rounded-xl lg:max-w-[300px]">
          <Image
            src={event.image_url}
            alt="event banner"
            width={1000}
            height={1000}
            className="w-full object-cover object-center shadow-sm"
          />
        </div>

        <div className="flex flex-grow flex-col items-start gap-5 p-6">
          <div>
            <h1 className="mb-2 text-2xl font-bold leading-none">{event.title}</h1>
            <p className="flex items-center gap-2 text-sm">
              <MapPin size={20} /> {event.location}
            </p>
          </div>
          <p className="inline-block rounded-full bg-gray-300 px-3 py-1 text-sm">{event.category.name}</p>
          <div>
            <p className="mb-2 flex items-center gap-2 text-sm">
              <Calendar size={20} />
              <span>{formatDateTime(event.startDateTime)}</span>
            </p>
            <p className="flex items-center gap-2 text-sm">
              <Clock size={20} />
              <span>Lasts for {formatTimeDifference(event.startDateTime, event.endDateTime)}</span>
            </p>
          </div>
        </div>
      </header>

      <section className="card cold-span-2 flex flex-row items-start gap-4 p-5">
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
        <div className="text-sm">
          <div className="text-gray-700">Organizer: </div>
          <div className="font-semibold">{event.organizer.name}</div>
        </div>
      </section>

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
