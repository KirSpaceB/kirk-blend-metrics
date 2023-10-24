import * as React from "react";

import { Setting } from "@/machines";
import {
  CircularProgressDropzone,
  HelperText,
  Label,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui";
import { HelpCircle } from "./icons";

interface FileUploadPreviewProps extends Setting {}

export const FileUploadPreview = (props: FileUploadPreviewProps) => {
  const { label, hint, tooltip, optional, allowedFileExtensions, maxQuantity } =
    props;

  return (
    <div className="space-y-1.5">
      <div className="flex flex-grow items-center">
        <Label className="pointer-events-none text-gray-700" size="sm" asChild>
          <span>{label ? label : "File Upload"}</span>
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

      <div className="mt-3">
        <CircularProgressDropzone
          icon={true}
          accepted={allowedFileExtensions}
          maxFiles={maxQuantity}
        />
      </div>
    </div>
  );
};
