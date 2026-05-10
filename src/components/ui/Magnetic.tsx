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
  // No CSS transition on transform — useMagnetic already smooths the motion
  // via requestAnimationFrame. Mixing CSS transitions with rAF-driven transform
  // causes the button to "float" on slow mouse movement.
  return (
    <div
      ref={ref}
      className={cn('inline-block will-change-transform', className)}
    >
      {children}
    </div>
  );
}
