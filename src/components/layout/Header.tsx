import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { cn } from '../../lib/cn';
import { EASE_OUT } from '../../lib/motion';

const NAV = [
  { label: 'Услуги', href: '#plans' },
  { label: 'Авторы', href: '#authors' },
  { label: 'Telegram', href: '#telegram' },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -32, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: EASE_OUT, delay: 0.1 }}
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled ? 'pt-3' : 'pt-5',
      )}
    >
      <div className="container-page">
        <div
          className={cn(
            'mx-auto flex h-14 items-center justify-between rounded-full border px-3 pl-5 transition-all duration-300',
            scrolled
              ? 'border-white/10 bg-black/50 backdrop-blur-xl'
              : 'border-white/5 bg-black/20 backdrop-blur-md',
          )}
        >
          {/* LOGO placeholder */}
          <a
            href="#top"
            className="flex items-center gap-2 text-[15px] font-semibold tracking-tight text-white"
          >
            <span
              aria-hidden
              className="grid h-7 w-7 place-items-center rounded-md border border-white/15 bg-white/5 text-[11px] font-bold tracking-widest text-white/70"
            >
              ⌬
            </span>
            <span className="text-white/90">LOGO</span>
          </a>

          {/* Center menu — desktop */}
          <nav className="hidden items-center gap-1 md:flex">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-2 text-[14px] text-white/70 transition-colors duration-200 hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-2">
            <Button variant="primary" size="sm">
              Регистрация
            </Button>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
