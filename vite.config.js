// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['jspdf']  // ✅ okay to keep
  }
  // ❌ remove build.rollupOptions.external entirely
});
