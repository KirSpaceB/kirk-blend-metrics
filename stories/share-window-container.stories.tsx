import { Meta, StoryObj } from "@storybook/react";
import ShareWindowContainer from "@/components/ui/share-window-container";

const meta: Meta = {
  title: "ShareWindowContainer",
  component: ShareWindowContainer,
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

type Story = StoryObj<typeof ShareWindowContainer>;

export const Base: Story = {
  render: () => <ShareWindowContainer />,
};
