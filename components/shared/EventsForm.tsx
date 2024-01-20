"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";

import TextInput from "./TextInput";
import DateInput from "./DateInput";
import { TimePicker } from "./TimePicker";
import TextareaField from "./TextareaField";

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
        <div className="flex flex-col md:flex-row gap-4">
          <DateInput
            name="startDate"
            label="Start Date"
            control={form.control}
          />
          <TimePicker
            name="startTime"
            label="Start Time"
            control={form.control}
          />
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <DateInput name="endDate" label="End Date" control={form.control} />
          <TimePicker name="endTime" label="End Time" control={form.control} />
        </div>
        <TextareaField
          name="description"
          label="Description"
          control={form.control}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}

export default EventsForm;
