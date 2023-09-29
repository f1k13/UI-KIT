import { TextField } from "@/components";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Example/TextField",
  component: TextField,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      type: "string",
      control: {
        type: "radio",
      },
      options: ["outlined", "filled", "standard"],
    },
    size: {
      type: "string",
      control: {
        type: "radio",
      },
      options: ["lg", "md", "sm"],
    },
  },
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Primary: Story = {
  args: {},
};