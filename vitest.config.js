// vitest.config.js
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom', // Simula el navegador para usar document.getElementById, innerHTML, etc.
    globals: true,
  },
});
