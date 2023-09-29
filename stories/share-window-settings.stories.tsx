import { Meta, StoryObj } from "@storybook/react";
import ShareWindowSettings from "@/components/ui/share-window-settings";

const meta: Meta = {
  title: "ShareWindowSettings",
  component: ShareWindowSettings,
  parameters: {
    backgrounds: {
      default: "black",
      values: [
        {
          name: "white",
          value: "#000000",
        },
      ],
    },
  },
};

export default meta;

type Story = StoryObj<typeof ShareWindowSettings>;

export const Base: Story = {
  render: () => <ShareWindowSettings />,
};
