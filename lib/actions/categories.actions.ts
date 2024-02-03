"use server";

import { Category, PrismaClient } from "@prisma/client";
import { InternalServerError } from "@/lib/responses/internal-server-error";
import { ErrorResponse } from "../protocols/error-response";
import { Success } from "../responses/success";

const prisma = new PrismaClient();

export async function getAllCategories(): Promise<SuccessResponse | ErrorResponse> {
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
