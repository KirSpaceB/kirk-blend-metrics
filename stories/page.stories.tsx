import { Meta, StoryObj } from "@storybook/react";
import Link from "next/link";

import {
  ArrowLeft2,
  ArrowRightLeft,
  BarChartSquare,
  Belling,
  ChevronDown,
  Dot,
  Filter,
  FolderClosed,
  HelpCircle,
  History,
  Home,
  LifeBouy,
  LogOut,
  Logo,
  MoreHorizontal,
  Plus2,
  PlusCircle,
  Settings,
  ShieldCharged,
  ThreeLayers,
  User,
  UserPlus,
  Users,
  X2,
} from "@/components/icons";
import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarImage,
  Badge,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  DatePicker,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  ScrollArea,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui";

const meta: Meta = {
  title: "Page",
  argTypes: {
    sidebar: {
      control: "select",
      options: ["Divider Sidebar", "Sidebar", "Filled Links Sidebar"],
    },
    nav: {
      control: "select",
      options: [
        "Recent Workflow",
        "Invite Users",
        "New Workflow",
        "My Integration Nav",
        "Change Role Nav",
        "Add Custom Role",
        "Avatar Group Nav",
        "Test Workflow",
      ],
    },
  },
  args: {
    sidebar: "Filled Links Sidebar",
    nav: "Invite Users",
  },
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

export const Default: StoryObj<{ sidebar: string; nav: string }> = {
  render: (args) => (
    <div className="relative min-h-screen bg-gray-50">
      <nav className="absolute inset-y-0 left-0 z-[25] flex w-[70px] flex-col items-center border-r border-gray-200 bg-white">
        <div className="flex h-[70px] flex-none items-center justify-center self-stretch border-b border-gray-200">
          <Link
            className="text-primary-500 focus:outline-none"
            aria-label="Logo"
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
                  <AvatarImage src="/man.jpg" alt="Man" />
                  <AvatarFallback>M</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent side="right">
                <DropdownMenuLabel className="font-normal" size="md">
                  <div className="inline-flex items-center gap-x-3">
                    <Avatar size="md">
                      <AvatarImage src="/man.jpg" alt="Man" />
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

      {args.sidebar === "Filled Links Sidebar" && (
        <nav className="absolute inset-y-0 left-[70px] top-[70px] z-20 w-[224px] overflow-y-auto border-r border-gray-200 bg-gray-50 p-[15px] pb-0 scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-rounded-lg">
          <ul className="grid gap-2">
            <li>
              <Link
                className="flex h-10 cursor-pointer items-center gap-x-3 rounded-md px-3 py-2 text-sm font-semibold leading-6 text-gray-500 hover:bg-gray-100 focus:bg-primary-50 focus:text-primary-500 focus-visible:outline-none"
                href="#"
              >
                <ShieldCharged />
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                className="flex h-10 cursor-pointer items-center gap-x-3 rounded-md px-3 py-2 text-sm font-semibold leading-6 text-gray-500 hover:bg-gray-100 focus:bg-primary-50 focus:text-primary-500 focus-visible:outline-none"
                href="#"
              >
                <ShieldCharged />
                My Integrations
              </Link>
            </li>
          </ul>
        </nav>
      )}

      {args.sidebar === "Divider Sidebar" && (
        <nav className="absolute inset-y-0 left-[70px] top-[70px] z-20 w-[224px] border-r border-gray-200">
          <ScrollArea className="h-[calc(100%-69px)] overflow-y-auto px-[15px] pt-[15px]">
            <select className="w-full rounded-[5px] border-gray-300 text-sm leading-6 text-gray-black focus:border-primary-500 focus:ring-0">
              <option value="Select">Select</option>
            </select>

            <div className="mt-2 space-y-2 divide-y divide-gray-200">
              <div className="space-y-2">
                <Link
                  className="group flex items-center justify-between rounded-[5px] px-3 py-2 hover:bg-gray-100 focus:bg-primary-50 focus:text-primary-500 focus-visible:outline-none disabled:opacity-50"
                  href="/"
                >
                  <span className="flex items-center gap-x-3">
                    <FolderClosed className="h-[18px] w-[18px] text-gray-400 group-focus:text-primary-500" />
                    <span className="text-sm font-semibold leading-6 text-gray-500 group-focus:text-primary-500">
                      Item 1
                    </span>
                  </span>
                  <span className="text-[10px] font-bold leading-5 text-gray-400 group-focus:text-primary-500">
                    172
                  </span>
                </Link>

                <Link
                  className="group flex items-center justify-between rounded-[5px] px-3 py-2 hover:bg-gray-100 focus:bg-primary-50 focus:text-primary-500 focus-visible:outline-none disabled:opacity-50"
                  href="/"
                >
                  <span className="flex items-center gap-x-3">
                    <FolderClosed className="h-[18px] w-[18px] text-gray-400 group-focus:text-primary-500" />
                    <span className="text-sm font-semibold leading-6 text-gray-500 group-focus:text-primary-500">
                      Item 1
                    </span>
                  </span>
                  <span className="text-[10px] font-bold leading-5 text-gray-400 group-focus:text-primary-500">
                    172
                  </span>
                </Link>

                <Link
                  className="group flex items-center justify-between rounded-[5px] px-3 py-2 hover:bg-gray-100 focus:bg-primary-50 focus:text-primary-500 focus-visible:outline-none disabled:opacity-50"
                  href="/"
                >
                  <span className="flex items-center gap-x-3">
                    <FolderClosed className="h-[18px] w-[18px] text-gray-400 group-focus:text-primary-500" />
                    <span className="text-sm font-semibold leading-6 text-gray-500 group-focus:text-primary-500">
                      Item 1
                    </span>
                  </span>
                  <span className="text-[10px] font-bold leading-5 text-gray-400 group-focus:text-primary-500">
                    172
                  </span>
                </Link>

                <Link
                  className="group flex items-center justify-between rounded-[5px] px-3 py-2 hover:bg-gray-100 focus:bg-primary-50 focus:text-primary-500 focus-visible:outline-none disabled:opacity-50"
                  href="/"
                >
                  <span className="flex items-center gap-x-3">
                    <FolderClosed className="h-[18px] w-[18px] text-gray-400 group-focus:text-primary-500" />
                    <span className="text-sm font-semibold leading-6 text-gray-500 group-focus:text-primary-500">
                      Item 1
                    </span>
                  </span>
                  <span className="text-[10px] font-bold leading-5 text-gray-400 group-focus:text-primary-500">
                    172
                  </span>
                </Link>
              </div>

              <div className="pt-2">
                <Link
                  className="group flex items-center justify-between rounded-[5px] px-3 py-2 hover:bg-gray-100 focus:bg-primary-50 focus:text-primary-500 focus-visible:outline-none disabled:opacity-50"
                  href="/"
                >
                  <span className="flex items-center gap-x-3">
                    <FolderClosed className="h-[18px] w-[18px] text-gray-400 group-focus:text-primary-500" />
                    <span className="text-sm font-semibold leading-6 text-gray-500 group-focus:text-primary-500">
                      Item 1
                    </span>
                  </span>
                  <span className="text-[10px] font-bold leading-5 text-gray-400 group-focus:text-primary-500">
                    172
                  </span>
                </Link>

                <Link
                  className="group flex items-center justify-between rounded-[5px] px-3 py-2 hover:bg-gray-100 focus:bg-primary-50 focus:text-primary-500 focus-visible:outline-none disabled:opacity-50"
                  href="/"
                >
                  <span className="flex items-center gap-x-3">
                    <FolderClosed className="h-[18px] w-[18px] text-gray-400 group-focus:text-primary-500" />
                    <span className="text-sm font-semibold leading-6 text-gray-500 group-focus:text-primary-500">
                      Item 1
                    </span>
                  </span>
                  <span className="text-[10px] font-bold leading-5 text-gray-400 group-focus:text-primary-500">
                    172
                  </span>
                </Link>

                <Link
                  className="group flex items-center justify-between rounded-[5px] px-3 py-2 hover:bg-gray-100 focus:bg-primary-50 focus:text-primary-500 focus-visible:outline-none disabled:opacity-50"
                  href="/"
                >
                  <span className="flex items-center gap-x-3">
                    <FolderClosed className="h-[18px] w-[18px] text-gray-400 group-focus:text-primary-500" />
                    <span className="text-sm font-semibold leading-6 text-gray-500 group-focus:text-primary-500">
                      Item 1
                    </span>
                  </span>
                  <span className="text-[10px] font-bold leading-5 text-gray-400 group-focus:text-primary-500">
                    172
                  </span>
                </Link>

                <Link
                  className="group flex items-center justify-between rounded-[5px] px-3 py-2 hover:bg-gray-100 focus:bg-primary-50 focus:text-primary-500 focus-visible:outline-none disabled:opacity-50"
                  href="/"
                >
                  <span className="flex items-center gap-x-3">
                    <FolderClosed className="h-[18px] w-[18px] text-gray-400 group-focus:text-primary-500" />
                    <span className="text-sm font-semibold leading-6 text-gray-500 group-focus:text-primary-500">
                      Item 1
                    </span>
                  </span>
                  <span className="text-[10px] font-bold leading-5 text-gray-400 group-focus:text-primary-500">
                    172
                  </span>
                </Link>

                <Link
                  className="group flex items-center justify-between rounded-[5px] px-3 py-2 hover:bg-gray-100 focus:bg-primary-50 focus:text-primary-500 focus-visible:outline-none disabled:opacity-50"
                  href="/"
                >
                  <span className="flex items-center gap-x-3">
                    <FolderClosed className="h-[18px] w-[18px] text-gray-400 group-focus:text-primary-500" />
                    <span className="text-sm font-semibold leading-6 text-gray-500 group-focus:text-primary-500">
                      Item 1
                    </span>
                  </span>
                  <span className="text-[10px] font-bold leading-5 text-gray-400 group-focus:text-primary-500">
                    172
                  </span>
                </Link>

                <Link
                  className="group flex items-center justify-between rounded-[5px] px-3 py-2 hover:bg-gray-100 focus:bg-primary-50 focus:text-primary-500 focus-visible:outline-none disabled:opacity-50"
                  href="/"
                >
                  <span className="flex items-center gap-x-3">
                    <FolderClosed className="h-[18px] w-[18px] text-gray-400 group-focus:text-primary-500" />
                    <span className="text-sm font-semibold leading-6 text-gray-500 group-focus:text-primary-500">
                      Item 1
                    </span>
                  </span>
                  <span className="text-[10px] font-bold leading-5 text-gray-400 group-focus:text-primary-500">
                    172
                  </span>
                </Link>

                <Link
                  className="group flex items-center justify-between rounded-[5px] px-3 py-2 hover:bg-gray-100 focus:bg-primary-50 focus:text-primary-500 focus-visible:outline-none disabled:opacity-50"
                  href="/"
                >
                  <span className="flex items-center gap-x-3">
                    <FolderClosed className="h-[18px] w-[18px] text-gray-400 group-focus:text-primary-500" />
                    <span className="text-sm font-semibold leading-6 text-gray-500 group-focus:text-primary-500">
                      Item 1
                    </span>
                  </span>
                  <span className="text-[10px] font-bold leading-5 text-gray-400 group-focus:text-primary-500">
                    172
                  </span>
                </Link>

                <Link
                  className="group flex items-center justify-between rounded-[5px] px-3 py-2 hover:bg-gray-100 focus:bg-primary-50 focus:text-primary-500 focus-visible:outline-none disabled:opacity-50"
                  href="/"
                >
                  <span className="flex items-center gap-x-3">
                    <FolderClosed className="h-[18px] w-[18px] text-gray-400 group-focus:text-primary-500" />
                    <span className="text-sm font-semibold leading-6 text-gray-500 group-focus:text-primary-500">
                      Item 1
                    </span>
                  </span>
                  <span className="text-[10px] font-bold leading-5 text-gray-400 group-focus:text-primary-500">
                    172
                  </span>
                </Link>
              </div>
            </div>
          </ScrollArea>

          <div className="absolute inset-x-0 bottom-0 bg-white px-[15px] py-2">
            <div className="border-t border-gray-200 py-2">
              <Button
                className="w-full justify-start gap-x-[13.5px] px-3 hover:no-underline"
                visual="gray"
                variant="link"
              >
                <PlusCircle className="text-gray-400" />
                New Folder
              </Button>
            </div>
          </div>
        </nav>
      )}

      {args.sidebar === "Sidebar" && (
        <nav className="absolute inset-y-0 left-[70px] top-[70px] z-20 w-[224px] border-r border-gray-200">
          <ScrollArea className="h-[calc(100%-69px)] overflow-y-auto px-[15px] pt-[15px]">
            <select className="w-full rounded-[5px] border-gray-300 text-sm leading-6 text-gray-black focus:border-primary-500 focus:ring-0">
              <option value="Select">Select</option>
            </select>

            <div className="mt-6 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-medium uppercase leading-5 text-gray-500">
                  Account
                </span>

                <div className="space-y-1">
                  <Link
                    className="group flex items-center justify-between rounded-[5px] px-3 py-2 hover:bg-gray-100 focus:bg-primary-50 focus:text-primary-500 focus-visible:outline-none disabled:opacity-50"
                    href="/"
                  >
                    <span className="flex items-center gap-x-3">
                      <FolderClosed className="h-[18px] w-[18px] text-gray-400 group-focus:text-primary-500" />
                      <span className="text-sm font-semibold leading-6 text-gray-500 group-focus:text-primary-500">
                        Item 1
                      </span>
                    </span>
                    <span className="text-[10px] font-bold leading-5 text-gray-400 group-focus:text-primary-500">
                      172
                    </span>
                  </Link>

                  <Link
                    className="group flex items-center justify-between rounded-[5px] px-3 py-2 hover:bg-gray-100 focus:bg-primary-50 focus:text-primary-500 focus-visible:outline-none disabled:opacity-50"
                    href="/"
                  >
                    <span className="flex items-center gap-x-3">
                      <FolderClosed className="h-[18px] w-[18px] text-gray-400 group-focus:text-primary-500" />
                      <span className="text-sm font-semibold leading-6 text-gray-500 group-focus:text-primary-500">
                        Item 1
                      </span>
                    </span>
                    <span className="text-[10px] font-bold leading-5 text-gray-400 group-focus:text-primary-500">
                      172
                    </span>
                  </Link>

                  <Link
                    className="group flex items-center justify-between rounded-[5px] px-3 py-2 hover:bg-gray-100 focus:bg-primary-50 focus:text-primary-500 focus-visible:outline-none disabled:opacity-50"
                    href="/"
                  >
                    <span className="flex items-center gap-x-3">
                      <FolderClosed className="h-[18px] w-[18px] text-gray-400 group-focus:text-primary-500" />
                      <span className="text-sm font-semibold leading-6 text-gray-500 group-focus:text-primary-500">
                        Item 1
                      </span>
                    </span>
                    <span className="text-[10px] font-bold leading-5 text-gray-400 group-focus:text-primary-500">
                      172
                    </span>
                  </Link>

                  <Link
                    className="group flex items-center justify-between rounded-[5px] px-3 py-2 hover:bg-gray-100 focus:bg-primary-50 focus:text-primary-500 focus-visible:outline-none disabled:opacity-50"
                    href="/"
                  >
                    <span className="flex items-center gap-x-3">
                      <FolderClosed className="h-[18px] w-[18px] text-gray-400 group-focus:text-primary-500" />
                      <span className="text-sm font-semibold leading-6 text-gray-500 group-focus:text-primary-500">
                        Item 1
                      </span>
                    </span>
                    <span className="text-[10px] font-bold leading-5 text-gray-400 group-focus:text-primary-500">
                      172
                    </span>
                  </Link>
                </div>
              </div>

              <div className="space-y-2">
                <span className="text-xs font-medium uppercase leading-5 text-gray-500">
                  Account
                </span>

                <div className="space-y-1">
                  <Link
                    className="group flex items-center justify-between rounded-[5px] px-3 py-2 hover:bg-gray-100 focus:bg-primary-50 focus:text-primary-500 focus-visible:outline-none disabled:opacity-50"
                    href="/"
                  >
                    <span className="flex items-center gap-x-3">
                      <FolderClosed className="h-[18px] w-[18px] text-gray-400 group-focus:text-primary-500" />
                      <span className="text-sm font-semibold leading-6 text-gray-500 group-focus:text-primary-500">
                        Item 1
                      </span>
                    </span>
                    <span className="text-[10px] font-bold leading-5 text-gray-400 group-focus:text-primary-500">
                      172
                    </span>
                  </Link>

                  <Link
                    className="group flex items-center justify-between rounded-[5px] px-3 py-2 hover:bg-gray-100 focus:bg-primary-50 focus:text-primary-500 focus-visible:outline-none disabled:opacity-50"
                    href="/"
                  >
                    <span className="flex items-center gap-x-3">
                      <FolderClosed className="h-[18px] w-[18px] text-gray-400 group-focus:text-primary-500" />
                      <span className="text-sm font-semibold leading-6 text-gray-500 group-focus:text-primary-500">
                        Item 1
                      </span>
                    </span>
                    <span className="text-[10px] font-bold leading-5 text-gray-400 group-focus:text-primary-500">
                      172
                    </span>
                  </Link>

                  <Link
                    className="group flex items-center justify-between rounded-[5px] px-3 py-2 hover:bg-gray-100 focus:bg-primary-50 focus:text-primary-500 focus-visible:outline-none disabled:opacity-50"
                    href="/"
                  >
                    <span className="flex items-center gap-x-3">
                      <FolderClosed className="h-[18px] w-[18px] text-gray-400 group-focus:text-primary-500" />
                      <span className="text-sm font-semibold leading-6 text-gray-500 group-focus:text-primary-500">
                        Item 1
                      </span>
                    </span>
                    <span className="text-[10px] font-bold leading-5 text-gray-400 group-focus:text-primary-500">
                      172
                    </span>
                  </Link>

                  <Link
                    className="group flex items-center justify-between rounded-[5px] px-3 py-2 hover:bg-gray-100 focus:bg-primary-50 focus:text-primary-500 focus-visible:outline-none disabled:opacity-50"
                    href="/"
                  >
                    <span className="flex items-center gap-x-3">
                      <FolderClosed className="h-[18px] w-[18px] text-gray-400 group-focus:text-primary-500" />
                      <span className="text-sm font-semibold leading-6 text-gray-500 group-focus:text-primary-500">
                        Item 1
                      </span>
                    </span>
                    <span className="text-[10px] font-bold leading-5 text-gray-400 group-focus:text-primary-500">
                      172
                    </span>
                  </Link>

                  <Link
                    className="group flex items-center justify-between rounded-[5px] px-3 py-2 hover:bg-gray-100 focus:bg-primary-50 focus:text-primary-500 focus-visible:outline-none disabled:opacity-50"
                    href="/"
                  >
                    <span className="flex items-center gap-x-3">
                      <FolderClosed className="h-[18px] w-[18px] text-gray-400 group-focus:text-primary-500" />
                      <span className="text-sm font-semibold leading-6 text-gray-500 group-focus:text-primary-500">
                        Item 1
                      </span>
                    </span>
                    <span className="text-[10px] font-bold leading-5 text-gray-400 group-focus:text-primary-500">
                      172
                    </span>
                  </Link>

                  <Link
                    className="group flex items-center justify-between rounded-[5px] px-3 py-2 hover:bg-gray-100 focus:bg-primary-50 focus:text-primary-500 focus-visible:outline-none disabled:opacity-50"
                    href="/"
                  >
                    <span className="flex items-center gap-x-3">
                      <FolderClosed className="h-[18px] w-[18px] text-gray-400 group-focus:text-primary-500" />
                      <span className="text-sm font-semibold leading-6 text-gray-500 group-focus:text-primary-500">
                        Item 1
                      </span>
                    </span>
                    <span className="text-[10px] font-bold leading-5 text-gray-400 group-focus:text-primary-500">
                      172
                    </span>
                  </Link>

                  <Link
                    className="group flex items-center justify-between rounded-[5px] px-3 py-2 hover:bg-gray-100 focus:bg-primary-50 focus:text-primary-500 focus-visible:outline-none disabled:opacity-50"
                    href="/"
                  >
                    <span className="flex items-center gap-x-3">
                      <FolderClosed className="h-[18px] w-[18px] text-gray-400 group-focus:text-primary-500" />
                      <span className="text-sm font-semibold leading-6 text-gray-500 group-focus:text-primary-500">
                        Item 1
                      </span>
                    </span>
                    <span className="text-[10px] font-bold leading-5 text-gray-400 group-focus:text-primary-500">
                      172
                    </span>
                  </Link>

                  <Link
                    className="group flex items-center justify-between rounded-[5px] px-3 py-2 hover:bg-gray-100 focus:bg-primary-50 focus:text-primary-500 focus-visible:outline-none disabled:opacity-50"
                    href="/"
                  >
                    <span className="flex items-center gap-x-3">
                      <FolderClosed className="h-[18px] w-[18px] text-gray-400 group-focus:text-primary-500" />
                      <span className="text-sm font-semibold leading-6 text-gray-500 group-focus:text-primary-500">
                        Item 1
                      </span>
                    </span>
                    <span className="text-[10px] font-bold leading-5 text-gray-400 group-focus:text-primary-500">
                      172
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </ScrollArea>

          <div className="absolute inset-x-0 bottom-0 bg-white px-[15px] py-2">
            <div className="border-t border-gray-200 py-2">
              <Button
                className="w-full justify-start gap-x-[13.5px] px-3 hover:no-underline"
                visual="gray"
                variant="link"
              >
                <PlusCircle className="text-gray-400" />
                New Folder
              </Button>
            </div>
          </div>
        </nav>
      )}

      {args.nav === "Invite Users" && (
        <nav className="absolute left-[70px] right-0 top-0 z-20 flex h-[70px] items-center justify-between border-b border-gray-200 bg-white px-[17px] py-[15px]">
          <Breadcrumb spacing="0.5rem">
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Settings</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink href="/">Users</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>

          <div className="flex items-center gap-x-3">
            <span className="text-sm font-semibold text-gray-800">Sort by</span>
            <Button
              className="w-[148px] justify-between"
              visual="gray"
              variant="outlined"
            >
              Name <ChevronDown className="h-5 w-5" />
            </Button>
            <Button
              className="w-[200px] justify-between"
              visual="gray"
              variant="outlined"
            >
              All Integrations <ChevronDown className="h-5 w-5" />
            </Button>
            <Button>
              <Plus2 />
              Create Integration
            </Button>
          </div>
        </nav>
      )}

      {args.nav === "Recent Workflow" && (
        <nav className="absolute left-[70px] right-0 top-0 z-20 flex h-[70px] items-center justify-between border-b border-gray-200 bg-white px-[17px]">
          <div className="flex items-center gap-x-5">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    className="p-2.5 text-gray-500 hover:text-gray-black"
                    variant="outlined"
                    visual="gray"
                  >
                    <ArrowLeft2 />
                  </Button>
                </TooltipTrigger>
                <TooltipContent className="font-semibold">Back</TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <Breadcrumb>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Recent workflows</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink href="/">Projects</BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
          </div>

          <div className="flex items-center gap-x-3">
            <span className="text-sm font-semibold text-gray-800">Sort by</span>
            <Button visual="gray" variant="outlined">
              Last Edited <ChevronDown className="h-5 w-5" />
            </Button>
            <DatePicker placeholder="Date modified" />
            <Button visual="gray" variant="outlined">
              Owner <ChevronDown className="h-5 w-5" />
            </Button>
            <Button>
              <Plus2 />
              New Project
            </Button>
          </div>
        </nav>
      )}

      {args.nav === "Test Workflow" && (
        <nav className="absolute left-[70px] right-0 top-0 z-20 flex h-[70px] items-center justify-between border-b border-gray-200 bg-white px-[17px]">
          <div className="flex items-center gap-x-5">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    className="p-2.5 text-gray-500 hover:text-gray-black"
                    variant="outlined"
                    visual="gray"
                  >
                    <ArrowLeft2 />
                  </Button>
                </TooltipTrigger>
                <TooltipContent className="font-semibold">Back</TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <Breadcrumb>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Test workflows</BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
          </div>

          <div className="flex items-center gap-x-3">
            <div className="flex items-center gap-x-2 px-3 py-2.5">
              <History className="text-gray-500" />
              <span className="text-xs leading-5 text-gray-700">
                Saved at 10:38AM
              </span>
            </div>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    className="p-2.5 text-gray-500 hover:text-gray-black"
                    variant="outlined"
                    visual="gray"
                  >
                    <MoreHorizontal />
                  </Button>
                </TooltipTrigger>
                <TooltipContent className="font-semibold">
                  Options
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <Button>Publish</Button>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button className="px-2.5" visual="gray" variant="ghost">
                    <X2 className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent className="font-semibold">Exit</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </nav>
      )}

      {args.nav === "Avatar Group Nav" && (
        <nav className="absolute left-[70px] right-0 top-0 z-20 flex h-[70px] items-center justify-between border-b border-gray-200 bg-white px-[17px]">
          <div className="flex items-center gap-x-5">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    className="p-2.5 text-gray-500 hover:text-gray-black"
                    variant="outlined"
                    visual="gray"
                  >
                    <ArrowLeft2 />
                  </Button>
                </TooltipTrigger>
                <TooltipContent className="font-semibold">Back</TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <Breadcrumb spacing="0.5rem">
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Settings</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Roles</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink href="/">Edit Role</BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
          </div>

          <div className="flex items-center gap-x-6">
            <AvatarGroup max={3} size="sm">
              <Avatar className="border-2 border-white hover:ring-0" size="sm">
                <AvatarImage alt="Woman" src="/woman.jpg" />
                <AvatarFallback>W</AvatarFallback>
              </Avatar>
              <Avatar className="border-2 border-white hover:ring-0" size="sm">
                <AvatarImage alt="Woman" src="/woman.jpg" />
                <AvatarFallback>W</AvatarFallback>
              </Avatar>
              <Avatar className="border-2 border-white hover:ring-0" size="sm">
                <AvatarImage alt="Woman" src="/woman.jpg" />
                <AvatarFallback>W</AvatarFallback>
              </Avatar>
              <Avatar className="border-2 border-white hover:ring-0" size="sm">
                <AvatarImage alt="Woman" src="/woman.jpg" />
                <AvatarFallback>W</AvatarFallback>
              </Avatar>
              <Avatar className="border-2 border-white hover:ring-0" size="sm">
                <AvatarImage alt="Woman" src="/woman.jpg" />
                <AvatarFallback>W</AvatarFallback>
              </Avatar>
              <Avatar className="border-2 border-white hover:ring-0" size="sm">
                <AvatarImage alt="Woman" src="/woman.jpg" />
                <AvatarFallback>W</AvatarFallback>
              </Avatar>
            </AvatarGroup>

            <div className="flex items-center gap-x-3">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      className="p-2.5 text-gray-500 hover:text-gray-black"
                      variant="outlined"
                      visual="gray"
                    >
                      <MoreHorizontal />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent className="font-semibold">
                    Options
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <Button variant="outlined" visual="gray">
                <Users />
                Assign Users
              </Button>
            </div>
          </div>
        </nav>
      )}

      {args.nav === "Add Custom Role" && (
        <nav className="absolute left-[70px] right-0 top-0 z-20 flex h-[70px] items-center justify-between border-b border-gray-200 bg-white px-[17px]">
          <Breadcrumb spacing="0.5rem">
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Settings</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink href="/">Roles</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>

          <div className="flex items-center gap-x-3">
            <span className="text-sm font-semibold text-gray-800">Sort by</span>
            <Button
              className="w-[148px] justify-between"
              visual="gray"
              variant="outlined"
            >
              Permissions <ChevronDown className="h-5 w-5" />
            </Button>
            <Button
              className="w-[200px] justify-between"
              visual="gray"
              variant="outlined"
            >
              All Roles <ChevronDown className="h-5 w-5" />
            </Button>
            <Button>
              <Plus2 />
              Add Custom Role
            </Button>
          </div>
        </nav>
      )}

      {args.nav === "Change Role Nav" && (
        <nav className="absolute left-[70px] right-0 top-0 z-20 flex h-[70px] items-center justify-between border-b border-gray-200 bg-white px-[17px]">
          <div className="flex items-center gap-x-5">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    className="p-2.5 text-gray-500 hover:text-gray-black"
                    variant="outlined"
                    visual="gray"
                  >
                    <ArrowLeft2 />
                  </Button>
                </TooltipTrigger>
                <TooltipContent className="font-semibold">Back</TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <Breadcrumb spacing="0.5rem">
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Settings</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Users</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink href="/">Edit User</BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
          </div>

          <div className="flex items-center gap-x-3">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    className="p-2.5 text-gray-500 hover:text-gray-black"
                    variant="outlined"
                    visual="gray"
                  >
                    <MoreHorizontal />
                  </Button>
                </TooltipTrigger>
                <TooltipContent className="font-semibold">
                  Options
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <Button variant="outlined" visual="gray">
              <ArrowRightLeft />
              Change role
            </Button>
          </div>
        </nav>
      )}

      {args.nav === "My Integration Nav" && (
        <nav className="absolute left-[70px] right-0 top-0 z-20 flex h-[70px] items-center justify-between border-b border-gray-200 bg-white px-[17px]">
          <div className="flex items-center gap-x-5">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    className="p-2.5 text-gray-500 hover:text-gray-black"
                    variant="outlined"
                    visual="gray"
                  >
                    <ArrowLeft2 />
                  </Button>
                </TooltipTrigger>
                <TooltipContent className="font-semibold">Back</TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <Breadcrumb spacing="0.5rem">
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Integrations</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Roles</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink href="/" className="flex items-center gap-x-3">
                  MyIntegration1
                  <Badge size="lg" visual="gray">
                    <Dot />
                    Unpublished
                  </Badge>
                </BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
          </div>

          <div className="flex items-center gap-x-6">
            <span className="text-sm font-semibold text-gray-500">
              Version 1.0.0
            </span>

            <div className="flex items-center gap-x-3">
              <Button className="p-2.5" variant="outlined" visual="gray">
                <HelpCircle />
              </Button>
              <Button className="p-2.5" variant="outlined" visual="gray">
                <Settings />
              </Button>
              <Button>Submit for Review</Button>
            </div>
          </div>
        </nav>
      )}

      {args.nav === "New Workflow" && (
        <nav className="absolute left-[70px] right-0 top-0 z-20 flex h-[70px] items-center justify-between border-b border-gray-200 bg-white px-[17px]">
          <div className="flex items-center gap-x-5">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    className="p-2.5 text-gray-500 hover:text-gray-black"
                    variant="outlined"
                    visual="gray"
                  >
                    <ArrowLeft2 />
                  </Button>
                </TooltipTrigger>
                <TooltipContent className="font-semibold">Back</TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <Breadcrumb>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Project Name</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink href="/">Recent workflows</BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
          </div>

          <div className="flex items-center gap-x-3">
            <span className="text-sm font-semibold text-gray-800">Sort by</span>
            <Button visual="gray" variant="outlined">
              Activity <ChevronDown className="h-5 w-5" />
            </Button>
            <DatePicker placeholder="All time" />
            <Button visual="gray" variant="outlined">
              <Filter /> Filters
            </Button>
            <Button>
              <Plus2 />
              New Workflow
            </Button>
          </div>
        </nav>
      )}

      <main className="pl-[294px] pt-[70px]">
        <div className="px-8 pt-8">
          <h1 className="text-base font-semibold text-gray-600">
            3 Integrations
          </h1>
          <p className="mt-1 text-sm text-gray-500">Description text here</p>

          <div className="mt-6">Starting point</div>
        </div>
      </main>
    </div>
  ),
};
