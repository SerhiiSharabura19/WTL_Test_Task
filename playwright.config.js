import { defineConfig } from '@playwright/test';
import 'dotenv/config';

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
    launchOptions: {
      args: [
        '--disable-features=InterestFeedContentSuggestions',
      ],
    },
  },
});