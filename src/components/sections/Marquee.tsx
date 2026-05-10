import { cn } from '../../lib/cn';

const ITEMS = [
  'Дубляж',
  'Реклама',
  'Аудиокниги',
  'Игры',
  'Кино',
  'IVR',
  'Подкасты',
  'Анимация',
];

type MarqueeProps = {
  reverse?: boolean;
  className?: string;
  speed?: 'slow' | 'fast';
};

export function Marquee({
  reverse = false,
  className,
  speed = 'slow',
}: MarqueeProps) {
  // Duplicate the list so the loop is seamless.
  const list = [...ITEMS, ...ITEMS];

  return (
    <div
      className={cn(
        'group relative w-full overflow-hidden border-y border-white/5 py-7',
        className,
      )}
      aria-hidden
    >
      {/* Edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[var(--color-bg)] to-transparent md:w-40" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[var(--color-bg)] to-transparent md:w-40" />

      <div
        className={cn(
          'flex w-max items-center gap-12 will-change-transform [animation-play-state:running] group-hover:[animation-play-state:paused]',
          speed === 'fast' ? 'animate-marquee-fast' : 'animate-marquee',
          reverse && '[animation-direction:reverse]',
        )}
      >
        {list.map((item, i) => (
          <div key={i} className="flex shrink-0 items-center gap-12">
            <span className="text-display text-[44px] tracking-tight text-white/85 md:text-[72px]">
              {item}
            </span>
            <Star />
          </div>
        ))}
      </div>
    </div>
  );
}

function Star() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
      <path
        d="M14 0 L16 12 L28 14 L16 16 L14 28 L12 16 L0 14 L12 12 Z"
        fill="currentColor"
        className="text-white/40"
      />
    </svg>
  );
}
