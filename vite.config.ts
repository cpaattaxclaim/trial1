import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import type { Plugin } from 'vite'

function nonBlockingFonts(): Plugin {
  return {
    name: 'non-blocking-fonts',
    transformIndexHtml(html) {
      // Replace render-blocking Google Fonts stylesheet with preload + onload swap
      return html.replace(
        /<link\s[^>]*href=["']https:\/\/fonts\.googleapis\.com\/css2[^"']*["'][^>]*rel=["']stylesheet["'][^>]*>/g,
        (match) => {
          const hrefMatch = match.match(/href=["']([^"']+)["']/);
          if (!hrefMatch) return match;
          const href = hrefMatch[1];
          return `<link rel="preload" as="style" href="${href}" onload="this.onload=null;this.rel='stylesheet'"><noscript><link rel="stylesheet" href="${href}"></noscript>`;
        }
      );
    },
  };
}

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    nonBlockingFonts(),
  ],
  base: '/',
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  build: {
    target: 'es2019',
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
