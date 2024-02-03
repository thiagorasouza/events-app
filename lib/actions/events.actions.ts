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

export async function getEventById(value: string) {
  const id = parseInt(value);
  if (isNaN(id)) {
    return InternalServerError("Event id string should be parsable to an integer");
  }

  const event = await prisma.event.findFirst({ where: { id } });

  return Success(event);
}

export async function createEvent(values: z.infer<typeof formSchema>): Promise<SuccessResponse | ErrorResponse> {
  try {
    const { userId: clerkId } = auth();
    if (!clerkId) {
      return UnauthorizedError("Unauthenticated request");
    }

    const user = await prisma.user.findFirst({ where: { clerkId } });
    if (!user) {
      return InternalServerError("Unable to find user from clerkId");
    }

    const validation = formSchema.safeParse(values);
    if (!validation.success) {
      return ValidationError("Input data is not valid");
    }

    const categoryId = parseInt(values.categoryId);
    const category = await prisma.category.findFirst({ where: { id: categoryId } });
    if (!category) {
      return BadRequestError("Unable to find categoryId");
    }

    const event = await prisma.event.create({
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

    return Success(event);
  } catch (error) {
    return InternalServerError(error);
  }
}
