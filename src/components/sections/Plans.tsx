import { motion } from 'framer-motion';
import { SectionLabel } from '../ui/SectionLabel';
import { EASE_OUT } from '../../lib/motion';

const cards = [0, 1, 2];

export function Plans() {
  return (
    <section
      id="plans"
      className="relative py-28 md:py-36"
    >
      <div className="container-page">
        <div className="mb-12 flex flex-col gap-4 md:mb-16 md:flex-row md:items-end md:justify-between">
          <div className="flex flex-col gap-6">
            <SectionLabel>Our plans</SectionLabel>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8, ease: EASE_OUT }}
              className="text-display max-w-2xl text-balance text-[44px] sm:text-[56px] md:text-[68px]"
            >
              Тарифы под любой проект
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, delay: 0.1, ease: EASE_OUT }}
            className="max-w-sm text-[15px] text-white/55 md:text-right"
          >
            От разовой записи до полного цикла озвучания. Гибкие условия,
            прозрачные цены.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
          {cards.map((i) => (
            <PlanCard key={i} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PlanCard({ index }: { index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{
        duration: 0.8,
        delay: index * 0.1,
        ease: EASE_OUT,
      }}
      whileHover={{ y: -6 }}
      className="group relative isolate flex aspect-[4/3] flex-col overflow-hidden rounded-[28px] border border-white/10 bg-[var(--color-surface)] p-6 transition-colors duration-300 hover:border-white/25 md:p-7"
    >
      {/* Animated soft spotlight on hover */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-px rounded-[28px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            'radial-gradient(400px 200px at 50% 0%, rgba(255,255,255,0.07), transparent 70%)',
        }}
      />

      {/* Top row */}
      <div className="flex items-center justify-between">
        <span className="text-[12px] tracking-[0.2em] text-white/45 uppercase">
          Тариф {String(index + 1).padStart(2, '0')}
        </span>
        <span
          aria-hidden
          className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/15 text-white/60 transition-all duration-300 group-hover:border-white/40 group-hover:text-white"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path
              d="M3 11L11 3M11 3H4.5M11 3V9.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>

      {/* Empty body — placeholder content for the developer */}
      <div className="mt-auto flex items-end justify-between gap-4">
        <div className="flex flex-col gap-2">
          <span className="block h-3 w-24 rounded-full bg-white/10" aria-hidden />
          <span className="block h-3 w-16 rounded-full bg-white/[0.06]" aria-hidden />
        </div>
        <div className="flex flex-col items-end gap-2">
          <span className="block h-2 w-12 rounded-full bg-white/[0.06]" aria-hidden />
          <span className="block h-2 w-20 rounded-full bg-white/[0.06]" aria-hidden />
        </div>
      </div>
    </motion.article>
  );
}
