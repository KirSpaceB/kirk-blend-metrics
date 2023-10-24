import { Avatar, AvatarImage, AvatarFallback } from "../avatar";
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
import { Badge } from "../badge";
import { AvatarPencil, ImageIcon, Trash } from "@/components/icons";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "../listbox";
import AccountInfoSettingsProfile from "./account-info-settings-profile";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "../dialog";
import { AcmeLogo } from "../settings-security/acme-logo";
import { Button } from "../button";
import { InputGroup } from "../input-group";
import { InputLeftAddon } from "../input-addon";

const people = [
  { id: 0, name: "Kirk" },
  { id: 1, name: "Kirk1" },
  { id: 2, name: "Kirk2" },
  { id: 3, name: "Kirk3" },
  { id: 4, name: "Kirk4" },
  { id: 5, name: "Kirk5" },
];
const languages = [
  { id: 0, langname: "Language1" },
  { id: 1, langname: "Language2" },
  { id: 2, langname: "Language3" },
  { id: 3, langname: "Language4" },
  { id: 4, langname: "Language5" },
];
export default function PersonalInfoInterface() {
  const [selected, setSelected] = React.useState<string>();
  const [langState, setLangState] = React.useState<string>();

  return (
    <main className="pl-[294px] pt-[70px]">
      <div className="h-[580px] w-[664px] px-8 pt-8">
        <h1 className="text-base font-semibold text-gray-600">Company Info</h1>
        <p className="mt-1 text-sm text-gray-500">
          Euismod amet dolor sem phasellus viverra ac. Et cras enim cursus
          lobortis nec lorem dapibus proin. Lacus diam rhoncus blandit ipsum
          nibh morbi at gravida in.
        </p>
        <div className="mt-6">
          <Dialog>
            <DialogTrigger asChild className="h-full w-full">
              {/* Investigate the margin top issue with this component specifically. */}
              {/* This is where profile picture is suppose to be */}
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <div className="flex flex-col items-center justify-center gap-5">
                  <h1 className="text-[18px] font-semibold">
                    Change Profile Image
                  </h1>
                  <Avatar className="h-[160px] w-[160px]">
                    <AvatarImage alt="Man" />
                    <AvatarFallback>
                      <div className="text-[60px] font-medium text-[#D0D5DD] text-opacity-50">
                        CT
                      </div>
                    </AvatarFallback>
                  </Avatar>
                </div>
              </DialogHeader>

              <DialogFooter className="mt-8">
                <DialogClose asChild>
                  <Button variant="light" visual="error" leftIcon={<Trash />}>
                    RemovePhoto
                  </Button>
                </DialogClose>

                <DialogClose asChild>
                  <Button
                    variant="outlined"
                    visual="gray"
                    leftIcon={<ImageIcon width={17} height={17} />}
                  >
                    Change Profile Image
                  </Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
        <div id="Grid Parent" className="mt-8 h-[580px] w-[664px]">
          <div id="Grid" className="grid grid-cols-2 gap-6">
            {/* Grid Col 1 */}
            <div className="space-y-1.5">
              <Label htmlFor="email" size="sm">
                Company Name
              </Label>
              <Input
                id="email"
                placeholder="e.g. Acme Analytics"
                type="email"
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="email" size="sm">
                Company Website
              </Label>
              <InputGroup>
                <InputLeftAddon>https://</InputLeftAddon>
                <Input placeholder="www.yourwebsite.com" type="email" />
              </InputGroup>
            </div>
            {/* Grid col 2 */}
            <div className="space-y-1.5">
              <Label htmlFor="email" size="sm">
                Industry
              </Label>
              <Listbox value={selected} onChange={setSelected}>
                <ListboxButton placeholder="Select Type" />
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
                Business Type
              </Label>
              <Listbox value={selected} onChange={setSelected}>
                <ListboxButton placeholder="Select Business" />
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
                Company Size
              </Label>
              <Listbox value={selected} onChange={setSelected}>
                <ListboxButton placeholder="1 - 10" />
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
                Annual Revenue
              </Label>
              <Listbox value={selected} onChange={setSelected}>
                <ListboxButton placeholder="Select revenue" />
                <ListboxOptions className="z-10">
                  {people.map((person) => (
                    <ListboxOption key={person.name} value={person.name}>
                      {person.name}
                    </ListboxOption>
                  ))}
                </ListboxOptions>
              </Listbox>
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
                Time Zone?
              </Label>
              <Listbox value={selected} onChange={setSelected}>
                <ListboxButton placeholder="(GMT-05:00) America/New_York" />
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
  );
}
