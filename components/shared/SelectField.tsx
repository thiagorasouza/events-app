import {
  Select,
  SelectContent,
  SelectItem,
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
import { useEffect, useState } from "react";
import { getAllCategories } from "@/lib/actions/categories.actions";
import { differenceInISOWeekYears } from "date-fns";

type SelectFieldProps = {
  name: KeyOfType<FormSchema, String>;
  label: string;
  control: Control<FormSchema>;
};

type Category = {
  id: string;
  name: string;
};

function SelectField({ name, label, control }: SelectFieldProps) {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    getAllCategories().then((result) =>
      setCategories(
        result.map((category) => ({
          id: category.id.toString(),
          name: category.name,
        })),
      ),
    );
  }, []);

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
            <SelectContent>
              {categories.length > 0 ? (
                categories.map((category) => (
                  <SelectItem key={category.id} value={category.id}>
                    {category.name}
                  </SelectItem>
                ))
              ) : (
                <SelectItem value="0" disabled>
                  Loading...
                </SelectItem>
              )}
            </SelectContent>
          </Select>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export default SelectField;
