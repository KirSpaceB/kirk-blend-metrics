"use client";

import * as React from "react";

import {
  Badge,
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxLabel,
  ComboboxOption,
  ComboboxOptions,
  ComboboxTrigger,
  HelperText,
  ScaleOutIn,
  ScrollArea,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui";
import { HelpCircle, Search, X } from "./icons";
import { Setting } from "@/machines";
import { isEmpty, keys } from "@/lib/utils";
import { useArray, useControllableState } from "@/lib/hooks";

interface Option {
  id: string;
  serviceName: string;
  serviceType: string;
  type: string;
  lastDateAndTime: string;
  countryCode: string;
  personal: string;
  service: string;
}

type Options = Option[];

const options: Options = [
  {
    serviceName: "ALB WAF Service",
    personal: "Personal",
    serviceType: "Video streaming service",
    type: "Digital",
    id: "72255d4849af8ed6e0df1173",
    service: "Software",
    lastDateAndTime: "08/05/2023 at 03:05:15 PM",
    countryCode: "UK",
  },
  {
    serviceName: "ALC CTF Service",
    personal: "Personal",
    serviceType: "Audio streaming service",
    type: "Service",
    id: "72255d4849af8ed6e0df117",
    service: "Online Services",
    lastDateAndTime: "08/05/2023 at 03:05:15 PM",
    countryCode: "UA",
  },
  {
    serviceName: "ALD RMP Service",
    personal: "Premier",
    serviceType: "Premium video streaming service",
    type: "Digital",
    id: "72255d4849af8ed6e0df119",
    service: "Online Store",
    lastDateAndTime: "08/05/2023 at 03:05:15 PM",
    countryCode: "US",
  },
  {
    serviceName: "ALE NFP Service",
    personal: "Business",
    serviceType: "Audio streaming service",
    type: "Service",
    id: "72255d4849af8ed6e0df110",
    service: "Online Services",
    lastDateAndTime: "08/05/2023 at 03:05:15 PM",
    countryCode: "US",
  },
];

interface SearchFieldPreview extends Setting {}

export const SearchFieldPreview = (props: SearchFieldPreview) => {
  const { label, hint, placeholder, tooltip, metrics = [] } = props;

  const hasServiceName = metrics.includes("Service Name");
  const hasPersonal = metrics.includes("Personal");
  const hasServiceType = metrics.includes("Service Type");
  const hasType = metrics.includes("Type");
  const hasId = metrics.includes("ID");
  const hasService = metrics.includes("Service");
  const hasLastDateAndTime = metrics.includes("Last Date & Time");
  const hasCountryCode = metrics.includes("Country Code");

  const record = {
    id: hasId,
    serviceName: hasServiceName,
    serviceType: hasServiceType,
    type: hasType,
    lastDateAndTime: hasLastDateAndTime,
    countryCode: hasCountryCode,
    personal: hasPersonal,
    service: hasService,
  };

  const [badges, { patch, remove, clear }] = useArray<string>();
  const [selected, setSelected] = useControllableState<Option | undefined>({
    onChange(value) {
      if (!value) {
        return patch(undefined);
      }

      const result = keys(record).map((key) => (record[key] ? value[key] : ""));
      const filteredResult = result.filter(Boolean);
      patch(filteredResult);
    },
  });
  const [query, setQuery] = React.useState("");
  const id = React.useId();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
  };

  const resetQuery = () => setQuery("");

  const filetedOptions =
    query === ""
      ? options
      : options.filter((option) =>
          option.serviceName.toLowerCase().includes(query.toLowerCase())
        );

  const noResults = isEmpty(metrics);

  return (
    <div>
      <Combobox className="w-full" value={selected} onChange={setSelected}>
        <div className="flex items-center gap-x-2">
          <ComboboxLabel className="text-gray-700" size="sm">
            {label ? label : "Search"}
          </ComboboxLabel>

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

        {hint && (
          <HelperText className="mt-1.5 text-gray-500" size="sm">
            {hint}
          </HelperText>
        )}

        <div className="relative mt-3">
          <ComboboxTrigger>
            <ComboboxInput
              size="lg"
              as={React.Fragment}
              displayValue={(option: Option) => option.serviceName}
              onChange={handleChange}
            >
              <input
                placeholder={placeholder ? placeholder : "Type to search"}
              />
            </ComboboxInput>
            <ComboboxButton className="peer-focus:text-gray-400" size="lg">
              <Search className="h-5 w-5" />
            </ComboboxButton>
          </ComboboxTrigger>
          <ScaleOutIn afterLeave={resetQuery}>
            <ComboboxOptions className="z-10">
              <ScrollArea className="h-[304px]">
                {noResults ? (
                  <span className="flex justify-center p-3 text-center text-[13px] font-medium leading-none text-gray-900">
                    No results found
                  </span>
                ) : (
                  filetedOptions.map((option) => (
                    <ComboboxOption
                      className="space-y-1.5"
                      key={option.id}
                      value={option}
                    >
                      <div className="flex items-center gap-x-1.5">
                        {hasServiceName && (
                          <span className="text-sm font-medium text-gray-700">
                            {option.serviceName}
                          </span>
                        )}

                        {hasPersonal && (
                          <>
                            <span className="inline-flex h-1 w-1 flex-none rounded-full bg-gray-700" />
                            <span className="text-sm font-medium text-gray-700">
                              {option.personal}
                            </span>
                          </>
                        )}
                      </div>
                      <div className="flex items-center gap-x-1.5">
                        {hasServiceType && (
                          <span className="text-sm text-gray-500">
                            {option.serviceType}
                          </span>
                        )}

                        {hasType && (
                          <>
                            <span className="inline-flex h-1 w-1 flex-none rounded-full bg-gray-400" />
                            <span className="text-sm text-gray-500">
                              {option.type}
                            </span>
                          </>
                        )}
                      </div>
                      <div className="flex items-center gap-x-1.5">
                        {hasId && (
                          <span className="text-sm text-gray-500">
                            {option.id}
                          </span>
                        )}

                        {hasService && (
                          <>
                            <span className="inline-flex h-1 w-1 flex-none rounded-full bg-gray-400" />
                            <span className="text-sm text-gray-500">
                              {option.service}
                            </span>
                          </>
                        )}
                      </div>
                      <div className="flex items-center gap-x-1.5">
                        {hasLastDateAndTime && (
                          <span className="text-sm text-gray-500">
                            {option.lastDateAndTime}
                          </span>
                        )}

                        {hasCountryCode && (
                          <>
                            <span className="inline-flex h-1 w-1 flex-none rounded-full bg-gray-400" />
                            <span className="text-sm text-gray-500">
                              {option.countryCode}
                            </span>
                          </>
                        )}
                      </div>
                    </ComboboxOption>
                  ))
                )}
              </ScrollArea>
            </ComboboxOptions>
          </ScaleOutIn>
        </div>
      </Combobox>

      {badges && (
        <div className="mt-4 flex flex-wrap gap-2">
          {badges.map((badge, index) => (
            <Badge
              className="gap-x-1 rounded-2xl px-1.5 py-1"
              size="lg"
              visual="primary"
              key={index}
            >
              {badge}
              <button
                className="flex-none focus-visible:outline-none"
                onClick={() => remove(index)}
              >
                <X />
              </button>
            </Badge>
          ))}
        </div>
      )}

      {badges && (
        <button
          className="mt-4 text-sm font-semibold text-primary-500"
          onClick={clear}
        >
          Clear All
        </button>
      )}
    </div>
  );
};
