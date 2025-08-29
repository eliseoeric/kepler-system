import React from 'react';
import { Description } from '@headlessui/react';
import clsx from 'clsx';
import { useAlertContext } from './Component';

type AlertDescriptionPropsType = React.ComponentProps<typeof Description>;

const AlertDescription: React.FC<AlertDescriptionPropsType> = ({
  children,
  className,
  ...props
}) => {
  const { descriptionTextClass } = useAlertContext();

  return (
    <Description
      className={clsx('mt-2 text-sm/6', descriptionTextClass, className)}
      {...props}
    >
      {children}
    </Description>
  );
};

export default AlertDescription;
