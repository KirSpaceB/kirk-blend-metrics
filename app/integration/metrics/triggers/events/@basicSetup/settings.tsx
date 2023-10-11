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
                    settingId={setting.id}
                    active={active}
                    {...props}
                    {...setting}
                  />
                )}
                {setting.kind === "dropdown" && (
                  <DropdownDraggableCard
                    onDrag={onDrag}
                    settingId={setting.id}
                    active={active}
                    {...props}
                    {...setting}
                  />
                )}
                {setting.kind === "toggle" && (
                  <ToggleDraggableCard
                    onDrag={onDrag}
                    settingId={setting.id}
                    active={active}
                    {...props}
                    {...setting}
                  />
                )}
                {setting.kind === "short-text" && (
                  <ShortTextDraggableCard
                    onDrag={onDrag}
                    settingId={setting.id}
                    active={active}
                    {...props}
                    {...setting}
                  />
                )}
                {setting.kind === "long-text" && (
                  <LongTextDraggableCard
                    onDrag={onDrag}
                    settingId={setting.id}
                    active={active}
                    {...props}
                    {...setting}
                  />
                )}
                {setting.kind === "password" && (
                  <PasswordDraggableCard
                    onDrag={onDrag}
                    settingId={setting.id}
                    active={active}
                    {...props}
                    {...setting}
                  />
                )}
                {setting.kind === "email" && (
                  <EmailDraggableCard
                    onDrag={onDrag}
                    settingId={setting.id}
                    active={active}
                    {...props}
                    {...setting}
                  />
                )}
                {setting.kind === "numbers" && (
                  <NumbersDraggableCard
                    onDrag={onDrag}
                    settingId={setting.id}
                    active={active}
                    {...props}
                    {...setting}
                  />
                )}
                {setting.kind === "website" && (
                  <WebsiteDraggableCard
                    onDrag={onDrag}
                    settingId={setting.id}
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
