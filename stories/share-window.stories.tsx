import { Meta, StoryObj } from "@storybook/react";
import ShareWindow from "@/components/ui/share-window";


const meta: Meta = {
  title:"ShareWindow",
  component:ShareWindow,
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

type Story = StoryObj<typeof ShareWindow>;

export const Base: Story = {
  render: () => (
    <ShareWindow/>
  )
}