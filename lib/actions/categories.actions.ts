"use server";

import { Category, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getAllCategories(): Promise<Category[]> {
  try {
    return await prisma.category.findMany({});
  } catch (error) {
    console.error(error);
    throw new Error("Internal server error");
  }
}
