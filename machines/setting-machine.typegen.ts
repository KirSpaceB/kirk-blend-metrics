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
    patch:
      | "TO-EMAIL"
      | "TO-NUMBERS"
      | "TO-PASSWORD"
      | "TO-SEARCH"
      | "TO-SHORT-TEXT"
      | "TO-TOGGLE"
      | "TO-WEBSITE";
    reorder: "REORDER";
    resetCurrent: "DELETE" | "TOGGLE";
    setCurrent:
      | "EDIT-DROPDOWN"
      | "EDIT-EMAIL"
      | "EDIT-LONG-TEXT"
      | "EDIT-NUMBERS"
      | "EDIT-PASSWORD"
      | "EDIT-SEARCH"
      | "EDIT-SHORT-TEXT"
      | "EDIT-TOGGLE"
      | "EDIT-WEBSITE";
    update: "UPDATE";
  };
  eventsCausingDelays: {};
  eventsCausingGuards: {
    equalToCurrentId: "DELETE";
    isDropdown: "EDIT-DROPDOWN";
    isEmail: "EDIT-EMAIL";
    isLongText: "EDIT-LONG-TEXT";
    isMatching: "UPDATE";
    isNumbers: "EDIT-NUMBERS";
    isPassword: "EDIT-PASSWORD";
    isSearch: "EDIT-SEARCH";
    isShortText: "EDIT-SHORT-TEXT";
    isToggle: "EDIT-TOGGLE";
    isWebsite: "EDIT-WEBSITE";
    notEqualToPreviousKind:
      | "TO-EMAIL"
      | "TO-NUMBERS"
      | "TO-PASSWORD"
      | "TO-SEARCH"
      | "TO-SHORT-TEXT"
      | "TO-TOGGLE"
      | "TO-WEBSITE";
  };
  eventsCausingServices: {};
  matchesStates:
    | "editing dropdown"
    | "editing email"
    | "editing long text"
    | "editing numbers"
    | "editing password"
    | "editing search"
    | "editing short text"
    | "editing toggle"
    | "editing website"
    | "idle";
  tags: never;
}
