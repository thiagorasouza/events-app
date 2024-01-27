"use server";

import { getAllCategories } from "@/lib/actions/categories.actions";
import { SelectItem } from "@/components/ui/select";
import { handleError } from "@/lib/handle-error";
import { Category } from "@prisma/client";

async function CategoriesList() {
  let categories: Category[];

  try {
    categories = await getAllCategories();
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
