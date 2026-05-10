import { motion } from 'framer-motion';
import { EASE_OUT } from '../../lib/motion';

const FOOTER_LINKS: { title: string; items: string[] }[] = [
  { title: 'Студия', items: ['О нас', 'Команда', 'Контакты'] },
  { title: 'Услуги', items: ['Дубляж', 'Реклама', 'Аудиокниги', 'Игры'] },
  { title: 'Соц. сети', items: ['Telegram', 'YouTube', 'VK'] },
];

export function Footer() {
  return (
    <footer className="relative mt-12 border-t border-white/5 pb-10 pt-20">
      <div className="container-page">
        {/* Giant brand mark */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1, ease: EASE_OUT }}
          className="text-display mb-16 select-none text-center text-[18vw] leading-[0.85] text-white/[0.06] md:text-[16vw]"
          aria-hidden
        >
          HANA
        </motion.div>

        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          {/* Brand block */}
          <div className="col-span-2 flex flex-col gap-4 md:col-span-1">
            <a
              href="#top"
              className="flex items-center gap-2 text-[15px] font-semibold text-white"
            >
              <span
                aria-hidden
                className="grid h-7 w-7 place-items-center rounded-md border border-white/15 bg-white/5 text-[11px] font-bold text-white/70"
              >
                ⌬
              </span>
              <span>HANA STUDIO</span>
            </a>
            <p className="max-w-xs text-[14px] text-white/45">
              Студия озвучки полного цикла. Записываем голоса, которые работают.
            </p>
          </div>

          {FOOTER_LINKS.map((col) => (
            <div key={col.title} className="flex flex-col gap-3">
              <h4 className="text-[12.5px] font-medium tracking-[0.18em] text-white/40 uppercase">
                {col.title}
              </h4>
              <ul className="flex flex-col gap-2">
                {col.items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-[14.5px] text-white/75 transition-colors duration-200 hover:text-white"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-3 border-t border-white/5 pt-6 text-[13px] text-white/35 md:flex-row">
          <span>© {new Date().getFullYear()} HANA STUDIO. Все права защищены.</span>
          <span>Made with care · Шаблон сайта</span>
        </div>
      </div>
    </footer>
  );
}
