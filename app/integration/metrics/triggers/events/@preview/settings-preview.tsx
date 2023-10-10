import React from "react";

import { SearchFieldPreview } from "@/components/search-field-preview";
import { SettingMachineContext } from "@/machines";
import { DropdownPreview } from "@/components/dropdown-preview";
import { TogglePreview } from "@/components/toggle-preview";

export const SettingsPreview = () => {
  const settings = SettingMachineContext.useSelector(
    (state) => state.context.basicSettings
  );

  return (
    <div className="space-y-6">
      {settings.map((setting) => (
        <React.Fragment key={setting.id}>
          {setting.kind === "search" && (
            <SearchFieldPreview {...setting.search} />
          )}
          {setting.kind === "dropdown" && (
            <DropdownPreview {...setting.dropdown} />
          )}
          {setting.kind === "toggle" && <TogglePreview {...setting.toggle} />}
        </React.Fragment>
      ))}
    </div>
  );
};
