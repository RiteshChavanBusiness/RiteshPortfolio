import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "/RiteshPortfolio/",   // 👈 repo ka exact naam yahan likhna
})
