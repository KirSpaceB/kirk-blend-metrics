import { ScrollArea } from "@radix-ui/react-scroll-area";
import React from "react";
import { Button } from "./button";
import Link from "next/link";
//icons
import {
  Billing,
  FolderClosed,
  Globe,
  Lock01,
  NotificationsIcon,
  Passcode,
  Phone01,
  Refresh,
  ShieldZap,
  User01,
} from "../icons";
import { PersonalInfo } from "../icons";
import { PlusCircle } from "../icons/plus-circle";
import { CompanyInfo } from "../icons";
import { MyGoals } from "../icons";
import { Privacy } from "../icons";
import { Trash01 } from "../icons/trash-01";

export default function PersonalInfoPageInnerSideBar() {
  return (
    <nav className="fixed bottom-0 left-[70px] top-[70px] h-screen w-[260px]  border-r border-gray-200 ">
      <ScrollArea className="h-[calc(100%-69px)] overflow-y-auto px-[15px] pt-[15px]">
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
                  <PersonalInfo className="h-[18px] w-[18px] text-gray-400 group-focus:text-primary-500" />
                  <span className="text-sm font-semibold leading-6 text-gray-500 group-focus:text-primary-500">
                    Personal Info
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
                  <CompanyInfo className="h-[18px] w-[18px] text-gray-400 group-focus:text-primary-500" />
                  <span className="text-sm font-semibold leading-6 text-gray-500 group-focus:text-primary-500">
                    Company Info
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
                  <MyGoals className="h-[18px] w-[18px] text-gray-400 group-focus:text-primary-500" />
                  <span className="text-sm font-semibold leading-6 text-gray-500 group-focus:text-primary-500">
                    My Goals
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
                    Privacy
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
                  <Billing className="h-[18px] w-[18px] text-gray-400 group-focus:text-primary-500" />
                  <span className="text-sm font-semibold leading-6 text-gray-500 group-focus:text-primary-500">
                    Billing
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
                  <NotificationsIcon className="h-[18px] w-[18px] text-gray-400 group-focus:text-primary-500" />
                  <span className="text-sm font-semibold leading-6 text-gray-500 group-focus:text-primary-500">
                    Notifications
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
              Security
            </span>

            <div className="space-y-1">
              <Link
                className="group flex items-center justify-between rounded-[5px] px-3 py-2 hover:bg-gray-100 focus:bg-primary-50 focus:text-primary-500 focus-visible:outline-none disabled:opacity-50"
                href="/"
              >
                <span className="flex items-center gap-x-3">
                  <Passcode className="h-[18px] w-[18px] text-gray-400 group-focus:text-primary-500" />
                  <span className="text-sm font-semibold leading-6 text-gray-500 group-focus:text-primary-500">
                    Login & Password
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
                  <Lock01 className="h-[18px] w-[18px] text-gray-400 group-focus:text-primary-500" />
                  <span className="text-sm font-semibold leading-6 text-gray-500 group-focus:text-primary-500">
                    Two-Factor Auth
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
                  <Refresh className="h-[18px] w-[18px] text-gray-400 group-focus:text-primary-500" />
                  <span className="text-sm font-semibold leading-6 text-gray-500 group-focus:text-primary-500">
                    Account Recovery
                  </span>
                </span>
                <span className="text-[10px] font-bold leading-5 text-gray-400 group-focus:text-primary-500">
                  172
                </span>
              </Link>

              <span className="text-xs font-medium uppercase leading-5 text-gray-500">
                Team Management
              </span>

              <Link
                className="group flex items-center justify-between rounded-[5px] px-3 py-2 hover:bg-gray-100 focus:bg-primary-50 focus:text-primary-500 focus-visible:outline-none disabled:opacity-50"
                href="/"
              >
                <span className="flex items-center gap-x-3">
                  <User01 className="h-[18px] w-[18px] text-gray-400 group-focus:text-primary-500" />
                  <span className="text-sm font-semibold leading-6 text-gray-500 group-focus:text-primary-500">
                    Users
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
                  <ShieldZap className="h-[18px] w-[18px] text-gray-400 group-focus:text-primary-500" />
                  <span className="text-sm font-semibold leading-6 text-gray-500 group-focus:text-primary-500">
                    Roles
                  </span>
                </span>
                <span className="text-[10px] font-bold leading-5 text-gray-400 group-focus:text-primary-500">
                  172
                </span>
              </Link>

              <span className="text-xs font-medium uppercase leading-5 text-gray-500">
                Access Management
              </span>

              <Link
                className="group flex items-center justify-between rounded-[5px] px-3 py-2 hover:bg-gray-100 focus:bg-primary-50 focus:text-primary-500 focus-visible:outline-none disabled:opacity-50"
                href="/"
              >
                <span className="flex items-center gap-x-3">
                  <Phone01 className="h-[18px] w-[18px] text-gray-400 group-focus:text-primary-500" />
                  <span className="text-sm font-semibold leading-6 text-gray-500 group-focus:text-primary-500">
                    Devices
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
                  <Globe className="h-[18px] w-[18px] text-gray-400 group-focus:text-primary-500" />
                  <span className="text-sm font-semibold leading-6 text-gray-500 group-focus:text-primary-500">
                    IP Restriction
                  </span>
                </span>
                <span className="text-[10px] font-bold leading-5 text-gray-400 group-focus:text-primary-500">
                  172
                </span>
              </Link>

              <span className="text-xs font-medium uppercase leading-5 text-gray-500">
                App
              </span>

              <Link
                className="group flex items-center justify-between rounded-[5px] px-3 py-2 hover:bg-gray-100 focus:bg-primary-50 focus:text-primary-500 focus-visible:outline-none disabled:opacity-50"
                href="/"
              >
                <span className="flex items-center gap-x-3">
                  <User01 className="h-[18px] w-[18px] text-gray-400 group-focus:text-primary-500" />
                  <span className="text-sm font-semibold leading-6 text-gray-500 group-focus:text-primary-500">
                    Users
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
                  <User01 className="h-[18px] w-[18px] text-gray-400 group-focus:text-primary-500" />
                  <span className="text-sm font-semibold leading-6 text-gray-500 group-focus:text-primary-500">
                    Users
                  </span>
                </span>
                <span className="text-[10px] font-bold leading-5 text-gray-400 group-focus:text-primary-500">
                  172
                </span>
              </Link>
              <span className="text-xs font-medium uppercase leading-5 text-gray-500">
                File Management
              </span>
              <Link
                className="group flex items-center justify-between rounded-[5px] px-3 py-2 hover:bg-gray-100 focus:bg-primary-50 focus:text-primary-500 focus-visible:outline-none disabled:opacity-50"
                href="/"
              >
                <span className="flex items-center gap-x-3">
                  <Trash01 className="h-[18px] w-[18px] text-gray-400 group-focus:text-primary-500" />
                  <span className="text-sm font-semibold leading-6 text-gray-500 group-focus:text-primary-500">
                    Archive & Trash
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
    </nav>
  );
}
