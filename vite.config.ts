import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 4173,
    host: true,
    cors: true
  },
  preview: {
    port: 4173,
    host: true
  },
  base: './',  // This might work better for subdomains than '/'
});
