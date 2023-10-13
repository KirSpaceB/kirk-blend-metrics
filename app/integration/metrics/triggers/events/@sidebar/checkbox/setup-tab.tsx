import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import {
  CheckboxOutlined,
  ChevronUpDown,
  HelpCircle,
  RadioButton,
} from "@/components/icons";
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
  ListboxContent,
  ListboxLabel,
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  RadioGroup,
  RadioGroupItemSelector,
} from "@/components/ui";
import { useEnhancedWatch } from "@/lib/hooks";
import { pick } from "@/lib/utils";
import { SettingMachineContext } from "@/machines";

const schema = z.object({
  label: z.string().max(30),
  optional: z.boolean(),
  tooltip: z.string().max(30),
  hint: z.string().max(30),
  oneOrTwoColumns: z.enum(["one", "two"]),
  showSelectAll: z.boolean(),
});

type FormValues = z.infer<typeof schema>;

const defaultValues: FormValues = {
  label: "",
  optional: false,
  tooltip: "",
  hint: "",
  oneOrTwoColumns: "one",
  showSelectAll: false,
};

interface Option {
  icon: React.ReactNode;
  label: string;
  value: "dropdown" | "radio-group" | "checkbox";
}

type Options = Option[];

const options: Options = [
  {
    icon: <CheckboxOutlined className="h-6 w-6 text-gray-500" />,
    label: "Checkbox",
    value: "checkbox",
  },
  {
    icon: <RadioButton className="h-6 w-6 text-gray-500" />,
    label: "Radio Group",
    value: "radio-group",
  },
  {
    icon: <ChevronUpDown className="h-6 w-6 text-gray-500" />,
    label: "Dropdown",
    value: "dropdown",
  },
];

const [defaultValue] = options;

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
    "tooltip",
    "hint",
    "oneOrTwoColumns",
    "showSelectAll"
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

  const handleListboxChange = (selected: Option) => {
    switch (selected.value) {
      case "dropdown":
        send({
          type: "TO-DROPDOWN",
          newKind: "dropdown",
        });
        break;

      case "radio-group":
        send({
          type: "TO-RADIO-GROUP",
          newKind: "radio-group",
        });
        break;
    }
  };

  const onSubmit: SubmitHandler<FormValues> = (variables) => {};

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Listbox
        className="space-y-1.5 p-5"
        defaultValue={defaultValue}
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

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-x-2">
            <Label className="text-gray-700" size="sm" htmlFor="add-select-all">
              Add “Select All” Option
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
            name="showSelectAll"
            render={({ field: { value, onChange, ...field } }) => (
              <Switch
                checked={value}
                onCheckedChange={onChange}
                id="add-select-all"
              />
            )}
          />
        </div>
      </div>

      <div className="space-y-3 border-t border-gray-200 p-5">
        <Label className="text-gray-700" size="sm" htmlFor="show-radio-in">
          Show Radios in
        </Label>
        <Controller
          control={control}
          name="oneOrTwoColumns"
          render={({ field: { value, onChange, ...field } }) => (
            <RadioGroup
              className="grid-cols-2 gap-x-3"
              value={value}
              onValueChange={onChange}
              id="show-radio-in"
            >
              <RadioGroupItemSelector value="one">
                <Label className="leading-[14.52px] text-gray-800" asChild>
                  <span>One Column</span>
                </Label>
              </RadioGroupItemSelector>
              <RadioGroupItemSelector value="two">
                <Label className="leading-[14.52px] text-gray-800" asChild>
                  <span>Two Column</span>
                </Label>
              </RadioGroupItemSelector>
            </RadioGroup>
          )}
        />
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
      </div>
    </form>
  );
}
