"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import {
  FormSchema,
  formDefaultValues,
  formSchema,
  maxDate,
  minDate,
} from "@/lib/events-form-schema";
import TextField from "./TextField";
import DateTimeField from "./DateTimeField";
import TextareaField from "./TextareaField";
import CategoriesField from "./CategoriesField";
import React, { useState } from "react";
import OrganizerField from "./OrganizerField";
import DropzoneField from "./DropzoneField";
import { createEvent } from "@/lib/actions/events.actions";

export function EventsForm({ categories }: { categories: React.ReactNode }) {
  const [error, setError] = useState<string>("");

  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: formDefaultValues,
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const response = await createEvent(values);
    if (response?.statusCode === "422") {
      setError("");
    } else {
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-5"
      >
        <p></p>
        <TextField name="title" label="Title" control={form.control} />
        <TextField name="location" label="Location" control={form.control} />

        <DateTimeField
          name="startDateTime"
          label="Start Date"
          control={form.control}
          minDate={minDate}
          maxDate={maxDate}
        />
        <DateTimeField
          name="endDateTime"
          label="End Date"
          control={form.control}
          minDate={minDate}
          maxDate={maxDate}
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
