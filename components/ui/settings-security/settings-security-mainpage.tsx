import React from "react";
import { Button } from "../button";
import { Plus2 } from "@/components/icons/plus2";
import {
  AvatarPencil,
  BarChartSquare,
  Belling,
  ChevronDown,
  CompanyInfo,
  HelpCircle,
  Home,
  ImageIcon,
  LifeBouy,
  LogOut,
  Logo,
  PersonalInfo,
  Settings,
  ShieldCharged,
  ThreeLayers,
  Trash,
  User,
  UserPlus,
  Users,
} from "@/components/icons";

import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "../breadcrumb";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../tooltip";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../avatar";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "../dialog";
import { Label } from "../label";
import { Input } from "../input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../select";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "../listbox";
import { InputLeftAddon } from "../input-addon";
import { InputGroup } from "../input-group";
import SettingsAccountInnerSidebar from "../settings-account-sidebar/settings-account-inner-sidebar";
import { AcmeLogo } from "./acme-logo";

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

export default function SettingSecurityMainPage() {
  const [selected, setSelected] = React.useState<string>();
  const [langState, setLangState] = React.useState<string>();
  return (
    <div
      id="SettingSecurityMainPage"
      className="relative min-h-screen bg-gray-50"
    >
      <nav className="absolute inset-y-0 left-0 z-[25] flex w-[70px] flex-col items-center border-r border-gray-200 bg-white">
        <div className="flex h-[70px] flex-none items-center justify-center self-stretch border-b border-gray-200">
          <Link
            aria-label="Logo"
            className="text-primary-500 focus:outline-none"
            href="/"
          >
            <Logo />
          </Link>
        </div>
        <div className="flex flex-auto flex-col items-center justify-between gap-y-5 self-stretch">
          <div className="flex flex-col gap-y-5 pt-5">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger className="inline-flex h-10 w-10 items-center justify-center rounded-[4px] text-gray-500 transition-colors hover:bg-primary-50 hover:text-primary-500 focus:outline-none">
                  <Home />
                </TooltipTrigger>
                <TooltipContent className="font-semibold" side="right">
                  Home
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger className="inline-flex h-10 w-10 items-center justify-center rounded-[4px] text-gray-500 transition-colors hover:bg-primary-50 hover:text-primary-500 focus:outline-none">
                  <BarChartSquare />
                </TooltipTrigger>
                <TooltipContent className="font-semibold" side="right">
                  Stats
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger className="inline-flex h-10 w-10 items-center justify-center rounded-[4px] text-gray-500 transition-colors hover:bg-primary-50 hover:text-primary-500 focus:outline-none">
                  <ThreeLayers />
                </TooltipTrigger>
                <TooltipContent className="font-semibold" side="right">
                  Projects
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger className="inline-flex h-10 w-10 items-center justify-center rounded-[4px] text-gray-500 transition-colors hover:bg-primary-50 hover:text-primary-500 focus:outline-none">
                  <Users />
                </TooltipTrigger>
                <TooltipContent className="font-semibold" side="right">
                  Team
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <div className="flex flex-col gap-y-5">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger className="inline-flex h-10 w-10 items-center justify-center rounded-[4px] text-gray-500 transition-colors hover:bg-primary-50 hover:text-primary-500 focus:outline-none">
                  <LifeBouy />
                </TooltipTrigger>
                <TooltipContent className="font-semibold" side="right">
                  Support
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger className="inline-flex h-10 w-10 items-center justify-center rounded-[4px] text-gray-500 transition-colors hover:bg-primary-50 hover:text-primary-500 focus:outline-none">
                  <Settings className="h-[18px] w-[18px]" />
                </TooltipTrigger>
                <TooltipContent className="font-semibold" side="right">
                  Settings
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Avatar>
                  <AvatarImage alt="Man" src="/man.jpg" />
                  <AvatarFallback>M</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent side="right">
                <DropdownMenuLabel className="font-normal" size="md">
                  <div className="inline-flex items-center gap-x-3">
                    <Avatar size="md">
                      <AvatarImage alt="Man" src="/man.jpg" />
                      <AvatarFallback>M</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col">
                      <span className="text-sm font-semibold text-gray-700">
                        Christopher Torres
                      </span>
                      <span className="text-sm text-gray-500">
                        chris@blendmetrics.com
                      </span>
                    </div>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuItem>
                  <User />
                  View Profile
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings />
                  Settings
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <UserPlus />
                  Invite Team members
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Belling />
                  Belling
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <HelpCircle />
                  Support
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LogOut />
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </nav>
      {/* Setting Security Nav basically a <nav element/> */}
      <SettingsAccountInnerSidebar />

      <nav className="absolute left-[70px] right-0 top-0 z-20 flex h-[70px] items-center justify-between border-b border-gray-200 bg-white pl-[25px] pr-[17px]">
        <Breadcrumb spacing="0.5rem">
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Settings</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Account</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href="/">Company Info</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </nav>
      <main className="pl-[294px] pt-[70px]">
        <div className="h-[580px] w-[664px] px-8 pt-8">
          <h1 className="text-base font-semibold text-gray-600">
            Company Info
          </h1>
          <p className="mt-1 text-sm text-gray-500">
            Euismod amet dolor sem phasellus viverra ac. Et cras enim cursus
            lobortis nec lorem dapibus proin. Lacus diam rhoncus blandit ipsum
            nibh morbi at gravida in.
          </p>
          <div className="mt-6">
            <Dialog>
              <DialogTrigger asChild className="h-full w-full">
                <div>
                  <AcmeLogo className="h-[96px] w-[220px] cursor-pointer text-[#D0D5DD] transition-all duration-300 hover:text-gray-400" />
                  <AvatarPencil className="rounded-bl-nonebg-red-500 absolute left-[515px] top-[265px] h-[24px] w-[24px] cursor-pointer rounded-br-md rounded-tl-lg rounded-tr-none bg-white pb-0.5 pl-1 pr-0.5 pt-1" />
                </div>
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
    </div>
  );
}
