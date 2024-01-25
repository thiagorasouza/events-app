import CategoriesList from "@/components/shared/CategoriesList";
import EventsForm from "@/components/shared/EventsForm";

function CreateEvent() {
  return (
    <section className="mx-auto max-w-[600px]">
      <h1 className="text-3xl font-bold py-5">Create Event</h1>
      <div className="">
        <EventsForm categories={<CategoriesList />} />
      </div>
    </section>
  );
}

export default CreateEvent;
