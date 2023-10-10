"use client";

import dynamic from "next/dynamic";

import { AlertCircle2, ArrowLeft2, Eye, Tag } from "@/components/icons";
import {
  Button,
  ScrollArea,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui";
import { PreviewMachineContext } from "@/machines";

const SetupTab = dynamic(() => import("./setup-tab"));

function Preview({ setupTab }: { setupTab: React.ReactNode }) {
  const [state, send] = PreviewMachineContext.useActor();

  if (state.matches("inactive")) {
    return (
      <div className="h-[calc(theme(height.screen)-118px)] min-h-[666px] rounded-lg bg-gray-50 p-6 shadow-[0px_4px_20px_0px_rgba(0,0,0,0.08)]">
        <div className="rounded-xl bg-white p-6 shadow-xl">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-success-100">
            <Eye className="h-6 w-6 flex-none text-success-500" />
          </div>
          <h1 className="mt-2 text-center text-lg font-semibold text-gray-900">
            Preview Event Here
          </h1>
          <p className="mt-2 text-center text-sm text-gray-500">
            See how your event settings fields will look in real life.
          </p>
          <p className="mt-4 text-center text-sm text-gray-500">
            You’ll see changes in real-time.
          </p>
          <Button className="mt-6 w-full" onClick={() => send("ACTIVATE")}>
            Get Started
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-[calc(theme(height.screen)-118px)] min-h-[666px] flex-col rounded-lg shadow-[0px_4px_20px_0px_rgba(0,0,0,0.08)]">
      <div className="flex items-start justify-between p-5">
        <div className="flex items-center">
          <div className="flex h-12 w-12 flex-none items-center justify-center rounded-lg border-2 border-gray-200 text-primary-500">
            <Tag className="h-8 w-8 flex-none" />
          </div>
          <div className="ml-[15px]">
            <h3 className="text-base font-medium text-gray-900">Tag/Untag</h3>
            <p className="text-xs leading-[14.52px] text-gray-500">
              Assign or Remove Tags
            </p>
          </div>
        </div>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                className="inline-flex items-center gap-x-1 text-sm font-semibold text-primary-500"
                disabled
                onClick={() => send("INACTIVATE")}
              >
                <ArrowLeft2 className="flex-none" />
                Back
              </button>
            </TooltipTrigger>
            <TooltipContent side="bottom" align="start">
              Button is disabled in a preview mode
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>

      <Tabs defaultValue="setup" className="h-[calc(theme(height.full)-88px)]">
        <TabsList className="grid h-11 grid-cols-3 border-t">
          <TabsTrigger
            className="disabled:opacity-100 disabled:data-[state=active]:border-b-primary-500 disabled:data-[state=active]:text-primary-500"
            value="setup"
            disabled
          >
            Setup <AlertCircle2 className="text-error-500" />
          </TabsTrigger>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <TabsTrigger
                  className="disabled:opacity-100 disabled:data-[state=active]:border-b-primary-500 disabled:data-[state=active]:text-primary-500"
                  value="filters"
                  disabled
                >
                  Filters
                </TabsTrigger>
              </TooltipTrigger>
              <TooltipContent>
                Tabs are disabled in a preview mode
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <TabsTrigger
                  className="disabled:opacity-100 disabled:data-[state=active]:border-b-primary-500 disabled:data-[state=active]:text-primary-500"
                  value="test"
                  disabled
                >
                  Test
                </TabsTrigger>
              </TooltipTrigger>
              <TooltipContent>
                Tabs are disabled in a preview mode
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </TabsList>

        <TabsContent
          className="relative flex h-[calc(theme(height.full)-theme(height.11))] flex-col"
          value="setup"
        >
          <ScrollArea className="h-full">
            <div className="flex h-full flex-col p-5">{setupTab}</div>
          </ScrollArea>
        </TabsContent>
        <TabsContent value="filters"></TabsContent>
        <TabsContent value="test"></TabsContent>
      </Tabs>
    </div>
  );
}

export default function PreviewSegment() {
  return <Preview setupTab={<SetupTab />} />;
}
