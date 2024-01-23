"use server";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getAllCategories() {
  try {
    return await prisma.category.findMany({});
  } catch (error) {
    console.error(error);
    throw new Error("Internal server error");
  }
}
