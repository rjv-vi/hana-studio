import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Squiggle } from '../decor/Scribbles';
import { SectionLabel } from '../ui/SectionLabel';
import { EASE_OUT } from '../../lib/motion';

export function Telegram() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  // Parallax for the two overlapping cards
  const yBack = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const yFront = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  return (
    <section id="telegram" className="relative py-28 md:py-36">
      <div className="container-page">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-12 md:gap-10">
          {/* Left: label + squiggle + heading */}
          <div className="md:col-span-5">
            <SectionLabel className="mb-6">Our TG</SectionLabel>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8, ease: EASE_OUT }}
              className="text-display text-balance text-[40px] sm:text-[52px] md:text-[60px]"
            >
              Подпишись на&nbsp;наш Telegram
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, delay: 0.1, ease: EASE_OUT }}
              className="mt-6 max-w-md text-[15px] text-white/55"
            >
              Закулисье студии, новые проекты, кастинги дикторов и&nbsp;редкие
              голосовые тесты.
            </motion.p>

            {/* Hand-drawn squiggle decoration (like in the maket) */}
            <Squiggle className="mt-8 h-24 w-44 text-white/30" />
          </div>

          {/* Right: two overlapping cards (parallax) */}
          <div ref={ref} className="relative md:col-span-7">
            <div className="relative mx-auto aspect-[4/3] w-full max-w-[640px]">
              {/* Back card */}
              <motion.div
                style={{ y: yBack }}
                whileHover={{ scale: 1.015 }}
                transition={{ duration: 0.6, ease: EASE_OUT }}
                className="absolute left-0 top-0 h-[78%] w-[78%] rounded-[24px] border border-white/10 bg-[var(--color-surface)]"
              >
                <CardChrome muted />
              </motion.div>

              {/* Front card (overlapping) */}
              <motion.div
                style={{ y: yFront }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.6, ease: EASE_OUT }}
                className="absolute right-0 bottom-0 h-[78%] w-[78%] rounded-[24px] border border-white/15 bg-[var(--color-surface-2)] shadow-[0_30px_60px_-20px_rgba(0,0,0,0.5)]"
              >
                <CardChrome />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Empty card chrome — just a subtle window-like header & rows of placeholders. */
function CardChrome({ muted = false }: { muted?: boolean }) {
  return (
    <div className="relative flex h-full w-full flex-col p-5 md:p-6">
      {/* Window dots */}
      <div className="flex items-center gap-1.5">
        <span className="h-2 w-2 rounded-full bg-white/15" />
        <span className="h-2 w-2 rounded-full bg-white/15" />
        <span className="h-2 w-2 rounded-full bg-white/15" />
      </div>

      {/* Empty content rows */}
      <div className="mt-6 flex flex-col gap-3">
        <span className="block h-3 w-1/2 rounded-full bg-white/10" />
        <span className="block h-3 w-2/3 rounded-full bg-white/[0.06]" />
        <span className="block h-3 w-1/3 rounded-full bg-white/[0.06]" />
      </div>

      {/* Bottom area */}
      <div className="mt-auto flex items-center justify-between">
        <span className="block h-3 w-20 rounded-full bg-white/10" />
        <span
          className={
            muted
              ? 'h-9 w-28 rounded-full border border-white/10 bg-white/[0.04]'
              : 'h-9 w-28 rounded-full bg-white/90'
          }
        />
      </div>
    </div>
  );
}
