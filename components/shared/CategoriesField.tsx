import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
import React from "react";

type CategoriesFieldProps = {
  name: KeyOfType<FormSchema, String>;
  label: string;
  control: Control<FormSchema>;
  children: React.ReactNode;
};

function CategoriesField({
  name,
  label,
  control,
  children,
}: CategoriesFieldProps) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder="Select a verified email to display" />
              </SelectTrigger>
            </FormControl>
            <SelectContent>{children}</SelectContent>
          </Select>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export default CategoriesField;
