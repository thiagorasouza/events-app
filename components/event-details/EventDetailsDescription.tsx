import { cn } from "@/lib/utils";
import { LinkIcon } from "lucide-react";
import Link from "next/link";

function EventDetailsDescription({
  description,
  external_url,
  className,
}: {
  description: string;
  external_url: string;
  className?: string;
}) {
  return (
    <section className={cn("card col-span-3 flex flex-col gap-7 p-6", className)}>
      <h2 className="text-xl font-bold leading-none">Description</h2>
      <p>{description}</p>
      <p className="flex items-center gap-2 text-sm">
        <LinkIcon size={16} />
        <Link href={external_url}>{external_url}</Link>
      </p>
    </section>
  );
}

export default EventDetailsDescription;
