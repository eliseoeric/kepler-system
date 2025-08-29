import React from 'react';
import clsx from 'clsx';

interface IInputGroupPropsType extends React.ComponentProps<'div'> {
  children: React.ReactNode;
}

const InputGroup: React.FC<IInputGroupPropsType> = ({
  children,
  className,
  ...props
}) => {
  const groupClasses = clsx('relative rounded-md shadow-sm', className);

  return (
    <div className={groupClasses} {...props}>
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child) && child.type !== 'input') {
            return React.cloneElement(child as React.ReactElement<any>, {
              className: clsx(
                'h-4 w-4 text-gray-400',
                (child as React.ReactElement<any>).props?.className,
              ),
              'data-slot': 'icon',
            });
          }
          return null;
        })}
      </div>
      {React.Children.map(children, (child) => {
        if (
          React.isValidElement(child) &&
          (child.type === 'input' || child.type?.toString().includes('Input'))
        ) {
          return React.cloneElement(child as React.ReactElement<any>, {
            className: clsx(
              'pl-10',
              (child as React.ReactElement<any>).props?.className,
            ),
          });
        }
        return null;
      })}
    </div>
  );
};

export default InputGroup;
