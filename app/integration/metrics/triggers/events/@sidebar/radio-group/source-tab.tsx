import * as React from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import {
  HelperText,
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
  ListboxContent,
  ListboxLabel,
  AutocompleteRoot,
  Autocomplete,
  AutocompleteTrigger,
  AutocompleteInput,
  AutocompleteButton,
  ScaleOutIn,
  AutocompleteOptions,
  AutocompleteOption,
  AutocompleteLabel,
  Rearrange,
  RearrangeTrack,
  RearrangeButton,
  RearrangeGroup,
  RearrangeItem,
  Badge,
} from "@/components/ui";
import { useEnhancedWatch } from "@/lib/hooks";
import { SettingMachineContext } from "@/machines";
import { isNotEmpty, pick } from "@/lib/utils";
import { RemainCharacters } from "@/components/remain-characters";
import {
  ArrowDownAZ,
  ChevronDown,
  GripVertical,
  Search,
  X,
} from "@/components/icons";
import { OPTIONS } from "@/lib/constants";

const schema = z.object({
  dataset: z.string(),
  category: z.string(),
  metrics: z.array(z.string()),
  sort: z.enum(["asc", "desc"]),
});

type FormValues = z.infer<typeof schema>;

const defaultValues: FormValues = {
  dataset: "",
  category: "",
  metrics: [],
  sort: "asc",
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
  const values = pick(setting, "dataset", "category", "metrics");

  const { control, getValues, handleSubmit, setValue } = useForm<FormValues>({
    resolver: zodResolver(schema),
    values: { ...defaultValues, ...values },
  });

  useEnhancedWatch({
    control,
    onChange: () =>
      send({
        type: "UPDATE",
        setting: getValues(),
      }),
  });

  const onSubmit: SubmitHandler<FormValues> = (variables) => {};

  const { dataset, category, metrics } = getValues();
  const isMetricsNotEmpty = isNotEmpty(metrics);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="pb-8">
      <div className="space-y-6 p-5">
        <Controller
          control={control}
          name="dataset"
          render={({ field: { value, onChange } }) => (
            <Listbox className="space-y-1.5" value={value} onChange={onChange}>
              <ListboxLabel className="text-gray-700" size="sm">
                Data Set
              </ListboxLabel>

              <HelperText size="sm">
                Where do you want to send your data?
              </HelperText>

              <ListboxContent>
                <ListboxButton placeholder="Select Data Set" />
                <ListboxOptions>
                  <ListboxOption value="Data Set 1">Data Set 1</ListboxOption>
                </ListboxOptions>
              </ListboxContent>
            </Listbox>
          )}
        />

        {dataset && (
          <Controller
            control={control}
            name="category"
            render={({ field: { value, onChange } }) => (
              <Listbox
                className="space-y-1.5"
                value={value}
                onChange={onChange}
              >
                <ListboxLabel className="text-gray-700" size="sm">
                  Data Set 1
                </ListboxLabel>

                <HelperText size="sm">
                  Select the category you want to send data to
                </HelperText>

                <ListboxContent>
                  <ListboxButton placeholder="Select Category" />
                  <ListboxOptions>
                    <ListboxOption value="Tags">Tags</ListboxOption>
                  </ListboxOptions>
                </ListboxContent>
              </Listbox>
            )}
          />
        )}

        {category && (
          <>
            <div className="space-y-1.5">
              <Controller
                control={control}
                name="metrics"
                render={({ field: { value, onChange, name } }) => (
                  <Combobox
                    header={() => (
                      <>
                        <div className="flex items-center justify-between">
                          <AutocompleteLabel
                            className="text-gray-700"
                            size="sm"
                          >
                            Metrics
                          </AutocompleteLabel>

                          <HelperText className="leading-5" size="sm">
                            <RemainCharacters
                              control={control}
                              name="metrics"
                              max={10}
                            />
                          </HelperText>
                        </div>

                        <HelperText size="sm">
                          Where do you want search result to come from?
                        </HelperText>
                      </>
                    )}
                    value={value}
                    onChange={onChange}
                    name={name}
                    options={OPTIONS}
                  />
                )}
              />
            </div>

            <div className="mt-4 space-y-3">
              <Rearrange
                values={metrics}
                track={(value) => <RearrangeTrack>{value}</RearrangeTrack>}
                button={
                  <RearrangeButton className="mt-4">Clear All</RearrangeButton>
                }
                onValueChange={(values) => setValue("metrics", values)}
              >
                {({ value, patch, remove }) => (
                  <RearrangeGroup values={value} onRearrange={patch}>
                    {value.map((item, index) => (
                      <React.Fragment key={item}>
                        <RearrangeItem value={item}>
                          {(fn) => (
                            <Badge className="select-none" visual="primary">
                              <GripVertical
                                className="cursor-pointer opacity-60"
                                onPointerDown={fn}
                              />
                              {item}
                              <button
                                className="inline-flex flex-none cursor-pointer opacity-60 transition-opacity duration-300 ease-out hover:opacity-100 focus-visible:outline-none"
                                onClick={() => remove(index)}
                              >
                                <X />
                              </button>
                            </Badge>
                          )}
                        </RearrangeItem>
                        <span className="inline-block h-1 w-1 flex-none rounded-full bg-gray-400 last-of-type:hidden" />
                      </React.Fragment>
                    ))}
                  </RearrangeGroup>
                )}
              </Rearrange>
            </div>
          </>
        )}
      </div>

      {isMetricsNotEmpty && (
        <div className="border-y border-gray-200 p-5">
          <Controller
            control={control}
            name="sort"
            render={({ field: { onChange, value } }) => (
              <Listbox
                className="space-y-1.5"
                value={value}
                onChange={onChange}
              >
                <ListboxLabel className="text-gray-700" size="sm">
                  Sort by <span className="text-gray-400">(optional)</span>
                </ListboxLabel>

                <HelperText size="sm">
                  How do you want to sort your list of items?
                </HelperText>

                <ListboxContent>
                  <div className="absolute inset-y-0 left-3.5 inline-flex items-center justify-center">
                    <ArrowDownAZ className="flex-none text-gray-700" />
                  </div>
                  <ListboxButton className="pl-[46px]" />

                  <ListboxOptions>
                    <ListboxOption value="asc">Default - A to Z</ListboxOption>
                    <ListboxOption value="desc">
                      Descending - Z to A
                    </ListboxOption>
                  </ListboxOptions>
                </ListboxContent>
              </Listbox>
            )}
          />
        </div>
      )}
    </form>
  );
}

