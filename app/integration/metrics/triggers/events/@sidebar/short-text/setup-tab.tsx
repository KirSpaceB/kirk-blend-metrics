import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import {
  HelpCircle,
  ShortText,
  Number,
  Email,
  Password,
  Website,
  Phone,
  PlayCircle,
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
} from "@/components/ui";
import { useEnhancedWatch } from "@/lib/hooks";
import { pick } from "@/lib/utils";
import { Kind, SettingMachineContext } from "@/machines";

const schema = z.object({
  label: z.string().max(30),
  hasCharacterLimit: z.boolean(),
  optional: z.boolean(),
  placeholder: z.string().max(30),
  hint: z.string().max(30),
  characterLimit: z.number().optional(),
});

type FormValues = z.infer<typeof schema>;

const defaultValues: FormValues = {
  label: "",
  hasCharacterLimit: false,
  optional: false,
  placeholder: "",
  hint: "",
};

interface Option {
  icon: React.ReactNode;
  label: string;
  value:
    | "short-text"
    | "numbers"
    | "email"
    | "password"
    | "website"
    | "phone-number";
}

type Options = Option[];

const options: Options = [
  {
    icon: <ShortText className="h-6 w-6 text-gray-500" />,
    label: "Short Text",
    value: "short-text",
  },
  {
    icon: <Number className="h-6 w-6 text-gray-500" />,
    label: "Numbers",
    value: "numbers",
  },
  {
    icon: <Email className="h-6 w-6 text-gray-500" />,
    label: "Email",
    value: "email",
  },
  {
    icon: <Password className="h-6 w-6 text-gray-500" />,
    label: "Password",
    value: "password",
  },
  {
    icon: <Website className="h-6 w-6 text-gray-500" />,
    label: "Website",
    value: "website",
  },
  {
    icon: <Phone className="h-6 w-6 text-gray-500" />,
    label: "Phone Number",
    value: "phone-number",
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
    "hasCharacterLimit",
    "optional",
    "placeholder",
    "hint",
    "characterLimit"
  );

  const { control, register, handleSubmit, getValues } = useForm({
    resolver: zodResolver(schema),
    values: { ...defaultValues, ...values },
  });

  const { hasCharacterLimit } = useEnhancedWatch({
    control,
    onChange: (variables) =>
      send({
        type: "UPDATE",
        setting: getValues(),
      }),
  });

  const handleListboxChange = (selected: Option) => {
    switch (selected.value) {
      case "numbers":
        send({
          type: "TO-NUMBERS",
          newKind: "numbers",
        });
        break;

      case "email":
        send({
          type: "TO-EMAIL",
          newKind: "email",
        });
        break;

      case "password":
        send({
          type: "TO-PASSWORD",
          newKind: "password",
        });
        break;

      case "website":
        send({
          type: "TO-WEBSITE",
          newKind: "website",
        });
        break;

      case "phone-number":
        send({
          type: "TO-PHONE-NUMBER",
          newKind: "phone-number",
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

        <div className="space-y-1.5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-x-2">
              <Label
                className="text-gray-700"
                size="sm"
                htmlFor="set-char-limit"
              >
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

          {hasCharacterLimit && (
            <>
              <Label className="text-gray-500" size="sm">
                Limit should be the same as source field.
              </Label>
              <Input
                {...register("characterLimit", { valueAsNumber: true })}
                placeholder="Enter Max Characters Limit"
                type="number"
              />
              <span className="flex items-center gap-x-2 text-sm font-semibold text-primary-500">
                <PlayCircle className="h-[15px] w-[15px]" /> Show me how
              </span>
            </>
          )}
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
