# HANA STUDIO — шаблон сайта

Темплейт сайта студии озвучки в стиле [framer.com](https://framer.com).
Чёрно-белая палитра, крупная типографика, много анимаций (звуковые волны,
магнитные кнопки, parallax, marquee, scroll-reveal).

## Стек

- **Vite 8** + **React 19** + **TypeScript 6**
- **Tailwind CSS v4** (через `@tailwindcss/vite`, без `tailwind.config`)
- **Framer Motion 12** — все анимации
- Шрифты: **Inter** + **Inter Tight** (Google Fonts, подключены в `index.html`)

## Скрипты

```bash
npm install
npm run dev       # dev-сервер на http://127.0.0.1:5173
npm run build     # production-билд в dist/
npm run preview   # preview production-билда
npm run lint      # eslint
```

## Структура

```
src/
├── App.tsx                       # композиция страницы
├── main.tsx                      # Vite entry
├── index.css                     # Tailwind v4 + @theme + utilities
│
├── components/
│   ├── layout/
│   │   ├── Header.tsx            # фикс. шапка с blur, magnetic CTA
│   │   └── Footer.tsx            # 4-колоночный, гигант "HANA"
│   ├── sections/
│   │   ├── Hero.tsx              # HANA STUDIO + звуковые волны + ON AIR
│   │   ├── Plans.tsx             # 3 пустые карточки тарифов
│   │   ├── Authors.tsx           # 3 круга-аватара + роли
│   │   ├── Telegram.tsx          # 2 перекрывающихся блока + завиток
│   │   └── Marquee.tsx           # бесконечная лента "услуг"
│   ├── ui/
│   │   ├── Button.tsx            # pill-кнопки (primary/secondary/ghost)
│   │   ├── Magnetic.tsx          # обёртка для magnetic-эффекта
│   │   └── SectionLabel.tsx      # eyebrow-лейбл секций
│   └── decor/
│       ├── SoundWaves.tsx        # волны + эквалайзер ON AIR
│       └── Scribbles.tsx         # рукописные завитки и зигзаги
│
├── hooks/
│   └── useMagnetic.ts            # magnetic-кнопки на rAF
│
└── lib/
    ├── cn.ts                     # классы через clsx
    └── motion.ts                 # шаренные ease-tuples (для framer-motion v12)
```

## Дизайн-токены (`src/index.css`)

```css
@theme {
  --color-bg: #0a0a0a;        /* фон */
  --color-bg-elev: #111113;
  --color-surface: #141417;   /* карточки */
  --color-surface-2: #1b1b20;
  --color-border: #232328;
  --color-border-strong: #34343b;
  --color-fg: #f5f5f7;        /* основной текст */
  --color-fg-muted: #a1a1aa;
  --color-fg-subtle: #6f6f78;

  --font-sans: 'Inter', ...;
  --font-display: 'Inter Tight', 'Inter', ...;
}
```

Используются как обычные tailwind-цвета, либо через
`var(--color-…)` в произвольных значениях.

## Что нужно заполнить разработчику

| Где | Что подставить |
| --- | --- |
| `Header.tsx` | реальный логотип вместо плейсхолдера `LOGO` (текст `⌬` + `LOGO`) |
| `Plans.tsx` | контент 3 карточек (название тарифа, описание, цена/CTA) |
| `Authors.tsx` | имена/фото авторов вместо подписи `Автор №01/02/03`. Ролей 3 шт.: `Звукорежиссёр`, `Диктор`, `Режиссёр озвучания` — поменять при необходимости |
| `Telegram.tsx` | контент двух карточек-превью + ссылка на канал |
| `Footer.tsx` | реальные ссылки соц. сетей |
| `Header.tsx` → `<Button>` Регистрация | привязать к роуту/модалке |

## Адаптив

Все секции свёрстаны под `container-page` (макс. 1280px). Mobile breakpoints:
- `md:` (768px) — переход с одной колонки на сетку
- `sm:` (640px) — мелкие правки

## Особенности

- **Анимации звуковых волн** в Hero (`SoundWaves`) — обыгрывают тематику студии
- **Эквалайзер `ON AIR`** под кнопками Hero — `SoundBars`
- **Magnetic-кнопки** — Регистрация в шапке + CTA в Hero
- **Parallax** — две перекрывающихся карточки в OUR TG
- **Marquee** — две ленты с разной скоростью и направлением между секциями
- **Анимированный завиток** (`Squiggle`) рисуется поверх по мере прокрутки
