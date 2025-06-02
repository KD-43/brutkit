import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), cssInjectedByJsPlugin(),],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.js'),
      name: 'Brutkit',
      formats: ['es', 'umd'],
      filename: (format) => `brutkit.${format === 'es' ? 'js' : 'umd.cjs'}`,
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        },
        assetFileNames: 'assets/[name]-[hash][extname]'
      },
    },
    sourcemap: true,
    emptyOutDir: true,
  }
});
