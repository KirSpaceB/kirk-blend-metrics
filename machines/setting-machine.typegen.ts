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
      | "TO-CHECKBOX"
      | "TO-DROPDOWN"
      | "TO-EMAIL"
      | "TO-NUMBERS"
      | "TO-PASSWORD"
      | "TO-PHONE-NUMBER"
      | "TO-RADIO-GROUP"
      | "TO-SEARCH"
      | "TO-SHORT-TEXT"
      | "TO-TOGGLE"
      | "TO-WEBSITE";
    reorder: "REORDER";
    resetCurrent: "DELETE" | "TOGGLE";
    setCurrent:
      | "EDIT-ADDRESS"
      | "EDIT-CHECKBOX"
      | "EDIT-DROPDOWN"
      | "EDIT-EMAIL"
      | "EDIT-FILE-UPLOAD"
      | "EDIT-IMAGE-UPLOAD"
      | "EDIT-LONG-TEXT"
      | "EDIT-NUMBERS"
      | "EDIT-PASSWORD"
      | "EDIT-PHONE-NUMBER"
      | "EDIT-RADIO-GROUP"
      | "EDIT-SEARCH"
      | "EDIT-SHORT-TEXT"
      | "EDIT-TOGGLE"
      | "EDIT-VIDEO"
      | "EDIT-WEBSITE";
    update: "UPDATE";
  };
  eventsCausingDelays: {};
  eventsCausingGuards: {
    equalToCurrentId: "DELETE";
    notEqualToPreviousKind:
      | "TO-CHECKBOX"
      | "TO-DROPDOWN"
      | "TO-EMAIL"
      | "TO-NUMBERS"
      | "TO-PASSWORD"
      | "TO-PHONE-NUMBER"
      | "TO-RADIO-GROUP"
      | "TO-SEARCH"
      | "TO-SHORT-TEXT"
      | "TO-TOGGLE"
      | "TO-WEBSITE";
  };
  eventsCausingServices: {};
  matchesStates:
    | "editing address"
    | "editing checkbox"
    | "editing dropdown"
    | "editing email"
    | "editing file upload"
    | "editing image upload"
    | "editing long text"
    | "editing numbers"
    | "editing password"
    | "editing phone number"
    | "editing radio group"
    | "editing search"
    | "editing short text"
    | "editing toggle"
    | "editing video"
    | "editing website"
    | "idle";
  tags: never;
}
