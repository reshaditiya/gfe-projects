import { Badge, badgeVariantsConfig } from '@/components/ui/badge';
import type { Meta, StoryObj } from '@storybook/react';

const colorOptions = Object.keys(badgeVariantsConfig.color) as Array<
  keyof typeof badgeVariantsConfig.color
>;

const sizeOptions = Object.keys(badgeVariantsConfig.size) as Array<
  keyof typeof badgeVariantsConfig.size
>;

const meta = {
  title: 'Components/UI/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    color: {
      options: colorOptions,
      control: { type: 'select' },
      table: {
        defaultValue: { summary: 'neutral' },
      },
    },
    size: {
      options: sizeOptions,
      control: { type: 'radio' },
      table: {
        defaultValue: { summary: 'medium' },
      },
      type: 'string',
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'Docs: https://ui.shadcn.com/docs/components/badge',
      },
    },
  },
  args: {
    children: 'Label',
    color: 'neutral',
    size: 'medium',
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
