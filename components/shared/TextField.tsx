import { FormSchema } from "@/lib/events-form-schema";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Control } from "react-hook-form";
import { KeyOfType } from "@/lib/utils";

type TextFieldProps = {
  control: Control<FormSchema>;
  name: KeyOfType<FormSchema, String>;
  label: string;
};

function TextField({ control, name, label }: TextFieldProps) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export default TextField;
