"use client";

import * as React from "react";
import { Transition } from "@headlessui/react";

export const TileTransition = React.forwardRef<
  React.ElementRef<typeof Transition>,
  React.ComponentPropsWithoutRef<typeof Transition>
>(({ as, ...props }, ref) => (
  <Transition
    as={as ? as : React.Fragment}
    enter="transition duration-500"
    enterFrom="-translate-x-5 opacity-0"
    enterTo="-translate-x-0 opacity-100"
    leave="transition duration-500"
    leaveFrom="-translate-x-0 opacity-100"
    leaveTo="-translate-x-5 opacity-0"
    ref={ref}
    {...props}
  />
));

TileTransition.displayName = "TileTransition";
