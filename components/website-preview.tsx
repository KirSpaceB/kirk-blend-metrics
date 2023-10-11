import * as React from "react";

import { Setting } from "@/machines";
import {
  HelperText,
  Input,
  InputGroup,
  InputLeftAddon,
  Label,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui";
import { HelpCircle } from "./icons";

interface WebsitePreviewProps extends Setting {}

export const WebsitePreview = (props: WebsitePreviewProps) => {
  const { label, hint, tooltip } = props;
  const id = React.useId();

  return (
    <div className="space-y-1.5">
      <div className="flex items-center gap-x-2">
        <Label className="text-gray-700" size="sm" htmlFor={id}>
          {label ? label : "Website"}
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

      {hint && <HelperText size="sm">{hint}</HelperText>}

      <InputGroup>
        <InputLeftAddon>http://</InputLeftAddon>
        <Input placeholder="www.untitledui.com" id={id} />
      </InputGroup>
    </div>
  );
};
