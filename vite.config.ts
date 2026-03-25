import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import VitePrerender from 'vite-plugin-prerender'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePrerender({
      staticDir: 'dist',
      routes: [
        '/',
        '/about',
        '/services',
        '/contact',
        '/faq',
        '/blog',
        '/privacy-policy',
        '/terms-of-service',
        '/cookie-policy',
      ],
    }),
  ],
  base: '/',
  resolve: { alias: { "@": "/src" } },
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
