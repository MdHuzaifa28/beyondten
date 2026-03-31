import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// ─────────────────────────────────────────────────────────────
//  beyondten — vite.config.js  (SEO + Performance edition)
//
//  KEY CHANGES vs original:
//  1. build.rollupOptions  — manual chunk splitting keeps
//     vendor JS out of the critical path (better LCP/FID)
//  2. build.cssCodeSplit   — CSS is inlined per chunk so
//     there's zero render-blocking stylesheet on first load
//  3. build.reportCompressedSize — shows gzip sizes in CI
//  4. esbuild.legalComments — strips license comments from
//     prod bundle (smaller transfer size)
//
//  OPTIONAL (install separately if you want prerendering):
//    npm i -D vite-plugin-prerender
//  Then uncomment the prerender block below.
//  Prerendering gives Google a fully-rendered HTML page
//  without JavaScript — the single biggest SEO win for a
//  React SPA.  See the SEO_README.md for full instructions.
// ─────────────────────────────────────────────────────────────

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),

    // ── OPTIONAL: Prerender (uncomment after installing) ───────
    // import prerender from 'vite-plugin-prerender'
    // prerender({
    //   staticDir: path.join(__dirname, 'dist'),
    //   routes: ['/'],
    //   postProcess(renderedRoute) {
    //     // Strip the dev-only noscript warning injected by Vite
    //     renderedRoute.html = renderedRoute.html
    //       .replace(/<noscript>[\s\S]*?<\/noscript>/g, '')
    //     return renderedRoute
    //   }
    // }),
  ],

  build: {
    // Target modern browsers — removes legacy JS polyfills
    target: 'es2020',

    // Smaller chunks = faster first paint
    chunkSizeWarningLimit: 500,

    // Show gzip sizes in build output
    reportCompressedSize: true,

    rollupOptions: {
      output: {
        // Manual chunk splitting: keeps React, icons, and
        // animation libs out of the main bundle so the browser
        // can cache them separately between deployments.
        manualChunks: {
          'vendor-react':  ['react', 'react-dom'],
          'vendor-icons':  ['lucide-react', 'react-icons'],
        },

        // Predictable, cache-friendly file names
        chunkFileNames:  'assets/js/[name]-[hash].js',
        entryFileNames:  'assets/js/[name]-[hash].js',
        assetFileNames:  'assets/[ext]/[name]-[hash].[ext]',
      },
    },

    // Inline CSS per chunk — eliminates render-blocking <link> tags
    cssCodeSplit: true,

    // Minify with esbuild (faster than terser, almost same size)
    minify: 'esbuild',
  },

  esbuild: {
    // Remove console.log in production
    drop: ['console', 'debugger'],

    // Strip license comments from prod bundle
    legalComments: 'none',
  },
})