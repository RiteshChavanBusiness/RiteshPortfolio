import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// 👇 Yeh sabse zaroori hai
export default defineConfig({
  plugins: [react()],
  base: "/Ritesh-Portfolio/", // repo ka naam yaha likhna hi h
})
