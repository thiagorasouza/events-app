"use server";

import prisma from "@/lib/prisma";
import Image from "next/image";
import Link from "next/link";

async function Collection() {
  const events = await prisma.event.findMany({
    include: {
      organizer: {
        select: {
          name: true,
        },
      },
      _count: {
        select: {
          attendees: true,
        },
      },
    },
  });
  // console.log("🚀 ~ events:", events);

  return (
    <section className="mb-4">
      <h2 className="text-2xl font-bold mb-4">Next events</h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {events.map((event) => {
          return (
            <Link key={event.id} href={`/events/${event.id}`}>
              <article
                key={event.id}
                className="
                rounded-xl shadow-md bg-white
                hover:shadow-lg cursor-pointer
                transition-shadow duration-300
                overflow-hidden
              "
              >
                <div>
                  <Image
                    src={event.image_url}
                    alt="event image banner"
                    width={800}
                    height={600}
                    className="w-full object-cover"
                  />
                </div>
                <div className="flex flex-col p-4 pt-3 min-h-[150px]">
                  <h3 className="text-lg font-bold mb-3 line-clamp-2">{event.title}</h3>
                  <p className="text-sm font-semibold text-gray-500">{event.location}</p>
                  <p className="text-xs text-gray-500">
                    {event.startDateTime.toLocaleDateString("en-us", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                  <div className="flex text-xs justify-between mt-auto">
                    <p>{`Attendees: ${event._count.attendees}`}</p>
                    <p>{event.organizer.name}</p>
                  </div>
                </div>
              </article>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

export default Collection;
