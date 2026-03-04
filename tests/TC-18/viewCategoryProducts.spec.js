import { test } from '../../tests/_fixtures/fixtures';
import { WOMEN_TOPS_PAGE_TITLE, JEANS_PAGE_TITLE } from '../../src/helpers/constants';
import { categories } from '../../src/helpers/categories';

test('TC-18: Add Products in Cart', async({ homePage }) => {
    await homePage.open();
    await homePage.assertWomenCategoryIsVisible();
    await homePage.assertMenCategoryIsVisible();
    await homePage.assertKidsCategoryIsVisible();
    await homePage.clickWomenCategory();
    await homePage.clickWomenTopSubCategory();
    await homePage.assertCategoryURL(categories.women.tops);
    await homePage.assertPageHasCorrectTitle(WOMEN_TOPS_PAGE_TITLE);
    await homePage.clickMenCategory();
    await homePage.clickJeansSubCategory();
    await homePage.assertCategoryURL(categories.men.jeans);
    await homePage.assertPageHasCorrectTitle(JEANS_PAGE_TITLE);
  }
);