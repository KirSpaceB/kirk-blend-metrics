import * as React from "react";

import { Setting } from "@/machines";
import { HelperText, Input, Label } from "./ui";
import { HelpCircle } from "./icons";

interface ShortTextPreviewProps extends Setting {}

export const ShortTextPreview = (props: ShortTextPreviewProps) => {
  const { label, hint, optional, placeholder } = props;
  const id = React.useId();

  return (
    <div className="space-y-1.5">
      <div className="flex items-center gap-x-2">
        <Label className="text-gray-700" size="sm" htmlFor={id}>
          {label ? label : "Short Text"}
        </Label>
        {optional && <HelpCircle className="flex-none text-gray-400" />}
      </div>

      {hint && <HelperText size="sm">{hint}</HelperText>}

      <Input
        placeholder={placeholder ? placeholder : "Enter text here"}
        id={id}
      />
    </div>
  );
};
