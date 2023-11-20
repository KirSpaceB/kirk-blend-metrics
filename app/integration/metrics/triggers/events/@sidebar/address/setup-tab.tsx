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
  CheckboxGroup,
  Checkbox,
} from "@/components/ui";
import { useEnhancedWatch } from "@/lib/hooks";
import { pick } from "@/lib/utils";
import { SettingMachineContext } from "@/machines";

const schema = z.object({
  label: z.string().max(30),
  optional: z.boolean(),
  hasStreetAddress: z.boolean(),
  hasApartmentOrSuiteEtc: z.boolean(),
  hasCity: z.boolean(),
  hasStateOrRegionOrProvince: z.boolean(),
  hasCountry: z.boolean(),
  hasPostalOrZipCode: z.boolean(),
  hint: z.string().max(30),
  tooltip: z.string().max(30),
});

type FormValues = z.infer<typeof schema>;

const defaultValues: FormValues = {
  label: "",
  optional: false,
  hasApartmentOrSuiteEtc: true,
  hasCity: true,
  hasCountry: true,
  hasPostalOrZipCode: true,
  hasStateOrRegionOrProvince: true,
  hasStreetAddress: true,
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
    "hasCharacterLimit",
    "optional",
    "tooltip",
    "hint",
    "hasStreetAddress",
    "hasApartmentOrSuiteEtc",
    "hasCity",
    "hasStateOrRegionOrProvince",
    "hasCountry",
    "hasPostalOrZipCode"
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
        <Label className="text-gray-700" size="sm">
          Address Elements
        </Label>
        <CheckboxGroup className="mt-3 space-y-2">
          <div className="flex items-center gap-x-2">
            <Controller
              control={control}
              name="hasStreetAddress"
              render={({ field: { value, onChange, ...field } }) => (
                <Checkbox
                  checked={value}
                  onCheckedChange={onChange}
                  id="street-address"
                />
              )}
            />

            <Label
              className="leading-none text-gray-700"
              size="sm"
              htmlFor="street-address"
            >
              Street Address
            </Label>
          </div>
          <div className="flex items-center gap-x-2">
            <Controller
              control={control}
              name="hasApartmentOrSuiteEtc"
              render={({ field: { value, onChange, ...field } }) => (
                <Checkbox
                  checked={value}
                  onCheckedChange={onChange}
                  id="apartment-suite-etc"
                />
              )}
            />

            <Label
              className="leading-none text-gray-700"
              size="sm"
              htmlFor="apartment-suite-etc"
            >
              Apartment, suite, etc.
            </Label>
          </div>
          <div className="flex items-center gap-x-2">
            <Controller
              control={control}
              name="hasCity"
              render={({ field: { value, onChange, ...field } }) => (
                <Checkbox
                  checked={value}
                  onCheckedChange={onChange}
                  id="city"
                />
              )}
            />

            <Label
              className="leading-none text-gray-700"
              size="sm"
              htmlFor="city"
            >
              City
            </Label>
          </div>
          <div className="flex items-center gap-x-2">
            <Controller
              control={control}
              name="hasStateOrRegionOrProvince"
              render={({ field: { value, onChange, ...field } }) => (
                <Checkbox
                  checked={value}
                  onCheckedChange={onChange}
                  id="state-region-province"
                />
              )}
            />

            <Label
              className="leading-none text-gray-700"
              size="sm"
              htmlFor="state-region-province"
            >
              State/Region/Province
            </Label>
          </div>
          <div className="flex items-center gap-x-2">
            <Controller
              control={control}
              name="hasCountry"
              render={({ field: { value, onChange, ...field } }) => (
                <Checkbox
                  checked={value}
                  onCheckedChange={onChange}
                  id="country"
                />
              )}
            />

            <Label
              className="leading-none text-gray-700"
              size="sm"
              htmlFor="country"
            >
              Country
            </Label>
          </div>

          <div className="flex items-center gap-x-2">
            <Controller
              control={control}
              name="hasPostalOrZipCode"
              render={({ field: { value, onChange, ...field } }) => (
                <Checkbox
                  checked={value}
                  onCheckedChange={onChange}
                  id="postal-zip-code"
                />
              )}
            />
            <Label
              className="leading-none text-gray-700"
              size="sm"
              htmlFor="postal-zip-code"
            >
              Postal/Zip Code
            </Label>
          </div>
        </CheckboxGroup>
      </div>

      <div className="space-y-5 border-t border-gray-200 p-5">
        <div className="space-y-1.5">
          <Label className="text-gray-700" htmlFor="hint" size="sm">
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
          <Input {...register("hint")} id="hint" />
        </div>

        <div className="space-y-1.5">
          <Label className="text-gray-700" htmlFor="tooltip" size="sm">
            Tooltip <span className="text-gray-400">(optional)</span>
          </Label>
          <div className="flex items-center justify-between">
            <HelperText size="sm">
              Add additional information about the field.
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
