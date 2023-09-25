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

// Current issue might be because of styles
interface ZagInputProps {
  onChange?: (value: string[]) => void;
  value: string[];
  onValueChange: (query: string) => void;
}

const ZagInput = React.forwardRef<HTMLElement, ZagInputProps>(
  (
    { value: comboboxDropdownValue, onValueChange, onChange, ...props },
    ref
  ) => {
    // const [state, send] = useMachine(
    //   tagsInput.machine({
    //     id: "1",
    //   }),
    //   {
    //     context: {
    //       value: comboboxDropdownValue,
    //     },
    //   }
    // );
    console.log("onValueChange", onValueChange);
    // we got to sync state from the component
    // or were controlling
    // Whenever you pass an array to the component
    console.log("props.value", comboboxDropdownValue);

    // this controls the state
    // this state might not be an array.
    console.log(onValueChange);
    const [state, send] = useMachine(tagsInput.machine({ id: "1" }), {
      context: {
        value: comboboxDropdownValue,
        onValueChange(details) {
          console.log("line 41 is readis on value change called?");
          console.log("line 42details on line 35", details);
          flushSync(() => {
            // We use flush sync to change state synchronously
            onChange(details.value);
          });
        },
      },
    });

    const api = tagsInput.connect(state, send, normalizeProps);
    console.log(props);

    // This is allows us to remove the spread of props
    // const _inputProps = mergeProps(api.inputProps, { ...props });

    // NOTE: _inputProps isn't declared anywhere. Ensure you've defined it or remove the reference.
    // we commented this out because it did nothing
    // const _inputProps = {}; // Placeholder, please define or remove.

    return (
      <div
        {...api.rootProps}
        // For some reason we can remove ...props and ..._inputProps can handle the intended functionality
        {...props} // spread the rest of the props here
        // {..._inputProps}
        className="flex w-full min-w-[44px] flex-wrap items-center rounded-[5px] border border-gray-200 bg-white px-[14px] py-2.5"
        ref={ref}
      >
        {api.value.map((value, index) => (
          <div key={index}>
            <div
              {...api.getItemProps({ index, value })}
              className="m-1 inline-flex items-center gap-x-1 bg-gray-400 px-2 text-base text-gray-900"
            >
              <span>{value}</span>
              <button {...api.getItemDeleteTriggerProps({ index, value })}>
                &#x2715;
              </button>
            </div>
            <input {...api.getItemInputProps({ index, value })} />
          </div>
        ))}
        <input
          // were typing in this component to add new tags
          // we have to pass the parent ref, then we use the query state to filter the people
          //test sdasdasdd
          onChange={onValueChange}
          ref={ref}
          className="h-full flex-grow"
          type="text"
          placeholder="Add tag..."
        />
      </div>
    );
  }
);

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
  // where i'm udating the

  return (
    // Added value and onChange and passed them down as props into ZagJsInput
    <Combobox value={selectedPeople} onChange={setSelectedPeople} {...props}>
      {/* Render a `Fragment` instead of an `input` */}
      <Combobox.Input as={Fragment}>
        <ZagInput value={selectedPeople} onValueChange={setQuery} />
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
