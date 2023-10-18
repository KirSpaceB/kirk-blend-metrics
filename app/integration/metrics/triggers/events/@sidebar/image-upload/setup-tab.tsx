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
  CheckboxGroup,
  Checkbox,
} from "@/components/ui";
import { useEnhancedWatch } from "@/lib/hooks";
import { pick } from "@/lib/utils";
import { SettingMachineContext } from "@/machines";

const schema = z.object({
  label: z.string().max(30, "Must contain at most 30 character(s)"),
  optional: z.boolean(),
  hasQuantity: z.boolean(),
  maxQuantity: z.number().optional(),
  allowAllOrCustomImageExtensions: z.enum(["all", "custom"]),
  tooltip: z.string().max(30, "Must contain at most 30 character(s)"),
  hint: z.string().max(30, "Must contain at most 30 character(s)"),
  allowedImageExtensions: z.array(z.string()).optional(),
});

type FormValues = z.infer<typeof schema>;

const defaultValues: FormValues = {
  label: "",
  optional: false,
  hasQuantity: false,
  allowAllOrCustomImageExtensions: "all",
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
    "allowAllOrCustomImageExtensions",
    "tooltip",
    "hint",
    "maxQuantity",
    "allowedImageExtensions"
  );

  const { control, register, handleSubmit, getValues } = useForm({
    resolver: zodResolver(schema),
    values: { ...defaultValues, ...values },
    shouldUnregister: true,
  });

  const { hasQuantity, allowAllOrCustomImageExtensions } = useEnhancedWatch({
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
                  type="number"
                  placeholder="Enter Max Images Quantity"
                  {...field}
                />
              )}
            />
          )}
        </div>
      </div>

      <div className="border-t border-gray-200 p-5">
        <Label className="text-gray-700" size="sm">
          Allowed Image Format
        </Label>

        <HelperText className="mt-1.5" size="sm">
          Select which image formats users can upload
        </HelperText>

        <Controller
          control={control}
          name="allowAllOrCustomImageExtensions"
          render={({ field: { value, onChange, ...field } }) => (
            <RadioGroup
              value={value}
              onValueChange={onChange}
              className="mt-3 grid-cols-2 gap-x-2"
            >
              <RadioGroupItemSelector value="all">
                <Label className="leading-4" asChild>
                  <span>All Formats</span>
                </Label>
              </RadioGroupItemSelector>
              <RadioGroupItemSelector value="custom">
                <Label className="leading-4" asChild>
                  <span>Specific Formats</span>
                </Label>
              </RadioGroupItemSelector>
            </RadioGroup>
          )}
        />

        {allowAllOrCustomImageExtensions === "custom" && (
          <Controller
            control={control}
            name="allowedImageExtensions"
            render={({ field: { value = [], onChange } }) => (
              <CheckboxGroup className="mt-4 space-y-3">
                <div className="flex items-center gap-x-2">
                  <Checkbox
                    size="lg"
                    id="jpeg"
                    checked={value.includes("jpeg")}
                    onCheckedChange={() => {
                      const hasJpeg = value.includes("jpeg");
                      hasJpeg
                        ? onChange(
                            value.filter((extension) => extension !== "jpeg")
                          )
                        : onChange([...value, "jpeg"]);
                    }}
                  />
                  <Label className="text-gray-700" size="sm" id="jpeg">
                    JPEG
                  </Label>
                </div>
                <div className="flex items-center gap-x-2">
                  <Checkbox
                    size="lg"
                    id="png"
                    checked={value.includes("png")}
                    onCheckedChange={() => {
                      const hasPng = value.includes("png");
                      hasPng
                        ? onChange(
                            value.filter((extension) => extension !== "png")
                          )
                        : onChange([...value, "png"]);
                    }}
                  />
                  <Label className="text-gray-700" size="sm" id="png">
                    PNG
                  </Label>
                </div>
                <div className="flex items-center gap-x-2">
                  <Checkbox
                    size="lg"
                    id="webp"
                    checked={value.includes("webp")}
                    onCheckedChange={() => {
                      const hasWebp = value.includes("webp");
                      hasWebp
                        ? onChange(
                            value.filter((extension) => extension !== "webp")
                          )
                        : onChange([...value, "webp"]);
                    }}
                  />
                  <Label className="text-gray-700" size="sm" id="webp">
                    WEBP
                  </Label>
                </div>
                <div className="flex items-center gap-x-2">
                  <Checkbox
                    size="lg"
                    id="gif"
                    checked={value.includes("gif")}
                    onCheckedChange={() => {
                      const hasGif = value.includes("gif");
                      hasGif
                        ? onChange(
                            value.filter((extension) => extension !== "gif")
                          )
                        : onChange([...value, "gif"]);
                    }}
                  />
                  <Label className="text-gray-700" size="sm" id="gif">
                    GIF
                  </Label>
                </div>
                <div className="flex items-center gap-x-2">
                  <Checkbox
                    size="lg"
                    id="svg"
                    checked={value.includes("svg")}
                    onCheckedChange={() => {
                      const hasSvg = value.includes("svg");
                      hasSvg
                        ? onChange(
                            value.filter((extension) => extension !== "svg")
                          )
                        : onChange([...value, "svg"]);
                    }}
                  />
                  <Label className="text-gray-700" size="sm" id="gif">
                    SVG
                  </Label>
                </div>
                <div className="flex items-center gap-x-2">
                  <Checkbox
                    size="lg"
                    id="bmp"
                    checked={value.includes("bmp")}
                    onCheckedChange={() => {
                      const hasSvg = value.includes("bmp");
                      hasSvg
                        ? onChange(
                            value.filter((extension) => extension !== "bmp")
                          )
                        : onChange([...value, "bmp"]);
                    }}
                  />
                  <Label className="text-gray-700" size="sm" id="bmp">
                    BMP
                  </Label>
                </div>
              </CheckboxGroup>
            )}
          />
        )}
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
