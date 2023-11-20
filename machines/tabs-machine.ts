import { createActorContext } from "@xstate/react";
import { createMachine } from "xstate";

export const tabsMachine = createMachine(
  {
    id: "tabs",
    initial: "source",
    states: {
      source: {},
      setup: {},
      test: {},
    },
    on: {
      SETUP: {
        target: ".setup",
        internal: true,
      },
      TEST: {
        target: ".test",
        internal: true,
      },
      SOURCE: {
        target: ".source",
        internal: true,
      },
    },
    tsTypes: {} as import("./tabs-machine.typegen").Typegen0,
    schema: {
      events: {} as { type: "SETUP" } | { type: "TEST" } | { type: "SOURCE" },
    },
    predictableActionArguments: true,
    preserveActionOrder: true,
  },
  {
    actions: {},
    services: {},
    guards: {},
    delays: {},
  }
);

export const TabsMachineContext = createActorContext(tabsMachine);
