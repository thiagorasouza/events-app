import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Textarea } from "../ui/textarea";

interface TextareaFieldProps {
  label: string;
  name: string;
  control: any;
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
