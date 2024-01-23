import { FormSchema } from "@/lib/events-form-schema";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Textarea } from "../ui/textarea";
import { Control } from "react-hook-form";
import { KeyOfType } from "@/lib/utils";

interface TextareaFieldProps {
  label: string;
  name: KeyOfType<FormSchema, String>;
  control: Control<FormSchema>;
}

function TextareaField({ label, name, control }: TextareaFieldProps) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex flex-col gap-2">
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Textarea
              placeholder="Tell us a little bit about the event"
              className="resize-none"
              {...field}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export default TextareaField;
