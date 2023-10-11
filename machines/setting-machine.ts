import { createActorContext } from "@xstate/react";
import { assign, createMachine } from "xstate";

export type Kind = "search" | "dropdown" | "toggle" | "short-text";

export interface Setting {
  id: number;
  kind: Kind;
  dataset?: string;
  category?: string;
  metrics?: string[];
  metric?: string;
  sort?: "asc" | "desc";
  label?: string;
  placeholder?: string;
  tooltip?: string;
  singleOrMultiSelect?: "multiple" | "single";
  optional?: boolean;
  hint?: string;
  limitSelections?: boolean;
  placeholderOrDefaultValue?: "placeholder" | "defaultValue";
  hasCharactorLimit?: string;
}

export type Settings = Setting[];

export const settingMachine = createMachine(
  {
    /** @xstate-layout N4IgpgJg5mDOIC5SzAF1QSwHZQMQEkA5AZQFEAlAFQG0AGAXUVAAcB7WDTVrJkAD0QBmAEwBOAHQA2AIzCArLWm0AHLWEAWQXMEAaEAE9E0wRNEK1c9ZOXLRogL729KdNjwBVAAoARAIKVSOkYkEDYOLh4QgQRBaWlxbQB2OVk5FNV1YT1DBFlHZzRMHFxyUgB5cm8KIN4wzgxuXmjhRMlxFvU7YUlO0VtJbKMVeMTewWVukXV1fJAXIrwqgBlSAJqQuoimxElEwYRJSWFxdTVExOFJxNF5Wfm3XG8vJfwAYX9Ahlr2esaooXU8UUymSVhacjsyl0BkQZkE4mudlk1006jkd0KD08-leAAl1iwflt-gc9jCENp1Cc5B1dqJ1LYtBjXDhxBgIAAbMC4UjefCUAC0ZF85DxBNCRIakVA0XUrROtEVSjiiRUcjJOU08Mk5mkNx60jBMycc0xrPZXJ5fMF3nIZR8ZQA6oRxZspdsEHK2qclYppKrlOr9uqJIi+qM1KJpHJJMyFmzOdzefyBZQygBxdMrV2Sv4yxBehW+lVqjWIEHHWh2G6Cay0NHTONuBOW5OC4i4iqCgIADRoXw2uel-AL8p9ij9AaD5IucnE9LsaUs0ms6JN91ZkHqOAABCgAIYAJwAxgALXBpzPZgeE8LukmWNqJQTJOL1xTCGz7QQv9qK9-CCY3Sgk2m4QNuUA7hAh6sMwECsAA7lgF4ZlmnzBLevzDtEj4Ii+KRKKcshfuSDLwlo-5Qokqi1g465mlA4hbgsO6oKwUBQJal5oTmd55iOFJWHhr6ER+JE5Occ49HY0w6mkySxvRLKMcxbh7qerCHqgrFgHwqAoVe6HfHx2GILhz4ie+xHKPsRwSL0oitCkdaSIIjgmlgrAQHAvAblAxlYR6er7Bopj-vIki0OMWjGgUyktmAAXEvmMRaOIqj-poUX0p0waqPOLTJLY9ZohCoEqeBLEHiep5JfeKWHPCZi+poz5WKI37aOI0ZQikDKfsosWmvFqm7tBsHwUhdX8dEjXzrq9YvoI7X7L04iCCosSiEcK7aC+5VMZValsRxXLTaZByufNLVLStM5RlIKhiKF3SiLWB2jZBsAaVpOl6edHpzc1E6tctkgdeSPRzmiEwgq09aXMo7n2EAA */
    context: {
      currentId: undefined,
      currentAdvanced: undefined,
      basicSettings: [],
      advancedSettings: [],
    },
    id: "setting",
    initial: "idle",
    states: {
      idle: {},
      "editing search": {
        on: {
          TOGGLE: {
            target: "idle",
            actions: "resetCurrent",
          },
        },
      },
      "editing dropdown": {
        on: {
          TOGGLE: {
            target: "idle",
            actions: "resetCurrent",
          },
        },
      },
      "editing toggle": {
        on: {
          TOGGLE: {
            target: "idle",
            actions: "resetCurrent",
          },
        },
      },
      "editing short text": {
        on: {
          TOGGLE: {
            target: "idle",
            actions: "resetCurrent",
          },
        },
      },
    },
    on: {
      INSERT: {
        actions: "insert",
        description: "In order to add settings for a field",
        internal: true,
      },
      UPDATE: {
        cond: "isMatching",
        actions: "update",
        description: "In order to update the settings of a field",
        internal: true,
      },
      REORDER: {
        actions: "reorder",
        description: "In order to reorder the settings stored in the context",
        internal: true,
      },
      DELETE: [
        {
          target: ".idle",
          cond: "equalToCurrentId",
          actions: ["delete", "resetCurrent"],
          internal: true,
        },
        {
          actions: "delete",
          internal: true,
        },
      ],
      DUPLICATE: {
        actions: "duplicate",
        description: "In order to duplicate a setting",
        internal: true,
      },
      "EDIT-SEARCH": {
        target: "editing search",
        internal: true,
        cond: "isSearch",
        actions: "setCurrent",
      },
      "EDIT-DROPDOWN": {
        target: "editing dropdown",
        internal: true,
        cond: "isDropdown",
        actions: "setCurrent",
      },
      "EDIT-TOGGLE": {
        target: "editing toggle",
        internal: true,
        cond: "isToggle",
        actions: "setCurrent",
      },
      "EDIT-SHORT-TEXT": {
        target: "editing short text",
        internal: true,
        cond: "isShortText",
        actions: "setCurrent",
      },
      "TO-TOGGLE": {
        target: "editing toggle",
        internal: true,
        cond: "notEqualToPreviousKind",
        actions: ["patch"],
      },
      "TO-SEARCH": {
        target: "editing search",
        internal: true,
        cond: "notEqualToPreviousKind",
        actions: ["patch"],
      },
    },
    tsTypes: {} as import("./setting-machine.typegen").Typegen0,
    schema: {
      events: {} as
        | { type: "" }
        | { type: "DELETE"; advanced: boolean; settingId: number }
        | { type: "INSERT"; settingId: number; kind: Kind; advanced: boolean }
        | { type: "TOGGLE" }
        | {
            type: "UPDATE";
            value: "search" | "dropdown" | "toggle" | "short-text";
            setting: Omit<Omit<Setting, "kind">, "id">;
          }
        | { type: "REORDER"; advanced: boolean; settings: Settings }
        | {
            type: "DUPLICATE";
            targetSettingId: number;
            settingId: number;
            advanced: boolean;
          }
        | { type: "EDIT-SEARCH"; advanced: boolean; settingId: number }
        | { type: "EDIT-TOGGLE"; advanced: boolean; settingId: number }
        | { type: "EDIT-DROPDOWN"; advanced: boolean; settingId: number }
        | { type: "EDIT-SHORT-TEXT"; advanced: boolean; settingId: number }
        | { type: "TO-TOGGLE"; newKind: "toggle" }
        | { type: "TO-SEARCH"; newKind: "search" },
      context: {} as {
        currentId: number | undefined;
        currentAdvanced: boolean | undefined;
        basicSettings: Settings;
        advancedSettings: Settings;
      },
    },
    predictableActionArguments: true,
    preserveActionOrder: true,
  },
  {
    actions: {
      setCurrent: assign({
        currentAdvanced: (ctx, event) => event.advanced,
        currentId: (ctx, event) => event.settingId,
      }),

      insert: assign({
        basicSettings: (ctx, event) =>
          event.advanced
            ? ctx.basicSettings
            : [...ctx.basicSettings, { id: event.settingId, kind: event.kind }],
        advancedSettings: (ctx, event) =>
          event.advanced
            ? [
                ...ctx.advancedSettings,
                { id: event.settingId, kind: event.kind },
              ]
            : ctx.advancedSettings,
      }),

      update: assign({
        basicSettings: (ctx, event) => {
          if (
            ctx.currentAdvanced === undefined ||
            ctx.currentId === undefined
          ) {
            return ctx.basicSettings;
          }

          if (ctx.currentAdvanced) {
            return ctx.basicSettings;
          }

          const basicSetting = ctx.basicSettings.find(
            (setting) => setting.id === ctx.currentId
          );
          if (!basicSetting) {
            return ctx.basicSettings;
          }

          return ctx.basicSettings.map((setting) =>
            setting.id === ctx.currentId
              ? { ...setting, ...event.setting }
              : setting
          );
        },

        advancedSettings: (ctx, event) => {
          if (
            ctx.currentAdvanced === undefined ||
            ctx.currentId === undefined
          ) {
            return ctx.advancedSettings;
          }

          if (!ctx.currentAdvanced) {
            return ctx.advancedSettings;
          }

          const advancedSetting = ctx.advancedSettings.find(
            (setting) => setting.id === ctx.currentId
          );
          if (!advancedSetting) {
            return ctx.advancedSettings;
          }

          return ctx.advancedSettings.map((setting) =>
            setting.id === ctx.currentId
              ? { ...setting, ...event.setting }
              : setting
          );
        },
      }),

      reorder: assign({
        advancedSettings: (ctx, event) =>
          event.advanced ? event.settings : ctx.advancedSettings,
        basicSettings: (ctx, event) =>
          event.advanced ? ctx.basicSettings : event.settings,
      }),

      delete: assign({
        basicSettings: (ctx, event) =>
          event.advanced
            ? ctx.basicSettings
            : ctx.basicSettings.filter(
                (setting) => setting.id !== event.settingId
              ),
        advancedSettings: (ctx, event) =>
          event.advanced
            ? ctx.advancedSettings.filter(
                (setting) => setting.id !== event.settingId
              )
            : ctx.advancedSettings,
      }),

      resetCurrent: assign({
        currentAdvanced: undefined,
        currentId: undefined,
      }),

      duplicate: assign({
        advancedSettings: (ctx, event) => {
          if (!event.advanced) {
            return ctx.advancedSettings;
          }

          const setting = ctx.advancedSettings.find(
            (setting) => setting.id === event.targetSettingId
          );
          return setting
            ? [...ctx.advancedSettings, { ...setting, id: event.settingId }]
            : ctx.advancedSettings;
        },
        basicSettings: (ctx, event) => {
          if (event.advanced) {
            return ctx.basicSettings;
          }

          const setting = ctx.basicSettings.find(
            (setting) => setting.id === event.targetSettingId
          );
          return setting
            ? [...ctx.basicSettings, { ...setting, id: event.settingId }]
            : ctx.basicSettings;
        },
      }),

      patch: assign({
        advancedSettings: (ctx, event) => {
          const currentId = ctx.currentId;
          const currentAdvanced = ctx.currentAdvanced;
          if (currentAdvanced === undefined || currentId === undefined) {
            return ctx.advancedSettings;
          }

          if (currentAdvanced) {
            return ctx.advancedSettings.map((setting) =>
              setting.id === currentId
                ? { ...setting, kind: event.newKind }
                : setting
            );
          }

          return ctx.advancedSettings;
        },
        basicSettings: (ctx, event) => {
          const currentId = ctx.currentId;
          const currentAdvanced = ctx.currentAdvanced;
          if (currentAdvanced === undefined || currentId === undefined) {
            return ctx.basicSettings;
          }

          if (!currentAdvanced) {
            return ctx.basicSettings.map((setting) =>
              setting.id === currentId
                ? { ...setting, kind: event.newKind }
                : setting
            );
          }

          return ctx.basicSettings;
        },
      }),
    },
    services: {},
    guards: {
      isMatching: (ctx, event) => {
        if (ctx.currentAdvanced === undefined || ctx.currentId === undefined) {
          return false;
        }

        if (ctx.currentAdvanced) {
          const setting = ctx.advancedSettings.find(
            (setting) => setting.id === ctx.currentId
          );
          return setting ? setting.kind === event.value : false;
        }

        const setting = ctx.basicSettings.find(
          (setting) => setting.id === ctx.currentId
        );
        return setting ? setting.kind === event.value : false;
      },

      equalToCurrentId: (ctx, event) => {
        if (event.advanced) {
          const setting = ctx.advancedSettings.find(
            (setting) => setting.id === event.settingId
          );
          return setting ? setting.id === ctx.currentId : false;
        }

        const setting = ctx.basicSettings.find(
          (setting) => setting.id === event.settingId
        );
        return setting ? setting.id === ctx.currentId : false;
      },

      notEqualToPreviousKind: (ctx, event) => {
        const currentId = ctx.currentId;
        const currentAdvanced = ctx.currentAdvanced;

        if (currentAdvanced === undefined || currentId === undefined) {
          return false;
        }

        if (currentAdvanced) {
          const setting = ctx.advancedSettings.find(
            (setting) => setting.id === currentId
          );
          return setting ? setting.kind !== event.newKind : false;
        }

        const setting = ctx.basicSettings.find(
          (setting) => setting.id === currentId
        );
        return setting ? setting.kind !== event.newKind : false;
      },
      isDropdown: (ctx, event) => {
        if (event.advanced) {
          const setting = ctx.advancedSettings.find(
            (setting) => setting.id === event.settingId
          );
          return setting ? setting.kind === "dropdown" : false;
        }
        const setting = ctx.basicSettings.find(
          (setting) => setting.id === event.settingId
        );
        return setting ? setting.kind === "dropdown" : false;
      },
      isToggle: (ctx, event) => {
        if (event.advanced) {
          const setting = ctx.advancedSettings.find(
            (setting) => setting.id === event.settingId
          );
          return setting ? setting.kind === "toggle" : false;
        }
        const setting = ctx.basicSettings.find(
          (setting) => setting.id === event.settingId
        );
        return setting ? setting.kind === "toggle" : false;
      },
      isSearch: (ctx, event) => {
        if (event.advanced) {
          const setting = ctx.advancedSettings.find(
            (setting) => setting.id === event.settingId
          );
          return setting ? setting.kind === "search" : false;
        }
        const setting = ctx.basicSettings.find(
          (setting) => setting.id === event.settingId
        );
        return setting ? setting.kind === "search" : false;
      },
      isShortText: (ctx, event) => {
        if (event.advanced) {
          const setting = ctx.advancedSettings.find(
            (setting) => setting.id === event.settingId
          );
          return setting ? setting.kind === "short-text" : false;
        }
        const setting = ctx.basicSettings.find(
          (setting) => setting.id === event.settingId
        );
        return setting ? setting.kind === "short-text" : false;
      },
    },
    delays: {},
  }
);

export const SettingMachineContext = createActorContext(settingMachine);
