import { motion, type Variants } from 'framer-motion';
import { Button } from '../ui/Button';
import { SoundBars, SoundWaves } from '../decor/SoundWaves';
import { EASE_OUT } from '../../lib/motion';

const TITLE = 'HANA STUDIO';

const headlineVariants: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.05, delayChildren: 0.1 },
  },
};

const charVariants: Variants = {
  hidden: { y: '100%', opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.9, ease: EASE_OUT },
  },
};

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden pt-32 pb-20"
    >
      {/* Animated wavy lines (sound waves) */}
      <SoundWaves className="opacity-90" />

      {/* Soft radial vignette */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 animate-glow-pulse"
        style={{
          background:
            'radial-gradient(60% 50% at 50% 45%, rgba(255,255,255,0.08), transparent 70%)',
        }}
        aria-hidden
      />

      <div className="container-page relative z-10 flex flex-col items-center text-center">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05, ease: EASE_OUT }}
          className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-[12.5px] tracking-wide text-white/70 backdrop-blur"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/60 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
          </span>
          Студия озвучки нового поколения
        </motion.div>

        {/* Animated split-letter title */}
        <motion.h1
          variants={headlineVariants}
          initial="hidden"
          animate="show"
          aria-label={TITLE}
          className="text-display text-[14vw] leading-[0.92] sm:text-[12vw] md:text-[10.5vw] lg:text-[9.5rem] xl:text-[11rem]"
        >
          <span className="sr-only">{TITLE}</span>
          <span className="flex flex-wrap justify-center gap-x-[0.04em]" aria-hidden>
            {TITLE.split(' ').map((word, wi) => (
              <span key={wi} className="inline-flex overflow-hidden pb-[0.05em]">
                {word.split('').map((ch, ci) => (
                  <motion.span
                    key={`${wi}-${ci}`}
                    variants={charVariants}
                    className="inline-block"
                  >
                    {ch}
                  </motion.span>
                ))}
                {wi === 0 && <span className="inline-block w-[0.35em]">&nbsp;</span>}
              </span>
            ))}
          </span>
        </motion.h1>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9, ease: EASE_OUT }}
          className="mx-auto mt-8 max-w-xl text-balance text-[17px] leading-relaxed text-white/60 md:text-[19px]"
        >
          Профессиональный дубляж, реклама, аудиокниги и&nbsp;игровая озвучка.
          Голос, который запоминают.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.05, ease: EASE_OUT }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <Button variant="primary" size="lg">
            Заказать озвучку
          </Button>
          <Button variant="secondary" size="lg">
            Послушать примеры
          </Button>
        </motion.div>

        {/* Equalizer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="mt-14 flex items-center gap-4 text-white/40"
        >
          <SoundBars className="h-6" bars={14} />
          <span className="text-[12px] tracking-[0.18em] uppercase">
            On Air
          </span>
          <SoundBars className="h-6" bars={14} />
        </motion.div>
      </div>
    </section>
  );
}
