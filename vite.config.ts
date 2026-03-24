import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { ssgPlugin } from "@wroud/vite-plugin-ssg" // New import for pre-rendering
import path from "path"

export default defineConfig({
  // Setting root to src is often required for clean SSG builds
  plugins: [
    react(),
    tailwindcss(),
    ssgPlugin(), // Added the pre-rendering plugin
  ],
  base: '/',
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  build: {
    // This tells Vite to create individual HTML files for your routes
    rollupOptions: {
      input: {
        index: path.resolve(__dirname, "src/main.jsx") + "?ssg-entry",
      },
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router'],
          sanity: ['@sanity/client', '@portabletext/react'],
        }
      }
    }
  }
})
