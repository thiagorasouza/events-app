import * as z from "zod";

const now = new Date();
const oneYearAhead = new Date(new Date().getFullYear() + 1);

export const formSchema = z.object({
  title: z.string().min(3).max(100),
  location: z.string().min(3).max(200),
  startDateTime: z.date().min(now).max(oneYearAhead),
  endDateTime: z.date().min(now).max(oneYearAhead),
  description: z.string().max(10000),
  external_url: z.string().url(),
  image_url: z.string().url(),
  categoryId: z.string(),
});

export type FormSchema = z.infer<typeof formSchema>;
