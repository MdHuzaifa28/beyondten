import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// ─────────────────────────────────────────────────────────────
//  beyondten — vite.config.js  (SEO + Performance edition)
// ─────────────────────────────────────────────────────────────

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],

  build: {
    // Target modern browsers — removes legacy polyfills
    target: 'es2020',

    chunkSizeWarningLimit: 500,
    reportCompressedSize: true,

    rollupOptions: {
      output: {
        // FIX: manualChunks must be a FUNCTION in Vite 8 / Rolldown
        manualChunks(id) {
          if (id.includes('node_modules/react') || id.includes('node_modules/react-dom')) {
            return 'vendor-react'
          }
          if (id.includes('node_modules/lucide-react') || id.includes('node_modules/react-icons')) {
            return 'vendor-icons'
          }
        },

        // Predictable, cache-friendly file names
        chunkFileNames:  'assets/js/[name]-[hash].js',
        entryFileNames:  'assets/js/[name]-[hash].js',
        assetFileNames:  'assets/[ext]/[name]-[hash].[ext]',
      },
    },

    cssCodeSplit: true,

    // FIX: Use oxc (Vite 8 default) — don't mix with esbuild options
    minify: 'oxc',
  },
})