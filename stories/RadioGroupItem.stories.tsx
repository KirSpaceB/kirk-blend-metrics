import { Meta, StoryObj } from "@storybook/react";

import { RadioGroup, RadioGroupItem } from "@/components/ui";

const meta: Meta = {
  component: RadioGroupItem,
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    disabled: {
      control: "boolean",
    },
    value: {
      control: "text",
    },
  },
  args: {
    disabled: false,
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/CgaxYAFROXbQH5fgPw8sX4/Blend-Metrics---New-Design-System?type=design&node-id=515-203414&mode=design&t=rlIa0Hm4A6BZWLwF-4",
    },
  },
};

type Story = StoryObj<typeof RadioGroupItem>;

export default meta;

export const Sm: Story = {
  args: {
    value: "Option 1",
  },
  render: (args) => {
    return (
      <RadioGroup>
        <RadioGroupItem {...args} />
      </RadioGroup>
    );
  },
};

export const Md: Story = {
  args: {
    size: "md",
    value: "Option 1",
  },
  render: (args) => {
    return (
      <RadioGroup>
        <RadioGroupItem {...args} />
      </RadioGroup>
    );
  },
};

export const Lg: Story = {
  args: {
    size: "lg",
    value: "Option 1",
  },
  render: (args) => {
    return (
      <RadioGroup>
        <RadioGroupItem {...args} />
      </RadioGroup>
    );
  },
};
