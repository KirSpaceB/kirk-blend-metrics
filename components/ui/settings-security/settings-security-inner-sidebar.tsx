import {
  Billing,
  CompanyInfo,
  FolderClosed,
  Globe,
  Lock01,
  LoginAndPassword,
  MyGoals,
  NotificationsIcon,
  PersonalInfo,
  Phone01,
  Privacy,
  Refresh,
  ShieldCharged,
  Trash,
  User01,
} from "@/components/icons";
import Link from "next/link";
import React from "react";
import { ScrollArea } from "../scroll-area";

export default function SettingSecurityInnerSidebar() {
  return (
    <nav className="absolute inset-y-0 left-[70px] top-[70px] z-20 w-[224px] border-r border-gray-200">
      <ScrollArea className="h-[calc(100%-69px)] overflow-y-auto px-[15px] pt-[15px]">
        <div className="mt-1 space-y-6">
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
            </div>
            <div className="space-y-1">
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
            </div>
            <div className="space-y-1">
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
            </div>
            <div className="space-y-1">
              <Link
                className="group flex items-center justify-between rounded-[5px] px-3 py-2 hover:bg-gray-100 focus:bg-primary-50 focus:text-primary-500 focus-visible:outline-none disabled:opacity-50"
                href="/"
              >
                <span className="flex items-center gap-x-3">
                  <Privacy className="h-[18px] w-[18px] text-gray-400 group-focus:text-primary-500" />
                  <span className="text-sm font-semibold leading-6 text-gray-500 group-focus:text-primary-500">
                    Company Info
                  </span>
                </span>
              </Link>
            </div>
            <div className="space-y-1">
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
            </div>
            <div className="space-y-1">
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
                  <LoginAndPassword className="h-[18px] w-[18px] text-gray-400 group-focus:text-primary-500" />
                  <span className="text-sm font-semibold leading-6 text-gray-500 group-focus:text-primary-500">
                    Login & Password
                  </span>
                </span>
              </Link>
            </div>
            <div className="space-y-1">
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
            </div>
            <div className="space-y-1">
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
            </div>
          </div>
          <div className="space-y-2">
            <span className="text-xs font-medium uppercase leading-5 text-gray-500">
              Team Management
            </span>
            <div className="space-y-1">
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
            </div>
            <div className="space-y-1">
              <Link
                className="group flex items-center justify-between rounded-[5px] px-3 py-2 hover:bg-gray-100 focus:bg-primary-50 focus:text-primary-500 focus-visible:outline-none disabled:opacity-50"
                href="/"
              >
                <span className="flex items-center gap-x-3">
                  <ShieldCharged className="h-[18px] w-[18px] text-gray-400 group-focus:text-primary-500" />
                  <span className="text-sm font-semibold leading-6 text-gray-500 group-focus:text-primary-500">
                    Roles
                  </span>
                </span>
              </Link>
            </div>
          </div>
          <div className="space-y-2">
            <span className="text-xs font-medium uppercase leading-5 text-gray-500">
              Access Management
            </span>
            <div className="space-y-1">
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
            </div>
            <div className="space-y-1">
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
            </div>
          </div>
          <div className="space-y-2">
            <span className="text-xs font-medium uppercase leading-5 text-gray-500">
              App
            </span>
            <div className="space-y-1">
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
            </div>
            <div className="space-y-1">
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
            </div>
          </div>
          <div className="space-y-2">
            <span className="text-xs font-medium uppercase leading-5 text-gray-500">
              Access Management
            </span>
            <div className="space-y-1">
              <Link
                className="group flex items-center justify-between rounded-[5px] px-3 py-2 hover:bg-gray-100 focus:bg-primary-50 focus:text-primary-500 focus-visible:outline-none disabled:opacity-50"
                href="/"
              >
                <span className="flex items-center gap-x-3">
                  <Trash className="h-[18px] w-[18px] text-gray-400 group-focus:text-primary-500" />
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
  );
}
