import * as z from "zod";

export const formSchema = z.object({
  title: z.string(),
  location: z.string(),
  startDateTime: z.date(),
  endDateTime: z.date(),
});

export type FormSchema = z.infer<typeof formSchema>;
