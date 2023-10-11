import * as React from "react";
import { Transition } from "@headlessui/react";

import { PreviewMachineContext, SettingMachineContext } from "@/machines";
import { SearchFieldPreview } from "@/components/search-field-preview";
import { DropdownPreview } from "@/components/dropdown-preview";
import { TogglePreview } from "@/components/toggle-preview";
import { ShortTextPreview } from "@/components/short-text-preview";
import { LongTextPreview } from "@/components/long-text-preview";
import { PasswordPreview } from "@/components/password-preview";
import { EmailPreview } from "@/components/email-preview";
import { NumbersPreview } from "@/components/numbers-preview";
import { WebsitePreview } from "@/components/website-preview";

export const AdvancedSettingsPreview = () => {
  const [state, send] = PreviewMachineContext.useActor();
  const settings = SettingMachineContext.useSelector(
    (state) => state.context.advancedSettings
  );

  React.useEffect(() => {
    send({ type: "HIDDEN", settings });
    send({ type: "TOGGLE", settings });
  }, [settings, send]);

  if (state.matches("active.hidden")) {
    return null;
  }

  if (state.matches("active.hiding")) {
    return (
      <button
        className="text-sm font-semibold text-primary-500 focus:outline-none"
        onClick={() => send("SHOW")}
      >
        Show Advanced
      </button>
    );
  }

  return (
    <Transition
      appear
      show
      enter="transition duration-150 ease-in"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      className="space-y-6"
    >
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
      <button
        className="text-sm font-semibold text-primary-500 focus:outline-none"
        onClick={() => send("HIDE")}
      >
        Hide Advanced
      </button>
    </Transition>
  );
};
