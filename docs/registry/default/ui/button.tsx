import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import type * as React from 'react';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium text-sm outline-none ring-offset-transparent transition-all focus-visible:border-background focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          'border-primary/20 border-x border-b bg-gradient-to-b from-primary/80 to-primary text-primary-foreground shadow focus:ring-3 focus:ring-primary/50 focus:ring-offset-1 active:opacity-90',
        destructive:
          'border-destructive/20 border-x border-b bg-gradient-to-b from-destructive/80 to-destructive text-destructive-foreground shadow focus:ring-3 focus:ring-destructive/50 focus:ring-offset-1 active:opacity-90',
        warning:
          'border-attention/20 border-x border-b bg-gradient-to-b from-attention/80 to-attention text-attention-foreground shadow focus:ring-3 focus:ring-attention/50 focus:ring-offset-1 active:opacity-90',
        outline:
          'border border-input bg-gradient-to-b from-background to-background/80 text-foreground shadow hover:bg-accent/50 focus:ring-3 focus:ring-ring/50 focus:ring-offset-1 active:opacity-90',
        secondary:
          'border-secondary/20 border-x border-b bg-gradient-to-b from-secondary/80 to-secondary text-secondary-foreground shadow focus:ring-3 focus:ring-accent focus:ring-offset-1 active:opacity-90',
        ghost:
          'text-foreground hover:bg-gradient-to-b hover:from-accent hover:to-accent/80 focus:ring-3 focus:ring-ring/50 focus:ring-offset-1 active:opacity-90',
        link: 'text-primary underline-offset-4 hover:underline focus:ring-3 focus:ring-primary/50 active:opacity-90',
        success:
          'border-success border-b bg-gradient-to-b from-success/80 to-success text-white shadow focus:ring-3 focus:ring-success/50 focus:ring-offset-1 active:opacity-90',
      },
      size: {
        default: 'h-8 rounded-xl px-3 py-2 has-[>svg]:px-3',
        sm: 'h-7 gap-1.5 rounded-xl px-2.5 has-[>svg]:px-2.5',
        lg: 'h-10 rounded-xl px-6 text-base has-[>svg]:px-4',
        icon: 'size-9 rounded-xl',
        pill: "h-7 rounded-full px-2.5 has-[>svg]:px-2.5 [&_svg:not([class*='size-'])]:size-3",
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

interface ButtonProps extends React.ComponentProps<'button'>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
}

function Button({
  className,
  variant,
  size,
  asChild = false,
  loading = false,
  children,
  disabled,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      data-slot='button'
      className={cn(buttonVariants({ variant, size, className }))}
      disabled={disabled || loading}
      {...props}
    >
      {/* {loading && <Loader2 className='mr-0.5 h-4 w-4 animate-spin' />} */}
      {children}
    </Comp>
  );
}

export { Button, buttonVariants };
