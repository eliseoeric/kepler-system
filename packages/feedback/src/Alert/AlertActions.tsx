import React from 'react';
import clsx from 'clsx';

type AlertActionsPropsType = React.ComponentProps<'div'>;

const AlertActions: React.FC<AlertActionsPropsType> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      className={clsx(
        'mt-6 flex flex-col-reverse items-center justify-end gap-3 *:w-full sm:mt-4 sm:flex-row sm:*:w-auto',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default AlertActions;
