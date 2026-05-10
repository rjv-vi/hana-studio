/**
 * Shared animation constants. framer-motion v12 wants a strict
 * 4-tuple for cubic-bezier easings, so we use `as const` once here.
 */
export const EASE_OUT = [0.22, 1, 0.36, 1] as const;
export const EASE_SPRING = [0.34, 1.56, 0.64, 1] as const;
export const EASE_IN_OUT = [0.65, 0, 0.35, 1] as const;
