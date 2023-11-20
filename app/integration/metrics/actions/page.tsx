"use client";

import { AlertCircle, MoreHorizontal, Plus2 } from "@/components/icons";
import {
  Alert,
  AlertContent,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Badge,
  Button,
  CloseButton,
  IconButton,
} from "@/components/ui";
import Link from "next/link";

function Actions() {
  return (
    <div className="px-[88px] py-8">
      <Alert variant="primary">
        <AlertIcon>
          <AlertCircle className="h-5 w-5" />
        </AlertIcon>
        <AlertContent>
          <AlertTitle className="text-gray-700">Actions</AlertTitle>
          <AlertDescription className="text-gray-700">
            In this section, you can create specific action events that can
            happen in response to a trigger event through your integration.
            Connect the API endpoint that you will use for each action, set them
            up, and configure/design the settings users will fill out.
          </AlertDescription>
          <Link
            className="mt-3 inline-block text-sm font-semibold text-gray-500 hover:underline"
            href="#"
          >
            Learn more
          </Link>
        </AlertContent>
        <CloseButton />
      </Alert>

      <div className="mt-6 flex items-center justify-between">
        <div className="space-y-1">
          <h3 className="text-base font-semibold text-gray-600">3 Actions</h3>
          <p className="text-sm">View and manage your actions</p>
        </div>

        <Button>
          <Plus2 />
          New Action
        </Button>
      </div>

      <table className="mt-6 w-full table-fixed border-separate border-spacing-y-2.5 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-200 scrollbar-thumb-rounded-lg">
        <tbody>
          <tr className="rounded-lg shadow-xs">
            <td className="border-y border-gray-200 bg-white px-6 py-[18px] first:rounded-l-lg first:border-l last:rounded-r-lg last:border-r">
              <h4 className="truncate text-sm font-medium text-gray-900">
                Form Action Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Neque aliquam cumque ab.
              </h4>
              <p className="mt-1 truncate text-sm text-gray-500">
                New form is submitted
              </p>
            </td>
            <td className="border-y border-gray-200 bg-white px-6 py-[18px] first:rounded-l-lg first:border-l last:rounded-r-lg last:border-r">
              <h4 className="truncate text-sm font-medium text-gray-900">
                3 Events
              </h4>
            </td>
            <td className="border-y border-gray-200 bg-white px-6 py-[18px] first:rounded-l-lg first:border-l last:rounded-r-lg last:border-r">
              <Badge visual="success">Test Successful</Badge>
            </td>
            <td className="border-y border-gray-200 bg-white px-6 py-[18px] first:rounded-l-lg first:border-l last:rounded-r-lg last:border-r">
              <div className="flex justify-end">
                <IconButton variant="ghost" visual="gray">
                  <MoreHorizontal className="text-gray-500" />
                </IconButton>
              </div>
            </td>
          </tr>
          <tr className="rounded-lg shadow-xs">
            <td className="border-y border-gray-200 bg-white px-6 py-[18px] first:rounded-l-lg first:border-l last:rounded-r-lg last:border-r">
              <h4 className="truncate text-sm font-medium text-gray-900">
                Form Action Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Neque aliquam cumque ab.
              </h4>
              <p className="mt-1 truncate text-sm text-gray-500">
                New form is submitted
              </p>
            </td>
            <td className="border-y border-gray-200 bg-white px-6 py-[18px] first:rounded-l-lg first:border-l last:rounded-r-lg last:border-r">
              <h4 className="truncate text-sm font-medium text-gray-900">
                3 Events
              </h4>
            </td>
            <td className="border-y border-gray-200 bg-white px-6 py-[18px] first:rounded-l-lg first:border-l last:rounded-r-lg last:border-r">
              <Badge visual="success">Test Successful</Badge>
            </td>
            <td className="border-y border-gray-200 bg-white px-6 py-[18px] first:rounded-l-lg first:border-l last:rounded-r-lg last:border-r">
              <div className="flex justify-end">
                <IconButton variant="ghost" visual="gray">
                  <MoreHorizontal className="text-gray-500" />
                </IconButton>
              </div>
            </td>
          </tr>
          <tr className="rounded-lg shadow-xs">
            <td className="border-y border-gray-200 bg-white px-6 py-[18px] first:rounded-l-lg first:border-l last:rounded-r-lg last:border-r">
              <h4 className="truncate text-sm font-medium text-gray-900">
                Form Action Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Neque aliquam cumque ab.
              </h4>
              <p className="mt-1 truncate text-sm text-gray-500">
                New form is submitted
              </p>
            </td>
            <td className="border-y border-gray-200 bg-white px-6 py-[18px] first:rounded-l-lg first:border-l last:rounded-r-lg last:border-r">
              <h4 className="truncate text-sm font-medium text-gray-900">
                3 Events
              </h4>
            </td>
            <td className="border-y border-gray-200 bg-white px-6 py-[18px] first:rounded-l-lg first:border-l last:rounded-r-lg last:border-r">
              <Badge visual="success">Test Successful</Badge>
            </td>
            <td className="border-y border-gray-200 bg-white px-6 py-[18px] first:rounded-l-lg first:border-l last:rounded-r-lg last:border-r">
              <div className="flex justify-end">
                <IconButton variant="ghost" visual="gray">
                  <MoreHorizontal className="text-gray-500" />
                </IconButton>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Actions;
