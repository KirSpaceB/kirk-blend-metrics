"use client";

import * as React from "react";

import { Plus2 } from "@/components/icons";
import { Button } from "@/components/ui";
import {
  PreviewMachineContext,
  SettingMachineContext,
  ToggleMachineContext,
} from "@/machines";

export default function Layout({
  children,
  basicSetup,
  advancedSettings,
  preview,
  sidebar,
}: {
  children: React.ReactNode;
  basicSetup: React.ReactNode;
  advancedSettings: React.ReactNode;
  preview: React.ReactNode;
  sidebar: React.ReactNode;
}) {
  const [state, send] = ToggleMachineContext.useActor();

  if (state.matches("turned off")) {
    return (
      <div className="rounded-lg border border-gray-200 bg-white p-6">
        <h1 className="text-base font-semibold text-gray-900">Events</h1>
        <p className="mt-1 text-sm text-gray-500">
          In this section, you can create events which will start the workflow.
        </p>
        <div className="mt-6">
          <Button
            variant="outlined"
            visual="gray"
            onClick={() => send("TOGGLE")}
          >
            <Plus2 className="text-gray-500" />
            Create Event
          </Button>
        </div>

        <div className="mt-6 flex justify-end">
          <Button disabled>Save & Continue</Button>
        </div>
      </div>
    );
  }

  return (
    <SettingMachineContext.Provider>
      <PreviewMachineContext.Provider>
        {sidebar}

        {children}

        <div className="mt-6 space-y-1">
          <h1 className="text-base font-semibold text-gray-600">
            Configure event settings
          </h1>
          <p className="text-sm text-gray-500">
            In this section, you can configure your setting fields for your
            event.
          </p>
        </div>
        <div className="mt-6 grid grid-cols-[1fr,386px] items-start gap-x-4">
          <div>
            {basicSetup}
            {advancedSettings}
          </div>
          <div className="sticky top-[86px]">{preview}</div>
        </div>
      </PreviewMachineContext.Provider>
    </SettingMachineContext.Provider>
  );
}
