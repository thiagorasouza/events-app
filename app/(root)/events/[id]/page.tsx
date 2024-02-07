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
    <article className="flex flex-col gap-7 px-3">
      <div className="flex flex-col lg:flex-row lg:items-start gap-3">
        <header className="w-full flex flex-col lg:flex-row shadow-lg rounded-xl bg-white overflow-hidden">
          <div className="lg:max-w-[300px] rounded-xl lg:mr-2">
            <Image
              src={event.image_url}
              alt="event banner"
              width={1000}
              height={1000}
              className="w-full object-cover object-center shadow-xl"
            />
          </div>

          <div className="p-6 flex flex-col flex-grow gap-7">
            <div className="flex items-center gap-3">
              <div>
                <h1 className="text-2xl font-bold leading-none mb-1">{event.title}</h1>
                <p className="flex items-center text-sm gap-2">
                  <MapPin size={20} /> {event.location}
                </p>
              </div>
              <p className="inline-block rounded-full bg-gray-300 px-3 py-1 text-sm ml-auto">{event.category.name}</p>
            </div>

            <div>
              <p className="flex items-center text-sm gap-2 mb-2">
                <Calendar size={20} />
                <span>{formatDateTime(event.startDateTime)}</span>
              </p>
              <p className="flex items-center text-sm gap-2">
                <Clock size={20} />
                <span>Lasts for {formatTimeDifference(event.startDateTime, event.endDateTime)}</span>
              </p>
            </div>
          </div>
        </header>

        <section className="sm:w-full lg:max-w-[300px] p-5 flex flex-row items-start gap-4 shadow-md rounded-xl bg-white overflow-hidden">
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
      </div>

      <section className="mx-5">
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-6">Description</h2>
          <p>{event.description}</p>
        </div>

        <p className="flex items-center text-sm gap-2 mb-6">
          <LinkIcon size={16} />
          <Link href={event.external_url}>{event.external_url}</Link>
        </p>
      </section>
    </article>
  );
}

export default EventDetails;
