import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true,
    reporters: ['verbose'],
    include: [
      'tests/integration/**/*.test.js',
      'tests/unit/**/*.test.js'
    ],
    coverage: {
      include: [
        'src/**/*.js'
      ],
      exclude: [
        'src/main.js',
        'src/map.js',
        'vite**.js',
      ],
    },
  },
});
