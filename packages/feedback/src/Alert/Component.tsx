import React from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import clsx from 'clsx';

type AlertVariantType = 'destructive' | 'default';
type AlertSizeType = 'sm' | 'md' | 'lg';

interface IAlertPropsType
  extends Omit<React.ComponentProps<typeof Dialog>, 'children' | 'onClose'> {
  children: React.ReactNode;
  variant?: AlertVariantType;
  size?: AlertSizeType;
  onClose: () => void;
}

const Alert: React.FC<IAlertPropsType> = ({
  children,
  variant = 'default',
  size = 'md',
  onClose,
  className,
  ...props
}) => {
  const panelClasses = clsx(
    // Base classes
    'w-full rounded-xl p-6 backdrop-blur-2xl transition-all duration-300 ease-out',
    'data-closed:transform-[scale(95%)] data-closed:opacity-0',

    // Size variants
    {
      'max-w-sm': size === 'sm',
      'max-w-md': size === 'md',
      'max-w-lg': size === 'lg',
    },

    // Color variants
    {
      // Default variant
      'bg-white/10 border border-white/20': variant === 'default',

      // Destructive variant (red theme)
      'bg-red-900/20 border border-red-500/30': variant === 'destructive',
    },

    className,
  );

  return (
    <Dialog
      onClose={onClose}
      as="div"
      className="relative z-10 focus:outline-none"
      {...props}
    >
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4">
          <DialogPanel transition className={panelClasses}>
            {children}
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};

export default Alert;
