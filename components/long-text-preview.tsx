import * as React from "react";

import { Setting } from "@/machines";
import { HelperText, Label, Textarea } from "./ui";
import { HelpCircle } from "./icons";

interface LongTextPreviewProps extends Setting {}

export const LongTextPreview = (props: LongTextPreviewProps) => {
  const { label, hint, optional, placeholder } = props;
  const id = React.useId();

  return (
    <div className="space-y-1.5">
      <div className="flex items-center gap-x-2">
        <Label className="text-gray-700" size="sm" htmlFor={id}>
          {label ? label : "Long Text"}
        </Label>
        {optional && <HelpCircle className="flex-none text-gray-400" />}
      </div>

      {hint && <HelperText size="sm">{hint}</HelperText>}

      <Textarea
        placeholder={placeholder ? placeholder : "Enter text here"}
        id={id}
      />
    </div>
  );
};
