"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { FormSchema, formSchema } from "@/lib/events-form-schema";
import TextField from "./TextField";
import DateField from "./DateField";

export function EventsForm() {
  // 1. Define your form.
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      location: "",
      startDateTime: new Date(),
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <TextField name="title" label="Title" control={form.control} />
        <TextField name="location" label="Location" control={form.control} />
        <DateField
          name="startDateTime"
          label="Start Date"
          control={form.control}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}

export default EventsForm;
