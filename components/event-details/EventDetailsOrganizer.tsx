import { cn } from "@/lib/utils";
import { ImageIcon } from "lucide-react";
import Image from "next/image";

function EventDetailsOrganizer({
  organizerPictureURL,
  organizerName,
  className,
}: {
  organizerPictureURL: string | null;
  organizerName: string | null;
  className?: string;
}) {
  return (
    <section className={cn("card cold-span-2 flex flex-row items-start gap-4 p-5", className)}>
      {organizerPictureURL ? (
        <Image src={organizerPictureURL} alt="profile image" className="rounded-full" width={40} height={40} />
      ) : (
        <ImageIcon size={24} />
      )}
      <div className="text-sm">
        <div className="text-gray-700">Organizer: </div>
        <div className="font-semibold">{organizerName}</div>
      </div>
    </section>
  );
}

export default EventDetailsOrganizer;
