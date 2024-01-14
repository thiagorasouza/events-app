"use server";

import { PrismaClient } from "@prisma/client";
import Image from "next/image";

const prisma = new PrismaClient();

async function Collection() {
  const events = await prisma.event.findMany({});
  // console.log("🚀 ~ events:", events);

  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Next events</h2>
      <div className="grid grid-cols-5">
        {events.map((event) => {
          return (
            <div key={event.id}>
              <div>{event.title}</div>
              <div>
                <Image
                  src={event.image_url}
                  alt="event image banner"
                  width={128}
                  height={128}
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Collection;
