// This file was automatically generated. Edits will be overwritten

export interface Typegen0 {
  "@@xstate/typegen": true;
  internalEvents: {
    "xstate.init": { type: "xstate.init" };
  };
  invokeSrcNameMap: {};
  missingImplementations: {
    actions: never;
    delays: never;
    guards: never;
    services: never;
  };
  eventsCausingActions: {};
  eventsCausingDelays: {};
  eventsCausingGuards: {
    IsEmpty: "HIDDEN";
    isNotEmpty: "TOGGLE";
  };
  eventsCausingServices: {};
  matchesStates:
    | "active"
    | "active.hidden"
    | "active.hiding"
    | "active.showing"
    | "inactive"
    | { active?: "hidden" | "hiding" | "showing" };
  tags: never;
}
