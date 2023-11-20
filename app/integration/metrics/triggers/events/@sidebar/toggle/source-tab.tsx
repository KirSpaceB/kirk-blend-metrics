import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

import {
  HelperText,
  Listbox,
  ListboxButton,
  ListboxContent,
  ListboxLabel,
  ListboxOption,
  ListboxOptions,
} from "@/components/ui";
import { useEnhancedWatch } from "@/lib/hooks";
import { SettingMachineContext } from "@/machines";
import { pick } from "@/lib/utils";

const schema = z.object({
  dataset: z.string(),
  category: z.string(),
  metric: z.string(),
});

type FormValues = z.infer<typeof schema>;

const defaultValues: FormValues = {
  dataset: "",
  category: "",
  metric: "",
};

export default function SourceTab() {
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
  const values = pick(setting, "dataset", "category", "metric");

  const { handleSubmit, control, getValues } = useForm<FormValues>({
    resolver: zodResolver(schema),
    values: { ...defaultValues, ...values },
  });

  const { dataset, category } = useEnhancedWatch({
    control,
    onChange: () =>
      send({
        type: "UPDATE",
        setting: getValues(),
      }),
  });

  const onSubmit: SubmitHandler<FormValues> = (variables) => {};

  return (
    <form className="space-y-6 p-5" onSubmit={handleSubmit(onSubmit)}>
      <Controller
        control={control}
        name="dataset"
        render={({ field: { value, onChange } }) => (
          <Listbox className="space-y-1.5" value={value} onChange={onChange}>
            <ListboxLabel className="text-gray-700" size="sm">
              Data Set
            </ListboxLabel>

            <HelperText size="sm">
              Where do you want your data to come from?
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
            <Listbox className="space-y-1.5" value={value} onChange={onChange}>
              <ListboxLabel className="text-gray-700" size="sm">
                Category
              </ListboxLabel>

              <HelperText size="sm">
                Select the category of data you want to see in the toggle.
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
        <Controller
          control={control}
          name="metric"
          render={({ field: { value, onChange } }) => (
            <Listbox className="space-y-1.5" value={value} onChange={onChange}>
              <ListboxLabel className="text-gray-700" size="sm">
                Metric
              </ListboxLabel>

              <HelperText size="sm">
                Where do you want list of items to come from?
              </HelperText>

              <ListboxContent>
                <ListboxButton placeholder="Select Metrics" />
                <ListboxOptions>
                  <ListboxOption value="Name">Name</ListboxOption>
                </ListboxOptions>
              </ListboxContent>
            </Listbox>
          )}
        />
      )}
    </form>
  );
}
