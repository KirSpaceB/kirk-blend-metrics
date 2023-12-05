import { Input } from "../input";

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectItem,
} from "../select";

import { Label } from "../label";

import React from "react";

import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "../listbox";
import AccountInfoSettingsProfile from "./account-info-settings-profile";
import {
  Dialog,
} from "../dialog";

const people = [
  { id: 0, name: "Christopher Torres" },
  { id: 1, name: "Christopher Torres" },
  { id: 2, name: "Christopher Torres" },
  { id: 3, name: "Christopher Torres" },
  { id: 4, name: "Christopher Torres" },
  { id: 5, name: "Christopher Torres" },
];
const languages = [
  { id: 0, langname: "Language1" },
  { id: 1, langname: "Language2" },
  { id: 2, langname: "Language3" },
  { id: 3, langname: "Language4" },
  { id: 4, langname: "Language5" },
];
import { useMachine } from "@xstate/react";
import { machine } from "@/machines/account-info-settings-page-machine";
import RemovePhotoDialogSection from "./accountinfosettingsprofileui/remove-photo-dialog-section";
import ChangeProfileImageDialog from "./accountinfosettingsprofileui/change-profile-image-diaglog";
import CustomAvatarEditor from "./accountinfosettingsprofileui/avatar-editor/avatar-editor";
import AvatarEditorDialog from "./accountinfosettingsprofileui/avatar-editor-dialog";

//context
import { useContext } from "react";
import { AvatarEditorImageContextProvider } from "./accountinfosettingsprofileui/avatar-editor/avatar-editor-image-context";
import { AvatarEditorImageContext } from "./accountinfosettingsprofileui/avatar-editor/avatar-editor-image-context";
export default function PersonalInfoInterface() {
  const [selected, setSelected] = React.useState<string>();
  const [langState, setLangState] = React.useState<string>();
  const [state, send] = useMachine(machine);
  const isDialogOpen = state.matches('removePhoto');
  const isChangeProfileDialogOpen = state.matches('addProfileImage')
  const isAvatarDialogOpen = state.matches('customAvatarEditor');
  const {imageVal, setImageVal} = useContext(AvatarEditorImageContext);
  return (
    <AvatarEditorImageContextProvider>
      <main className="pl-[278px] pt-[54px]">
        <div className="h-[580px] w-[664px] px-8 pt-8">
          <h1 className="text-base font-semibold text-gray-600">Company Info</h1>
          <p className="mt-1 text-sm text-gray-500">
            Euismod amet dolor sem phasellus viverra ac. Et cras enim cursus
            lobortis nec lorem dapibus proin. Lacus diam rhoncus blandit ipsum
            nibh morbi at gravida in.
          </p>
          <div className="mt-6">
            <Dialog>
              <div className="h-full w-full">
                {state.matches('profile') && <AccountInfoSettingsProfile send={send} />}
                {state.matches('removePhoto') && <RemovePhotoDialogSection openDialog={isDialogOpen} send={send}/>}
                {state.matches('addProfileImage') && <ChangeProfileImageDialog openDialog={isChangeProfileDialogOpen} send={send}/>}
                {state.matches('customAvatarEditor') && <AvatarEditorDialog openDialog={isAvatarDialogOpen} send={send}/>}
              </div>
            </Dialog>
          </div>
          <div id="Grid Parent" className="mt-8 h-[580px] w-[664px]">
            <div id="Grid" className="grid grid-cols-2 gap-6">
              {/* Grid Col 1 */}
              <div className="space-y-1.5">
                <Label htmlFor="email" size="sm">
                  First Name
                </Label>
                <Input id="email" placeholder="Chris Torres" type="email" />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="email" size="sm">
                  Last Name
                </Label>
                <Input id="email" placeholder="Torres" type="email" />
              </div>
              {/* Grid col 2 */}
              <div className="space-y-1.5">
                <div className="space-y-1.5">
                  <Label htmlFor="email" size="sm">
                    Email
                  </Label>
                  <Input
                    id="email"
                    placeholder="chris@marketeqdigital.com"
                    type="email"
                  />
                </div>
              </div>
              <div className=" w-auto ">
                <div className="space-y-1.5">
                  <Label htmlFor="tel" size="sm">
                    Phone number
                  </Label>
                  <div className="flex items-center">
                    <Select defaultValue="US">
                      <SelectTrigger>
                        <SelectValue placeholder="Select a country" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="US">US</SelectItem>
                          <SelectItem value="BE">BE</SelectItem>
                          <SelectItem value="RS">RS</SelectItem>
                          <SelectItem value="TR">TR</SelectItem>
                          <SelectItem value="LV">LV</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                    <Input
                      className="rounded-l-none"
                      id="tel"
                      placeholder="+1 (555) 000-0000"
                      type="tel"
                    />
                  </div>
                </div>
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="email" size="sm">
                  What team do you work on?
                </Label>
                <Listbox value={selected} onChange={setSelected}>
                  <ListboxButton placeholder="Select Team" />
                  <ListboxOptions className="z-10">
                    {people.map((person) => (
                      <ListboxOption key={person.name} value={person.name}>
                        {person.name}
                      </ListboxOption>
                    ))}
                  </ListboxOptions>
                </Listbox>
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="email" size="sm">
                  Job Title
                </Label>
                <Input id="email" placeholder="President" type="email" />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="email" size="sm">
                  Language
                </Label>
                <Listbox value={selected} onChange={setSelected}>
                  <ListboxButton placeholder="English" />
                  <ListboxOptions className="z-10">
                    {people.map((person) => (
                      <ListboxOption key={person.name} value={person.name}>
                        {person.name}
                      </ListboxOption>
                    ))}
                  </ListboxOptions>
                </Listbox>
              </div>
            </div>
          </div>
        </div>
      </main>
    </AvatarEditorImageContextProvider>
  );
}
