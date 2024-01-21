import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export type KeyOfType<Source, Type> = keyof {
  [Property in keyof Source as Source[Property] extends Type
    ? Property
    : never]: any;
};

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
