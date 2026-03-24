import { test as base } from '@playwright/test';
import { PageManagerV2 } from '../../src/pages/PageManagerV2';
import { APImanager } from '../../src/pages/APImanager';

export const test = base.extend<{ pageManagerV2: PageManagerV2; apiManager: APImanager }>({
  pageManagerV2: async ({ page }, use) => {
    const pageManagerV2 = new PageManagerV2(page);

    await use(pageManagerV2);
  },
  apiManager: async ({ request }, use) => {
    const apiManager = new APImanager(request);

    await use(apiManager);
  },
});
