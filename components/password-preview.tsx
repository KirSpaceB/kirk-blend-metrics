import * as React from "react";

import { Setting } from "@/machines";
import { HelperText, Input, InputGroup, InputRightElement, Label } from "./ui";
import { Eye, EyeOff, HelpCircle } from "./icons";
import { useToggle } from "@/lib/hooks";

interface PasswordPreviewProps extends Setting {}

export const PasswordPreview = (props: PasswordPreviewProps) => {
  const { label, hint, optional, placeholder } = props;
  const id = React.useId();
  const [show, { toggle }] = useToggle();

  return (
    <div className="space-y-1.5">
      <div className="flex items-center gap-x-2">
        <Label className="text-gray-700" size="sm" htmlFor={id}>
          {label ? label : "Password"}
        </Label>
        {optional && <HelpCircle className="flex-none text-gray-400" />}
      </div>

      {hint && <HelperText size="sm">{hint}</HelperText>}

      <InputGroup>
        <Input
          placeholder={placeholder ? placeholder : "Enter text here"}
          type={show ? "text" : "password"}
          id={id}
        />
        <InputRightElement>
          <button className="flex-none focus:outline-none" onClick={toggle}>
            {show ? (
              <EyeOff className="h-5 w-5 text-gray-500" />
            ) : (
              <Eye className="h-5 w-5 text-gray-500" />
            )}
          </button>
        </InputRightElement>
      </InputGroup>
    </div>
  );
};
