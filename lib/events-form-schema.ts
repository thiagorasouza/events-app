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
  title: "My Test Event",
  location: "Default Location, Lisbon, Portugal",
  startDateTime: tomorrow,
  endDateTime: dayAfterTomorrow,
  description: "Event Description",
  external_url: "https://www.google.com",
  image_url:
    "https://utfs.io/f/72e13911-1f65-47e4-a66b-fa5bd9ff9ad1-6g5uno.jpg",
  categoryId: "1",
};

export type FormSchema = z.infer<typeof formSchema>;
