import type { CompositionProps, EmptyProps } from '@/types';

export interface ButtonProps extends EmptyProps<'button'>, CompositionProps {
  /**
   * The visual style variant of the button.
   * @default "default"
   */
  variant?:
    | 'default'
    | 'destructive'
    | 'warning'
    | 'outline'
    | 'secondary'
    | 'ghost'
    | 'link'
    | 'success';
  /**
   * The size of the button.
   * @default "default"
   */
  size?: 'default' | 'sm' | 'lg' | 'icon' | 'pill';
  /**
   * When true, shows loading state and disables the button.
   * @default false
   */
  loading?: boolean;
}
