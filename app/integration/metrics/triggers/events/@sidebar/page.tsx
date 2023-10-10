"use client";

import React from "react";
import * as PortalPrimitive from "@radix-ui/react-portal";

import { TileTransition } from "@/components/ui/transitions";
import { SettingMachineContext } from "@/machines";
import Search from "./search";
import Dropdown from "./dropdown";
import Toggle from "./toggle";
import ShortText from "./short-text";

export default function Sidebar() {
  const [state] = SettingMachineContext.useActor();

  const show =
    state.matches("editing search") ||
    state.matches("editing dropdown") ||
    state.matches("editing toggle") ||
    state.matches("editing short text");

  return (
    <PortalPrimitive.Portal>
      <TileTransition show={show}>
        <div className="fixed inset-y-0 left-0 top-[70px] z-40 h-[calc(theme(height.full)-70px)] w-[370px] border-r border-gray-200 bg-white">
          {state.matches("editing search") && <Search />}
          {state.matches("editing dropdown") && <Dropdown />}
          {state.matches("editing toggle") && <Toggle />}
          {state.matches("editing short text") && <ShortText />}
        </div>
      </TileTransition>
    </PortalPrimitive.Portal>
  );
}
