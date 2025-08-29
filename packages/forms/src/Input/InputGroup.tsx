import React from 'react';
import clsx from 'clsx';

interface IInputGroupPropsType extends React.ComponentProps<'div'> {
  children: React.ReactNode;
}

// Type for React component with displayName
interface IComponentWithDisplayName {
  displayName?: string;
}

// Type for component props
interface IComponentProps {
  'data-testid'?: string;
  'data-slot'?: string;
  role?: string;
  type?: string;
  className?: string;
}

// Helper function to detect input elements more reliably
const isInputElement = (child: React.ReactElement): boolean => {
  // Check for HTML input element
  if (child.type === 'input') {
    return true;
  }

  // Check for Input component by displayName
  if (child.type && typeof child.type === 'function') {
    const component = child.type as IComponentWithDisplayName;
    if (component.displayName === 'Input') {
      return true;
    }
  }

  // Check for data-testid that suggests it's an input
  const props = child.props as IComponentProps;
  if (
    props &&
    props['data-testid'] &&
    typeof props['data-testid'] === 'string' &&
    props['data-testid'].includes('input')
  ) {
    return true;
  }

  // Check for role="textbox" or type attribute
  if (props && (props.role === 'textbox' || props.type)) {
    return true;
  }

  return false;
};

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
          if (React.isValidElement(child) && !isInputElement(child)) {
            return React.cloneElement(
              child as React.ReactElement<IComponentProps>,
              {
                className: clsx(
                  'h-4 w-4 text-gray-400',
                  (child as React.ReactElement<IComponentProps>).props
                    ?.className,
                ),
                'data-slot': 'icon',
              },
            );
          }

          return null;
        })}
      </div>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child) && isInputElement(child)) {
          return React.cloneElement(
            child as React.ReactElement<IComponentProps>,
            {
              className: clsx(
                'pl-10',
                (child as React.ReactElement<IComponentProps>).props?.className,
              ),
            },
          );
        }

        return null;
      })}
    </div>
  );
};

export default InputGroup;
