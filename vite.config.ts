import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import Prerender from 'vite-plugin-prerender'
import path from 'path'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    Prerender({
      staticDir: path.join(__dirname, 'dist'),
      routes: [
        '/',
        '/blog',
        '/services',
        '/contact',
        // ✅ Add each blog post slug here
        '/blog/your-first-post-slug',
        '/blog/your-second-post-slug',
      ],
      renderer: new (require('vite-plugin-prerender/plugins/puppeteer-renderer'))(),
    }),
  ],
  base: '/',
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router'],
          sanity: ['@sanity/client', '@portabletext/react'],
        }
      }
    }
  }
})
