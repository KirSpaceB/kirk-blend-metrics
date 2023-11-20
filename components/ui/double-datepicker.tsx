import React from "react";
import { CalendarIcon } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { useControllableState } from "@/lib/hooks";
import { Button } from "./button";
import { format } from "date-fns";
import { Calendar } from "./calendar";
import { ButtonGroup } from "./button-group";
import { RadioGroup } from "@headlessui/react";

export const DoubleDatePicker = ({
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
}) => {
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
  const [open, onOpenChange] = React.useState(false);

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
      <PopoverContent className="flex w-auto rounded-lg border border-gray-100 bg-white shadow-lg">
        <div className="w-[192px] flex-none border-r border-gray-200 px-4 py-3">
          <RadioGroup className="space-y-1">
            <RadioGroup.Option
              value={0}
              className="flex h-10 cursor-pointer items-center rounded-md bg-white px-4 py-2.5 text-sm font-medium text-gray-700 ui-selected:bg-gray-100 ui-active:bg-gray-50"
            >
              Today
            </RadioGroup.Option>
            <RadioGroup.Option
              value={0}
              className="flex h-10 cursor-pointer items-center rounded-md bg-white px-4 py-2.5 text-sm font-medium text-gray-700 ui-selected:bg-gray-100 ui-active:bg-gray-50"
            >
              Yesterday
            </RadioGroup.Option>
            <RadioGroup.Option
              value={0}
              className="flex h-10 cursor-pointer items-center rounded-md bg-white px-4 py-2.5 text-sm font-medium text-gray-700 ui-selected:bg-gray-100 ui-active:bg-gray-50"
            >
              This week
            </RadioGroup.Option>
            <RadioGroup.Option
              value={0}
              className="flex h-10 cursor-pointer items-center rounded-md bg-white px-4 py-2.5 text-sm font-medium text-gray-700 ui-selected:bg-gray-100 ui-active:bg-gray-50"
            >
              Last week
            </RadioGroup.Option>
            <RadioGroup.Option
              value={0}
              className="flex h-10 cursor-pointer items-center rounded-md bg-white px-4 py-2.5 text-sm font-medium text-gray-700 ui-selected:bg-gray-100 ui-active:bg-gray-50"
            >
              This month
            </RadioGroup.Option>
            <RadioGroup.Option
              value={0}
              className="flex h-10 cursor-pointer items-center rounded-md bg-white px-4 py-2.5 text-sm font-medium text-gray-700 ui-selected:bg-gray-100 ui-active:bg-gray-50"
            >
              Last month
            </RadioGroup.Option>
            <RadioGroup.Option
              value={0}
              className="flex h-10 cursor-pointer items-center rounded-md bg-white px-4 py-2.5 text-sm font-medium text-gray-700 ui-selected:bg-gray-100 ui-active:bg-gray-50"
            >
              This year
            </RadioGroup.Option>
            <RadioGroup.Option
              value={0}
              className="flex h-10 items-center rounded-md bg-white px-4 py-2.5 text-sm font-medium text-gray-700 ui-selected:bg-gray-100 ui-active:bg-gray-50"
            >
              Last year
            </RadioGroup.Option>
            <RadioGroup.Option
              value={0}
              className="flex h-10 items-center rounded-md bg-white px-4 py-2.5 text-sm font-medium text-gray-700 ui-selected:bg-gray-100 ui-active:bg-gray-50"
            >
              All time
            </RadioGroup.Option>
            <RadioGroup.Option
              value={0}
              className="flex h-10 items-center rounded-md bg-white px-4 py-2.5 text-sm font-medium text-gray-700 ui-selected:bg-gray-100 ui-active:bg-gray-50"
            >
              Custom range
            </RadioGroup.Option>
          </RadioGroup>
        </div>
        <div className="w-[624px] flex-none">
          <Calendar
            selected={internalSelected}
            onSelect={setInternalSelected}
            numberOfMonths={2}
            month={internalMonth}
            onMonthChange={setInternalMonth}
          />
          <ButtonGroup
            className="mt-5 flex items-center justify-end border-t border-gray-200 p-4"
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
        </div>
      </PopoverContent>
    </Popover>
  );
};
