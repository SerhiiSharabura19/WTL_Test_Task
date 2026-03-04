import { test } from '../../tests/_fixtures/fixtures';

test.skip('API-1 Verify "getAllProducts" API method', async({apiMethods}) => {
  const response = await apiMethods.getAllProducts();
  await apiMethods.assertResponseHas200Code(response);
  await apiMethods.assertResponseBodyToHaveProperty(response, 'products')
})

test.skip('API-2 Verify "getAllProducts" API method', async({apiMethods}) => {
  const response = await apiMethods.postToAllProductsList();
  await apiMethods.assertResponseHas405Code(response);
  await apiMethods.assertResponseMessage(response);
})

test.skip('API-3 Verify "getAllProducts" API method', async({apiMethods}) => {
  const response = await apiMethods.putToAllBrandsList();
  await apiMethods.assertResponseHas405Code(response);
  await apiMethods.assertResponseMessage(response);
})

test.skip('API-4 Verify "getAllProducts" API method', async({apiMethods}) => {
  const response = await apiMethods.deleteToVerifyLogin();
  await apiMethods.assertResponseHas405Code(response);
  await apiMethods.assertResponseMessage(response);
})