import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/UI/Tooltip',
  component: TooltipProvider,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Modified version of https://ui.shadcn.com/docs/components/tooltip',
      },
    },
  },
  subcomponents: {
    Tooltip,
    TooltipTrigger,
    TooltipContent,
  },
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <Tooltip open>
        <TooltipTrigger className="invisible h-[1px] w-[1px]">
          Text
        </TooltipTrigger>
        <TooltipContent>This is a tooltip</TooltipContent>
      </Tooltip>
    ),
  },
  argTypes: {
    children: {
      control: {
        disable: true,
      },
    },
    delayDuration: {
      control: {
        disable: true,
      },
    },
    disableHoverableContent: {
      control: {
        disable: true,
      },
    },
    skipDelayDuration: {
      control: {
        disable: true,
      },
    },
  },
};
