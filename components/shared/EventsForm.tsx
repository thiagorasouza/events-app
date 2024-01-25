"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { FormSchema, formSchema } from "@/lib/events-form-schema";
import TextField from "./TextField";
import DateTimeField from "./DateTimeField";
import TextareaField from "./TextareaField";
import CategoriesField from "./CategoriesField";

export function EventsForm() {
  // 1. Define your form.
  const date = new Date();
  const startDefault = new Date(date.setDate(date.getDate() + 1));
  const endDefault = new Date(date.setDate(date.getDate() + 1));

  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      location: "",
      startDateTime: startDefault,
      endDateTime: endDefault,
      description: "",
      external_url: "",
      categoryId: "",
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
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-5"
      >
        <TextField name="title" label="Title" control={form.control} />
        <TextField name="location" label="Location" control={form.control} />

        <DateTimeField
          name="startDateTime"
          label="Start Date"
          control={form.control}
        />
        <DateTimeField
          name="endDateTime"
          label="End Date"
          control={form.control}
        />
        <TextareaField
          name="description"
          label="Description"
          control={form.control}
        />
        <TextField
          name="external_url"
          label="External URL"
          control={form.control}
        />
        <CategoriesField
          name="categoryId"
          label="Category"
          control={form.control}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}

export default EventsForm;
