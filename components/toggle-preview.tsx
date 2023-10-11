"use client";

import React from "react";

import { Setting } from "@/machines";
import { HelpCircle } from "./icons";
import {
  HelperText,
  Label,
  Switch,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui";

interface TogglePreviewProps extends Setting {}

export const TogglePreview = (props: TogglePreviewProps) => {
  const { label, hint, tooltip } = props;

  const id = React.useId();

  return (
    <div>
      <div className="flex items-center gap-x-2">
        <Label className="text-gray-700" size="sm">
          Toggle
        </Label>

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

      <div className="mt-3 flex items-start gap-x-2">
        <Switch size="md" id={id} />
        <div>
          <Label className="text-gray-700" size="sm" htmlFor={id}>
            {label ? label : "Remember me"}
          </Label>
          <HelperText size="sm">
            {hint ? hint : "Save my login details for next time."}
          </HelperText>
        </div>
      </div>
    </div>
  );
};
