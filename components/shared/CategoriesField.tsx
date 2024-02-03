import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { FormSchema } from "@/lib/events-form-schema";
import { Control } from "react-hook-form";
import { KeyOfType } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { getAllCategories } from "@/lib/actions/categories.actions";
import { Category } from "@prisma/client";

type CategoriesFieldProps = {
  name: KeyOfType<FormSchema, String>;
  label: string;
  control: Control<FormSchema>;
};

function CategoriesField({ name, label, control }: CategoriesFieldProps) {
  const [categories, setCategories] = useState<Category[]>([]);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    fetchCategories();
  }, []);

  async function fetchCategories() {
    setError(false);

    const response = await getAllCategories();

    if (response.statusCode !== 200) {
      setError(true);
      return;
    }

    setCategories(response.data);
  }

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <div className="flex gap-2">
            <Select onValueChange={field.onChange}>
              <FormControl>
                {error ? (
                  <SelectTrigger disabled>
                    <SelectValue placeholder="Failed to load categories. Click to retry ->" />
                  </SelectTrigger>
                ) : categories.length === 0 ? (
                  <SelectTrigger disabled>
                    <SelectValue placeholder="Loading..." />
                  </SelectTrigger>
                ) : (
                  <SelectTrigger>
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                )}
              </FormControl>
              <SelectContent>
                {!error &&
                  categories.length > 0 &&
                  categories.map((category) => (
                    <SelectItem key={category.id} value={category.id.toString()}>
                      {category.name}
                    </SelectItem>
                  ))}
              </SelectContent>
            </Select>
            {categories.length === 0 && (
              <Button onClick={fetchCategories} disabled={!error}>
                Retry
              </Button>
            )}
          </div>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export default CategoriesField;
