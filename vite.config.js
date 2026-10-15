import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// base must match the GitHub repo name so the live site finds its files
export default defineConfig({
  base: '/my-portfolio/',
  plugins: [react(), tailwindcss()],
})
