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
    <nav className="absolute left-[70px] right-0 top-0 z-20 flex h-[70px] items-center justify-between border-b border-gray-200 bg-white pl-[25px] pr-[17px]">
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
            <BreadcrumbLink href="/">Account</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href="/">Personal Info</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </div>
    </nav>
  );
}
