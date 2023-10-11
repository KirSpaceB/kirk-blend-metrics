"use client";

import * as React from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { ChevronUpDown, HelpCircle, Search2, Toggle } from "@/components/icons";
import {
  HelperText,
  Input,
  Label,
  Listbox,
  ListboxButton,
  ListboxContent,
  ListboxLabel,
  ListboxOption,
  ListboxOptions,
  RadioGroup,
  RadioGroupItemSelector,
  Switch,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui";
import { useEnhancedWatch } from "@/lib/hooks";
import { SettingMachineContext } from "@/machines";
import { RemainCharacters } from "@/components/remain-characters";
import { pick } from "@/lib/utils";

const schema = z.object({
  label: z.string().max(30),
  singleOrMultiSelect: z.enum(["single", "multiple"]),
  limitSelections: z.boolean().optional(),
  optional: z.boolean(),
  placeholderOrDefaultValue: z.enum(["placeholder", "defaultValue"]),
  placeholder: z.string().max(30),
  hint: z.string().max(30),
});

type FormValues = z.infer<typeof schema>;

const defaultValues: FormValues = {
  singleOrMultiSelect: "single",
  optional: false,
  placeholder: "",
  hint: "",
  label: "",
  placeholderOrDefaultValue: "placeholder",
};

interface Option {
  icon: React.ReactNode;
  label: string;
  value: "toggle" | "search" | "dropdown";
}

type Options = Option[];

const options: Options = [
  {
    icon: <ChevronUpDown className="h-6 w-6 text-gray-500" />,
    label: "Dropdown",
    value: "dropdown",
  },
  {
    icon: <Search2 className="h-6 w-6 text-gray-500" />,
    label: "Search",
    value: "search",
  },
  {
    icon: <Toggle className="h-6 w-6 text-gray-500" />,
    label: "Toggle",
    value: "toggle",
  },
];

export default function SetupTab() {
  const [, send] = SettingMachineContext.useActor();
  const currentId = SettingMachineContext.useSelector(
    (state) => state.context.currentId
  );
  const settings = SettingMachineContext.useSelector((state) =>
    state.context.currentAdvanced
      ? state.context.advancedSettings
      : state.context.basicSettings
  );

  const setting = settings.find((setting) => setting.id === currentId);
  const values = pick(
    setting,
    "singleOrMultiSelect",
    "optional",
    "placeholder",
    "hint",
    "label",
    "placeholderOrDefaultValue",
    "placeholder",
    "limitSelections"
  );

  const { register, handleSubmit, watch, control } = useForm<FormValues>({
    resolver: zodResolver(schema),
    values: { ...defaultValues, ...values },
  });

  useEnhancedWatch({
    control,
    onChange: (variables) =>
      send({
        type: "UPDATE",
        value: "dropdown",
        setting: variables,
      }),
  });

  const onSubmit: SubmitHandler<FormValues> = (variables) => {};

  const singleOrMultiSelect = watch("singleOrMultiSelect");

  const handleListboxChange = (selected: Option) => {
    const { value } = selected;

    switch (value) {
      case "search":
        send({
          type: "TO-SEARCH",
          newKind: "search",
        });
        break;

      case "toggle":
        send({
          type: "TO-TOGGLE",
          newKind: "toggle",
        });
        break;
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Listbox
        className="space-y-1.5 p-5"
        defaultValue={options[0]}
        onChange={handleListboxChange}
      >
        <ListboxLabel className="text-gray-700" size="sm">
          Field Type
        </ListboxLabel>

        <HelperText size="sm">
          Change your field to any of the similar fields
        </HelperText>

        <ListboxContent>
          <ListboxButton className="px-3 text-gray-900">
            {({ value }) => (
              <div className="flex flex-grow items-center gap-x-2">
                {value.icon} {value.label}
              </div>
            )}
          </ListboxButton>

          <ListboxOptions className="h-auto">
            {options.map((option) => (
              <ListboxOption
                className="px-3.5 py-2.5 text-sm font-medium leading-5 text-gray-900"
                iconClassName="h-5 w-5"
                value={option}
                key={option.value}
              >
                <div className="flex flex-grow items-center gap-x-2">
                  {option.icon} {option.label}
                </div>
              </ListboxOption>
            ))}
          </ListboxOptions>
        </ListboxContent>
      </Listbox>

      <div className="space-y-5 border-t border-gray-200 p-5">
        <div className="space-y-1.5">
          <Label className="text-gray-700" htmlFor="field-label" size="sm">
            Field label
          </Label>
          <div className="flex justify-between">
            <HelperText size="sm">Enter a user friendly name.</HelperText>
            <HelperText className="leading-5">
              <RemainCharacters control={control} name="label" max={30} />
            </HelperText>
          </div>
          <Input
            className="text-gray-black"
            id="field-label"
            {...register("label")}
          />
        </div>

        <Controller
          control={control}
          name="singleOrMultiSelect"
          render={({ field: { value, onChange, onBlur, disabled } }) => (
            <RadioGroup
              className="mt-5 grid grid-cols-2 gap-2"
              value={value}
              onValueChange={onChange}
              onBlur={onBlur}
              disabled={disabled}
            >
              <RadioGroupItemSelector className="gap-x-4" value="single">
                <Label asChild>
                  <span>Single Select</span>
                </Label>
              </RadioGroupItemSelector>
              <RadioGroupItemSelector className="gap-x-4" value="multiple">
                <Label asChild>
                  <span>Multiple Select</span>
                </Label>
              </RadioGroupItemSelector>
            </RadioGroup>
          )}
        />

        {singleOrMultiSelect === "multiple" && (
          <div className="flex justify-between">
            <div className="flex items-center gap-x-2">
              <Label
                className="text-gray-700"
                size="sm"
                htmlFor="limit-selections"
              >
                Limit Selections
              </Label>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <HelpCircle className="text-gray-400" />
                  </TooltipTrigger>
                  <TooltipContent>Make optional field</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>

            <Controller
              control={control}
              name="limitSelections"
              render={({ field: { value, onChange, onBlur } }) => (
                <Switch
                  id="limit-selections"
                  checked={value}
                  onCheckedChange={onChange}
                  onBlur={onBlur}
                />
              )}
            />
          </div>
        )}

        <div className="flex justify-between">
          <div className="flex items-center gap-x-2">
            <Label className="text-gray-700" size="sm" htmlFor="optional-field">
              Optional Field
            </Label>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <HelpCircle className="text-gray-400" />
                </TooltipTrigger>
                <TooltipContent>Make optional field</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>

          <Controller
            control={control}
            name="optional"
            render={({ field: { value, onChange, onBlur } }) => (
              <Switch
                id="optional-field"
                checked={value}
                onCheckedChange={onChange}
                onBlur={onBlur}
              />
            )}
          />
        </div>
      </div>

      <div className="border-t border-gray-200 p-5">
        <Controller
          control={control}
          name="placeholderOrDefaultValue"
          render={({ field: { value, onBlur, onChange, disabled } }) => (
            <RadioGroup
              className="grid grid-cols-2 gap-2"
              value={value}
              onValueChange={onChange}
              onBlur={onBlur}
              disabled={disabled}
            >
              <RadioGroupItemSelector className="gap-x-4" value="placeholder">
                <Label asChild>
                  <span>Placeholder</span>
                </Label>
              </RadioGroupItemSelector>
              <RadioGroupItemSelector className="gap-x-4" value="defaultValue">
                <Label asChild>
                  <span>Default Value</span>
                </Label>
              </RadioGroupItemSelector>
            </RadioGroup>
          )}
        />

        <div className="mt-4 space-y-1.5">
          <Label className="text-gray-700" size="sm">
            Placeholder Text
          </Label>
          <div className="flex items-center justify-between">
            <HelperText size="sm">Add a clear placeholder text.</HelperText>
            <HelperText className="leading-5">
              <RemainCharacters control={control} name="placeholder" max={30} />
            </HelperText>
          </div>
          <Input {...register("placeholder")} />
        </div>
      </div>

      <div className="space-y-1.5 border-t border-gray-200 p-5">
        <Label className="text-gray-700" size="sm">
          Hint text <span className="text-gray-400">(optional)</span>
        </Label>
        <div className="flex items-center justify-between">
          <HelperText size="sm">Add a short prompt about the field.</HelperText>
          <HelperText className="leading-5">
            <RemainCharacters control={control} name="hint" max={30} />
          </HelperText>
        </div>
        <Input {...register("hint")} id="hint-text" />
      </div>
    </form>
  );
}
