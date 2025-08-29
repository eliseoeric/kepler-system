import React from 'react';
import { Label as HeadlessLabel } from '@headlessui/react';
import clsx from 'clsx';

type LabelPropsType = React.ComponentProps<typeof HeadlessLabel>;

const Label: React.FC<LabelPropsType> = ({ children, className, ...props }) => {
  const labelClasses = clsx(
    'block text-sm/6 font-medium text-gray-900',
    className,
  );

  return (
    <HeadlessLabel className={labelClasses} {...props}>
      {children}
    </HeadlessLabel>
  );
};

export default Label;
