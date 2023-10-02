import { Meta, StoryObj } from "@storybook/react";
import PersonalInfoPageSidebar from "@/components/ui/personal-info-page-sidebar";

const meta: Meta = {
  title: "PersonalInfoPageSidebar",
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
        <PersonalInfoPageSidebar />;
      </div>
    </>
  );
};
