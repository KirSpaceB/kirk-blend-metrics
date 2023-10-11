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
  InputGroup,
  InputRightElement,
  Label,
} from "./ui";
import {
  Copy,
  Eye,
  EyeOff,
  GridVertical3,
  HelpCircle,
  MoreHorizontal,
  Trash,
} from "./icons";
import { useToggle } from "@/lib/hooks";

interface PasswordDraggableCardProps extends Setting {
  advanced: boolean;
  settingId: number;
  onDrag?: (e: React.PointerEvent<HTMLButtonElement>) => void;
  active: boolean;
}

export const PasswordDraggableCard = (props: PasswordDraggableCardProps) => {
  const {
    onDrag,
    advanced,
    settingId,
    active,
    label,
    placeholder,
    hint,
    optional,
  } = props;

  const [, send] = SettingMachineContext.useActor();
  const id = React.useId();
  const [show, { toggle }] = useToggle();

  const options = {
    advanced,
    settingId,
  };

  const handleClick = () => {
    send({ ...options, type: "EDIT-PASSWORD" });
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
          <div className="flex flex-grow items-center gap-x-2">
            <Label
              className="pointer-events-none text-gray-700"
              size="sm"
              htmlFor={id}
            >
              {label ? label : "Password"}
            </Label>
            {optional && <HelpCircle className="text-gray-400" />}
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

        {hint && (
          <HelperText className="mt-1.5" size="sm">
            {hint}
          </HelperText>
        )}

        <InputGroup className="pointer-events-none mt-3">
          <Input
            placeholder={placeholder ? placeholder : "Enter text here"}
            type={show ? "text" : "password"}
            id={id}
          />
          <InputRightElement>
            <button className="flex-none focus:outline-none" onClick={toggle}>
              {show ? (
                <EyeOff className="h-5 w-5 text-gray-500" />
              ) : (
                <Eye className="h-5 w-5 text-gray-500" />
              )}
            </button>
          </InputRightElement>
        </InputGroup>
      </div>
    </article>
  );
};
