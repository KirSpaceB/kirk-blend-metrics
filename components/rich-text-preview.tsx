import * as React from "react";

import { Setting } from "@/machines";
import {
  HelperText,
  Label,
  Textarea,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui";
import { HelpCircle } from "./icons";
import { TipTap } from "./tiptap";

interface RichTextPreviewProps extends Setting {}

export const RichTextPreview = (props: RichTextPreviewProps) => {
  const { label, hint, optional, tooltip } = props;
  const id = React.useId();

  return (
    <div className="space-y-1.5">
      <div className="flex items-center">
        <Label
          className="pointer-events-none text-gray-700"
          size="sm"
          htmlFor={id}
        >
          {label ? label : "Rich text"}
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

      <TipTap />
    </div>
  );
};
