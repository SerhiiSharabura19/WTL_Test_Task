import { test } from '../_fixtures/fixtures';
import { products } from '../data/productAttributes';

test('TC-12: Add Products in Cart by logged out user', async ({ pageManagerV2 }) => {
  await pageManagerV2.homePage.open();
  await pageManagerV2.homePage.assertCarouselIsVisible();
  await pageManagerV2.homePage.clickProductsLink();
  await pageManagerV2.productsPage.hoverOverProduct(products.product1.serialNumber);
  await pageManagerV2.productsPage.addFirstProductToCart();
  await pageManagerV2.productsPage.clickContinueShoppingBtn();
  await pageManagerV2.productsPage.hoverOverProduct(products.product2.serialNumber);
  await pageManagerV2.productsPage.addSecondProductToCart();
  await pageManagerV2.productsPage.clickviewCartLink();
  await pageManagerV2.cartPage.assertFirstProduct();
  await pageManagerV2.cartPage.assertSecondProduct();
  await pageManagerV2.cartPage.assertPriceOfProduct(
    products.product1.serialNumber, 
    products.product1.price
  );
  await pageManagerV2.cartPage.assertQuantityOfProduct(
    products.product1.serialNumber, 
    products.product1.quantity
  );
  await pageManagerV2.cartPage.assertTotalPriceOfProduct(
    products.product1.serialNumber,
    products.product1.total
  );
  await pageManagerV2.cartPage.assertPriceOfProduct(
    products.product2.serialNumber,
    products.product2.price);
  await pageManagerV2.cartPage.assertQuantityOfProduct(
    products.product2.serialNumber,
    products.product2.quantity
  );
  await pageManagerV2.cartPage.assertTotalPriceOfProduct(
    products.product2.serialNumber,
    products.product2.total
  );
  await pageManagerV2.cartPage.assertTotalPriceOfProduct(
    products.product2.serialNumber, 
    products.product2.total);
});

test('TC-12: Add Products in Cart by logged in user', async ({
  user: _user,
  removeAds: _removeAds,
  pageManagerV2,
}) => {
  await pageManagerV2.homePage.open();
  await pageManagerV2.homePage.assertCarouselIsVisible();
  await pageManagerV2.homePage.clickProductsLink();
  await pageManagerV2.productsPage.hoverOverProduct(products.product1.serialNumber);
  await pageManagerV2.productsPage.addFirstProductToCart();
  await pageManagerV2.productsPage.clickContinueShoppingBtn();
  await pageManagerV2.productsPage.hoverOverProduct(products.product2.serialNumber);
  await pageManagerV2.productsPage.addSecondProductToCart();
  await pageManagerV2.productsPage.clickviewCartLink();
  await pageManagerV2.cartPage.assertFirstProduct();
  await pageManagerV2.cartPage.assertSecondProduct();
  await pageManagerV2.cartPage.assertPriceOfProduct(
    products.product1.serialNumber,
    products.product1.price
  );
  await pageManagerV2.cartPage.assertQuantityOfProduct(
      products.product1.serialNumber,
      products.product1.quantity
    );
  await pageManagerV2.cartPage.assertTotalPriceOfProduct(
    products.product1.serialNumber,
    products.product1.total
  );
  await pageManagerV2.cartPage.assertPriceOfProduct(
    products.product2.serialNumber,
    products.product2.price
  );
  await pageManagerV2.cartPage.assertQuantityOfProduct(
    products.product2.serialNumber,
    products.product2.quantity
  );
  await pageManagerV2.cartPage.assertTotalPriceOfProduct(
    products.product2.serialNumber,
    products.product2.total
  );
  await pageManagerV2.cartPage.assertTotalPriceOfProduct(
    products.product2.serialNumber,
    products.product2.total
  );
});
