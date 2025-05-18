import { Switch, switchRootVariantsConfig } from '@/components/ui/switch';
import { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

const sizeOptions = Object.keys(switchRootVariantsConfig.size) as Array<
  keyof typeof switchRootVariantsConfig.size
>;

const meta = {
  title: 'Components/UI/Switch',
  component: Switch,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Docs: https://ui.shadcn.com/docs/components/switch',
      },
    },
  },
  argTypes: {
    size: {
      options: sizeOptions,
      control: { type: 'radio' },
      table: {
        defaultValue: { summary: 'medium' },
      },
      type: 'string',
    },
    'aria-label': {
      table: {
        disable: true,
      },
    },
  },
  args: {
    onCheckedChange: fn(),
    'aria-label': 'Label',
    size: 'medium',
    checked: false,
  },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
