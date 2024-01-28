"use client";

import { UploadDropzone } from "@/lib/uploadthing";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { FormSchema } from "@/lib/events-form-schema";
import { UseFormReturn } from "react-hook-form";
import { KeyOfType } from "@/lib/utils";

interface DropzoneFieldProps {
  label: string;
  name: KeyOfType<FormSchema, String>;
  form: UseFormReturn<FormSchema>;
}

function DropzoneField({ label, name, form }: DropzoneFieldProps) {
  const { setError } = form;

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <UploadDropzone
              endpoint="imageUploader"
              onClientUploadComplete={(res) => {
                const fileURL = res[0].url;
                field.onChange(fileURL);
              }}
              onUploadError={(error: Error) => {
                setError("image_url", {
                  type: "custom",
                  message: "Unable to upload banner image",
                });
              }}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export default DropzoneField;
