import * as React from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { HelpCircle } from "@/components/icons";
import { RemainCharacters } from "@/components/remain-characters";
import {
  HelperText,
  Label,
  Input,
  Switch,
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  RadioGroupItemSelector,
  RadioGroup,
} from "@/components/ui";
import { useEnhancedWatch } from "@/lib/hooks";
import { pick } from "@/lib/utils";
import {
  selectCurrentId,
  selectSettings,
  useSettingActor,
  useSettingSelector,
} from "@/machines";

const schema = z.object({
  label: z.string().max(30, "Must contain at most 30 character(s)"),
  optional: z.boolean(),
  tooltip: z.string().max(30, "Must contain at most 30 character(s)"),
  hint: z.string().max(30, "Must contain at most 30 character(s)"),
  mode: z.enum(
    ["Date & Time", "Date & Time Range", "Date Range", "Date", "Time"],
    {
      required_error: "Must select 1 option(s)",
    }
  ),
  format: z.enum(["12", "24"], {
    required_error: "Must select 1 option(s)",
  }),
});

type FormValues = z.infer<typeof schema>;

const defaultValues: FormValues = {
  label: "",
  optional: false,
  tooltip: "",
  hint: "",
  mode: "Date & Time",
  format: "12",
};

export default function SetupTab() {
  const [, send] = useSettingActor();
  const currentId = useSettingSelector(selectCurrentId);
  const settings = useSettingSelector(selectSettings);

  const setting = settings.find((setting) => setting.id === currentId);
  const values = pick(
    setting,
    "label",
    "optional",
    "tooltip",
    "hint",
    "format",
    "mode"
  );

  const { control, register, handleSubmit, getValues } = useForm({
    resolver: zodResolver(schema),
    values: { ...defaultValues, ...values },
  });

  const {} = useEnhancedWatch({
    control,
    onChange: () =>
      send({
        type: "UPDATE",
        setting: getValues(),
      }),
  });

  const onSubmit: SubmitHandler<FormValues> = (variables) => {};

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="space-y-5 border-t border-gray-200 p-5">
        <div className="space-y-1.5">
          <Label className="text-gray-700" size="sm" htmlFor="field-label">
            Field Label
          </Label>

          <div className="flex items-center justify-between">
            <HelperText size="sm">Enter a user friendly name.</HelperText>
            <HelperText className="leading-5">
              <RemainCharacters control={control} name="label" max={30} />
            </HelperText>
          </div>

          <Input {...register("label")} id="field-label" />
        </div>

        <Controller
          control={control}
          name="mode"
          render={({ field: { onChange, value, disabled, onBlur, ref } }) => (
            <RadioGroup
              ref={ref}
              value={value}
              onValueChange={onChange}
              onBlur={onBlur}
              disabled={disabled}
              className="gap-y-2"
            >
              <RadioGroupItemSelector className="gap-x-4" value="Date & Time">
                <Label className="leading-4" asChild>
                  <span>Date & Time</span>
                </Label>
              </RadioGroupItemSelector>
              <RadioGroupItemSelector
                className="gap-x-4"
                value="Date & Time Range"
              >
                <Label className="leading-4" asChild>
                  <span>Date & Time Range</span>
                </Label>
              </RadioGroupItemSelector>
              <RadioGroupItemSelector className="gap-x-4" value="Date Range">
                <Label className="leading-4" asChild>
                  <span>Date Range</span>
                </Label>
              </RadioGroupItemSelector>
              <RadioGroupItemSelector className="gap-x-4" value="Date">
                <Label className="leading-4" asChild>
                  <span>Date</span>
                </Label>
              </RadioGroupItemSelector>
              <RadioGroupItemSelector className="gap-x-4" value="Time">
                <Label className="leading-4" asChild>
                  <span>Time</span>
                </Label>
              </RadioGroupItemSelector>
            </RadioGroup>
          )}
        />

        <div className="mt-6 flex items-center justify-between">
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
            render={({ field: { value, onChange, ...field } }) => (
              <Switch
                checked={value}
                onCheckedChange={onChange}
                id="optional-field"
              />
            )}
          />
        </div>
      </div>

      <div className="border-t border-gray-200 p-5">
        <Label className="text-gray-700" size="sm">
          Time Format
        </Label>
        <Controller
          control={control}
          name="format"
          render={({ field: { onBlur, onChange, ref, value, disabled } }) => (
            <RadioGroup
              ref={ref}
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              disabled={disabled}
              className="mt-3 grid-cols-2 gap-x-3"
            >
              <RadioGroupItemSelector value="12">
                <Label className="leading-[14.52px]" asChild>
                  <span>12 Hours</span>
                </Label>
                <HelperText className="mt-0.5 leading-[14.52px]">
                  02:18 PM
                </HelperText>
              </RadioGroupItemSelector>
              <RadioGroupItemSelector value="24">
                <Label className="leading-[14.52px]" asChild>
                  <span>24 Hours</span>
                </Label>
                <HelperText className="mt-0.5 leading-[14.52px]">
                  14:18
                </HelperText>
              </RadioGroupItemSelector>
            </RadioGroup>
          )}
        />
      </div>

      <div className="space-y-5 border-t border-gray-200 p-5">
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
              Tooltip{" "}
              <span className="font-medium text-gray-400">(optional)</span>
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
              Add a short prompt about the field.
            </HelperText>
            <HelperText className="leading-5">
              <RemainCharacters control={control} name="tooltip" max={30} />
            </HelperText>
          </div>
          <Input {...register("tooltip")} id="tooltip" />
        </div>
      </div>
    </form>
  );
}
