import React from "react";
//Zagjs Inports
import * as tagsInput from "@zag-js/tags-input";
import { useMachine, normalizeProps, mergeProps } from "@zag-js/react";
import { flushSync } from "react-dom";

// Headless Imports
import { Fragment, useState } from "react";
import { Combobox } from "@headlessui/react";

// This component integrates a Zag input tags component with a Combobox input component.
// The main issue is that the dropdown functionality from the combobox does not interact well with the zagjs component.

const ZagInput = () => {
  const [state, send] = useMachine(
    tagsInput.machine({
      id: "1",
    })
  );

  const api = tagsInput.connect(state, send, normalizeProps);

  return (
    <div
      {...api.rootProps}
      className="flex w-full min-w-[44px] flex-wrap items-center rounded-[5px] border border-gray-300 bg-white px-[14px] py-2.5 data-[focus]:ring data-[focus]:ring-blue-500"
    >
      {api.value.map((value, index) => (
        <div
          className="ml-1 inline-flex items-center rounded-full bg-gray-100 p-1.5 first:ml-0"
          key={index}
        >
          <div
            {...api.getItemProps({ index, value })}
            className="inline-flex flex-none items-center gap-x-1"
          >
            <span className="flex-none text-sm font-medium text-blue-500 focus-visible:outline-none">
              {value}
            </span>
            <button {...api.getItemDeleteTriggerProps({ index, value })}>
              &#x2715;
            </button>
          </div>
          <input
            {...api.getItemInputProps({ index, value })}
            className="border-none text-gray-900 focus:ring-0"
          />
        </div>
      ))}
      <input
        {...api.inputProps}
        className="h-full flex-grow border-none text-gray-900 focus:ring-0"
        type="text"
        placeholder="Add tag..."
      />
    </div>
  );
};

const people = [
  "Durward Reynolds",
  "Kenton Towne",
  "Therese Wunsch",
  "Benedict Kessler",
  "Katelyn Rohan",
];

export function ShareWindowInput() {
  const [selectedPeople, setSelectedPeople] = useState([]);
  const [query, setQuery] = useState("");

  // To resolve a Headless UI error
  const props = { multiple: true } as unknown as { multiple?: false };

  // Sync the selectedPeople state with the Zagjs input. This way we can update the Zagjs input
  console.log("selectedPeople in shareWindowInput", { selectedPeople });

  const filteredPeople =
    query === ""
      ? people
      : people.filter((person) => {
          return person.toLowerCase().includes(query.toLowerCase());
        });
  console.log("query from parent component", query);
  return (
    // Added value and onChange and passed them down as props into ZagJsInput
    <Combobox value={selectedPeople} onChange={setSelectedPeople} {...props}>
      {/* Render a `Fragment` instead of an `input` */}
      {/* When combobox gets clicked options should be passed */}
      <Combobox.Input as={Fragment} onChange={(e) => setQuery(e.target.value)}>
        <ZagInput />
      </Combobox.Input>
      <Combobox.Options>
        {filteredPeople.map((value, index) => (
          <Combobox.Option key={index} value={value}>
            {value}
          </Combobox.Option>
        ))}
      </Combobox.Options>
    </Combobox>
  );
}
