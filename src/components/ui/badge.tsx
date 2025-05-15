import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const badgeVariantsConfig = {
  color: {
    neutral:
      'border-gfe-line-primary bg-gfe-bg-neutral-subtle text-gfe-text-tertiary',
    error:
      'border-gfe-line-error-subtle bg-gfe-bg-error-subtle text-gfe-text-error',
    warning:
      'border-gfe-line-warning-subtle bg-gfe-bg-warning-subtle text-gfe-text-warning',
    success:
      'border-gfe-line-success bg-gfe-bg-success-subtle text-gfe-text-success',
    brand:
      'border-gfe-line-brand-subtle bg-gfe-bg-brand-subtle text-gfe-text-brand',
  },
  size: {
    small: 'px-1.25 text-xs',
    medium: 'px-1.75 text-sm',
    large: 'px-2.25 py-0.5 text-sm',
  },
};

const badgeVariants = cva(
  'focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-gfe-text-error/20 dark:aria-invalid:ring-gfe-text-error/40 aria-invalid:border-gfe-text-error inline-flex w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-2xl border whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] [&>svg]:pointer-events-none [&>svg]:size-3',
  {
    variants: badgeVariantsConfig,
    defaultVariants: {
      color: 'neutral',
      size: 'medium',
    },
  }
);

function Badge({
  className,
  color,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<'span'> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : 'span';

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ color, size }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants, badgeVariantsConfig };