const Combobox = ({
  onChange,
  value,
  name,
  options,
  header,
}: {
  onChange: (...args: any[]) => any;
  value: string[];
  name: string;
  options: string[];
  header?: ({ open }: { open: boolean }) => React.ReactNode;
}) => {
  const [query, setQuery] = React.useState("");

  const filteredOptions =
    query === ""
      ? options
      : options.filter((option) => {
          return option.toLowerCase().includes(query.toLowerCase());
        });

  const resetQuery = () => setQuery("");

  const onAutocompleteInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => setQuery(event.target.value);

  const props = { multiple: true } as unknown as { multiple?: false };

  return (
    <AutocompleteRoot value={value} onChange={onChange} name={name} {...props}>
      {({ open }) => (
        <>
          {header?.({ open })}
          <Autocomplete className="w-full">
            <AutocompleteTrigger>
              <AutocompleteInput
                as={React.Fragment}
                onChange={onAutocompleteInputChange}
              >
                <input placeholder={open ? "Find metrics" : "Select Metrics"} />
              </AutocompleteInput>
              <AutocompleteButton>
                {({ open }) =>
                  open ? <Search /> : <ChevronDown className="h-5 w-5" />
                }
              </AutocompleteButton>
            </AutocompleteTrigger>
            <ScaleOutIn afterLeave={resetQuery}>
              <AutocompleteOptions>
                {filteredOptions.map((option) => (
                  <AutocompleteOption key={option} value={option}>
                    {option}
                  </AutocompleteOption>
                ))}
              </AutocompleteOptions>
            </ScaleOutIn>
          </Autocomplete>
        </>
      )}
    </AutocompleteRoot>
  );
};
