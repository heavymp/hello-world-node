import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 4173,
    host: true // Allow connections from all hosts
  },
  preview: {
    port: 4173,
    host: true
  }
});
