import { Badge, badgeVariantsConfig } from '@/components/ui/badge';
import type { Meta, StoryObj } from '@storybook/react';

const colorVariantOptions = Object.keys(badgeVariantsConfig.color) as Array<
  keyof typeof badgeVariantsConfig.color
>;

const sizeVariantOptions = Object.keys(badgeVariantsConfig.size) as Array<
  keyof typeof badgeVariantsConfig.size
>;

const meta = {
  title: 'Components/UI/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    color: {
      options: colorVariantOptions,
      control: { type: 'select' },
      table: {
        defaultValue: { summary: 'neutral' },
      },
    },
    size: {
      options: sizeVariantOptions,
      control: { type: 'radio' },
      table: {
        defaultValue: { summary: 'medium' },
      },
      type: 'string',
    },
    asChild: {
      description: 'Render as child',
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'Modified version of https://ui.shadcn.com/docs/components/badge',
      },
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Label',
    color: 'neutral',
    size: 'medium',
  },
};
