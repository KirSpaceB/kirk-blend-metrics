import dynamic from "next/dynamic";

import { ChevronLeft, ChevronUpDown, PlayCircle } from "@/components/icons";
import {
  ScrollArea,
  ScrollBar,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui";
import { SettingMachineContext } from "@/machines";

const SourceTab = dynamic(() => import("./source-tab"));
const SetupTab = dynamic(() => import("./setup-tab"));
const TestTab = dynamic(() => import("./test-tab"));

function Panels({
  sourceTab,
  setupTab,
  testTab,
}: {
  sourceTab?: React.ReactNode;
  setupTab?: React.ReactNode;
  testTab?: React.ReactNode;
}) {
  const [, send] = SettingMachineContext.useActor();

  return (
    <Tabs
      className="relative h-[calc(theme(height.full)-52px)]"
      defaultValue="source"
    >
      <TabsList className="grid h-11 w-full grid-cols-3 justify-between">
        <TabsTrigger value="source">Source</TabsTrigger>
        <TabsTrigger value="setup">Setup</TabsTrigger>
        <TabsTrigger value="test">Test</TabsTrigger>
      </TabsList>
      <button
        className="absolute -right-4 top-7 z-10 inline-flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 bg-white shadow-xs transition duration-200 hover:border-2 focus-visible:outline-none"
        onClick={() => send("TOGGLE")}
      >
        <ChevronLeft className="flex-none text-gray-500" />
      </button>
      <TabsContent
        className="h-[calc(theme(height.full)-theme(height.11))]"
        value="source"
      >
        <ScrollArea
          className="h-full"
          scrollBar={<ScrollBar className="w-4 p-1" />}
        >
          {sourceTab}
        </ScrollArea>
      </TabsContent>
      <TabsContent
        className="h-[calc(theme(height.full)-theme(height.11))]"
        value="setup"
      >
        <ScrollArea
          className="h-full"
          scrollBar={<ScrollBar className="w-4 p-1" />}
        >
          {setupTab}
        </ScrollArea>
      </TabsContent>
      <TabsContent
        className="h-[calc(theme(height.full)-theme(height.11))]"
        value="test"
      >
        <ScrollArea
          className="h-full"
          scrollBar={<ScrollBar className="w-4 p-1" />}
        >
          {testTab}
        </ScrollArea>
      </TabsContent>
    </Tabs>
  );
}

export default function Page() {
  return (
    <>
      <div className="flex items-center justify-between p-5 pb-2">
        <div className="inline-flex flex-none items-center gap-x-2 text-base font-medium text-gray-900 focus-visible:outline-none">
          <ChevronUpDown className="h-[18px] w-[18px] flex-none" />
          Dropdown
        </div>
        <button className="inline-flex items-center justify-center gap-x-2 text-sm font-semibold text-primary-500 focus-visible:outline-none">
          <PlayCircle className="h-[15px] w-[15px]" />
          Overview
        </button>
      </div>
      <Panels
        setupTab={<SetupTab />}
        sourceTab={<SourceTab />}
        testTab={<TestTab />}
      />
    </>
  );
}
