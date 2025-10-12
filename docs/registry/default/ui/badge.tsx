import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import type * as React from 'react';

import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex h-5 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden whitespace-nowrap border px-1.5 font-semibold text-xs leading-4 transition-[color,box-shadow] focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&>svg]:pointer-events-none [&>svg]:size-3',
  {
    variants: {
      variant: {
        positive: 'border-success/30 bg-success/10 text-success',
        info: 'border-primary/30 bg-primary/10 text-primary',
        negative: 'border-destructive/30 bg-destructive/10 text-destructive',
        warning: 'border-attention/30 bg-attention/10 text-attention',
        urgent: 'border-destructive bg-destructive text-destructive-foreground',
      },
      shape: {
        default: 'rounded-md',
        pill: 'rounded-full',
        square: 'rounded-none',
      },
    },
    defaultVariants: {
      variant: 'positive',
      shape: 'default',
    },
  }
);

interface BadgeProps extends React.ComponentProps<'span'>, VariantProps<typeof badgeVariants> {
  asChild?: boolean;
  icon?: React.ReactNode;
}

function Badge({
  className,
  variant,
  shape,
  asChild = false,
  icon,
  children,
  ...props
}: BadgeProps) {
  const Comp = asChild ? Slot : 'span';

  return (
    <Comp data-slot='badge' className={cn(badgeVariants({ variant, shape }), className)} {...props}>
      {icon && <span className='flex h-3 w-3 items-center justify-center'>{icon}</span>}
      {children}
    </Comp>
  );
}

export { Badge, badgeVariants };
