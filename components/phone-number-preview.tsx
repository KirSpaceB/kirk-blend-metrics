import * as React from "react";

import { Setting } from "@/machines";
import {
  HelperText,
  Input,
  Label,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui";
import { HelpCircle } from "./icons";

interface PhoneNumberPreviewProps extends Setting {}

export const PhoneNumberPreview = (props: PhoneNumberPreviewProps) => {
  const { label, hint, optional, defaultCountry, tooltip } = props;
  const id = React.useId();

  return (
    <div className="space-y-1.5">
      <div className="flex items-center">
        <Label
          className="pointer-events-none text-gray-700"
          size="sm"
          htmlFor={id}
        >
          {label ? label : "Phone Number"}
        </Label>

        {optional && (
          <span className="ml-1 text-sm font-medium text-gray-400">
            (optional)
          </span>
        )}

        <div className="ml-2">
          {tooltip && (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <HelpCircle className="text-gray-400" />
                </TooltipTrigger>
                <TooltipContent>{tooltip}</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )}
        </div>
      </div>

      {hint && <HelperText size="sm">{hint}</HelperText>}

      <div className="mt-[11.5px] flex items-center">
        <Select defaultValue={defaultCountry}>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="US">US</SelectItem>
              <SelectItem value="BE">BE</SelectItem>
              <SelectItem value="RS">RS</SelectItem>
              <SelectItem value="TR">TR</SelectItem>
              <SelectItem value="LV">LV</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Input
          className="rounded-l-none"
          placeholder="+1 (555) 000-0000"
          type="tel"
          id={id}
        />
      </div>
    </div>
  );
};
