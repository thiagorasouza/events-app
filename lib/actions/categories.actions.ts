"use server";

import { Category, PrismaClient } from "@prisma/client";
import { InternalServerError } from "@/lib/errors/internal-server-error";
import { ErrorResponse } from "../protocols/error-response";

const prisma = new PrismaClient();

export async function getAllCategories(): Promise<Category[] | ErrorResponse> {
  try {
    return await prisma.category.findMany({});
  } catch (error) {
    return InternalServerError();
  }
}
