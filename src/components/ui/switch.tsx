'use client';

import * as React from 'react';
import * as SwitchPrimitive from '@radix-ui/react-switch';
import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

const switchRootVariantsConfig = {
  size: { small: 'h-5 w-9', medium: 'h-6 w-11' },
};

const switchRootVariants = cva(
  'peer data-[state=checked]:bg-gfe-bg-brand-primary focus-visible:border-ring focus-visible:ring-ring/50 data-[state=unchecked]:bg-gfe-bg-secondary inline-flex shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50',
  { variants: switchRootVariantsConfig, defaultVariants: { size: 'medium' } }
);

const switchThumbVariantsConfig = {
  size: { small: 'size-4', medium: 'size-5' },
};
const switchThumbVariants = cva(
  'bg-gfe-bg-primary pointer-events-none block rounded-full ring-0 transition-transform data-[state=checked]:translate-x-[calc(105%)] data-[state=unchecked]:translate-x-0.25',
  { variants: switchThumbVariantsConfig, defaultVariants: { size: 'medium' } }
);

function Switch({
  className,
  size = 'medium',
  ...props
}: React.ComponentProps<typeof SwitchPrimitive.Root> &
  VariantProps<typeof switchRootVariants>) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(switchRootVariants({ size }), className)}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(switchThumbVariants({ size }))}
      />
    </SwitchPrimitive.Root>
  );
}

export { Switch, switchRootVariantsConfig };
