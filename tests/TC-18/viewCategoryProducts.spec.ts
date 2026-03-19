import { test } from '../_fixtures/fixtures';
import { WOMEN_TOPS_PAGE_TITLE, JEANS_PAGE_TITLE } from '../data/constants';
import { categories } from '../data/categories';

test('TC-18: Add Products in Cart', async ({ pageManager }) => {
  await pageManager.homePage.open();
  await pageManager.homePage.assertWomenCategoryIsVisible();
  await pageManager.homePage.assertMenCategoryIsVisible();
  await pageManager.homePage.assertKidsCategoryIsVisible();
  await pageManager.homePage.clickWomenCategory();
  await pageManager.homePage.clickWomenTopSubCategory();
  await pageManager.homePage.assertCategoryURL(categories.women.tops);
  await pageManager.homePage.assertPageHasCorrectTitle(WOMEN_TOPS_PAGE_TITLE);
  await pageManager.homePage.clickMenCategory();
  await pageManager.homePage.clickJeansSubCategory();
  await pageManager.homePage.assertCategoryURL(categories.men.jeans);
  await pageManager.homePage.assertPageHasCorrectTitle(JEANS_PAGE_TITLE);
});
