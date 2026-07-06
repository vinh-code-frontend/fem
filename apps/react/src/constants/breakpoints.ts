export const BREAKPOINTS = {
  xs: 480,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const;

export const BREAKPOINT_MAP = {
  480: 'xs',
  640: 'sm',
  1024: 'lg',
  1280: 'xl',
  1536: '2xl',
} as const;
