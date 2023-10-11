import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

import { SettingMachineContext } from "@/machines";
import { useEnhancedWatch } from "@/lib/hooks";
import {
  HelperText,
  Input,
  Label,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui";
import { HelpCircle } from "@/components/icons";
import { RemainCharacters } from "@/components/remain-characters";
import { pick } from "@/lib/utils";

const schema = z.object({
  label: z.string().max(30),
  hint: z.string().max(30),
  tooltip: z.string().max(50),
});

type FormValues = z.infer<typeof schema>;

const defaultValues: FormValues = {
  label: "",
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
  const values = pick(setting, "label", "hint", "tooltip");

  const { register, handleSubmit, control } = useForm<FormValues>({
    resolver: zodResolver(schema),
    values: { ...defaultValues, ...values },
  });

  useEnhancedWatch({
    control,
    onChange: (variables) =>
      send({
        type: "UPDATE",
        value: "toggle",
        setting: variables,
      }),
  });

  const onSubmit: SubmitHandler<FormValues> = (variables) => {};

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="space-y-1.5 p-5">
        <Label className="text-gray-700" htmlFor="field-label" size="sm">
          Field Label
        </Label>
        <div className="flex items-center justify-between">
          <HelperText size="sm">Enter a user friendly name.</HelperText>
          <HelperText className="leading-5">
            <RemainCharacters control={control} name="label" max={30} />
          </HelperText>
        </div>
        <Input id="field-label" {...register("label")} />
      </div>

      <div className="border-t border-gray-200 p-5">
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
          <Input id="hint-text" {...register("hint")} />
        </div>
      </div>

      <div className="border-t border-gray-200 p-5">
        <div className="space-y-1.5">
          <div className="flex items-center gap-x-2">
            <Label className="text-gray-700" htmlFor="tooltip" size="sm">
              Tooltip <span className="text-gray-400">(optional)</span>
            </Label>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger className="flex-none">
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
          <Input id="tooltip" {...register("tooltip")} />
        </div>
      </div>
    </form>
  );
}
