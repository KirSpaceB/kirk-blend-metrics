import * as React from "react";

import { Setting } from "@/machines";
import {
  HelperText,
  Input,
  Label,
  Listbox,
  ListboxButton,
  ListboxContent,
  ListboxLabel,
  ListboxOption,
  ListboxOptions,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui";
import { HelpCircle } from "./icons";

interface AddressPreviewProps extends Setting {}

export const AddressPreview = (props: AddressPreviewProps) => {
  const {
    label,
    hint,
    optional,
    tooltip,
    hasStreetAddress,
    hasApartmentOrSuiteEtc,
    hasCity,
    hasStateOrRegionOrProvince,
    hasCountry,
    hasPostalOrZipCode,
  } = props;
  const id = React.useId();

  return (
    <div className="space-y-1.5">
      <div className="flex items-center">
        <Label className="pointer-events-none text-gray-700" size="sm">
          {label ? label : "Address"}
        </Label>

        {optional && (
          <span className="ml-1 inline-flex text-sm font-medium text-gray-400">
            (optional)
          </span>
        )}

        <div className="ml-2">
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
      </div>

      {hint && (
        <HelperText className="mt-1.5" size="sm">
          {hint}
        </HelperText>
      )}

      {hasCountry && (
        <Listbox className="mt-4 space-y-1.5">
          <ListboxLabel className="text-gray-700" size="sm">
            Country
          </ListboxLabel>

          <ListboxContent>
            <ListboxButton />
            <ListboxOptions />
          </ListboxContent>
        </Listbox>
      )}

      {hasStreetAddress && (
        <div className="mt-4 space-y-1.5">
          <Label
            className="text-gray-700"
            size="sm"
            htmlFor={`street-address-${id}`}
          >
            Street Address
          </Label>
          <Input
            placeholder="e.g. Banne Buikslaan 101C"
            id={`street-address-${id}`}
          />
        </div>
      )}

      {hasApartmentOrSuiteEtc && (
        <div className="mt-4 space-y-1.5">
          <Label
            className="text-gray-700"
            size="sm"
            htmlFor={`apartment-suite-etc-${id}`}
          >
            Apartment, suite,etc.
          </Label>
          <Input
            placeholder="e.g. 3rd floor"
            id={`apartment-suite-etc-${id}`}
          />
        </div>
      )}

      {hasCity && (
        <div className="mt-4 space-y-1.5">
          <Label className="text-gray-700" size="sm" htmlFor={`city-${id}`}>
            City
          </Label>
          <Input id={`city-${id}`} />
        </div>
      )}

      {hasStateOrRegionOrProvince && (
        <Listbox className="mt-4 space-y-1.5">
          <ListboxLabel className="text-gray-700" size="sm">
            State/Region/Province
          </ListboxLabel>

          <ListboxContent>
            <ListboxButton />
            <ListboxOptions />
          </ListboxContent>
        </Listbox>
      )}

      {hasPostalOrZipCode && (
        <div className="mt-4 space-y-1.5">
          <Label
            className="text-gray-700"
            size="sm"
            htmlFor={`postal-zip-code-${id}`}
          >
            Postal/Zip Code
          </Label>
          <Input className="max-w-[183px]" id={`postal-zip-code-${id}`} />
        </div>
      )}
    </div>
  );
};
