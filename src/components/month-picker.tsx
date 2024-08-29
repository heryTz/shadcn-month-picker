import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { CalendarDaysIcon } from "lucide-react";
import { ComponentProps } from "react";
import { MonthPickerContent } from "./month-picker-content";
import dayjs from "dayjs";

function humanMonthDate(date: Date | string | null) {
  if (!date) return "";
  return dayjs(date).format("MMM YYYY");
}

export function MonthPicker({
  placeholder,
  value,
  onChange,
  buttonProps,
  type,
}: MonthPickerProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "flex justify-start w-full pl-3 text-left font-normal aria-[invalid=true]:border-destructive aria-[invalid=true]:text-destructive",
            !value && "text-muted-foreground"
          )}
          {...buttonProps}
        >
          <CalendarDaysIcon className="w-4 h-4 mr-2" />
          {!value && <span>{placeholder ?? "Prend une date"}</span>}
          {value && type === "simple" && humanMonthDate(value)}
          {value && type === "range" && value.from ? (
            value.to ? (
              <>
                {humanMonthDate(value.from)} - {humanMonthDate(value.to)}
              </>
            ) : (
              humanMonthDate(value.from)
            )
          ) : null}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        {/* WTF! to satify TypeScript */}
        {type === "simple" ? (
          <MonthPickerContent type={type} value={value} onChange={onChange} />
        ) : (
          <MonthPickerContent type={type} value={value} onChange={onChange} />
        )}
      </PopoverContent>
    </Popover>
  );
}

type MonthPickerProps = {
  placeholder?: string;
  buttonProps?: ComponentProps<typeof Button>;
} & ComponentProps<typeof MonthPickerContent>;
