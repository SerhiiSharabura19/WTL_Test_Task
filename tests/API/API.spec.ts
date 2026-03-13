import { test } from '../_fixtures/fixturePageManager';

test('API-1 Verify "getAllProducts" API method', async ({ pageManager }) => {
  const response = await pageManager.onAPIMethods().getAllProducts();
  await pageManager.onAPIMethods().assertResponseHas200Code(response);
  await pageManager.onAPIMethods().assertResponseBodyToHaveProperty(response, 'products');
});

test('API-2 Verify "getAllProducts" API method', async ({ pageManager }) => {
  const response = await pageManager.onAPIMethods().postToAllProductsList();
  await pageManager.onAPIMethods().assertResponseHas405Code(response);
  await pageManager.onAPIMethods().assertResponseMessage(response);
});

test('API-3 Verify "getAllProducts" API method', async ({ pageManager }) => {
  const response = await pageManager.onAPIMethods().putToAllBrandsList();
  await pageManager.onAPIMethods().assertResponseHas405Code(response);
  await pageManager.onAPIMethods().assertResponseMessage(response);
});

test('API-4 Verify "getAllProducts" API method', async ({ pageManager }) => {
  const response = await pageManager.onAPIMethods().deleteToVerifyLogin();
  await pageManager.onAPIMethods().assertResponseHas405Code(response);
  await pageManager.onAPIMethods().assertResponseMessage(response);
});

//master branch
