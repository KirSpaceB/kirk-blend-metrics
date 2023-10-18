import { Meta, StoryObj } from "@storybook/react";

import { CircularProgressDropzone, Dropzone } from "@/components/ui";

const meta: Meta = {
  title: "Dropzone",
  argTypes: {
    icon: {
      type: "boolean",
    },
  },
  args: {
    icon: false,
  },
  parameters: {
    design: [
      {
        type: "figma",
        url: "https://www.figma.com/file/CgaxYAFROXbQH5fgPw8sX4/Blend-Metrics---New-Design-System?type=design&node-id=2-82132&mode=design&t=sYSRlxVlbWw5O6kd-4",
      },
      {
        type: "figma",
        url: "https://www.figma.com/file/CgaxYAFROXbQH5fgPw8sX4/Blend-Metrics---New-Design-System?type=design&node-id=2-82459&mode=design&t=sYSRlxVlbWw5O6kd-4",
      },
    ],
  },
};

export default meta;

export const Default: StoryObj = {
  argTypes: {
    maxFiles: {
      type: "number",
    },
  },
  render: (args) => <Dropzone {...args} />,
};

export const CircularProgressVariant: StoryObj = {
  render: (args) => <CircularProgressDropzone {...args} />,
};
