import { Meta, StoryObj } from "@storybook/react";
import SettingSecurityMainPage from "@/components/ui/settings-security/settings-security-mainpage";
const meta: Meta = {
  title: "SettingSecurityMainPage",
  component: SettingSecurityMainPage,
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

type Story = StoryObj<typeof SettingSecurityMainPage>;

export const Base: Story = {
  render: () => <SettingSecurityMainPage />,
};
