"use server";

import { getAllCategories } from "@/lib/actions/categories.actions";
import { SelectItem } from "@/components/ui/select";
import { handleError } from "@/lib/handle-error";
import { Category } from "@prisma/client";

async function CategoriesList() {
  let categories: Category[];

  try {
    const response = await getAllCategories();

    if (response.statusCode !== 200) {
      throw new Error("Unable to query categories at this time, please try again later");
    }

    categories = response.data;
  } catch (error) {
    return handleError(error as Error);
  }

  return (
    <>
      {categories.length > 0 ? (
        categories.map((category) => (
          <SelectItem key={category.id} value={category.id.toString()}>
            {category.name}
          </SelectItem>
        ))
      ) : (
        <SelectItem value="" disabled>
          No categories yet
        </SelectItem>
      )}
    </>
  );
}

export default CategoriesList;
