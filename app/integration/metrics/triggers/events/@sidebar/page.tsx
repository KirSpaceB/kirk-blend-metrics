"use client";

import React from "react";
import * as PortalPrimitive from "@radix-ui/react-portal";

import { TileTransition } from "@/components/ui/transitions";
import { SettingMachineContext, TabsMachineContext } from "@/machines";
import Search from "./search";
import Dropdown from "./dropdown";
import Toggle from "./toggle";
import ShortText from "./short-text";
import LongText from "./long-text";
import Password from "./password";
import Email from "./email";
import Numbers from "./numbers";
import Website from "./website";

const Sidebar = () => {
  const [state] = SettingMachineContext.useActor();

  const show =
    state.matches("editing search") ||
    state.matches("editing dropdown") ||
    state.matches("editing toggle") ||
    state.matches("editing short text") ||
    state.matches("editing long text") ||
    state.matches("editing password") ||
    state.matches("editing email") ||
    state.matches("editing numbers") ||
    state.matches("editing website");

  return (
    <PortalPrimitive.Portal>
      <TileTransition show={show}>
        <div className="fixed inset-y-0 left-0 top-[70px] z-40 h-[calc(theme(height.full)-70px)] w-[370px] border-r border-gray-200 bg-white">
          {state.matches("editing search") && <Search />}
          {state.matches("editing dropdown") && <Dropdown />}
          {state.matches("editing toggle") && <Toggle />}
          {state.matches("editing short text") && <ShortText />}
          {state.matches("editing long text") && <LongText />}
          {state.matches("editing password") && <Password />}
          {state.matches("editing email") && <Email />}
          {state.matches("editing numbers") && <Numbers />}
          {state.matches("editing website") && <Website />}
        </div>
      </TileTransition>
    </PortalPrimitive.Portal>
  );
};

export default function SidebarSegment() {
  return (
    <TabsMachineContext.Provider>
      <Sidebar />
    </TabsMachineContext.Provider>
  );
}
