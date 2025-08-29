import React from 'react';
import { Description as HeadlessDescription } from '@headlessui/react';
import clsx from 'clsx';

type DescriptionPropsType = React.ComponentProps<typeof HeadlessDescription>;

const Description: React.FC<DescriptionPropsType> = ({
  children,
  className,
  ...props
}) => {
  const descriptionClasses = clsx('text-sm/6 text-gray-600', className);

  return (
    <HeadlessDescription className={descriptionClasses} {...props}>
      {children}
    </HeadlessDescription>
  );
};

export default Description;
