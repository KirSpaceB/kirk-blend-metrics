import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { HelpCircle } from "@/components/icons";
import { RemainCharacters } from "@/components/remain-characters";
import {
  HelperText,
  Label,
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
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
import { SettingMachineContext } from "@/machines";

const schema = z.object({
  label: z.string().max(30, "Must contain at most 30 character(s)"),
  optional: z.boolean(),
  hasQuantity: z.boolean(),
  maxQuantity: z.number().optional(),
  allowAllOrCustomFileExtensions: z.enum(["all", "custom"]),
  tooltip: z.string().max(30, "Must contain at most 30 character(s)"),
  hint: z.string().max(50, "Must contain at most 30 character(s)"),
});

type FormValues = z.infer<typeof schema>;

const defaultValues: FormValues = {
  label: "",
  optional: false,
  hasQuantity: false,
  allowAllOrCustomFileExtensions: "all",
  tooltip: "",
  hint: "",
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
  const values = pick(
    setting,
    "label",
    "optional",
    "hasQuantity",
    "allowAllOrCustomFileExtensions",
    "tooltip",
    "hint",
    "maxQuantity"
  );

  const { control, register, handleSubmit, getValues } = useForm({
    resolver: zodResolver(schema),
    values: { ...defaultValues, ...values },
  });

  const { hasQuantity } = useEnhancedWatch({
    control,
    onChange: (variables) =>
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

        <div className="flex items-center justify-between">
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

        <div className="space-y-1.5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-x-2">
              <Label
                className="text-gray-700"
                size="sm"
                htmlFor="set-max-quality"
              >
                Set Max Quantity
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
              name="hasQuantity"
              render={({ field: { value, onChange, ...field } }) => (
                <Switch
                  checked={value}
                  onCheckedChange={onChange}
                  id="set-max-quality"
                />
              )}
            />
          </div>

          {hasQuantity && (
            <Controller
              control={control}
              name="maxQuantity"
              render={({ field }) => (
                <Input
                  {...field}
                  type="number"
                  placeholder="Enter Max Images Quantity"
                />
              )}
            />
          )}
        </div>
      </div>

      <div className="space-y-5 border-t border-gray-200 p-5">
        <Label className="text-gray-700" size="sm">
          Allowed File Types
        </Label>

        <HelperText className="mt-1.5" size="sm">
          Select which file types users can upload
        </HelperText>

        <Controller
          control={control}
          name="allowAllOrCustomFileExtensions"
          render={({ field: { value, onChange, ...field } }) => (
            <RadioGroup
              value={value}
              onValueChange={onChange}
              className="mt-3 grid-cols-2 gap-x-2"
            >
              <RadioGroupItemSelector value="all">
                <Label className="leading-5" asChild>
                  <span>Any Type</span>
                </Label>
              </RadioGroupItemSelector>
              <RadioGroupItemSelector value="custom">
                <Label className="leading-5" asChild>
                  <span>Specific Type(s)</span>
                </Label>
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
              <RemainCharacters control={control} name="tooltip" max={50} />
            </HelperText>
          </div>
          <Input {...register("tooltip")} id="tooltip" />
        </div>
      </div>
    </form>
  );
}
