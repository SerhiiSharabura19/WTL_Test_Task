import { test as base } from '@playwright/test';
import { PageManager } from '../src/manager/PageManager';

type Fixtures = {
  pageManager: PageManager;
};

export const test = base.extend<Fixtures>({
  pageManager: async ({ page }, use) => {
    await use(new PageManager(page));
  },
});

export { expect } from '@playwright/test';
