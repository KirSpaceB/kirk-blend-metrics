import * as React from "react";

import { Setting } from "@/machines";
import {
  Dropzone,
  HelperText,
  Label,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui";
import { HelpCircle } from "./icons";
import { IMAGE_EXTENSIONS } from "@/lib/constants";

interface ImageUploadPreviewProps extends Setting {}

export const ImageUploadPreview = (props: ImageUploadPreviewProps) => {
  const {
    label,
    hint,
    tooltip,
    optional,
    maxQuantity,
    allowedImageExtensions,
  } = props;

  const accept = allowedImageExtensions?.reduce(
    (preview, current) => ({ ...preview, ...IMAGE_EXTENSIONS[current] }),
    {} as Record<string, string[]>
  );

  return (
    <div className="space-y-1.5">
      <div className="flex flex-grow items-center">
        <Label className="pointer-events-none text-gray-700" size="sm" asChild>
          <span>{label ? label : "Image Upload"}</span>
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
        <Dropzone icon={true} maxFiles={maxQuantity} accept={accept} />
      </div>
    </div>
  );
};
