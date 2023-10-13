"use client";

import React from "react";
import * as PortalPrimitive from "@radix-ui/react-portal";

import { TileTransition } from "@/components/ui/transitions";
import { SettingMachineContext, TabsMachineContext } from "@/machines";
import SearchSidebar from "./search";
import DropdownSidebar from "./dropdown";
import ToggleSidebar from "./toggle";
import ShortTextSidebar from "./short-text";
import LongTextSidebar from "./long-text";
import PasswordSidebar from "./password";
import EmailSidebar from "./email";
import NumbersSidebar from "./numbers";
import WebsiteSidebar from "./website";
import AddressSidebar from "./address";
import PhoneNumberSidebar from "./phone-number";
import RadioGroupSidebar from "./radio-group";
import CheckboxSidebar from "./checkbox";

const Segment = () => {
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
    state.matches("editing website") ||
    state.matches("editing address") ||
    state.matches("editing phone number") ||
    state.matches("editing radio group") ||
    state.matches("editing checkbox");

  return (
    <PortalPrimitive.Portal>
      <TileTransition show={show}>
        <div className="fixed inset-y-0 left-0 top-[70px] z-40 h-[calc(theme(height.full)-70px)] w-[370px] border-r border-gray-200 bg-white">
          {state.matches("editing search") && <SearchSidebar />}
          {state.matches("editing dropdown") && <DropdownSidebar />}
          {state.matches("editing toggle") && <ToggleSidebar />}
          {state.matches("editing short text") && <ShortTextSidebar />}
          {state.matches("editing long text") && <LongTextSidebar />}
          {state.matches("editing password") && <PasswordSidebar />}
          {state.matches("editing email") && <EmailSidebar />}
          {state.matches("editing numbers") && <NumbersSidebar />}
          {state.matches("editing website") && <WebsiteSidebar />}
          {state.matches("editing address") && <AddressSidebar />}
          {state.matches("editing phone number") && <PhoneNumberSidebar />}
          {state.matches("editing radio group") && <RadioGroupSidebar />}
          {state.matches("editing checkbox") && <CheckboxSidebar />}
        </div>
      </TileTransition>
    </PortalPrimitive.Portal>
  );
};

export default function Page() {
  return (
    <TabsMachineContext.Provider>
      <Segment />
    </TabsMachineContext.Provider>
  );
}
