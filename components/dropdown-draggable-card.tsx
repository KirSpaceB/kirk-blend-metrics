"use client";

import * as React from "react";

import {
  Copy,
  GridVertical3,
  HelpCircle,
  MoreHorizontal,
  Trash,
} from "./icons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  HelperText,
  Listbox,
  ListboxButton,
  ListboxContent,
  ListboxLabel,
  ListboxOptions,
} from "./ui";
import { Setting, SettingMachineContext } from "@/machines";
import { cn, getId } from "@/lib/utils";
import { stopPropagation } from "@/lib/dom";

interface DropdownDraggableCardProps extends Setting {
  onDrag?: (e: React.PointerEvent<HTMLButtonElement>) => void;
  advanced: boolean;
  active: boolean;
}

export const DropdownDraggableCard = (props: DropdownDraggableCardProps) => {
  const {
    advanced,
    id: settingId,
    onDrag,
    active,
    label,
    hint,
    optional,
    placeholder,
  } = props;

  const [, send] = SettingMachineContext.useActor();

  const options = {
    advanced,
    settingId,
  };

  const handleClick = () => {
    send({
      ...options,
      type: "EDIT-DROPDOWN",
    });
  };

  const handleDelete = () => {
    send({
      ...options,
      type: "DELETE",
    });
  };

  const handleDuplicate = () => {
    send({
      ...options,
      targetSettingId: settingId,
      settingId: getId(),
      type: "DUPLICATE",
    });
  };

  return (
    <article
      className={cn(
        "flex cursor-pointer items-start gap-x-3 rounded-[10px] border border-gray-200 bg-white p-[21px] pl-[13px] hover:border-2 hover:border-gray-300 hover:p-5 hover:pl-3 active:border-2 active:border-primary-500 active:p-5 active:pl-3",
        {
          "border-2 border-primary-500 p-5 pl-3 hover:border-primary-500":
            active,
        }
      )}
      onClick={handleClick}
    >
      <button
        className="flex-none focus-visible:outline-none"
        onPointerDown={onDrag}
      >
        <GridVertical3 className="text-gray-400" />
      </button>

      <Listbox className="flex-grow">
        <div className="flex justify-between">
          <div className="flex flex-grow items-center gap-x-2">
            <ListboxLabel
              className="pointer-events-none text-gray-700"
              size="sm"
            >
              {label ? label : "Dropdown"}
            </ListboxLabel>

            {optional && <HelpCircle className="text-gray-400" />}
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

        <ListboxContent className="pointer-events-none mt-3">
          <ListboxButton
            placeholder={placeholder ? placeholder : "Select a tag"}
          />
          <ListboxOptions />
        </ListboxContent>
      </Listbox>
    </article>
  );
};
