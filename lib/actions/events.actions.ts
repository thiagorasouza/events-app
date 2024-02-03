"use server";

import * as z from "zod";
import { formSchema } from "../events-form-schema";
import { ValidationError } from "../responses/validation-error";
import { ErrorResponse } from "../protocols/error-response";
import { InternalServerError } from "../responses/internal-server-error";
import { PrismaClient } from "@prisma/client";
import { auth } from "@clerk/nextjs";
import { UnauthorizedError } from "../responses/unauthorized-error";
import { BadRequestError } from "../responses/bad-request-error";
import { Success } from "../responses/success";

const prisma = new PrismaClient();

export async function createEvent(values: z.infer<typeof formSchema>): Promise<SuccessResponse | ErrorResponse> {
  const { userId: clerkId } = auth();
  console.log("🚀 ~ userId:", clerkId);
  if (!clerkId) {
    return UnauthorizedError();
  }

  const user = await prisma.user.findFirst({ where: { clerkId } });
  if (!user) {
    return InternalServerError();
  }

  const validation = formSchema.safeParse(values);
  if (!validation.success) {
    return ValidationError();
  }

  const categoryId = parseInt(values.categoryId);
  const category = await prisma.category.findFirst({ where: { id: categoryId } });
  if (!category) {
    return BadRequestError();
  }

  await prisma.event.create({
    data: {
      title: values.title,
      location: values.location,
      description: values.description,
      startDateTime: values.startDateTime,
      endDateTime: values.endDateTime,
      external_url: values.external_url,
      image_url: values.image_url,
      categoryId: parseInt(values.categoryId),
      organizerId: user.id,
    },
  });

  return Success("Event created");
}
