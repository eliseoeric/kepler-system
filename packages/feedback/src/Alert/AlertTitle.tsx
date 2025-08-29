import React from 'react';
import { DialogTitle } from '@headlessui/react';
import clsx from 'clsx';

type AlertTitlePropsType = React.ComponentProps<typeof DialogTitle>;

const AlertTitle: React.FC<AlertTitlePropsType> = ({
  children,
  className,
  as = 'h3',
  ...props
}) => {
  return (
    <DialogTitle
      as={as}
      className={clsx('text-base/7 font-medium text-white', className)}
      {...props}
    >
      {children}
    </DialogTitle>
  );
};

export default AlertTitle;
