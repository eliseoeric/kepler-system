import React from 'react';
import { Button as HeadlessButton } from '@headlessui/react';
import clsx from 'clsx';

interface IAvatarButtonProps
  extends Omit<React.ComponentProps<typeof HeadlessButton>, 'children'> {
  src?: string;
  alt?: string;
  square?: boolean;
  initials?: string;
  href?: string;
}

const AvatarButton: React.FC<IAvatarButtonProps> = ({
  src,
  alt,
  square = false,
  initials,
  href,
  className,
  disabled,
  ...props
}) => {
  const baseClasses = square
    ? 'size-8 outline -outline-offset-1 outline-white/10'
    : 'size-8 rounded-full outline -outline-offset-1 outline-white/10';

  const buttonClasses = clsx(
    'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2',
    'disabled:opacity-50 disabled:cursor-not-allowed transition-colors',
    'hover:opacity-80',
    className,
  );

  const renderAvatar = () => {
    if (src) {
      return <img alt={alt || ''} src={src} className={baseClasses} />;
    }

    if (initials) {
      return (
        <div
          className={clsx(
            baseClasses,
            'bg-gray-500 text-white flex items-center justify-center text-sm font-medium',
          )}
        >
          {initials}
        </div>
      );
    }

    return <div className={clsx(baseClasses, 'bg-gray-300')} />;
  };

  if (href) {
    return (
      <a
        href={href}
        className={buttonClasses}
        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {renderAvatar()}
      </a>
    );
  }

  return (
    <HeadlessButton disabled={disabled} className={buttonClasses} {...props}>
      {renderAvatar()}
    </HeadlessButton>
  );
};

export default AvatarButton;
