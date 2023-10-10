"use client";

import * as React from "react";

import { DropdownSettings } from "@/machines";
import { Check2, ChevronDown, HelpCircle, Search, X } from "./icons";
import {
  Badge,
  DropdownCommand,
  DropdownCommandEmpty,
  DropdownCommandGroup,
  DropdownCommandInput,
  DropdownCommandItem,
  DropdownPopover,
  DropdownPopoverContent,
  DropdownPopoverTrigger,
  HelperText,
  InputGroup,
  InputLeftElement,
  Label,
} from "./ui";
import { getSize, isEmpty, keys, toPxIfNumber } from "@/lib/utils";
import {
  useArray,
  useControllableState,
  useIsomorphicLayoutEffect,
} from "@/lib/hooks";

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

interface DropdownPreviewProps extends DropdownSettings {}

export const DropdownPreview = (props: DropdownPreviewProps) => {
  const { setup, source } = props;
  const { label, hint, optional } = setup || {};
  const { metrics = [] } = source || {};

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
  // FIXME: selected can be null, so fix its types
  const [selected, setSelected] = useControllableState<Option>({
    onChange: (value) => {
      if (!value) {
        return patch(undefined);
      }

      const result = keys(record).map((key) => (record[key] ? value[key] : ""));
      const filteredResult = result.filter(Boolean);
      patch(filteredResult);
    },
  });
  const ref = React.useRef<HTMLDivElement>(null);
  const [{ width }, setSize] = React.useState<{
    width?: number;
    height?: number;
  }>({});

  useIsomorphicLayoutEffect(() => {
    const element = ref.current;
    if (!element) return;

    const size = getSize(element);
    setSize(size);
  }, []);

  const style: Record<string, string> = {
    "--width": width ? toPxIfNumber(width) : "auto",
  };
  const noResults = isEmpty(metrics);

  return (
    <div ref={ref}>
      <Label className="flex items-center gap-x-2 text-gray-700" size="sm">
        {label ? label : "Dropdown"}

        {optional && <HelpCircle className="text-gray-400" />}
      </Label>

      {hint && (
        <HelperText className="mt-y-1.5" size="sm">
          {hint}
        </HelperText>
      )}

      <div className="mt-1.5">
        <DropdownPopover selected={selected} onSelectedChange={setSelected}>
          <DropdownPopoverTrigger>
            {selected ? (
              selected.serviceName
            ) : (
              <span className="text-gray-400">Select a tag</span>
            )}
            <ChevronDown className="ml-auto h-5 w-5 text-gray-500" />
          </DropdownPopoverTrigger>
          <DropdownPopoverContent className="w-[--width]" style={{ ...style }}>
            <DropdownCommand className="overflow-hidden">
              <InputGroup>
                <InputLeftElement className="w-8">
                  <Search className="h-[15] w-[15] text-gray-500" />
                </InputLeftElement>
                <DropdownCommandInput
                  placeholder="Search..."
                  className="pl-8"
                />
              </InputGroup>

              <DropdownCommandEmpty className="text-sm text-gray-900">
                No results found.
              </DropdownCommandEmpty>
              <DropdownCommandGroup>
                {noResults ? (
                  <span className="flex justify-center py-3 text-center text-sm text-gray-900">
                    No results found
                  </span>
                ) : (
                  options.map((option) => (
                    <DropdownCommandItem key={option.id} itemValue={option}>
                      <div className="space-y-1.5">
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
                      </div>
                      <Check2 className="ml-auto text-primary-500 opacity-0 group-data-[state=selected]:opacity-100" />
                    </DropdownCommandItem>
                  ))
                )}
              </DropdownCommandGroup>
            </DropdownCommand>
          </DropdownPopoverContent>
        </DropdownPopover>
      </div>

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
