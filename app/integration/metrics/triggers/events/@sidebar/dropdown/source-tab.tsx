"use client";

import * as React from "react";
import { SubmitHandler, useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  ArrowDownAZ,
  ChevronDown,
  GripVertical,
  Search,
  X,
} from "@/components/icons";
import {
  Autocomplete,
  AutocompleteButton,
  AutocompleteInput,
  AutocompleteOption,
  AutocompleteOptions,
  AutocompleteRoot,
  AutocompleteTrigger,
  Badge,
  HelperText,
  Label,
  Rearrange,
  RearrangeButton,
  RearrangeGroup,
  RearrangeItem,
  RearrangeTrack,
  ScaleOutIn,
  inputVariants,
} from "@/components/ui";
import { cn, isNotEmpty } from "@/lib/utils";
import { METRICS_OPTIONS } from "@/lib/constants";
import { SettingMachineContext } from "@/machines";
import { useEnhancedWatch } from "@/lib/hooks";

const schema = z.object({
  dataset: z.string(),
  category: z.string(),
  metrics: z.array(z.string()),
  sort: z.enum(["asc", "desc"]),
});

type FormValues = z.infer<typeof schema>;

const defaultValue: FormValues = {
  dataset: "",
  category: "",
  sort: "asc",
  metrics: [],
};

const SourceTab = () => {
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
  const { dropdown } = setting || {};
  const { source: values } = dropdown || {};

  const { handleSubmit, register, control, setValue, getValues } =
    useForm<FormValues>({
      shouldUnregister: true,
      values: values || defaultValue,
      resolver: zodResolver(schema),
    });

  const { category, dataset } = useEnhancedWatch({
    control,
    onChange: () =>
      send({
        type: "UPDATE",
        value: {
          kind: "dropdown",
          setting: {
            source: getValues(),
          },
        },
      }),
  });

  const metrics = getValues("metrics");
  const isMetricsNotEmpty = isNotEmpty(metrics);

  const onSubmit: SubmitHandler<FormValues> = (variables) => {};

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="pb-8">
      <div className="space-y-5 p-5">
        <div className="space-y-1.5">
          <Label className="text-gray-700" htmlFor="data-set" size="sm">
            Data Set
          </Label>
          <HelperText size="sm">
            Where do you want your data to come from?
          </HelperText>
          <select
            className={inputVariants()}
            id="data-set"
            {...register("dataset")}
          >
            <option value="">Select Data Set</option>
            <option value="Data Set 1">Data Set 1</option>
          </select>
        </div>

        {dataset && (
          <div className="space-y-1.5">
            <Label className="text-gray-700" htmlFor="category" size="sm">
              Category
            </Label>
            <HelperText size="sm">
              Select the category of data you want to see in the search field.
            </HelperText>
            <select
              className={inputVariants()}
              id="category"
              {...register("category")}
            >
              <option value="">Select Category</option>
              <option value="tags">Tags</option>
            </select>
          </div>
        )}

        {category && (
          <>
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <Label className="text-gray-700" htmlFor="metrics" size="sm">
                  Metrics
                </Label>
                <HelperText className="leading-5" size="sm">
                  0/10
                </HelperText>
              </div>
              <HelperText size="sm">
                Where do you want search result to come from?
              </HelperText>

              <Controller
                control={control}
                name="metrics"
                render={({ field: { value, onChange, name } }) => (
                  <Combobox
                    value={value}
                    onChange={onChange}
                    name={name}
                    options={METRICS_OPTIONS}
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
        <div className="space-y-1.5 border-y border-gray-200 p-5">
          <Label className="text-gray-700" htmlFor="sort-by" size="sm">
            Sort by <span className="text-gray-400">(optional)</span>
          </Label>
          <HelperText size="sm">
            How do you want to sort your list of items?
          </HelperText>
          <div className="relative">
            <div className="absolute inset-y-0 left-3.5 inline-flex items-center justify-center">
              <ArrowDownAZ className="flex-none text-gray-700" />
            </div>
            <select
              className={cn(inputVariants({ className: "pl-[46px]" }))}
              id="sort-by"
              {...register("sort")}
            >
              <option value="asc">Default - A to Z</option>
              <option value="desc">Descending - Z to A</option>
            </select>
          </div>
        </div>
      )}
    </form>
  );
};

const Combobox = ({
  onChange,
  value,
  name,
  options,
}: {
  onChange: (...args: any[]) => any;
  value: string[];
  name: string;
  options: string[];
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
      )}
    </AutocompleteRoot>
  );
};

export default SourceTab;
