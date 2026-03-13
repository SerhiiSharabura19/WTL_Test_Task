import { test as base } from '@playwright/test';
import { PageManager } from '../../src/pages/PageManager';

export const test = base.extend<{ pageManager: PageManager }>({
  pageManager: async ({ page, request }, use) => {
    const pageManager = new PageManager(page, request);

    await use(pageManager);
  },
});
