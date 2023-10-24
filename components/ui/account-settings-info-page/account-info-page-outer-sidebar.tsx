import {
  Logo,
  BarChartSquare,
  ThreeLayers,
  LifeBouy,
  Belling,
} from "@/components/icons";
import { Avatar, AvatarImage, AvatarFallback } from "../avatar";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@radix-ui/react-dropdown-menu";

import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "../tooltip";
import { Settings, User, UserPlus, HelpCircle, LogOut } from "lucide-react";
import { Home, Users } from "@/components/icons";
import Link from "next/link";
import React from "react";

export default function AccountIfoPageOuterSidebar() {
  return (
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
              <DropdownMenuLabel className="font-normal">
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
  );
}
