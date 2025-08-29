import React from 'react';
import clsx from 'clsx';

interface IAvatarProps extends React.HTMLAttributes<HTMLSpanElement> {
  src?: string;
  alt?: string;
  square?: boolean;
  initials?: string;
}

const Avatar = ({
  alt,
  src,
  square,
  initials,
  className,
  ...props
}: IAvatarProps) => {
  const baseClasses = square
    ? 'size-8 outline -outline-offset-1 outline-white/10'
    : 'size-8 rounded-full outline -outline-offset-1 outline-white/10';

  return (
    <span className={className} {...props}>
      {src ? (
        <img alt={alt || ''} src={src} className={baseClasses} />
      ) : initials ? (
        <div
          className={clsx(
            baseClasses,
            'bg-gray-500 text-white flex items-center justify-center text-sm font-medium',
          )}
        >
          {initials}
        </div>
      ) : (
        <div className={clsx(baseClasses, 'bg-gray-300')} />
      )}
    </span>
  );
};

export default Avatar;
