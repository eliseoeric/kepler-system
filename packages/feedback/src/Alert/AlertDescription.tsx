import React from 'react';
import { Description } from '@headlessui/react';
import clsx from 'clsx';

type AlertDescriptionPropsType = React.ComponentProps<typeof Description>;

const AlertDescription: React.FC<AlertDescriptionPropsType> = ({
  children,
  className,
  ...props
}) => {
  return (
    <Description
      className={clsx('mt-2 text-sm/6 text-white/50', className)}
      {...props}
    >
      {children}
    </Description>
  );
};

export default AlertDescription;
