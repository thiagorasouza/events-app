"use server";

import { Category, PrismaClient } from "@prisma/client";
import { InternalServerError } from "@/lib/errors/internal-server-error";

const prisma = new PrismaClient();

export async function getAllCategories(): Promise<Category[]> {
  try {
    return await prisma.category.findMany({});
  } catch (error) {
    throw new InternalServerError(error);
  }
}
