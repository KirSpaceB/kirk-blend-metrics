import * as React from "react";

import { Setting } from "@/machines";
import {
  HelperText,
  Label,
  Listbox,
  ListboxButton,
  ListboxContent,
  ListboxLabel,
  ListboxOptions,
  Textarea,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui";
import { HelpCircle } from "./icons";

interface VideoPreviewProps extends Setting {}

export const VideoPreview = (props: VideoPreviewProps) => {
  const { label, hint, optional, tooltip } = props;
  const id = React.useId();

  return (
    <div className="space-y-1.5">
      <div className="flex flex-grow items-center">
        <Label className="pointer-events-none text-gray-700" size="sm" asChild>
          <span>{label ? label : "Video"}</span>
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

      <div className="mt-3 space-y-3">
        <Listbox className="space-y-1.5">
          <ListboxLabel className="text-gray-700" size="sm">
            Video Source
          </ListboxLabel>

          <ListboxContent>
            <ListboxButton placeholder="Select Source" />
            <ListboxOptions></ListboxOptions>
          </ListboxContent>
        </Listbox>

        <div className="space-y-1.5">
          <Label
            className="text-gray-700"
            size="sm"
            htmlFor={`video-link-${id}`}
          >
            Video Link
          </Label>

          <Textarea
            className="h-[68px]"
            placeholder="Enter Video URL"
            id={`video-link-${id}`}
          />
        </div>
      </div>
    </div>
  );
};
