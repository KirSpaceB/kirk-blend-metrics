"use client";

import * as React from "react";
import {
  addDays,
  addMonths,
  addWeeks,
  format,
  isValid,
  parse,
  subMonths,
  subWeeks,
} from "date-fns";
import { Caption, SelectSingleEventHandler } from "react-day-picker";

import { Calendar as CalendarIcon } from "@/components/icons";
import {
  Calendar,
  Input,
  Select,
  Trigger,
  SelectValue,
  SelectContent,
  SelectItem,
  ButtonGroup,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Button,
  buttonVariants,
} from "@/components/ui";
import { useControllableState } from "@/lib/hooks";

export function DatePicker({
  selected,
  onSelected,
  placeholder,
  onApply,
  onCancel,
  month,
  onMonthChange,
}: {
  selected?: Date;
  onSelected?: (value?: Date) => void;
  placeholder?: string;
  onApply?: () => void;
  onCancel?: () => void;
  onMonthChange?: (value?: Date) => void;
  month?: Date;
}) {
  const [internalSelected, setInternalSelected] = useControllableState<
    Date | undefined
  >({
    value: selected,
    onChange: onSelected,
  });
  const [internalMonth, setInternalMonth] = useControllableState<
    Date | undefined
  >({
    value: month,
    onChange: onMonthChange,
  });
  const [inputValue, setInputValue] = React.useState("");
  const [selectValue, setSelectValue] = React.useState<string>();
  const [open, onOpenChange] = React.useState(false);

  const onChange = (value: string) => {
    setInputValue(value);
    const date = parse(value, "PP", new Date());

    if (isValid(date)) {
      setInternalSelected(date);
    } else {
      setInternalSelected(undefined);
    }
  };

  const onValueChange = (value: string) => {
    setSelectValue(value);

    switch (value) {
      case "this week":
        const week = addWeeks(new Date(), 0);
        setInternalSelected(week);
        setInputValue(format(week, "PP"));
        break;

      case "last week":
        const lastWeek = subWeeks(new Date(), 1);
        setInternalSelected(lastWeek);
        setInputValue(format(lastWeek, "PP"));
        break;

      case "this month":
        const month = addMonths(new Date(), 0);
        setInternalMonth(month);
        setInputValue(format(month, "PP"));
        break;

      case "last month":
        const lastMonth = subMonths(new Date(), 1);
        setInternalMonth(lastMonth);
        setInputValue(format(lastMonth, "PP"));
        break;

      default:
        const newDate = addDays(new Date(), parseInt(value));
        setInternalSelected(newDate);
        setInputValue(format(newDate, "PP"));
    }
  };

  const onInternalSelected: SelectSingleEventHandler = (date) => {
    setInternalSelected(date);

    if (date) {
      setInputValue(format(date, "PP"));
    }
  };

  return (
    <Popover open={open} onOpenChange={onOpenChange}>
      <PopoverTrigger asChild>
        <Button variant="outlined">
          <CalendarIcon className="mr-2 h-4 w-4" />
          {internalSelected ? (
            format(internalSelected, "PP")
          ) : (
            <>{placeholder ? placeholder : "Pick a date"}</>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="rounded-lg bg-white shadow-lg">
        <Calendar
          mode="single"
          selected={internalSelected}
          onSelect={onInternalSelected}
          month={internalMonth}
          fromDate={new Date(2020, 1, 1)}
          onMonthChange={setInternalMonth}
          components={{
            Caption: (props) => (
              <>
                <Caption {...props} />
                <div className="flex items-center gap-x-3">
                  <Input
                    className="h-10 flex-auto py-2"
                    value={inputValue}
                    onChange={(e) => onChange(e.target.value)}
                    placeholder="Select date"
                  />
                  <Select value={selectValue} onValueChange={onValueChange}>
                    <Trigger
                      className={buttonVariants({
                        variant: "outlined",
                        visual: "gray",
                        size: "md",
                      })}
                    >
                      <SelectValue placeholder="Select" />
                    </Trigger>
                    <SelectContent>
                      <SelectItem
                        className="pl-4 text-sm font-medium"
                        value="0"
                      >
                        Today
                      </SelectItem>
                      <SelectItem
                        className="pl-4 text-sm font-medium"
                        value="-1"
                      >
                        Yesterday
                      </SelectItem>
                      <SelectItem
                        className="pl-4 text-sm font-medium"
                        value="this week"
                      >
                        This week
                      </SelectItem>
                      <SelectItem
                        className="pl-4 text-sm font-medium"
                        value="last week"
                      >
                        Last week
                      </SelectItem>
                      <SelectItem
                        className="pl-4 text-sm font-medium"
                        value="this month"
                      >
                        This month
                      </SelectItem>
                      <SelectItem
                        className="pl-4 text-sm font-medium"
                        value="last month"
                      >
                        Last month
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </>
            ),
          }}
        />
        <ButtonGroup
          className="mt-5 border-t border-gray-200 p-4"
          direction="horizontal"
        >
          <Button
            variant="outlined"
            visual="gray"
            onClick={() => {
              onOpenChange(false);
              onCancel?.();
            }}
          >
            Cancel
          </Button>
          <Button onChange={onApply}>Apply</Button>
        </ButtonGroup>
      </PopoverContent>
    </Popover>
  );
}
