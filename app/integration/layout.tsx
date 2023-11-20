"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  ArrowLeft2,
  BarChartSquare,
  Belling,
  Bulb,
  Dot,
  HelpCircle,
  Home,
  Lamp,
  LifeBouy,
  LogOut,
  Logo,
  MousePointerClick,
  Settings,
  Settings2,
  SquareCode,
  ThreeLayers,
  User,
  UserPlus,
  Users,
  Zap,
} from "@/components/icons";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Badge,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui";
import { INTEGRATION_PAGE } from "@/lib/constants";
import { ActiveLink } from "@/components/active-link";

export default function IntegrationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isNotIntegrationPage = pathname !== INTEGRATION_PAGE;

  return (
    <>
      <nav className="fixed inset-y-0 left-0 z-[25] flex w-[70px] flex-col items-center border-r border-gray-200 bg-white">
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

      {isNotIntegrationPage ? (
        <>
          <nav className="fixed inset-x-0 left-[70px] top-0 z-20 flex h-[70px] items-center justify-between border-b border-gray-200 bg-white px-[17px]">
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
                  <TooltipContent className="font-semibold">
                    Back
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <Breadcrumb spacing="0.5rem">
                <BreadcrumbItem>
                  <BreadcrumbLink href="/integration">
                    Integrations
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem isCurrentPage>
                  <BreadcrumbLink
                    href="/"
                    className="flex items-center gap-x-3"
                  >
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
                <Button disabled>Submit for Review</Button>
              </div>
            </div>
          </nav>

          <nav className="fixed inset-y-0 left-[70px] top-[70px] z-20 w-[244px] border-r border-gray-200 bg-gray-50">
            <div className="space-y-[15px] p-[15px] pb-0">
              <ActiveLink href="/integration/getting-started">
                <Bulb />
                Getting Started
              </ActiveLink>

              <div className="space-y-2">
                <span className="text-xs font-medium uppercase leading-5 text-gray-500">
                  Configure
                </span>
                <div className="space-y-1">
                  <ActiveLink href="/integration/general">
                    <Settings2 />
                    General
                  </ActiveLink>
                  <ActiveLink href="/integration/metrics/connect">
                    <Lamp />
                    Data
                  </ActiveLink>
                  <ActiveLink
                    href="/integration/metrics/triggers"
                    startsWith={true}
                  >
                    <Zap className="h-[18px] w-[18px]" />
                    Triggers
                  </ActiveLink>
                  <ActiveLink href="/integration/metrics/actions">
                    <MousePointerClick />
                    Actions
                  </ActiveLink>
                </div>
              </div>

              <div className="space-y-2">
                <span className="text-xs font-medium uppercase leading-5 text-gray-500">
                  Test and Publish
                </span>
                <div className="space-y-1">
                  <ActiveLink href="/integration/test">
                    <SquareCode />
                    Test
                  </ActiveLink>
                </div>
              </div>
            </div>
          </nav>
          <main className="relative min-h-screen bg-gray-50 pl-[314px] pt-[70px]">
            {children}
          </main>
        </>
      ) : (
        <>{children}</>
      )}
    </>
  );
}
