import { type ClassValue, clsx } from "clsx";
import {
  format,
  differenceInMilliseconds,
  differenceInHours,
  differenceInDays,
  differenceInWeeks,
  differenceInMonths,
  differenceInMinutes,
  formatDistance,
} from "date-fns";
import { twMerge } from "tailwind-merge";

type DateType = string | number | Date;

export type KeyOfType<Source, Type> = keyof {
  [Property in keyof Source as Source[Property] extends Type ? Property : never]: any;
};

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDateTime(date: string | number | Date) {
  if (new Date(date).getFullYear === new Date().getFullYear) {
    return format(date, "EEEE, MMMM d, 'at' h:mm a");
  } else {
    return format(date, "MMMM d, yyyy 'at' h:mm a");
  }
}

export function formatTimeDifference(startDate: DateType, endDate: DateType) {
  return formatDistance(endDate, startDate);
}
