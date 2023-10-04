import { Meta } from "@storybook/react";
import AccountInfoSettingsLayout from "@/components/ui/account-settings-info-page/account-info-settings-layout";

const meta: Meta = {
  title: "AccountInfoSettingsLayout",
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

export const PersonalInfoPageSidebarStory = () => {
  return (
    <>
      <div>
        <AccountInfoSettingsLayout />;
      </div>
    </>
  );
};
