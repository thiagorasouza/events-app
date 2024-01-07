import Link from "next/link";
import { Button } from "../ui/button";

function Hero() {
  return (
    <section className="py-24">
      <div className="flex flex-col gap-6 md:w-1/2">
        <h1 className="text-4xl font-bold">
          Make new friends and have fun with other expats
        </h1>
        <p>
          We curate events from multiple websites so you can easily pick the
          next event that matches your availability.
        </p>
        <Button asChild className="w-full md:w-fit">
          <Link href="#">Find an event</Link>
        </Button>
      </div>
    </section>
  );
}

export default Hero;
