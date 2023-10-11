"use client";

import * as React from "react";

import { SettingMachineContext, Setting } from "@/machines";
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
  Label,
  Switch,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui";
import { cn, getId } from "@/lib/utils";

interface ToggleDraggableCardProps extends Setting {
  advanced: boolean;
  settingId: number;
  onDrag?: (event: React.PointerEvent<HTMLButtonElement>) => void;
  active: boolean;
}

export const ToggleDraggableCard = (props: ToggleDraggableCardProps) => {
  const { label, hint, tooltip, advanced, settingId, onDrag, active } = props;

  const [, send] = SettingMachineContext.useActor();
  const id = React.useId();

  const handleClick = () => {
    send({
      advanced,
      type: "EDIT-TOGGLE",
      settingId,
    });
  };

  const handleDuplicate = () => {
    send({
      advanced,
      type: "DUPLICATE",
      settingId: getId(),
      targetSettingId: settingId,
    });
  };

  const handleDelete = () => {
    send({
      advanced,
      type: "DELETE",
      settingId,
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
      <div className="flex-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-x-2">
            <Label className="text-gray-700" size="sm" asChild>
              <span>Toggle</span>
            </Label>

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

          <DropdownMenu>
            <DropdownMenuTrigger className="flex-none text-gray-500 hover:text-gray-900">
              <MoreHorizontal className="h-5 w-5" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[182px]">
              <DropdownMenuItem onSelect={handleDuplicate}>
                <Copy /> Duplicate
              </DropdownMenuItem>
              <DropdownMenuItem visual="destructive" onSelect={handleDelete}>
                <Trash /> Delete Field
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="pointer-events-none mt-3 flex items-start gap-x-2">
          <Switch size="md" id={id} />
          <div>
            <Label className="text-gray-700" size="sm" htmlFor={id}>
              {label ? label : " Remember me"}
            </Label>
            <HelperText size="sm">
              {hint ? hint : "Save my login details for next time."}
            </HelperText>
          </div>
        </div>
      </div>
    </article>
  );
};
