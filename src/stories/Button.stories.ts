import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '@/components/button';

const meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      type: 'string',
      control: {
        type: 'radio',
      },
      options: ['text', 'contained', 'outlined'],
    },
    disabled: {
      type: 'boolean',
      control: {
        type: 'boolean',
      },
    },
    color: {
      type: 'string',
      control: {
        type: 'radio',
      },
      options: ['secondary', 'success', 'error', 'default'],
    }
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Primary: Story = {
  args: {
    children: 'text',
  },
};

