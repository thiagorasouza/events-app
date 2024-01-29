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
import React from "react";
import OrganizerField from "./OrganizerField";
import DropzoneField from "./DropzoneField";

export function EventsForm({ categories }: { categories: React.ReactNode }) {
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
      image_url: "",
      categoryId: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
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
        >
          {categories}
        </CategoriesField>
        <OrganizerField />
        <DropzoneField name="image_url" label="Banner Image" form={form} />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}

export default EventsForm;
