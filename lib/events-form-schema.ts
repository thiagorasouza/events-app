import * as z from "zod";

export const now = new Date();
console.log("🚀 ~ now:", now);
export const oneYearAhead = new Date(
  new Date().setFullYear(new Date().getFullYear() + 1),
);
const tomorrow = new Date(now.setDate(now.getDate() + 1));
const dayAfterTomorrow = new Date(now.setDate(now.getDate() + 1));

export const formSchema = z.object({
  title: z.string().min(3).max(100),
  location: z.string().min(3).max(200),
  startDateTime: z.date().min(now).max(oneYearAhead),
  endDateTime: z.date().min(now).max(oneYearAhead),
  description: z.string().min(3).max(10000),
  external_url: z.string().url(),
  image_url: z.string().url(),
  categoryId: z.string(),
});

export const formDefaultValues = {
  title: "",
  location: "",
  startDateTime: now,
  endDateTime: dayAfterTomorrow,
  description: "",
  external_url: "",
  image_url: "",
  categoryId: "",
};

export type FormSchema = z.infer<typeof formSchema>;
