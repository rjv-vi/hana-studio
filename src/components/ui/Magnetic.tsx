import { type ReactNode } from 'react';
import { useMagnetic } from '../../hooks/useMagnetic';
import { cn } from '../../lib/cn';

type MagneticProps = {
  children: ReactNode;
  strength?: number;
  radius?: number;
  className?: string;
};

export function Magnetic({
  children,
  strength = 0.3,
  radius = 60,
  className,
}: MagneticProps) {
  const ref = useMagnetic<HTMLDivElement>(strength, radius);
  return (
    <div
      ref={ref}
      className={cn('inline-block will-change-transform', className)}
      style={{ transition: 'transform 0.4s var(--ease-out-soft)' }}
    >
      {children}
    </div>
  );
}
