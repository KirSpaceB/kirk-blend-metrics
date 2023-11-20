import * as React from "react";

import { cn, getId } from "@/lib/utils";
import { SettingMachineContext, Setting } from "@/machines";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  HelperText,
  Input,
  Label,
  Listbox,
  ListboxButton,
  ListboxContent,
  ListboxLabel,
  ListboxOptions,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui";
import {
  Copy,
  GridVertical3,
  HelpCircle,
  MoreHorizontal,
  Trash,
} from "./icons";
import { stopPropagation } from "@/lib/dom";

interface AddressDraggableCardProps extends Setting {
  advanced: boolean;
  onDrag?: (e: React.PointerEvent<HTMLButtonElement>) => void;
  active: boolean;
}

export const AddressDraggableCard = (props: AddressDraggableCardProps) => {
  const {
    onDrag,
    advanced,
    id: settingId,
    active,
    label,
    hint,
    optional,
    hasStreetAddress,
    hasApartmentOrSuiteEtc,
    hasCity,
    hasStateOrRegionOrProvince,
    hasCountry,
    hasPostalOrZipCode,
    tooltip,
  } = props;

  const [, send] = SettingMachineContext.useActor();
  const id = React.useId();

  const options = {
    advanced,
    settingId,
  };

  const handleClick = () => {
    send({ ...options, type: "EDIT-ADDRESS" });
  };

  const handleDuplicate = () => {
    send({
      ...options,
      type: "DUPLICATE",
      targetSettingId: settingId,
      settingId: getId(),
    });
  };

  const handleDelete = () => {
    send({ ...options, type: "DELETE" });
  };

  return (
    <article
      className={cn(
        "flex cursor-pointer items-start gap-x-3 rounded-[10px] border border-gray-200 bg-white p-[21px] pl-[13px] transition duration-300 hover:border-2 hover:border-gray-300 hover:p-5 hover:pl-3 active:border-primary-500 active:p-5 active:pl-3",
        {
          "border-2 border-primary-500 p-5 pl-3 hover:border-primary-500":
            active,
        }
      )}
      onClick={handleClick}
    >
      <button
        className="flex-none select-none text-gray-400 focus-visible:outline-none"
        onPointerDown={onDrag}
      >
        <GridVertical3 />
      </button>

      <div className="flex-grow">
        <div className="flex items-center justify-between">
          <div className="flex flex-grow items-center">
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

          <DropdownMenu>
            <DropdownMenuTrigger className="flex-none text-gray-500 hover:text-gray-900">
              <MoreHorizontal className="h-5 w-5" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[182px]">
              <DropdownMenuItem
                onSelect={handleDuplicate}
                onClick={stopPropagation}
              >
                <Copy /> Duplicate
              </DropdownMenuItem>
              <DropdownMenuItem
                visual="destructive"
                onSelect={handleDelete}
                onClick={stopPropagation}
              >
                <Trash /> Delete Field
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
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

        <div className="pointer-events-none">
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
      </div>
    </article>
  );
};
