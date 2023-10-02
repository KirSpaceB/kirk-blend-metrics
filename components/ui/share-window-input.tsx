"use client";
import { Fragment, HTMLProps, forwardRef, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronsUpDownIcon } from "lucide-react";
import * as tagsInput from "@zag-js/tags-input";
import { useMachine, normalizeProps, mergeProps } from "@zag-js/react";

export const callAll = (...fns: (((...args: any[]) => any) | undefined)[]) => {
  return (...args: any[]) => fns.forEach((fn) => fn?.(...args));
};

export const TagsInput = forwardRef<
  HTMLInputElement,
  HTMLProps<HTMLInputElement> & {
    onSelectedChange: (options: string[]) => void;
    selected: string[];
  }
>(({ onSelectedChange, selected, ...props }, ref) => {
  const [state, send] = useMachine(
    tagsInput.machine({
      id: "machine",
    }),
    {
      context: {
        value: selected,
        onValueChange: (details) => {
          onSelectedChange(details.value);
        },
      },
    }
  );

  const api = tagsInput.connect(state, send, normalizeProps);
  const inputProps = mergeProps(props, api.inputProps);

  return (
    <div
      className="flex min-h-[44px] flex-wrap items-center gap-1 rounded-[5px] border border-gray-300 px-[14px] py-2.5 data-[focus]:ring data-[focus]:ring-blue-500"
      {...api.rootProps}
    >
      {api.value.map((value, index) => (
        <div
          className="inline-flex items-center rounded-full bg-gray-100 px-2 py-1.5"
          key={index}
        >
          <div
            {...api.getItemProps({ index, value })}
            className="inline-flex flex-none items-center gap-x-1 [&[hidden]]:hidden"
          >
            <span className="break-words text-sm font-medium text-blue-500">
              {value}
            </span>
            <button
              {...api.getItemDeleteTriggerProps({ index, value })}
              className="flex-none focus-visible:outline-none"
            >
              &#x2715;
            </button>
          </div>
          <input
            className="border-none bg-gray-100 p-0 text-sm text-gray-900 focus:ring-0"
            {...api.getItemInputProps({ index, value })}
          />
        </div>
      ))}
      <input
        placeholder="Add tag..."
        ref={ref}
        {...inputProps}
        className="inline-flex h-[40px] border-none p-0 text-gray-900 focus:ring-0"
      />
    </div>
  );
});

export const getId = (
  (id = 1) =>
  () =>
    id++
)();

const defaultValue = ["Wade Cooper", "Arlene Mccoy", "Devon Webb"];

const Input = forwardRef<HTMLInputElement, HTMLProps<HTMLInputElement>>(
  (props, ref) => <input ref={ref} {...props} />
);

Input.displayName = "Input";

export function ShareWindowInput() {
  const [people, setPeople] = useState(defaultValue);
  const [selectedPeople, setSelectedPeople] = useState<string[]>([]);
  const [query, setQuery] = useState("");

  const filteredPeople =
    query === ""
      ? people
      : people.filter((name) =>
          name
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  return (
    <div className="fixed top-16 w-72">
      <Combobox value={selectedPeople} onChange={setSelectedPeople} multiple>
        <div className="relative mt-1">
          <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
            <Combobox.Input
              as={Fragment}
              onChange={(event) => setQuery(event.target.value)}
            >
              <TagsInput
                selected={selectedPeople}
                onSelectedChange={setSelectedPeople}
              />
            </Combobox.Input>
            <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronsUpDownIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </Combobox.Button>
          </div>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
            <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {filteredPeople.length === 0 && query !== "" ? (
                <div className="relative cursor-default select-none px-4 py-2 text-gray-700">
                  Nothing found.
                </div>
              ) : (
                filteredPeople.map((name, key) => (
                  <Combobox.Option
                    key={key}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? "bg-teal-600 text-white" : "text-gray-900"
                      }`
                    }
                    value={name}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? "font-medium" : "font-normal"
                          }`}
                        >
                          {name}
                        </span>
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active ? "text-white" : "text-teal-600"
                            }`}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
}
