import { Slot } from '@radix-ui/react-slot';
import * as React from 'react';

import { cn } from '@/registry/default/lib/utils';
import { Button } from '@/registry/default/ui/button';

/* ---------------------------------- Types --------------------------------- */
export type ButtonGroupProps = React.HTMLAttributes<HTMLDivElement> & {
  /** Size for items in the group; maps to Button sizes. */
  size?: 'sm' | 'default' | 'pill';
  /** Disable all actions on buttons within this group. */
  disabled?: boolean;
  /** Orientation of the group. */
  orientation?: 'horizontal' | 'vertical';
};

type ButtonGroupContextProps = {
  size?: ButtonGroupProps['size'];
  disabled?: ButtonGroupProps['disabled'];
  orientation?: ButtonGroupProps['orientation'];
};

export type ButtonGroupElement = HTMLDivElement;

export type ButtonGroupItemProps = React.ComponentPropsWithoutRef<typeof Button>;

/* --------------------------------- Context -------------------------------- */
const ButtonGroupContext = React.createContext<ButtonGroupContextProps | null>(null);

function useButtonGroupContext() {
  const context = React.useContext(ButtonGroupContext);

  if (!context) {
    throw new Error('ButtonGroupItem must be used within a ButtonGroup');
  }

  return context;
}

/* ------------------------------- Components ------------------------------- */
const ButtonGroup = React.forwardRef<HTMLDivElement, ButtonGroupProps>((props, ref) => {
  const {
    className,
    children,
    size = 'default',
    disabled = false,
    orientation = 'horizontal',
    ...otherProps
  } = props;

  return (
    <ButtonGroupContext.Provider value={{ size, disabled, orientation }}>
      <div
        ref={ref}
        className={cn(
          'inline-flex flex-wrap items-stretch rounded-md',
          orientation === 'vertical' ? 'flex-col divide-y divide-border' : 'divide-x divide-border',
          className
        )}
        {...otherProps}
      >
        {children}
      </div>
    </ButtonGroupContext.Provider>
  );
});

const ButtonGroupItem = React.forwardRef<HTMLButtonElement, ButtonGroupItemProps>((props, ref) => {
  const {
    asChild = false,
    children,
    className,
    disabled = false,
    size: _itemSize,
    ...otherProps
  } = props;

  const context = useButtonGroupContext();
  const { disabled: ctxDisabled, orientation = 'horizontal', size = 'default' } = context || {};
  const effectiveSize = _itemSize ?? size;

  const useAsChild = asChild && React.isValidElement(children);
  const Component = useAsChild ? Slot : Button;

  return (
    <Component
      ref={ref}
      className={cn(
        'flex items-center rounded-none focus:ring-0 focus:ring-none focus:ring-offset-0 focus-visible:z-10',
        'last-of-type:[&+span]:hidden',
        orientation === 'horizontal'
          ? effectiveSize === 'pill'
            ? 'first-of-type:rounded-s-full last-of-type:rounded-e-full'
            : 'first-of-type:rounded-s-md last-of-type:rounded-e-md'
          : effectiveSize === 'pill'
          ? 'first-of-type:rounded-t-full last-of-type:rounded-b-full'
          : 'first-of-type:rounded-t-md last-of-type:rounded-b-md',
        className
      )}
      disabled={disabled ? disabled : ctxDisabled}
      size={effectiveSize}
      {...otherProps}
    >
      {children}
    </Component>
  );
});

ButtonGroup.displayName = 'ButtonGroup';
ButtonGroupItem.displayName = 'ButtonGroupItem';

export { ButtonGroupItem };
export default ButtonGroup;
