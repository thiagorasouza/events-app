"use client";

// From https://time.openstatus.dev/

import * as React from "react";
import { Clock } from "lucide-react";
import { Label } from "@/components/ui/label";
import { TimePickerInput } from "./TimePickerInput";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";

interface TimePickerProps {
  label: string;
  name: string;
  control: any;
}

export function TimePicker({ label, name, control }: TimePickerProps) {
  const minuteRef = React.useRef<HTMLInputElement>(null);
  const hourRef = React.useRef<HTMLInputElement>(null);

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex flex-col gap-2">
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <div className="flex items-center gap-2 bg-white rounded-md">
              <TimePickerInput
                className="border-none"
                aria-label="hours"
                picker="hours"
                date={field.value}
                setDate={field.onChange}
                ref={hourRef}
                onRightFocus={() => minuteRef.current?.focus()}
              />
              <span className="text-sm mb-[1px]">:</span>

              <TimePickerInput
                className="border-none"
                aria-label="minutes"
                picker="minutes"
                date={field.value}
                setDate={field.onChange}
                ref={minuteRef}
                onLeftFocus={() => hourRef.current?.focus()}
              />
              <Clock className="ml-2 mr-4 h-4 w-4 opacity-50" />
            </div>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
