import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  // CHANGED: From '/trial1/' to '/' because of the custom domain
  base: '/', 
  resolve: {
    alias: {
      "@": "/src",
    },
  },
})
