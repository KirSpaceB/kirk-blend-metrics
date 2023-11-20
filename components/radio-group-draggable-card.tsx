import * as React from "react";

import { cn, getId } from "@/lib/utils";
import { SettingMachineContext, Setting } from "@/machines";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  HelperText,
  Label,
  RadioGroup,
  RadioGroupItem,
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

interface RadioGroupDraggableCardProps extends Setting {
  advanced: boolean;
  onDrag?: (e: React.PointerEvent<HTMLButtonElement>) => void;
  active: boolean;
}

export const RadioGroupDraggableCard = (
  props: RadioGroupDraggableCardProps
) => {
  const {
    onDrag,
    advanced,
    id: settingId,
    active,
    label,
    hint,
    optional,
    tooltip,
  } = props;

  const [, send] = SettingMachineContext.useActor();
  const id = React.useId();

  const options = {
    advanced,
    settingId,
  };

  const handleClick = () => {
    send({ ...options, type: "EDIT-RADIO-GROUP" });
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
            <Label className="text-gray-700" size="sm" asChild>
              <span>{label ? label : "Radio Group"}</span>
            </Label>

            {optional && (
              <span className="ml-1 text-sm font-medium text-gray-400">
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

        <RadioGroup className="pointer-events-none mt-3 gap-y-3">
          <div className="flex items-center gap-x-2">
            <RadioGroupItem id={`first-${id}`} value="first" />
            <Label className="text-gray-700" size="sm" htmlFor={`first-${id}`}>
              ALB WAF Service
            </Label>
          </div>
          <div className="flex items-center gap-x-2">
            <RadioGroupItem id={`second-${id}`} value="second" />
            <Label className="text-gray-700" size="sm" htmlFor={`second-${id}`}>
              ALC CTF Service
            </Label>
          </div>
          <div className="flex items-center gap-x-2">
            <RadioGroupItem id={`third-${id}`} value="third" />
            <Label className="text-gray-700" size="sm" htmlFor={`third-${id}`}>
              ALD RMP Service
            </Label>
          </div>
          <div className="flex items-center gap-x-2">
            <RadioGroupItem id={`fourth-${id}`} value="fourth" />
            <Label className="text-gray-700" size="sm" htmlFor={`fourth-${id}`}>
              ALD RMP Service
            </Label>
          </div>
          <div className="flex items-center gap-x-2">
            <RadioGroupItem id={`fifth-${id}`} value="fifth" />
            <Label className="text-gray-700" size="sm" htmlFor={`fifth-${id}`}>
              BBC RMP Service
            </Label>
          </div>
          <div className="flex items-center gap-x-2">
            <RadioGroupItem id={`sixth-${id}`} value="sixth" />
            <Label className="text-gray-700" size="sm" htmlFor={`sixth-${id}`}>
              BBC SMP Service
            </Label>
          </div>
          <div className="flex items-center gap-x-2">
            <RadioGroupItem id={`seventh-${id}`} value="seventh" />
            <Label
              className="text-gray-700"
              size="sm"
              htmlFor={`seventh-${id}`}
            >
              BBC TMP Service
            </Label>
          </div>
          <div className="flex items-center gap-x-2">
            <RadioGroupItem id={`eighth-${id}`} value="eighth" />
            <Label className="text-gray-700" size="sm" htmlFor={`eighth-${id}`}>
              BBC WMP Service
            </Label>
          </div>
        </RadioGroup>
      </div>
    </article>
  );
};
