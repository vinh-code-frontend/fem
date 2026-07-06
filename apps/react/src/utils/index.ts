import { BREAKPOINT_MAP } from '@/constants/breakpoints';

export const bp = (classes: string[] | string, minBreakpoint?: keyof typeof BREAKPOINT_MAP) => {
  const breakpoint = minBreakpoint ? BREAKPOINT_MAP[minBreakpoint] : '';
  const classArray = Array.isArray(classes) ? classes : classes.split(/\s+/);
  return classArray
    .filter(Boolean)
    .map((cls) => (breakpoint ? `${breakpoint}:${cls}` : cls))
    .join(' ');
};

export const tw = (classes: string[] | string) => {
  const classArray = Array.isArray(classes) ? classes : classes.split(/\s+/);
  return classArray.filter(Boolean).join(' ');
};
