import { ArrowLeft2 } from "@/components/icons";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@radix-ui/react-tooltip";
import React from "react";
import { Button } from "../button";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "../breadcrumb";

export default function AccountInfoSettingsNav() {
  return (
    <nav className="fixed left-[86px] top-[7px] flex h-16 w-screen items-center justify-start border-b border-gray-200 px-4">
      <div className="flex items-center gap-x-5">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
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
    </nav>
  );
}
