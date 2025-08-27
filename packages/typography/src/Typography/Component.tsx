import React from 'react';
import { classNames } from '@repo/core';

// Font weights for Montserrat
type FontWeightType =
  | 'light'
  | 'normal'
  | 'medium'
  | 'semibold'
  | 'bold'
  | 'black';

export const fontWeightToClassName: { [key in FontWeightType]: string } = {
  light: 'font-light',
  normal: 'font-normal',
  medium: 'font-medium',
  semibold: 'font-semibold',
  bold: 'font-bold',
  black: 'font-black',
};

// Default font sizes for each tag
const tagToFontSize = {
  h1: 'text-6xl',
  h2: 'text-4xl',
  h3: 'text-3xl',
  h4: 'text-2xl',
  h5: 'text-xl',
  h6: 'text-lg',
  p: 'text-base',
  span: 'text-base',
};

// Size prop to font size class mapping
const sizeToFontSize = {
  xs: 'text-xs',
  sm: 'text-sm',
  md: 'text-base',
  lg: 'text-lg',
  xl: 'text-xl',
  base: 'text-base',
  '2xl': 'text-2xl',
  '3xl': 'text-3xl',
  '4xl': 'text-4xl',
  '5xl': 'text-5xl',
  '6xl': 'text-6xl',
  '7xl': 'text-7xl',
  '8xl': 'text-8xl',
  '9xl': 'text-9xl',
} as const;

interface ITypographyProps {
  tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  weight?: FontWeightType;
  size?: string; // Allow custom font size classes
  className?: string;
  children: React.ReactNode;
  uppercase?: boolean;
  italic?: boolean;
  underline?: boolean;
  style?: React.CSSProperties;
}

const Typography = ({
  tag: Tag,
  weight = 'normal',
  size,
  children,
  className,
  uppercase,
  italic,
  underline,
  style,
}: ITypographyProps) => {
  // Determine the font size class to use
  const getFontSizeClass = () => {
    if (!size) return tagToFontSize[Tag]; // Use default for tag
    if (size in sizeToFontSize)
      return sizeToFontSize[size as keyof typeof sizeToFontSize]; // Use mapped size

    return size; // Use custom size class directly
  };

  return (
    <Tag
      className={classNames(
        getFontSizeClass(),
        fontWeightToClassName[weight],
        uppercase && 'uppercase',
        italic && 'italic',
        underline && 'underline',
        className,
        'break-words',
      )}
      style={style}
    >
      {children}
    </Tag>
  );
};

// Simplified props type for individual components
type TypographyTagPropsType = Omit<ITypographyProps, 'tag'>;

export default Typography;

// Individual typography components with sensible defaults
export const H1 = (props: TypographyTagPropsType) => {
  const { className, ...restProps } = props;

  return (
    <Typography
      tag="h1"
      weight="bold"
      size="text-4xl"
      className={classNames(
        'leading-12 md:text-4xl md:leading-tight lg:text-5xl',
        className,
      )}
      {...restProps}
    />
  );
};

export const H2 = (props: TypographyTagPropsType) => {
  const { className, ...restProps } = props;

  return (
    <Typography
      tag="h2"
      weight="semibold"
      size="text-3xl"
      className={classNames(
        'xs:text-2xl mb-4 sm:text-3xl md:text-4xl lg:text-5xl',
        className,
      )}
      {...restProps}
    />
  );
};

export const H3 = (props: TypographyTagPropsType) => {
  const { className, ...restProps } = props;

  return (
    <Typography
      tag="h3"
      weight="semibold"
      {...restProps}
      className={classNames('mb-2 sm:mb-4', className)}
    />
  );
};

export const H4 = (props: TypographyTagPropsType) => {
  const { className, ...restProps } = props;

  return (
    <Typography
      tag="h4"
      weight="semibold"
      className={classNames(
        'mb-4 text-lg leading-tight break-words sm:text-xl',
        className,
      )}
      {...restProps}
    />
  );
};

export const H5 = (props: TypographyTagPropsType) => {
  return <Typography tag="h5" weight="medium" {...props} />;
};

export const H6 = (props: TypographyTagPropsType) => {
  return <Typography tag="h6" weight="medium" uppercase {...props} />;
};

export const Body = (props: TypographyTagPropsType) => {
  const { className, ...restProps } = props;

  return (
    <Typography
      tag="p"
      size="text-base"
      className={classNames('mb-4 leading-6', className)}
      {...restProps}
    />
  );
};

export const Text = (props: TypographyTagPropsType) => {
  return <Typography tag="span" {...props} />;
};

export const Overline = (props: TypographyTagPropsType) => {
  const { className, ...restProps } = props;

  return (
    <Typography
      tag="span"
      weight="medium"
      size="text-sm"
      className={classNames('leading-8 tracking-wide', className)}
      {...restProps}
    />
  );
};