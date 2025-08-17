import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// 👇 yaha apne repo ka name dal
export default defineConfig({
  plugins: [react()],
  base: '/RiteshPortfolio/', 
})
