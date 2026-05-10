import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
// base — для деплоя на GitHub Pages (https://rjv-vi.github.io/hana-studio/).
// В dev используем '/', чтобы локальный сервер открывался на корне.
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/hana-studio/' : '/',
  plugins: [react(), tailwindcss()],
}))
