import { Avatar } from "@/components/ui";
import AvatarDropdown from "@/components/ui/avatar-dropdown";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta = {
  title:"AvatarDropdown",
  component:AvatarDropdown,
  parameters: {
    backgrounds: {
      default:'black',
      values: [
        {
          name:'black',
          value:'#000000'
        }
      ]
    }
  }
}

export default meta;

type Story = StoryObj<typeof AvatarDropdown>;

export const Base: Story = {
  render: () => (
    <AvatarDropdown avatars={[{ email: 'chris@gmail.com', image: Avatar }]}/>
  )
}