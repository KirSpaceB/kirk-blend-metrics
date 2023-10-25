"use client";

import React from "react";

import {
  X2,
  EmailOutlined,
  FileOutlined,
  Search,
  CheckboxOutlined,
  ShortText,
  LongText,
  RichText,
  Number,
  DateOrTime,
  Password,
  Phone,
  Website,
  Address,
  RadioButton,
  ChevronUpDown,
  Toggle,
  ImageOutlined,
  VideoOutlined,
} from "@/components/icons";
import {
  CommandPalette,
  CommandPaletteDialog,
  CommandPaletteDialogClose,
  CommandPaletteDialogContent,
  CommandPaletteEmpty,
  CommandPaletteGroup,
  CommandPaletteHeader,
  CommandPaletteInput,
  CommandPaletteItem,
  CommandPaletteList,
  CommandPaletteTitle,
  IconButton,
} from "@/components/ui";
import {
  PreviewMachineContext,
  SettingMachineContext,
  ToggleMachineContext,
} from "@/machines";
import { getId } from "@/lib/utils";

export default function CommandPaletteModal({
  advanced,
}: {
  advanced: boolean;
}) {
  const [state, dispatch] = ToggleMachineContext.useActor();
  const [, send] = SettingMachineContext.useActor();
  const [, sendTo] = PreviewMachineContext.useActor();

  const onSelectedChange = (value: string) => {
    const options = { advanced, settingId: getId() };

    switch (value) {
      case "search":
        send({
          ...options,
          type: "INSERT",
          kind: "search",
        });
        send({
          ...options,
          type: "EDIT-SEARCH",
        });
        break;

      case "dropdown":
        send({
          ...options,
          type: "INSERT",
          kind: "dropdown",
        });
        send({
          ...options,
          type: "EDIT-DROPDOWN",
        });
        break;

      case "toggle":
        send({
          ...options,
          type: "INSERT",
          kind: "toggle",
        });
        send({
          ...options,
          type: "EDIT-TOGGLE",
        });
        break;

      case "short text":
        send({
          ...options,
          type: "INSERT",
          kind: "short-text",
        });
        send({
          ...options,
          type: "EDIT-SHORT-TEXT",
        });
        break;

      case "long text":
        send({
          ...options,
          type: "INSERT",
          kind: "long-text",
        });
        send({
          ...options,
          type: "EDIT-LONG-TEXT",
        });
        break;

      case "password":
        send({
          ...options,
          type: "INSERT",
          kind: "password",
        });
        send({
          ...options,
          type: "EDIT-PASSWORD",
        });
        break;

      case "email":
        send({
          ...options,
          type: "INSERT",
          kind: "email",
        });
        send({
          ...options,
          type: "EDIT-EMAIL",
        });
        break;

      case "numbers":
        send({
          ...options,
          type: "INSERT",
          kind: "numbers",
        });
        send({
          ...options,
          type: "EDIT-NUMBERS",
        });
        break;

      case "website":
        send({
          ...options,
          type: "INSERT",
          kind: "website",
        });
        send({
          ...options,
          type: "EDIT-WEBSITE",
        });
        break;

      case "address":
        send({
          ...options,
          type: "INSERT",
          kind: "address",
        });
        send({
          ...options,
          type: "EDIT-ADDRESS",
        });
        break;

      case "phone number":
        send({
          ...options,
          type: "INSERT",
          kind: "phone-number",
        });
        send({
          ...options,
          type: "EDIT-PHONE-NUMBER",
        });
        break;

      case "radio group":
        send({
          ...options,
          type: "INSERT",
          kind: "radio-group",
        });
        send({
          ...options,
          type: "EDIT-RADIO-GROUP",
        });
        break;

      case "checkbox":
        send({
          ...options,
          type: "INSERT",
          kind: "checkbox",
        });
        send({
          ...options,
          type: "EDIT-CHECKBOX",
        });
        break;

      case "image upload":
        send({
          ...options,
          type: "INSERT",
          kind: "image-upload",
        });
        send({
          ...options,
          type: "EDIT-IMAGE-UPLOAD",
        });
        break;

      case "file upload":
        send({
          ...options,
          type: "INSERT",
          kind: "file-upload",
        });
        send({
          ...options,
          type: "EDIT-FILE-UPLOAD",
        });
        break;

      case "video":
        send({
          ...options,
          type: "INSERT",
          kind: "video",
        });
        send({
          ...options,
          type: "EDIT-VIDEO",
        });
        break;

      case "rich text":
        send({
          ...options,
          type: "INSERT",
          kind: "rich-text",
        });
        send({
          ...options,
          type: "EDIT-RICH-TEXT",
        });
        break;

      case "date/time":
        send({
          ...options,
          type: "INSERT",
          kind: "date/time",
        });
        send({
          ...options,
          type: "EDIT-DATE/TIME",
        });
        break;
    }

    sendTo("ACTIVATE");
  };

  const open = state.matches("turned on");

  return (
    <CommandPaletteDialog open={open} onOpenChange={() => dispatch("TOGGLE")}>
      <CommandPaletteDialogContent>
        <CommandPalette onSelectedChange={onSelectedChange}>
          <CommandPaletteHeader>
            <CommandPaletteTitle>New Field</CommandPaletteTitle>
            <CommandPaletteDialogClose asChild>
              <IconButton variant="ghost" visual="gray" className="h-6 w-6">
                <X2 className="h-6 w-6 text-gray-500" />
              </IconButton>
            </CommandPaletteDialogClose>
          </CommandPaletteHeader>

          <CommandPaletteInput />

          <CommandPaletteList>
            <CommandPaletteEmpty>No results found.</CommandPaletteEmpty>
            <CommandPaletteGroup heading="Input Fields">
              <CommandPaletteItem value="short text">
                <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg border-[1.5px] border-gray-200">
                  <ShortText className="text-primary-500" />
                </div>
                <div className="flex flex-grow flex-col">
                  <span className="text-sm font-medium leading-6 text-gray-900">
                    Short Text
                  </span>
                  <span className="text-xs leading-[14.52px] text-gray-500">
                    Small text like title
                  </span>
                </div>
              </CommandPaletteItem>

              <CommandPaletteItem value="long text">
                <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg border-[1.5px] border-gray-200">
                  <LongText className="text-primary-500" />
                </div>
                <div className="flex flex-grow flex-col">
                  <span className="text-sm font-medium leading-6 text-gray-900">
                    Long Text
                  </span>
                  <span className="text-xs leading-[14.52px] text-gray-500">
                    Long text like description
                  </span>
                </div>
              </CommandPaletteItem>

              <CommandPaletteItem value="rich text">
                <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg border-[1.5px] border-gray-200">
                  <RichText className="text-primary-500" />
                </div>
                <div className="flex flex-grow flex-col">
                  <span className="text-sm font-medium leading-6 text-gray-900">
                    Rich Text
                  </span>
                  <span className="text-xs leading-[14.52px] text-gray-500">
                    A rich text editor with formating options
                  </span>
                </div>
              </CommandPaletteItem>

              <CommandPaletteItem value="numbers">
                <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg border-[1.5px] border-gray-200">
                  <Number className="text-primary-500" />
                </div>
                <div className="flex flex-grow flex-col">
                  <span className="text-sm font-medium leading-6 text-gray-900">
                    Numbers
                  </span>
                  <span className="text-xs leading-[14.52px] text-gray-500">
                    Numbers (integer, float, decimal)
                  </span>
                </div>
              </CommandPaletteItem>
              <CommandPaletteItem value="date/time">
                <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg border-[1.5px] border-gray-200">
                  <DateOrTime className="text-primary-500" />
                </div>
                <div className="flex flex-grow flex-col">
                  <span className="text-sm font-medium leading-6 text-gray-900">
                    Date/Time
                  </span>
                  <span className="text-xs leading-[14.52px] text-gray-500">
                    A date picker with hours, minute, seconds
                  </span>
                </div>
              </CommandPaletteItem>
              <CommandPaletteItem value="search">
                <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg border-[1.5px] border-gray-200">
                  <Search className="h-5 w-5 text-primary-500" />
                </div>
                <div className="flex flex-grow flex-col">
                  <span className="text-sm font-medium leading-6 text-gray-900">
                    Search
                  </span>
                  <span className="text-xs leading-[14.52px] text-gray-500">
                    Choose this to start your workflow
                  </span>
                </div>
              </CommandPaletteItem>

              <CommandPaletteItem value="email">
                <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg border-[1.5px] border-gray-200">
                  <EmailOutlined className="h-5 w-5 text-primary-500" />
                </div>
                <div className="flex flex-grow flex-col">
                  <span className="text-sm font-medium leading-6 text-gray-900">
                    Email
                  </span>
                  <span className="text-xs leading-[14.52px] text-gray-500">
                    Email field with validation format
                  </span>
                </div>
              </CommandPaletteItem>

              <CommandPaletteItem value="password">
                <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg border-[1.5px] border-gray-200">
                  <Password className="h-5 w-5 text-primary-500" />
                </div>
                <div className="flex flex-grow flex-col">
                  <span className="text-sm font-medium leading-6 text-gray-900">
                    Password
                  </span>
                  <span className="text-xs leading-[14.52px] text-gray-500">
                    Password field with encryption
                  </span>
                </div>
              </CommandPaletteItem>
              <CommandPaletteItem value="phone number">
                <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg border-[1.5px] border-gray-200">
                  <Phone className="h-5 w-5 text-primary-500" />
                </div>
                <div className="flex flex-grow flex-col">
                  <span className="text-sm font-medium leading-6 text-gray-900">
                    Phone Number
                  </span>
                  <span className="text-xs leading-[14.52px] text-gray-500">
                    Choose this to start your workflow
                  </span>
                </div>
              </CommandPaletteItem>
              <CommandPaletteItem value="website">
                <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg border-[1.5px] border-gray-200">
                  <Website className="h-5 w-5 text-primary-500" />
                </div>
                <div className="flex flex-grow flex-col">
                  <span className="text-sm font-medium leading-6 text-gray-900">
                    Website
                  </span>
                  <span className="text-xs leading-[14.52px] text-gray-500">
                    Collect valid URLs or website addresses.
                  </span>
                </div>
              </CommandPaletteItem>
              <CommandPaletteItem value="address">
                <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg border-[1.5px] border-gray-200">
                  <Address className="h-5 w-5 text-primary-500" />
                </div>
                <div className="flex flex-grow flex-col">
                  <span className="text-sm font-medium leading-6 text-gray-900">
                    Address
                  </span>
                  <span className="text-xs leading-[14.52px] text-gray-500">
                    Choose this to start your workflow
                  </span>
                </div>
              </CommandPaletteItem>
            </CommandPaletteGroup>
            <CommandPaletteGroup heading="Selections">
              <CommandPaletteItem value="checkbox">
                <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg border-[1.5px] border-gray-200">
                  <CheckboxOutlined className="text-primary-500" />
                </div>
                <div className="flex flex-grow flex-col">
                  <span className="text-sm font-medium leading-6 text-gray-900">
                    Checkbox
                  </span>
                  <span className="text-xs leading-[14.52px] text-gray-500">
                    Choose this to start your workflow
                  </span>
                </div>
              </CommandPaletteItem>
              <CommandPaletteItem value="radio group">
                <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg border-[1.5px] border-gray-200">
                  <RadioButton className="text-primary-500" />
                </div>
                <div className="flex flex-grow flex-col">
                  <span className="text-sm font-medium leading-6 text-gray-900">
                    Radio Group
                  </span>
                  <span className="text-xs leading-[14.52px] text-gray-500">
                    Choose this to start your workflow
                  </span>
                </div>
              </CommandPaletteItem>
              <CommandPaletteItem value="dropdown">
                <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg border-[1.5px] border-gray-200">
                  <ChevronUpDown className="text-primary-500" />
                </div>
                <div className="flex flex-grow flex-col">
                  <span className="text-sm font-medium leading-6 text-gray-900">
                    Dropdown
                  </span>
                  <span className="text-xs leading-[14.52px] text-gray-500">
                    Choose this to start your workflow
                  </span>
                </div>
              </CommandPaletteItem>
              <CommandPaletteItem value="toggle">
                <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg border-[1.5px] border-gray-200">
                  <Toggle className="text-primary-500" />
                </div>
                <div className="flex flex-grow flex-col">
                  <span className="text-sm font-medium leading-6 text-gray-900">
                    Toggle
                  </span>
                  <span className="text-xs leading-[14.52px] text-gray-500">
                    Yes or no, 1 or 0, true or false
                  </span>
                </div>
              </CommandPaletteItem>
            </CommandPaletteGroup>
            <CommandPaletteGroup heading="Other">
              <CommandPaletteItem value="file upload">
                <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg border-[1.5px] border-gray-200">
                  <FileOutlined className="text-primary-500" />
                </div>
                <div className="flex flex-grow flex-col">
                  <span className="text-sm font-medium leading-6 text-gray-900">
                    File Upload
                  </span>
                  <span className="text-xs leading-[14.52px] text-gray-500">
                    Choose this to start your workflow
                  </span>
                </div>
              </CommandPaletteItem>
              <CommandPaletteItem value="image upload">
                <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg border-[1.5px] border-gray-200">
                  <ImageOutlined className="text-primary-500" />
                </div>
                <div className="flex flex-grow flex-col">
                  <span className="text-sm font-medium leading-6 text-gray-900">
                    Image Upload
                  </span>
                  <span className="text-xs leading-[14.52px] text-gray-500">
                    Choose this to start your workflow
                  </span>
                </div>
              </CommandPaletteItem>
              <CommandPaletteItem value="video">
                <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg border-[1.5px] border-gray-200">
                  <VideoOutlined className="text-primary-500" />
                </div>
                <div className="flex flex-grow flex-col">
                  <span className="text-sm font-medium leading-6 text-gray-900">
                    Video
                  </span>
                  <span className="text-xs leading-[14.52px] text-gray-500">
                    Choose this to start your workflow
                  </span>
                </div>
              </CommandPaletteItem>
            </CommandPaletteGroup>
          </CommandPaletteList>
        </CommandPalette>
      </CommandPaletteDialogContent>
    </CommandPaletteDialog>
  );
}
