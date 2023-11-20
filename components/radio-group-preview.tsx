import * as React from "react";

import { Setting } from "@/machines";
import {
  HelperText,
  Label,
  RadioGroup,
  RadioGroupItem,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui";
import { HelpCircle } from "./icons";

interface RadioGroupPreviewProps extends Setting {}

export const RadioGroupPreview = (props: RadioGroupPreviewProps) => {
  const { label, hint, optional, tooltip } = props;
  const id = React.useId();

  return (
    <div className="space-y-1.5">
      <div className="flex items-center">
        <Label className="text-gray-700" size="sm" asChild>
          <span>{label ? label : "Radio Group"}</span>
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

      <RadioGroup className="mt-3 gap-y-3">
        <div className="flex items-center gap-x-2">
          <RadioGroupItem id={`first-${id}`} value="first" />
          <Label className="text-gray-700" size="sm" htmlFor={`first-${id}`}>
            ALB WAF Service
          </Label>
        </div>
        <div className="flex items-center gap-x-2">
          <RadioGroupItem id={`second-${id}`} value="second" />
          <Label className="text-gray-700" size="sm" htmlFor={`second-${id}`}>
            ALC CTF Service
          </Label>
        </div>
        <div className="flex items-center gap-x-2">
          <RadioGroupItem id={`third-${id}`} value="third" />
          <Label className="text-gray-700" size="sm" htmlFor={`third-${id}`}>
            ALD RMP Service
          </Label>
        </div>
        <div className="flex items-center gap-x-2">
          <RadioGroupItem id={`fourth-${id}`} value="fourth" />
          <Label className="text-gray-700" size="sm" htmlFor={`fourth-${id}`}>
            ALD RMP Service
          </Label>
        </div>
        <div className="flex items-center gap-x-2">
          <RadioGroupItem id={`fifth-${id}`} value="fifth" />
          <Label className="text-gray-700" size="sm" htmlFor={`fifth-${id}`}>
            BBC RMP Service
          </Label>
        </div>
        <div className="flex items-center gap-x-2">
          <RadioGroupItem id={`sixth-${id}`} value="sixth" />
          <Label className="text-gray-700" size="sm" htmlFor={`sixth-${id}`}>
            BBC SMP Service
          </Label>
        </div>
        <div className="flex items-center gap-x-2">
          <RadioGroupItem id={`seventh-${id}`} value="seventh" />
          <Label className="text-gray-700" size="sm" htmlFor={`seventh-${id}`}>
            BBC TMP Service
          </Label>
        </div>
        <div className="flex items-center gap-x-2">
          <RadioGroupItem id={`eighth-${id}`} value="eighth" />
          <Label className="text-gray-700" size="sm" htmlFor={`eighth-${id}`}>
            BBC WMP Service
          </Label>
        </div>
      </RadioGroup>
    </div>
  );
};
