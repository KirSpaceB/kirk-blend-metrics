import * as React from "react";

import { Setting } from "@/machines";
import { Checkbox, CheckboxGroup, HelperText, Label } from "./ui";
import { HelpCircle } from "./icons";

interface CheckboxPreviewProps extends Setting {}

export const CheckboxPreview = (props: CheckboxPreviewProps) => {
  const { label, hint, optional } = props;
  const id = React.useId();

  return (
    <div className="space-y-1.5">
      <div className="flex items-center gap-x-2">
        <Label className="text-gray-700" size="sm" asChild>
          <span>{label ? label : "Checkbox"}</span>
        </Label>

        {optional && <HelpCircle className="text-gray-400" />}
      </div>

      {hint && <HelperText size="sm">{hint}</HelperText>}

      <CheckboxGroup className="mt-3 space-y-3">
        <div className="flex items-center gap-x-2">
          <Checkbox id={`first-${id}`} />
          <Label className="text-gray-700" size="sm" htmlFor={`first-${id}`}>
            ALB WAF Service
          </Label>
        </div>
        <div className="flex items-center gap-x-2">
          <Checkbox id={`second-${id}`} />
          <Label className="text-gray-700" size="sm" htmlFor={`second-${id}`}>
            ALC CTF Service
          </Label>
        </div>
        <div className="flex items-center gap-x-2">
          <Checkbox id={`third-${id}`} />
          <Label className="text-gray-700" size="sm" htmlFor={`third-${id}`}>
            ALD RMP Service
          </Label>
        </div>
        <div className="flex items-center gap-x-2">
          <Checkbox id={`fourth-${id}`} />
          <Label className="text-gray-700" size="sm" htmlFor={`fourth-${id}`}>
            ALD RMP Service
          </Label>
        </div>
        <div className="flex items-center gap-x-2">
          <Checkbox id={`fifth-${id}`} />
          <Label className="text-gray-700" size="sm" htmlFor={`fifth-${id}`}>
            BBC RMP Service
          </Label>
        </div>
        <div className="flex items-center gap-x-2">
          <Checkbox id={`sixth-${id}`} />
          <Label className="text-gray-700" size="sm" htmlFor={`sixth-${id}`}>
            BBC SMP Service
          </Label>
        </div>
        <div className="flex items-center gap-x-2">
          <Checkbox id={`seventh-${id}`} />
          <Label className="text-gray-700" size="sm" htmlFor={`seventh-${id}`}>
            BBC TMP Service
          </Label>
        </div>
        <div className="flex items-center gap-x-2">
          <Checkbox id={`eighth-${id}`} />
          <Label className="text-gray-700" size="sm" htmlFor={`eighth-${id}`}>
            BBC WMP Service
          </Label>
        </div>
      </CheckboxGroup>
    </div>
  );
};
