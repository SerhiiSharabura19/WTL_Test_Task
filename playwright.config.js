import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  reporter: [
    ['list'],
    ['html', { open: 'never' }]
  ],

  use: {
    baseURL: 'https://automationexercise.com',
    testIdAttribute: 'data-qa',
    headless: true,
  },
});