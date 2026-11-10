import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// GitHub's user sites live at /; project sites live at /<repository>/.
const repository = process.env.GITHUB_REPOSITORY?.split('/')[1]
const base = process.env.VITE_BASE_PATH || (repository && !repository.endsWith('.github.io') ? `/${repository}/` : '/')

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base,
})
