import type { CompositionProps, EmptyProps } from '@/types';

export interface AlertRootProps extends EmptyProps<'div'>, CompositionProps {
  /**
   * The variant of the alert.
   * @default "default"
   */
  variant?: 'default' | 'success' | 'warning' | 'destructive';
  /**
   * The icon to display in the alert.
   */
  icon?: React.ReactNode;
  /**
   * Whether the alert can be dismissed.
   * @default false
   */
  dismissible?: boolean;
  /**
   * Callback function called when the alert is dismissed.
   */
  onDismiss?: () => void;
}

export interface AlertTitleProps extends EmptyProps<'div'>, CompositionProps {}

export interface AlertDescriptionProps extends EmptyProps<'div'>, CompositionProps {}

export interface AlertActionProps extends EmptyProps<'div'>, CompositionProps {}

export type AlertProps = AlertRootProps;
