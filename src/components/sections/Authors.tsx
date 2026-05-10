import { motion } from 'framer-motion';
import { SectionLabel } from '../ui/SectionLabel';
import { EASE_OUT } from '../../lib/motion';

const ROLES = [
  'Звукорежиссёр',
  'Диктор',
  'Режиссёр озвучания',
];

export function Authors() {
  return (
    <section id="authors" className="relative py-28 md:py-36">
      <div className="container-page">
        <div className="mb-14 flex flex-col gap-6 md:mb-20">
          <SectionLabel>Авторы</SectionLabel>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, ease: EASE_OUT }}
            className="text-display max-w-3xl text-balance text-[44px] sm:text-[56px] md:text-[72px]"
          >
            Команда, которая&nbsp;звучит
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 gap-y-14 sm:grid-cols-3 sm:gap-x-8">
          {ROLES.map((role, i) => (
            <AuthorCard key={role} role={role} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function AuthorCard({ role, index }: { role: string; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.9,
        delay: index * 0.12,
        ease: EASE_OUT,
      }}
      className="group flex flex-col items-center text-center"
    >
      {/* Circle avatar placeholder */}
      <motion.div
        whileHover={{ scale: 1.04 }}
        transition={{ duration: 0.5, ease: EASE_OUT }}
        className="relative aspect-square w-44 max-w-full overflow-hidden rounded-full border border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.02] sm:w-52 md:w-60"
      >
        {/* Inner decorative ring */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-3 rounded-full border border-white/[0.06] transition-all duration-500 group-hover:inset-2 group-hover:border-white/15"
        />
        {/* Soft spotlight */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-60 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background:
              'radial-gradient(60% 50% at 50% 25%, rgba(255,255,255,0.16), transparent 70%)',
          }}
        />
        {/* Floating noise particles */}
        <motion.span
          aria-hidden
          className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/30"
          animate={{
            x: [0, 14, -10, 0],
            y: [0, -16, 10, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 6 + index,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.span
          aria-hidden
          className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/20"
          animate={{
            x: [0, -22, 14, 0],
            y: [0, 20, -8, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 8 + index * 0.6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </motion.div>

      {/* Caption */}
      <div className="mt-7 flex flex-col items-center gap-1.5">
        <h3 className="text-[20px] font-semibold tracking-tight text-white">
          {role}
        </h3>
        <span className="text-[13px] text-white/40">
          Автор №{String(index + 1).padStart(2, '0')}
        </span>
      </div>
    </motion.div>
  );
}
