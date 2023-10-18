"use client";

import * as React from "react";

import { SettingMachineContext } from "@/machines";
import { ReorderGroup, ReorderItem } from "@/components/ui";
import { SearchFieldDraggableCard } from "@/components/search-field-draggable-card";
import { DropdownDraggableCard } from "@/components/dropdown-draggable-card";
import { ToggleDraggableCard } from "@/components/toggle-draggable-card";
import { ShortTextDraggableCard } from "@/components/short-text-draggable-card";
import { LongTextDraggableCard } from "@/components/long-text-draggable-card";
import { PasswordDraggableCard } from "@/components/password-draggable-card";
import { EmailDraggableCard } from "@/components/email-draggable-card";
import { NumbersDraggableCard } from "@/components/numbers-draggable-card";
import { WebsiteDraggableCard } from "@/components/website-draggable-card";
import { AddressDraggableCard } from "@/components/address-draggable-card";
import { PhoneNumberDraggableCard } from "@/components/phone-number-draggable-card";
import { RadioGroupDraggableCard } from "@/components/radio-group-draggable-card";
import { CheckboxDraggableCard } from "@/components/checkbox-draggable-card";
import { VideoDraggableCard } from "@/components/video-draggable-card";
import { FileUploadDraggableCard } from "@/components/file-upload-draggable-card";
import { ImageUploadDraggableCard } from "@/components/image-upload-draggable-card";

export const Settings = (props: { advanced: boolean }) => {
  const settings = SettingMachineContext.useSelector((state) =>
    props.advanced
      ? state.context.advancedSettings
      : state.context.basicSettings
  );
  const currentId = SettingMachineContext.useSelector(
    (state) => state.context.currentId
  );
  const currentAdvanced = SettingMachineContext.useSelector(
    (state) => state.context.currentAdvanced
  );
  const [, send] = SettingMachineContext.useActor();

  return (
    <ReorderGroup
      className="space-y-6"
      values={settings}
      onReorder={(values) =>
        send({ type: "REORDER", advanced: props.advanced, settings: values })
      }
    >
      {settings.map((setting) => {
        const active =
          currentAdvanced === props.advanced && currentId === setting.id;

        return (
          <ReorderItem value={setting} key={setting.id}>
            {({ onDrag }) => (
              <>
                {setting.kind === "search" && (
                  <SearchFieldDraggableCard
                    onDrag={onDrag}
                    active={active}
                    {...props}
                    {...setting}
                  />
                )}
                {setting.kind === "dropdown" && (
                  <DropdownDraggableCard
                    onDrag={onDrag}
                    active={active}
                    {...props}
                    {...setting}
                  />
                )}
                {setting.kind === "toggle" && (
                  <ToggleDraggableCard
                    onDrag={onDrag}
                    active={active}
                    {...props}
                    {...setting}
                  />
                )}
                {setting.kind === "short-text" && (
                  <ShortTextDraggableCard
                    onDrag={onDrag}
                    active={active}
                    {...props}
                    {...setting}
                  />
                )}
                {setting.kind === "long-text" && (
                  <LongTextDraggableCard
                    onDrag={onDrag}
                    active={active}
                    {...props}
                    {...setting}
                  />
                )}
                {setting.kind === "password" && (
                  <PasswordDraggableCard
                    onDrag={onDrag}
                    active={active}
                    {...props}
                    {...setting}
                  />
                )}
                {setting.kind === "email" && (
                  <EmailDraggableCard
                    onDrag={onDrag}
                    active={active}
                    {...props}
                    {...setting}
                  />
                )}
                {setting.kind === "numbers" && (
                  <NumbersDraggableCard
                    onDrag={onDrag}
                    active={active}
                    {...props}
                    {...setting}
                  />
                )}
                {setting.kind === "website" && (
                  <WebsiteDraggableCard
                    onDrag={onDrag}
                    active={active}
                    {...props}
                    {...setting}
                  />
                )}
                {setting.kind === "address" && (
                  <AddressDraggableCard
                    onDrag={onDrag}
                    active={active}
                    {...props}
                    {...setting}
                  />
                )}
                {setting.kind === "phone-number" && (
                  <PhoneNumberDraggableCard
                    onDrag={onDrag}
                    active={active}
                    {...props}
                    {...setting}
                  />
                )}
                {setting.kind === "radio-group" && (
                  <RadioGroupDraggableCard
                    onDrag={onDrag}
                    active={active}
                    {...props}
                    {...setting}
                  />
                )}
                {setting.kind === "checkbox" && (
                  <CheckboxDraggableCard
                    onDrag={onDrag}
                    active={active}
                    {...props}
                    {...setting}
                  />
                )}
                {setting.kind === "video" && (
                  <VideoDraggableCard
                    onDrag={onDrag}
                    active={active}
                    {...props}
                    {...setting}
                  />
                )}
                {setting.kind === "file-upload" && (
                  <FileUploadDraggableCard
                    onDrag={onDrag}
                    active={active}
                    {...props}
                    {...setting}
                  />
                )}
                {setting.kind === "image-upload" && (
                  <ImageUploadDraggableCard
                    onDrag={onDrag}
                    active={active}
                    {...props}
                    {...setting}
                  />
                )}
              </>
            )}
          </ReorderItem>
        );
      })}
    </ReorderGroup>
  );
};
