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
  SixDots,
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
import { CheckboxGroup } from "../checkbox-group";
import { Checkbox } from "../checkbox";
import { HelperText } from "../helper-text";
import { CheckboxSelector } from "../checkbox-selector";
import { ScrollArea, ScrollBar } from "../scroll-area";

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

export default function SettingsMyGoalMainPage() {
  const [selected, setSelected] = React.useState<string>();
  const [langState, setLangState] = React.useState<string>();
  return (
    <div className="relative min-h-screen bg-gray-50">
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
            <BreadcrumbLink href="/">My Goal</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </nav>
      <main className="pl-[294px] pt-[70px]">
        <div className="h-[580px] w-[664px] px-8 pt-8">
          <h1 className="text-base font-semibold text-gray-600">My Goal</h1>
          <p className="mt-1 w-[664px] text-sm text-gray-500">
            Euismod amet dolor sem phasellus viverra ac. Et cras enim cursus
            lobortis nec lorem dapibus proin. Lacus diam rhoncus blandit ipsum
            nibh morbi at gravida in.
          </p>
          <ScrollArea
            className="mt-6 h-[600px] w-[664px]"
            scrollBar={<ScrollBar className="w-4 p-1" />}
            type="scroll"
          >
            <div
              id="checkbox-parent-div"
              className=" h-[624px] w-[664px] overflow-y-hidden rounded-lg border border-gray-200 bg-white"
            >
              <div className="flex items-center space-x-4 p-4 hover:bg-gray-50">
                <div className="w-[664px]">
                  <CheckboxGroup className="grid">
                    <CheckboxSelector
                      size="md"
                      left={() => <SixDots />}
                      // Other styles work except border none
                      className="gap-x-3 border border-none pl-0 hover:border hover:border-none hover:bg-gray-50 hover:ring-0 focus:ring-0"
                    >
                      <Label size="sm" className="cursor-pointer">
                        Automate Business Processes
                      </Label>
                      <HelperText size="sm">
                        Streamline your business processes by automating
                        repetitive tasks and workflows.
                      </HelperText>
                    </CheckboxSelector>
                  </CheckboxGroup>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 hover:bg-gray-50">
                <div className="w-[664px]">
                  <CheckboxGroup className="grid">
                    <CheckboxSelector
                      size="md"
                      left={() => <SixDots />}
                      // Other styles work except border none
                      className="gap-x-3 border border-none pl-0 hover:border hover:border-none hover:bg-gray-50 hover:ring-0 focus:ring-0"
                    >
                      <Label size="sm" className="cursor-pointer">
                        Integrate Systems & Applications{" "}
                      </Label>
                      <HelperText size="sm">
                        Connect all your systems and applications in one place
                        for better efficiency.
                      </HelperText>
                    </CheckboxSelector>
                  </CheckboxGroup>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 hover:bg-gray-50">
                <div className="w-[664px]">
                  <CheckboxGroup className="grid">
                    <CheckboxSelector
                      size="md"
                      left={() => <SixDots />}
                      // Other styles work except border none
                      className="gap-x-3 border border-none pl-0 hover:border hover:border-none hover:bg-gray-50 hover:ring-0 focus:ring-0"
                    >
                      <Label size="sm" className="cursor-pointer">
                        Enhance Collaboration & Communication{" "}
                      </Label>
                      <HelperText size="sm">
                        Improve collaboration and communication between teams by
                        integrating all your systems and applications.
                      </HelperText>
                    </CheckboxSelector>
                  </CheckboxGroup>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 hover:bg-gray-50">
                <div className="w-[664px]">
                  <CheckboxGroup className="grid">
                    <CheckboxSelector
                      size="md"
                      left={() => <SixDots />}
                      // Other styles work except border none
                      className="gap-x-3 border border-none pl-0 hover:border hover:border-none hover:bg-gray-50 hover:ring-0 focus:ring-0"
                    >
                      <Label size="sm" className="cursor-pointer">
                        Reduce IT costs{" "}
                      </Label>
                      <HelperText size="sm">
                        Save money on IT infrastructure by consolidating all
                        your systems and applications into one platform.
                      </HelperText>
                    </CheckboxSelector>
                  </CheckboxGroup>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 hover:bg-gray-50">
                <div className="w-[664px]">
                  <CheckboxGroup className="grid">
                    <CheckboxSelector
                      size="md"
                      left={() => <SixDots />}
                      // Other styles work except border none
                      className="gap-x-3 border border-none pl-0 hover:border hover:border-none hover:bg-gray-50 hover:ring-0 focus:ring-0"
                    >
                      <Label size="sm" className="cursor-pointer">
                        Improve Customer Experience{" "}
                      </Label>
                      <HelperText size="sm">
                        Deliver a better customer experience by integrating all
                        your customer-facing systems and applications.
                      </HelperText>
                    </CheckboxSelector>
                  </CheckboxGroup>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 hover:bg-gray-50">
                <div className="w-[664px]">
                  <CheckboxGroup className="grid">
                    <CheckboxSelector
                      size="md"
                      left={() => <SixDots />}
                      // Other styles work except border none
                      className="gap-x-3 border border-none pl-0 hover:border hover:border-none hover:bg-gray-50 hover:ring-0 focus:ring-0"
                    >
                      <Label size="sm" className="cursor-pointer">
                        Increase Agility & Scalability{" "}
                      </Label>
                      <HelperText size="sm">
                        Grow your business faster with the ability to quickly
                        and easily add new systems and applications.
                      </HelperText>
                    </CheckboxSelector>
                  </CheckboxGroup>
                </div>
              </div>
            </div>
          </ScrollArea>
        </div>
      </main>
    </div>
  );
}
