"use client";

import Image from "next/image";

import { Plus2 } from "@/components/icons";
import {
  Button,
  HelperText,
  Label,
  RadioGroup,
  RadioGroupItemSelector,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui";
import { BasicSettingsPreview } from "./basic-settings-preview";
import { AdvancedSettingsPreview } from "./advanced-settings-preview";

export default function SetupTab() {
  return (
    <>
      <h3 className="text-sm font-medium text-gray-900">
        What action will you do?
      </h3>

      <RadioGroup className="mt-3 gap-y-2" defaultValue="Option 1">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="grid">
                <RadioGroupItemSelector value="Option 1">
                  <Label>Assign a Tag</Label>
                  <HelperText>Add a tag in the workflow</HelperText>
                </RadioGroupItemSelector>
              </div>
            </TooltipTrigger>
            <TooltipContent side="bottom" align="center">
              This is the event that you are currently working on
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="grid">
                <RadioGroupItemSelector value="Option 2">
                  <Label>Unassign a Tag</Label>
                  <HelperText>Remove a tag in the workflow</HelperText>
                </RadioGroupItemSelector>
              </div>
            </TooltipTrigger>
            <TooltipContent side="bottom" align="center">
              Go back to events list in order to setup settings for another
              event
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </RadioGroup>

      <div className="mt-6 space-y-6">
        <BasicSettingsPreview />
        <AdvancedSettingsPreview />
      </div>

      <div className="mt-auto pt-9">
        <h3 className="text-sm font-semibold text-gray-900">
          Connect your account
        </h3>

        <div className="mt-3 flex items-center justify-between gap-x-3 rounded-lg border border-gray-200 bg-white p-3 pr-[18px]">
          <div className="flex items-center gap-x-3">
            <div className="flex h-12 w-12 flex-none items-center justify-center rounded-lg border-[1.5px] border-gray-200">
              <div className="relative h-6 w-6 flex-none">
                <Image
                  className="object-contain"
                  fill
                  src="/typeform.png"
                  alt="Typeform"
                  sizes="50vw"
                />
              </div>
            </div>
            <h3 className="text-[13px] font-medium leading-4 text-gray-900">
              Connect your Typeform account
            </h3>
          </div>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  className="disabled:pointer-events-auto disabled:opacity-100"
                  variant="outlined"
                  visual="gray"
                  disabled
                >
                  <Plus2 />
                  Connect
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                Button is disabled in a preview mode
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </>
  );
}
