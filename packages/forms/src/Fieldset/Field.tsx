import React from 'react';
import { Field as HeadlessField } from '@headlessui/react';
import clsx from 'clsx';

interface IFieldPropsType extends React.ComponentProps<typeof HeadlessField> {
  disabled?: boolean;
  children?: React.ReactNode;
}

const Field: React.FC<IFieldPropsType> = ({
  disabled = false,
  children,
  className,
  ...props
}) => {
  const fieldClasses = clsx(
    'space-y-2',
    {
      'opacity-50': disabled,
    },
    className,
  );

  return (
    <HeadlessField disabled={disabled} className={fieldClasses} {...props}>
      {children}
    </HeadlessField>
  );
};

export default Field;
