"use client";

import dynamic from "next/dynamic";

import { HelpCircle, Plus2 } from "@/components/icons";
import { Button } from "@/components/ui";
import { ToggleMachineContext } from "@/machines";
import { Settings } from "../@basicSetup/settings";

const CommandPaletteModal = dynamic(
  () => import("../@basicSetup/command-palette-modal")
);

export const AdvancedSettings = ({
  settings,
}: {
  settings: React.ReactNode;
}) => {
  const [, send] = ToggleMachineContext.useActor();

  return (
    <div className="mt-4 min-h-[472px] space-y-6 rounded-lg border border-gray-200 bg-white p-6">
      <div className="space-y-2">
        <h2 className="flex items-center gap-x-2 text-sm font-medium text-gray-700">
          Advanced Settings
          <button className="flex-none text-gray-400 focus-visible:outline-none">
            <HelpCircle />
          </button>
          <span className="text-gray-400">(optional)</span>
        </h2>
        <p className="text-sm text-gray-500">
          Provide advanced settings that users can access by clicking “Show
          Advanced Settings” when they set up your trigger.
        </p>
      </div>

      {settings}

      <Button
        className="w-full"
        variant="outlined"
        visual="gray"
        onClick={() => send("TOGGLE")}
      >
        <Plus2 />
        Add field
      </Button>

      <CommandPaletteModal advanced />
    </div>
  );
};

export default function AdvancedSettingsSegment() {
  return (
    <ToggleMachineContext.Provider>
      <AdvancedSettings settings={<Settings advanced />} />
    </ToggleMachineContext.Provider>
  );
}
