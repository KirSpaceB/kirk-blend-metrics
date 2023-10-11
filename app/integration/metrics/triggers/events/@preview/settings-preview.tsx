import React from "react";

import { SearchFieldPreview } from "@/components/search-field-preview";
import { SettingMachineContext } from "@/machines";
import { DropdownPreview } from "@/components/dropdown-preview";
import { TogglePreview } from "@/components/toggle-preview";
import { ShortTextPreview } from "@/components/short-text-preview";
import { LongTextPreview } from "@/components/long-text-preview";
import { PasswordPreview } from "@/components/password-preview";
import { EmailPreview } from "@/components/email-preview";
import { NumbersPreview } from "@/components/numbers-preview";
import { WebsitePreview } from "@/components/website-preview";

export const SettingsPreview = () => {
  const settings = SettingMachineContext.useSelector(
    (state) => state.context.basicSettings
  );

  return (
    <div className="space-y-6">
      {settings.map((setting) => (
        <React.Fragment key={setting.id}>
          {setting.kind === "search" && <SearchFieldPreview {...setting} />}
          {setting.kind === "dropdown" && <DropdownPreview {...setting} />}
          {setting.kind === "toggle" && <TogglePreview {...setting} />}
          {setting.kind === "short-text" && <ShortTextPreview {...setting} />}
          {setting.kind === "long-text" && <LongTextPreview {...setting} />}
          {setting.kind === "password" && <PasswordPreview {...setting} />}
          {setting.kind === "email" && <EmailPreview {...setting} />}
          {setting.kind === "numbers" && <NumbersPreview {...setting} />}
          {setting.kind === "website" && <WebsitePreview {...setting} />}
        </React.Fragment>
      ))}
    </div>
  );
};
