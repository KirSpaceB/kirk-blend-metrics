import {
  HelperText,
  Label,
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from "@/components/ui";

export default function SetupTab() {
  return (
    <form className="space-y-6 p-5">
      <div className="space-y-1.5">
        <Label className="text-gray-700" size="sm" htmlFor="dataset">
          Data Set
        </Label>
        <HelperText size="sm">Where do you want to send your data?</HelperText>
        <Listbox>
          <ListboxButton placeholder="Select Data Set" />
          <ListboxOptions>
            <ListboxOption value="Data Set 1">Data Set 1</ListboxOption>
          </ListboxOptions>
        </Listbox>
      </div>

      <div className="space-y-1.5">
        <Label className="text-gray-700" size="sm" htmlFor="category">
          Data Set 1
        </Label>
        <HelperText size="sm">
          Select the category you want to send data to
        </HelperText>
        <Listbox>
          <ListboxButton placeholder="Select Category" />
          <ListboxOptions>
            <ListboxOption value="Tags">Tags</ListboxOption>
          </ListboxOptions>
        </Listbox>
      </div>

      <div className="space-y-1.5">
        <Label className="text-gray-700" size="sm" htmlFor="metric">
          Metric
        </Label>
        <HelperText size="sm">
          Select the metric you want to send data to
        </HelperText>
        <Listbox>
          <ListboxButton placeholder="Select Metrics" />
          <ListboxOptions>
            <ListboxOption value="Name">Name</ListboxOption>
          </ListboxOptions>
        </Listbox>
      </div>
    </form>
  );
}
