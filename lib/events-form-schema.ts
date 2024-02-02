import { add, endOfDay, startOfDay } from "date-fns";
import * as z from "zod";

export const minDate = startOfDay(new Date()); // now
export const maxDate = endOfDay(add(new Date(), { months: 13 })); // 13 months

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

const tomorrow = add(new Date(), { days: 1 });
const dayAfterTomorrow = add(new Date(), { days: 2 });

export const formDefaultValues = {
  title: "",
  location: "",
  startDateTime: tomorrow,
  endDateTime: dayAfterTomorrow,
  description: "",
  external_url: "",
  image_url: "",
  categoryId: "",
};

export type FormSchema = z.infer<typeof formSchema>;
