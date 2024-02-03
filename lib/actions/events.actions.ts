"use server";

import * as z from "zod";
import { formSchema } from "../events-form-schema";
import { ValidationError } from "../errors/validation-error";
import { ErrorResponse } from "../protocols/error-response";
import { InternalServerError } from "../errors/internal-server-error";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function createEvent(values: z.infer<typeof formSchema>): Promise<ErrorResponse> {
  const validation = formSchema.safeParse(values);
  if (!validation.success) {
    return ValidationError();
  }

  // prisma.event.create({
  //   data: {
  //     title: values.title,
  //     location: values.location,
  //     description: values.description,
  //     startDateTime: values.startDateTime,
  //     endDateTime: values.endDateTime,
  //     external_url: values.external_url,
  //     image_url: values.image_url,
  //     categoryId: parseInt(values.categoryId)
  //   }
  // })

  return InternalServerError();
}
