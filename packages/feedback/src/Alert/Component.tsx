import React, { createContext, useContext } from 'react';
import { ColorSelectionType, getAlertVariantClasses } from '@eliseoeric/core';
import { Dialog, DialogPanel } from '@headlessui/react';
import clsx from 'clsx';

type AlertContextType = {
  titleTextClass: string;
  descriptionTextClass: string;
};

const AlertContext = createContext<AlertContextType | null>(null);

export const useAlertContext = () => {
  const context = useContext(AlertContext);
  if (!context) {
    throw new Error('Alert components must be used within an Alert');
  }
  return context;
};

type AlertVariantType = 'default' | 'filled';
type AlertSizeType = 'sm' | 'md' | 'lg';

interface IAlertPropsType
  extends Omit<React.ComponentProps<typeof Dialog>, 'children' | 'onClose'> {
  children: React.ReactNode;
  color?: ColorSelectionType;
  variant?: AlertVariantType;
  size?: AlertSizeType;
  onClose: () => void;
}

const Alert: React.FC<IAlertPropsType> = ({
  children,
  color = 'primary',
  variant = 'default',
  size = 'md',
  onClose,
  className,
  ...props
}) => {
  // Get color classes using utility functions
  const colorClasses = getAlertVariantClasses(color, variant);

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

    // Color classes from utility functions
    colorClasses.bg,
    colorClasses.border,

    className,
  );

  const contextValue = {
    titleTextClass: colorClasses.titleText,
    descriptionTextClass: colorClasses.descriptionText,
  };

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
            <AlertContext.Provider value={contextValue}>
              {children}
            </AlertContext.Provider>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};

export default Alert;
