import { motion } from 'framer-motion';
import { cn } from '../../lib/cn';

type SoundWavesProps = {
  className?: string;
};

/**
 * Animated sound waves — abstract wavy lines that flow horizontally,
 * matching the wavy decorations in the maket and the studio's voice theme.
 */
export function SoundWaves({ className }: SoundWavesProps) {
  return (
    <div
      className={cn('pointer-events-none absolute inset-0 overflow-hidden', className)}
      aria-hidden
    >
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        <defs>
          <linearGradient id="wave-grad-1" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
            <stop offset="50%" stopColor="#ffffff" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="wave-grad-2" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
            <stop offset="50%" stopColor="#ffffff" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="wave-grad-3" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
            <stop offset="50%" stopColor="#ffffff" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>
        </defs>

        <motion.path
          d="M -100 380 Q 180 220 460 380 T 1020 380 T 1540 380"
          stroke="url(#wave-grad-1)"
          strokeWidth="1.2"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ pathLength: { duration: 2.4, ease: 'easeOut' }, opacity: { duration: 0.8 } }}
        />
        <motion.path
          d="M -100 460 Q 220 580 540 460 T 1100 460 T 1540 460"
          stroke="url(#wave-grad-2)"
          strokeWidth="1"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ pathLength: { duration: 2.6, ease: 'easeOut', delay: 0.2 }, opacity: { duration: 0.8, delay: 0.2 } }}
        />
        <motion.path
          d="M -100 300 Q 260 420 600 300 T 1180 300 T 1540 300"
          stroke="url(#wave-grad-3)"
          strokeWidth="1"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ pathLength: { duration: 2.8, ease: 'easeOut', delay: 0.4 }, opacity: { duration: 0.8, delay: 0.4 } }}
        />

        {/* Slow drifting horizontal motion to feel "alive" */}
        <motion.g
          animate={{ x: [0, -40, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        >
          <path
            d="M -100 540 Q 200 480 480 540 T 1080 540 T 1540 540"
            stroke="#ffffff"
            strokeOpacity="0.08"
            strokeWidth="1"
            fill="none"
          />
          <path
            d="M -100 620 Q 320 700 640 620 T 1240 620 T 1640 620"
            stroke="#ffffff"
            strokeOpacity="0.06"
            strokeWidth="1"
            fill="none"
          />
        </motion.g>
      </svg>
    </div>
  );
}

/**
 * Vertical sound bars — looping equalizer animation.
 * Used as a small decorative accent next to the hero title.
 */
export function SoundBars({
  className,
  bars = 18,
}: {
  className?: string;
  bars?: number;
}) {
  return (
    <div
      className={cn('flex items-end gap-[3px] h-8', className)}
      aria-hidden
    >
      {Array.from({ length: bars }).map((_, i) => (
        <motion.span
          key={i}
          className="block w-[3px] rounded-full bg-white/70"
          initial={{ height: 4 }}
          animate={{
            height: [4, 22 + ((i * 7) % 12), 8, 18 + ((i * 5) % 14), 4],
          }}
          transition={{
            duration: 1.6 + (i % 5) * 0.18,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.05,
          }}
        />
      ))}
    </div>
  );
}
