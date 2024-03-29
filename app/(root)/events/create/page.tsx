import EventsForm from "@/components/shared/EventsForm";

function CreateEvent() {
  return (
    <section className="mx-auto max-w-[600px]">
      <h1 className="text-3xl font-bold py-5">Create Event</h1>
      <div className="">
        <EventsForm />
      </div>
    </section>
  );
}

export default CreateEvent;
