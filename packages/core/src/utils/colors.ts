// Color utility functions for design system tokens

export const colorOptions = [
  'primary',
  'secondary',
  'accent',
  'tertiary',
] as const;

export type ColorSelectionType = (typeof colorOptions)[number];

export type ColorShadeType =
  | 50
  | 100
  | 200
  | 300
  | 400
  | 500
  | 600
  | 700
  | 800
  | 900
  | 950;

/**
 * Generate background color class
 */
export const getBgClass = (
  color: ColorSelectionType,
  shade: ColorShadeType = 600,
): string => {
  return `bg-${color}-${shade}`;
};

/**
 * Generate text color class
 */
export const getTextClass = (
  color: ColorSelectionType,
  shade: ColorShadeType = 600,
): string => {
  return `text-${color}-${shade}`;
};

/**
 * Generate border color class
 */
export const getBorderClass = (
  color: ColorSelectionType,
  shade: ColorShadeType = 600,
): string => {
  return `border-${color}-${shade}`;
};

/**
 * Generate focus outline color class
 */
export const getFocusOutlineClass = (
  color: ColorSelectionType,
  shade: ColorShadeType = 600,
): string => {
  return `focus-visible:outline-${color}-${shade}`;
};

/**
 * Generate hover background color class
 */
export const getHoverBgClass = (
  color: ColorSelectionType,
  shade: ColorShadeType = 700,
): string => {
  return `hover:bg-${color}-${shade}`;
};

/**
 * Generate hover text color class
 */
export const getHoverTextClass = (
  color: ColorSelectionType,
  shade: ColorShadeType = 700,
): string => {
  return `hover:text-${color}-${shade}`;
};

/**
 * Button variant classes generator
 */
export const getButtonVariantClasses = (
  color: ColorSelectionType,
  variant: 'solid' | 'outline' | 'plain' = 'solid',
) => {
  const baseClasses = {
    focus: getFocusOutlineClass(color, 600),
    bg: '',
    text: '',
    border: '',
    hover: '',
  };

  switch (variant) {
    case 'solid':
      return {
        ...baseClasses,
        bg: getBgClass(color, 600),
        text: 'text-white',
        hover: getHoverBgClass(color, 700),
      };

    case 'outline':
      return {
        ...baseClasses,
        bg: 'bg-transparent',
        text: getTextClass(color, 600),
        border: `border ${getBorderClass(color, 600)}`,
        hover: getHoverBgClass(color, 50),
      };

    case 'plain':
      return {
        ...baseClasses,
        bg: 'bg-transparent',
        text: getTextClass(color, 600),
        border: 'border-transparent',
        hover: getHoverBgClass(color, 50),
      };

    default:
      return {
        ...baseClasses,
        bg: getBgClass(color, 600),
        text: 'text-white',
        hover: getHoverBgClass(color, 700),
      };
  }
};

/**
 * Generate translucent background color class for alerts
 */
export const getAlertBgClass = (
  color: ColorSelectionType,
  opacity: string = '20',
): string => {
  return `bg-${color}-900/${opacity}`;
};

/**
 * Generate translucent border color class for alerts
 */
export const getAlertBorderClass = (
  color: ColorSelectionType,
  opacity: string = '30',
): string => {
  return `border-${color}-500/${opacity}`;
};

/**
 * Alert variant classes generator
 */
export const getAlertVariantClasses = (
  color: ColorSelectionType,
  variant: 'default' | 'filled' = 'default',
) => {
  switch (variant) {
    case 'default':
      return {
        bg: getAlertBgClass(color, '20'),
        border: `border ${getAlertBorderClass(color, '30')}`,
        titleText: 'text-white',
        descriptionText: 'text-white/50',
      };

    case 'filled':
      return {
        bg: getBgClass(color, 600),
        border: `border border-${color}-700`,
        titleText: 'text-white',
        descriptionText: 'text-white/80',
      };

    default:
      return {
        bg: 'bg-white/10',
        border: 'border border-white/20',
        titleText: 'text-white',
        descriptionText: 'text-white/50',
      };
  }
};

/**
 * Generate complete class string for button variants
 * todo not sure we'll use this
 */
export const getButtonClasses = (
  color: ColorSelectionType,
  variant: 'solid' | 'outline' | 'plain' = 'solid',
): string => {
  const classes = getButtonVariantClasses(color, variant);

  return Object.values(classes).join(' ');
};

/**
 * Get all available color options for dropdowns/selects
 * todo not sure we'll use this
 */
export const getColorDropdownOptions = () => {
  return colorOptions.map((color) => ({
    title: color.charAt(0).toUpperCase() + color.slice(1),
    value: color,
  }));
};
