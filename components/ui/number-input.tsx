import * as React from "react";
import * as numberInput from "@zag-js/number-input";
import { ChevronUp, ChevronDown } from "lucide-react";
import { useMachine, normalizeProps } from "@zag-js/react";

import { InputGroup } from "./input-group";
import { Input } from "./input";
import { InputRightElement } from "./input-element";
import { toString } from "@/lib/utils";

export function NumberInput({
  onValueChange,
  value,
  header,
  max,
  min,
  placeholder,
}: {
  onValueChange?: (value: number) => void;
  value?: number;
  header?: (...args: any[]) => React.ReactNode;
  min?: number;
  max?: number;
  placeholder?: string;
}) {
  const [state, send] = useMachine(
    numberInput.machine({ id: React.useId(), min, max }),
    {
      context: {
        value: toString(value),
        onValueChange: (details) => {
          const { valueAsNumber } = details;
          onValueChange?.(valueAsNumber);
        },
      },
    }
  );

  const api = numberInput.connect(state, send, normalizeProps);

  return (
    <>
      {header?.(api.labelProps)}
      <InputGroup {...api.rootProps}>
        <Input placeholder={placeholder} {...api.inputProps} />
        <InputRightElement className="inset-y-0.5 w-7 flex-col justify-between">
          <button
            className="flex-none rounded-sm bg-gray-100 px-1.5 py-1 focus-visible:outline-none"
            {...api.decrementTriggerProps}
          >
            <ChevronUp className="h-2.5 w-2.5 text-gray-500" />
          </button>
          <button
            className="flex-none rounded-sm bg-gray-100 px-1.5 py-1 focus-visible:outline-none"
            {...api.incrementTriggerProps}
          >
            <ChevronDown className="h-2.5 w-2.5 text-gray-500" />
          </button>
        </InputRightElement>
      </InputGroup>
    </>
  );
}
