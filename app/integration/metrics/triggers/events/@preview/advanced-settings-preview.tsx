import * as React from "react";
import { Transition } from "@headlessui/react";

import { PreviewMachineContext, SettingMachineContext } from "@/machines";
import { SettingsPreview } from "./previews";

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
        <SettingsPreview setting={setting} key={setting.id} />
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
