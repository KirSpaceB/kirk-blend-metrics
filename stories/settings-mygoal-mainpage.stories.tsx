import { Meta } from "@storybook/react";
import SettingsMyGoalMainPage from "@/components/ui/settings-mygoal/settings-mygoal-mainpage";

const meta: Meta = {
  title: "SettingsMyGoalMainPage",
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
        <SettingsMyGoalMainPage />;
      </div>
    </>
  );
};
