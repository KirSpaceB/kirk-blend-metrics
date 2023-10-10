import { ScrollArea, ScrollBar } from "@/components/ui";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta = {
  title: "Scrollbar",
};

export default meta;

export const Default: StoryObj = {
  render: () => (
    <div className="max-w-2xl rounded-lg bg-gray-50">
      <ScrollArea
        className="h-80"
        scrollBar={<ScrollBar className="w-4 p-1" />}
      >
        <div className="min-h-screen" />
      </ScrollArea>
    </div>
  ),
};
