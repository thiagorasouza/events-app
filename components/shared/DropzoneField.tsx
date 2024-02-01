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
import Image from "next/image";

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
          {field.value !== "" ? (
            <div className="mt-0 relative border border-dashed border-gray-900/25 rounded-md overflow-hidden">
              <Image
                src={field.value}
                alt="uploaded event banner"
                width={256}
                height={256}
                quality={100}
                className="w-full object-cover object-center"
              />
              <button
                className="
                absolute right-4 top-3
                text-sm font-medium
                p-2 border-[1px] border-dashed border-gray-500 rounded-md
                bg-white bg-opacity-50
              "
                onClick={() => field.onChange("")}
              >
                Clear
              </button>
            </div>
          ) : (
            <FormControl className="mt-0">
              <UploadDropzone
                endpoint="imageUploader"
                onClientUploadComplete={(res) => {
                  const fileURL = res[0].url;
                  field.onChange(fileURL);
                  console.log(field.value);
                }}
                onUploadError={(error: Error) => {
                  setError("image_url", {
                    type: "custom",
                    message: "Unable to upload banner image",
                  });
                }}
              />
            </FormControl>
          )}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export default DropzoneField;
