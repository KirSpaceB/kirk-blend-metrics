import { Meta, StoryObj } from "@storybook/react";

import { DatePicker } from "@/components/ui/date-picker";
import { DoubleDatePicker } from "@/components/ui/double-datepicker";

const meta: Meta = {
  title: "DatePicker",
};

export default meta;

export const Default: StoryObj = {
  render: () => <DatePicker />,
};

export const DoubleDatePickerVariant: StoryObj = {
  render: () => <DoubleDatePicker />,
};
