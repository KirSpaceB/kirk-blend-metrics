import { Meta, StoryObj } from "@storybook/react";
import { ShareWindowInput } from "@/components/ui/share-window-input";
const meta: Meta = {
  title: "ShareWindowInput",
  component: ShareWindowInput,
  parameters: {
    backgrounds: {
      default: "lightBlue", // set this to the name of the new background color
      values: [
        {
          name: "black",
          value: "#000000",
        },
        {
          name: "lightBlue", // name of the new background color
          value: "#ADD8E6", // hex value for light blue
        },
      ],
    },
  },
};

export default meta;

type Story = StoryObj<typeof ShareWindowInput>;

export const Base: Story = {
  render: () => <ShareWindowInput />,
};
