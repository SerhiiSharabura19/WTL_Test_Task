import { mergeTests } from '@playwright/test';
import { test as authTest } from './fixtureAuth';
import { test as pageInstances } from './fixturesPageInstances';

export const test = mergeTests(authTest, pageInstances);
