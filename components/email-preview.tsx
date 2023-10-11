import * as React from "react";

import { Setting } from "@/machines";
import {
  HelperText,
  Input,
  InputGroup,
  InputLeftElement,
  Label,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui";
import { Email, HelpCircle } from "./icons";

interface EmailPreviewProps extends Setting {}

export const EmailPreview = (props: EmailPreviewProps) => {
  const { label, hint, tooltip } = props;
  const id = React.useId();

  return (
    <div className="space-y-1.5">
      <div className="flex items-center gap-x-2">
        <Label className="text-gray-700" size="sm" htmlFor={id}>
          {label ? label : "Email"}
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

      <InputGroup className="mt-3">
        <InputLeftElement>
          <Email className="h-5 w-5 text-gray-500" />
        </InputLeftElement>
        <Input placeholder="olivia@untitledui.com" type="email" id={id} />
      </InputGroup>
    </div>
  );
};
