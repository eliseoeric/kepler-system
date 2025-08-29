import React from 'react';
import { Description as HeadlessDescription } from '@headlessui/react';
import clsx from 'clsx';

type ErrorMessagePropsType = React.ComponentProps<typeof HeadlessDescription>;

const ErrorMessage: React.FC<ErrorMessagePropsType> = ({
  children,
  className,
  ...props
}) => {
  const errorClasses = clsx('text-sm/6 text-red-600', className);

  return (
    <HeadlessDescription className={errorClasses} {...props}>
      {children}
    </HeadlessDescription>
  );
};

export default ErrorMessage;
