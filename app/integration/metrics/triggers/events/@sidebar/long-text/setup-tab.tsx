import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { HelpCircle, LongText } from "@/components/icons";
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
} from "@/components/ui";
import { useEnhancedWatch } from "@/lib/hooks";
import { pick } from "@/lib/utils";
import { SettingMachineContext } from "@/machines";

const schema = z.object({
  label: z.string().max(30),
  hasCharacterLimit: z.boolean(),
  optional: z.boolean(),
  placeholder: z.string().max(30),
  hint: z.string().max(30),
});

type FormValues = z.infer<typeof schema>;

const defaultValues: FormValues = {
  label: "",
  hasCharacterLimit: false,
  optional: false,
  placeholder: "",
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
    "hasCharacterLimit",
    "optional",
    "placeholder",
    "hint"
  );

  const { control, register, handleSubmit } = useForm({
    resolver: zodResolver(schema),
    values: { ...defaultValues, ...values },
  });

  useEnhancedWatch({
    control,
    onChange: (variables) =>
      send({
        type: "UPDATE",
        value: "long-text",
        setting: variables,
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
            <Label className="text-gray-700" size="sm" htmlFor="set-char-limit">
              Set Character Limit
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
            name="hasCharacterLimit"
            render={({ field: { value, onChange, ...field } }) => (
              <Switch
                checked={value}
                onCheckedChange={onChange}
                id="set-char-limit"
              />
            )}
          />
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
      </div>
    </form>
  );
}
