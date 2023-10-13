import {
  Billing,
  CompanyInfo,
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

export default function SettingSecurityInnerSidebar() {
  return (
    <nav className="absolute inset-y-0 left-[70px] top-[70px] z-20 w-[224px] overflow-y-auto border-r border-gray-200 bg-gray-50 p-[15px] pb-0 scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-rounded-lg">
      <ul className="grid gap-2">
        <span className="text-xs font-medium uppercase text-gray-500">
          Account
        </span>
        <li>
          <Link
            className="flex h-10 cursor-pointer items-center gap-x-3 rounded-md px-3 py-2 text-sm font-semibold leading-6 text-gray-500 hover:bg-gray-100 focus:bg-primary-50 focus:text-primary-500 focus-visible:outline-none"
            href="#"
          >
            <PersonalInfo />
            Personal Info
          </Link>
        </li>
        <li>
          <Link
            className="flex h-10 cursor-pointer items-center gap-x-3 rounded-md px-3 py-2 text-sm font-semibold leading-6 text-gray-500 hover:bg-gray-100 focus:bg-primary-50 focus:text-primary-500 focus-visible:outline-none"
            href="#"
          >
            <CompanyInfo />
            Company Info
          </Link>
        </li>
        <li>
          <Link
            className="flex h-10 cursor-pointer items-center gap-x-3 rounded-md px-3 py-2 text-sm font-semibold leading-6 text-gray-500 hover:bg-gray-100 focus:bg-primary-50 focus:text-primary-500 focus-visible:outline-none"
            href="#"
          >
            <MyGoals />
            Company Info
          </Link>
        </li>
        <li>
          <Link
            className="flex h-10 cursor-pointer items-center gap-x-3 rounded-md px-3 py-2 text-sm font-semibold leading-6 text-gray-500 hover:bg-gray-100 focus:bg-primary-50 focus:text-primary-500 focus-visible:outline-none"
            href="#"
          >
            <Privacy />
            Privacy
          </Link>
        </li>
        <li>
          <Link
            className="flex h-10 cursor-pointer items-center gap-x-3 rounded-md px-3 py-2 text-sm font-semibold leading-6 text-gray-500 hover:bg-gray-100 focus:bg-primary-50 focus:text-primary-500 focus-visible:outline-none"
            href="#"
          >
            <Billing />
            Billing
          </Link>
        </li>
        <li>
          <Link
            className="flex h-10 cursor-pointer items-center gap-x-3 rounded-md px-3 py-2 text-sm font-semibold leading-6 text-gray-500 hover:bg-gray-100 focus:bg-primary-50 focus:text-primary-500 focus-visible:outline-none"
            href="#"
          >
            <NotificationsIcon />
            Notifications
          </Link>
        </li>
      </ul>
      <ul className="grid gap-2">
        <span className="text-xs font-medium uppercase text-gray-500">
          Security
        </span>
        <li>
          <Link
            className="flex h-10 cursor-pointer items-center gap-x-3 rounded-md px-3 py-2 text-sm font-semibold leading-6 text-gray-500 hover:bg-gray-100 focus:bg-primary-50 focus:text-primary-500 focus-visible:outline-none"
            href="#"
          >
            <LoginAndPassword />
            Login & Password
          </Link>
        </li>
        <li>
          <Link
            className="flex h-10 cursor-pointer items-center gap-x-3 rounded-md px-3 py-2 text-sm font-semibold leading-6 text-gray-500 hover:bg-gray-100 focus:bg-primary-50 focus:text-primary-500 focus-visible:outline-none"
            href="#"
          >
            <Lock01 />
            Two-Factor-Auth
          </Link>
        </li>
        <li>
          <Link
            className="flex h-10 cursor-pointer items-center gap-x-3 rounded-md px-3 py-2 text-sm font-semibold leading-6 text-gray-500 hover:bg-gray-100 focus:bg-primary-50 focus:text-primary-500 focus-visible:outline-none"
            href="#"
          >
            <Refresh />
            Account Recovery
          </Link>
        </li>
      </ul>
      <ul className="grid gap-2">
        <span className="text-xs font-medium uppercase text-gray-500">
          Team Management
        </span>
        <li>
          <Link
            className="flex h-10 cursor-pointer items-center gap-x-3 rounded-md px-3 py-2 text-sm font-semibold leading-6 text-gray-500 hover:bg-gray-100 focus:bg-primary-50 focus:text-primary-500 focus-visible:outline-none"
            href="#"
          >
            <User01 />
            Users
          </Link>
        </li>
        <li>
          <Link
            className="flex h-10 cursor-pointer items-center gap-x-3 rounded-md px-3 py-2 text-sm font-semibold leading-6 text-gray-500 hover:bg-gray-100 focus:bg-primary-50 focus:text-primary-500 focus-visible:outline-none"
            href="#"
          >
            <ShieldCharged />
            Roles
          </Link>
        </li>
      </ul>
      <ul className="grid gap-2">
        <span className="text-xs font-medium uppercase text-gray-500">
          Access Management
        </span>
        <li>
          <Link
            className="flex h-10 cursor-pointer items-center gap-x-3 rounded-md px-3 py-2 text-sm font-semibold leading-6 text-gray-500 hover:bg-gray-100 focus:bg-primary-50 focus:text-primary-500 focus-visible:outline-none"
            href="#"
          >
            <Phone01 />
            Devices
          </Link>
        </li>
        <li>
          <Link
            className="flex h-10 cursor-pointer items-center gap-x-3 rounded-md px-3 py-2 text-sm font-semibold leading-6 text-gray-500 hover:bg-gray-100 focus:bg-primary-50 focus:text-primary-500 focus-visible:outline-none"
            href="#"
          >
            <Globe />
            IP Restriction
          </Link>
        </li>
      </ul>
      <ul className="grid gap-2">
        <span className="text-xs font-medium uppercase text-gray-500">App</span>
        <li>
          <Link
            className="flex h-10 cursor-pointer items-center gap-x-3 rounded-md px-3 py-2 text-sm font-semibold leading-6 text-gray-500 hover:bg-gray-100 focus:bg-primary-50 focus:text-primary-500 focus-visible:outline-none"
            href="#"
          >
            <User01 />
            Users
          </Link>
        </li>
        <li>
          <Link
            className="flex h-10 cursor-pointer items-center gap-x-3 rounded-md px-3 py-2 text-sm font-semibold leading-6 text-gray-500 hover:bg-gray-100 focus:bg-primary-50 focus:text-primary-500 focus-visible:outline-none"
            href="#"
          >
            <User01 />
            Users
          </Link>
        </li>
      </ul>
      <ul className="grid gap-2">
        <span className="text-xs font-medium uppercase text-gray-500">
          File Management
        </span>
        <li>
          <Link
            className="flex h-10 cursor-pointer items-center gap-x-3 rounded-md px-3 py-2 text-sm font-semibold leading-6 text-gray-500 hover:bg-gray-100 focus:bg-primary-50 focus:text-primary-500 focus-visible:outline-none"
            href="#"
          >
            <User01 />
            Users
          </Link>
        </li>
        <li>
          <Link
            className="flex h-10 cursor-pointer items-center gap-x-3 rounded-md px-3 py-2 text-sm font-semibold leading-6 text-gray-500 hover:bg-gray-100 focus:bg-primary-50 focus:text-primary-500 focus-visible:outline-none"
            href="#"
          >
            <Trash />
            Users
          </Link>
        </li>
      </ul>
    </nav>
  );
}
