"use server";

import { InternalServerError } from "@/lib/responses/internal-server-error";
import { ErrorResponse } from "../protocols/error-response";
import { Success } from "../responses/success";
import { Category } from "@prisma/client";
import prisma from "@/lib/prisma";

export async function getAllCategories(): Promise<SuccessResponse<Category[]> | ErrorResponse> {
  try {
    const categories = await prisma.category.findMany({});
    if (!categories) {
      return InternalServerError("Unable to query categories");
    }

    return Success(categories);
  } catch (error) {
    return InternalServerError(error);
  }
}
