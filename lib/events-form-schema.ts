import * as z from "zod";

export const minDate = new Date();
// one year ahead
export const maxDate = new Date(
  new Date().setFullYear(new Date().getFullYear() + 1),
);

export const formSchema = z.object({
  title: z.string().min(3).max(100),
  location: z.string().min(3).max(200),
  startDateTime: z.date().min(minDate).max(maxDate),
  endDateTime: z.date().min(minDate).max(maxDate),
  description: z.string().min(3).max(10000),
  external_url: z.string().url(),
  image_url: z.string().url(),
  categoryId: z.string(),
});

export type FormSchema = z.infer<typeof formSchema>;
