"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker } from "react-day-picker";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import s from "./calendar.module.css";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  components,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("px-6 py-5", className)}
      classNames={{
        months: s.months,
        month: s.month,
        caption: s.caption,
        caption_label: s["caption-label"],
        nav: s.nav,
        nav_button: cn(
          buttonVariants({ variant: "ghost", visual: "gray", size: "md" }),
          "p-0 w-10"
        ),
        nav_button_previous: s["nav-button-previous"],
        nav_button_next: s["nav-button-next"],
        table: s.table,
        head_row: s["head-row"],
        head_cell: s["head-cell"],
        row: s.row,
        cell: cn(
          s.cell,
          props.mode === "range" ? s["cell--range"] : s[".cell--not-in-range"]
        ),
        day: cn(
          buttonVariants({ variant: "ghost", visual: "gray", size: "md" }),
          "w-10 p-0 font-normal hover:font-medium text-gray-700 rounded-full hover:bg-gray-50 focus:bg-gray-100"
        ),
        day_range_start: "day-range-start",
        day_range_end: "day-range-end",
        day_selected: s["day-selected"],
        day_today: s["day-today"],
        day_outside: s["day-outside"],
        day_disabled: s["day-disabled"],
        day_range_middle: s["day-range-middle"],
        day_hidden: s["day-hidden"],
        ...classNames,
      }}
      components={{
        IconLeft: ({ ...props }) => <ChevronLeft className="h-4 w-4" />,
        IconRight: ({ ...props }) => <ChevronRight className="h-4 w-4" />,
        ...components,
      }}
      {...props}
    />
  );
}
Calendar.displayName = "Calendar";

export { Calendar };
