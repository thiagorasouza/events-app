"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";

import TextInput from "./TextInput";
import DateInput from "./DateInput";

const formSchema = z.object({
  title: z.string().min(2).max(50),
  location: z.string().min(2).max(50),
  startDateTime: z.date(),
  endDateTime: z.date(),
});

function EventsForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      location: "",
      startDateTime: new Date(),
      endDateTime: new Date(),
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-4"
      >
        <TextInput name="title" label="Title" control={form.control} />
        <TextInput name="location" label="Location" control={form.control} />
        <DateInput name="startDateTime" label="Start" control={form.control} />
        <DateInput name="endDateTime" label="End" control={form.control} />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}

export default EventsForm;
