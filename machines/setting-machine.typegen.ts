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
  eventsCausingActions: {
    delete: "DELETE";
    duplicate: "DUPLICATE";
    insert: "INSERT";
    patch: "TO-SEARCH" | "TO-TOGGLE";
    reorder: "REORDER";
    resetCurrent: "DELETE" | "TOGGLE";
    setCurrent:
      | "EDIT-DROPDOWN"
      | "EDIT-SEARCH"
      | "EDIT-SHORT-TEXT"
      | "EDIT-TOGGLE";
    update: "UPDATE";
  };
  eventsCausingDelays: {};
  eventsCausingGuards: {
    equalToCurrentId: "DELETE";
    isDropdown: "EDIT-DROPDOWN";
    isMatching: "UPDATE";
    isSearch: "EDIT-SEARCH";
    isShortText: "EDIT-SHORT-TEXT";
    isToggle: "EDIT-TOGGLE";
    notEqualToPreviousKind: "TO-SEARCH" | "TO-TOGGLE";
  };
  eventsCausingServices: {};
  matchesStates:
    | "editing dropdown"
    | "editing search"
    | "editing short text"
    | "editing toggle"
    | "idle";
  tags: never;
}
