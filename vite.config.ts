import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// yugavka.github.io is a GitHub user site, served from the domain root.
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/',
})
