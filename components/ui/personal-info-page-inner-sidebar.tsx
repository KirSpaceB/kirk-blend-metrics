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
    // Changes here
    <nav className="fixed bottom-0 left-[70px] top-[85px] h-screen w-[224px]  border-r border-gray-200 ">
      {/* Changes here */}
      <ScrollArea className="fixed bottom-[10px] left-[25px] h-[calc(100%-69px)] overflow-y-auto px-[15px] pt-[15px]">
        <div className="mt-0 space-y-6">
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
              </Link>
            </div>
          </div>
        </div>
      </ScrollArea>
    </nav>

    // We used this and it worked but something is a bit off
    //   <nav className="absolute inset-y-0 left-[90px] top-[71px] z-20 w-[224px] overflow-y-auto border-r border-gray-200 bg-gray-50 p-[15px] pb-0 scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-rounded-lg">
    //   <ul className="grid gap-2">
    //     <li>
    //       <Link
    //         className="flex h-10 cursor-pointer items-center gap-x-3 rounded-md px-3 py-2 text-sm font-semibold leading-6 text-gray-500 focus:bg-primary-50 focus:text-primary-500 focus-visible:outline-none"
    //         href="#"
    //       >
    //         <ShieldCharged />
    //         Dashboard
    //       </Link>
    //     </li>
    //     <li>
    //       <Link
    //         className="flex h-10 cursor-pointer items-center gap-x-3 rounded-md px-3 py-2 text-sm font-semibold leading-6 text-gray-500 focus:bg-primary-50 focus:text-primary-500 focus-visible:outline-none"
    //         href="#"
    //       >
    //         <ShieldCharged />
    //         My Integrations
    //       </Link>
    //     </li>
    //   </ul>
    // </nav>
  );
}
