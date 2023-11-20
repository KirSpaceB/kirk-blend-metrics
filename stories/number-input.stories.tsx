import { NumberInput } from "@/components/ui";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta = {
  title: "NumberInput",
};

export default meta;

export const Default: StoryObj = {
  render: (args) => <NumberInput {...args} />,
};
