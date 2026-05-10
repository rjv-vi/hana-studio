import { motion } from 'framer-motion';
import { type ReactNode } from 'react';
import { cn } from '../../lib/cn';
import { EASE_OUT } from '../../lib/motion';

type SectionLabelProps = {
  children: ReactNode;
  className?: string;
};

export function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.6, ease: EASE_OUT }}
      className={cn(
        'flex items-center gap-3 text-[12px] font-medium tracking-[0.22em] text-white/60 uppercase',
        className,
      )}
    >
      <span className="h-px w-8 bg-white/30" aria-hidden />
      <span>{children}</span>
    </motion.div>
  );
}
