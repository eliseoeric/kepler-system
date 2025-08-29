import React from 'react';
import clsx from 'clsx';

type InputTypeType =
  | 'email'
  | 'number'
  | 'password'
  | 'search'
  | 'tel'
  | 'text'
  | 'url'
  | 'date'
  | 'datetime-local'
  | 'month'
  | 'time'
  | 'week';

interface IInputPropsType extends React.InputHTMLAttributes<HTMLInputElement> {
  type?: InputTypeType;
  disabled?: boolean;
  invalid?: boolean;
}

const Input: React.FC<IInputPropsType> = ({
  type = 'text',
  disabled = false,
  invalid = false,
  className,
  ...props
}) => {
  const inputClasses = clsx(
    // Base styles
    'block w-full rounded-md border-0 py-1.5 px-3 text-sm/6 text-gray-900',
    'ring-1 ring-inset ring-gray-300 placeholder:text-gray-400',
    'focus:ring-2 focus:ring-inset focus:ring-indigo-600',
    'transition-colors',

    // State variants
    {
      // Disabled state
      'bg-gray-50 text-gray-500 ring-gray-200 cursor-not-allowed': disabled,

      // Invalid state
      'ring-red-300 text-red-900 placeholder:text-red-300 focus:ring-red-500':
        invalid && !disabled,

      // Default state
      'bg-white': !disabled && !invalid,
    },

    className,
  );

  return (
    <input
      type={type}
      disabled={disabled}
      className={inputClasses}
      {...props}
    />
  );
};

export default Input;
