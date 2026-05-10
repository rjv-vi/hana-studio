import { motion } from 'framer-motion';
import { cn } from '../../lib/cn';

/**
 * Hand-drawn squiggle — for the OUR TG section
 * (the curl with a tiny arrow from the maket).
 */
export function Squiggle({ className }: { className?: string }) {
  return (
    <svg
      className={cn(className)}
      viewBox="0 0 220 160"
      fill="none"
      aria-hidden
    >
      <motion.path
        d="M 10 80 C 30 30, 90 20, 110 70 C 125 110, 70 130, 60 95 C 55 78, 80 70, 100 90 C 130 120, 175 130, 195 110"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1.6, ease: 'easeInOut' }}
      />
      <motion.path
        d="M 188 102 L 200 110 L 192 120"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, delay: 1.4, ease: 'easeOut' }}
      />
    </svg>
  );
}

/**
 * Decorative wavy strokes (like the zig-zags in the maket near "diagram").
 * Reusable accent.
 */
export function Zigzag({ className }: { className?: string }) {
  return (
    <svg
      className={cn(className)}
      viewBox="0 0 320 80"
      fill="none"
      aria-hidden
    >
      <motion.path
        d="M 6 50 L 40 18 L 74 60 L 108 14 L 142 64 L 176 18 L 210 60 L 244 14 L 278 60 L 312 24"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 1.4, ease: 'easeInOut' }}
      />
    </svg>
  );
}
