import { HelpCircle, ShortText } from "@/components/icons";
import {
  HelperText,
  Label,
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
  Input,
  Switch,
} from "@/components/ui";

export default function SetupTab() {
  return (
    <form>
      <div className="space-y-1.5 p-5">
        <Label className="text-gray-700" size="sm" htmlFor="field-type">
          Field Type
        </Label>
        <HelperText>Change your field to any of the similar fields</HelperText>
        <Listbox>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2">
              <ShortText className="h-6 w-6 text-gray-500" />
            </span>
            <ListboxButton className="pl-11" />
          </div>
          <ListboxOptions>
            <ListboxOption value="Short Text">Short Text</ListboxOption>
          </ListboxOptions>
        </Listbox>
      </div>

      <div className="space-y-5 border-t border-gray-200 p-5">
        <div className="space-y-1.5">
          <Label className="text-gray-700" size="sm" htmlFor="field-label">
            Field Label
          </Label>

          <div className="flex items-center justify-between">
            <HelperText size="sm">Enter a user friendly name.</HelperText>
            <HelperText className="leading-5">0/30</HelperText>
          </div>

          <Input />
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-x-2">
            <Label className="text-gray-700" size="sm">
              Set Character Limit
            </Label>
            <HelpCircle className="text-gray-400" />
          </div>

          <Switch />
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-x-2">
            <Label className="text-gray-700" size="sm">
              Optional Field
            </Label>
            <HelpCircle className="text-gray-400" />
          </div>

          <Switch />
        </div>
      </div>
    </form>
  );
}
