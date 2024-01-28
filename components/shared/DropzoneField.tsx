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
import { Control } from "react-hook-form";
import { KeyOfType } from "@/lib/utils";

interface DropzoneFieldProps {
  label: string;
  name: KeyOfType<FormSchema, String>;
  control: Control<FormSchema>;
}

function DropzoneField({ label, name, control }: DropzoneFieldProps) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <UploadDropzone
              endpoint="imageUploader"
              onClientUploadComplete={(res) => {
                // Do something with the response
                console.log("Files: ", res);
                alert("Upload Completed");
              }}
              onUploadError={(error: Error) => {
                alert(`ERROR! ${error.message}`);
              }}
              onUploadBegin={(name) => {
                // Do something once upload begins
                console.log("Uploading: ", name);
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
