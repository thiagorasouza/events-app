import { CalendarCheck, Clock, MapPin } from "lucide-react";
import Image from "next/image";

function EventDetailsHeader({
  image_url,
  title,
  location,
  categoryName,
  startDateTime,
  duration,
}: {
  image_url: string;
  title: string;
  location: string;
  categoryName: string;
  startDateTime: string;
  duration: string;
}) {
  return (
    <header className="card col-span-4 flex w-full flex-col lg:flex-row">
      <div className="rounded-xl lg:max-w-[300px]">
        <Image
          src={image_url}
          alt="event banner"
          width={1000}
          height={1000}
          className="w-full object-cover object-center shadow-sm"
        />
      </div>

      <div className="flex flex-grow flex-col items-start gap-5 p-6">
        <div>
          <h1 className="mb-2 text-2xl font-bold leading-none">{title}</h1>
          <p className="flex items-center gap-2 text-sm">
            <MapPin size={20} /> {location}
          </p>
        </div>
        <p className="inline-block rounded-full bg-gray-300 px-3 py-1 text-sm">{categoryName}</p>
        <div>
          <p className="mb-2 flex items-center gap-2 text-sm">
            <CalendarCheck size={20} />
            <span>{startDateTime}</span>
          </p>
          <p className="flex items-center gap-2 text-sm">
            <Clock size={20} />
            <span>Lasts for {duration}</span>
          </p>
        </div>
      </div>
    </header>
  );
}

export default EventDetailsHeader;
