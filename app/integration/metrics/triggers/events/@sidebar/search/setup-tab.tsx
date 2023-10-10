"use client";

import * as React from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { HelpCircle } from "@/components/icons";
import {
  HelperText,
  Input,
  Label,
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

const schema = z.object({
  label: z.string().max(30),
  singleOrMultiSelect: z.enum(["single", "multiple"]),
  optional: z.boolean(),
  placeholder: z.string().max(30),
  hint: z.string().max(30),
  tooltip: z.string().max(50),
  limitSelections: z.boolean().optional(),
});

type FormValues = z.infer<typeof schema>;

const defaultValues: FormValues = {
  label: "",
  singleOrMultiSelect: "single",
  optional: false,
  placeholder: "",
  hint: "",
  tooltip: "",
};

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
  const { search } = setting || {};
  const { setup: values } = search || {};

  const { register, handleSubmit, watch, control, getValues } =
    useForm<FormValues>({
      resolver: zodResolver(schema),
      values: values || defaultValues,
    });

  useEnhancedWatch({
    control,
    onChange: () =>
      send({
        type: "UPDATE",
        value: {
          kind: "search",
          setting: {
            setup: getValues(),
          },
        },
      }),
  });

  const singleOrMultiSelect = watch("singleOrMultiSelect");

  const onSubmit: SubmitHandler<FormValues> = (variables) => {};

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="space-y-5 p-5">
        <div className="space-y-1.5">
          <Label className="text-gray-700" htmlFor="field-label" size="sm">
            Field Label
          </Label>
          <div className="flex items-center justify-between">
            <HelperText size="sm">Enter a user friendly name.</HelperText>
            <HelperText size="xs">
              <RemainCharacters control={control} name="label" max={30} />
            </HelperText>
          </div>
          <Input {...register("label")} id="field-label" placeholder="Search" />
        </div>

        <Controller
          control={control}
          name="singleOrMultiSelect"
          render={({ field: { onChange, ...props } }) => (
            <RadioGroup
              className="grid-cols-2 gap-x-2"
              onValueChange={onChange}
              {...props}
            >
              <RadioGroupItemSelector className="gap-x-4" value="single">
                <Label className="leading-4" size="xs">
                  Single Select
                </Label>
              </RadioGroupItemSelector>
              <RadioGroupItemSelector className="gap-x-4" value="multiple">
                <Label className="leading-4" size="xs">
                  Multiple Select
                </Label>
              </RadioGroupItemSelector>
            </RadioGroup>
          )}
        />

        <div className="space-y-5">
          {singleOrMultiSelect === "multiple" && (
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-x-2">
                <Label
                  className="text-gray-700"
                  htmlFor="limit-selections"
                  size="sm"
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
                render={({ field: { value, onChange, ...props } }) => (
                  <Switch
                    checked={value}
                    onCheckedChange={onChange}
                    id="limit-selections"
                    {...props}
                  />
                )}
              />
            </div>
          )}
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-x-2">
              <Label
                className="text-gray-700"
                htmlFor="optional-field"
                size="sm"
              >
                Optional Field{" "}
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
              render={({ field: { value, onChange, ...props } }) => (
                <Switch
                  checked={value}
                  onCheckedChange={onChange}
                  id="optional-field"
                  {...props}
                />
              )}
            />
          </div>
        </div>
      </div>

      <div className="space-y-5 border-t border-gray-200 p-5">
        <div className="space-y-1.5">
          <Label className="text-gray-700" htmlFor="placeholder-text" size="sm">
            Placeholder Text
          </Label>
          <div className="flex items-center justify-between">
            <HelperText size="sm">Add a clear placeholder text.</HelperText>
            <HelperText className="leading-5">
              <RemainCharacters control={control} name="placeholder" max={30} />
            </HelperText>
          </div>
          <Input {...register("placeholder")} id="placeholder-text" />
        </div>

        <div className="space-y-1.5">
          <Label className="text-gray-700" htmlFor="hint-text" size="sm">
            Hint Text <span className="text-gray-400">(optional)</span>
          </Label>
          <div className="flex items-center justify-between">
            <HelperText size="sm">
              Add a short prompt about the field.
            </HelperText>
            <HelperText className="leading-5">
              <RemainCharacters control={control} name="hint" max={30} />
            </HelperText>
          </div>
          <Input {...register("hint")} id="hint-text" />
        </div>

        <div className="space-y-1.5">
          <div className="flex items-center gap-x-2">
            <Label className="text-gray-700" htmlFor="tooltip" size="sm">
              Tooltip <span className="text-gray-400">(optional)</span>
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
          <div className="flex items-center justify-between">
            <HelperText size="sm">
              Add additional information about the field.
            </HelperText>
            <HelperText className="leading-5">
              <RemainCharacters control={control} name="tooltip" max={50} />
            </HelperText>
          </div>
          <Input {...register("tooltip")} id="tooltip" />
        </div>
      </div>
    </form>
  );
}
