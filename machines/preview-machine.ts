import { createMachine } from "xstate";
import { createActorContext } from "@xstate/react";

import { Settings } from "./setting-machine";

export const previewMachine = createMachine(
  {
    id: "preview",
    initial: "inactive",
    states: {
      inactive: {
        on: {
          ACTIVATE: {
            target: "active",
          },
        },
      },
      active: {
        initial: "hidden",
        states: {
          hidden: {
            on: {
              TOGGLE: {
                target: "hiding",
                cond: "isNotEmpty",
              },
            },
          },
          hiding: {
            on: {
              SHOW: {
                target: "showing",
              },
            },
          },
          showing: {
            on: {
              HIDE: {
                target: "hiding",
              },
            },
          },
        },
        on: {
          HIDDEN: {
            target: ".hidden",
            cond: "IsEmpty",
            internal: true,
          },
        },
      },
    },
    tsTypes: {} as import("./preview-machine.typegen").Typegen0,
    schema: {
      events: {} as
        | { type: "" }
        | { type: "HIDE" }
        | { type: "SHOW" }
        | { type: "HIDDEN"; settings: Settings }
        | { type: "TOGGLE"; settings: Settings }
        | { type: "ACTIVATE" }
        | { type: "INACTIVATE" },
    },
    predictableActionArguments: true,
    preserveActionOrder: true,
  },
  {
    actions: {},
    services: {},
    guards: {
      isNotEmpty: (ctx, event) => {
        return event.settings.length >= 1;
      },

      IsEmpty: (ctx, event) => {
        return event.settings.length === 0;
      },
    },
    delays: {},
  }
);

export const PreviewMachineContext = createActorContext(previewMachine);
