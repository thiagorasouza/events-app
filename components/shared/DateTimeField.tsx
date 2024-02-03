import { format, startOfDay } from "date-fns";
import { Button } from "../ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { CalendarIcon, Clock } from "lucide-react";
import { Calendar } from "../ui/calendar";
import { KeyOfType, cn } from "@/lib/utils";
import { FormSchema } from "@/lib/events-form-schema";
import { Control } from "react-hook-form";
import { TimePickerInput } from "./TimePickerInput";
import { useRef } from "react";

interface DateFieldProps {
  name: KeyOfType<FormSchema, Date>;
  label: string;
  control: Control<FormSchema>;
  minDate: Date;
  maxDate: Date;
}

function DateTimeField({
  name,
  label,
  control,
  minDate,
  maxDate,
}: DateFieldProps) {
  const minuteRef = useRef<HTMLInputElement>(null);
  const hourRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <FormField
        control={control}
        name={name}
        render={({ field }) => (
          <FormItem>
            <FormLabel>{label}</FormLabel>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-full pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground",
                        )}
                        suppressHydrationWarning
                      >
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span>Pick a date</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={(date, ...args) => {
                        const hours = field.value.getHours();
                        const minutes = field.value.getMinutes();
                        date?.setHours(hours);
                        date?.setMinutes(minutes);
                        return field.onChange(date, ...args);
                      }}
                      disabled={(date) => date < minDate || date > maxDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
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
            </div>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
}

export default DateTimeField;
