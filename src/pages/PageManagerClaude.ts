import type { Page } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { SignUpLoginPage } from '../pages/SignupLoginPage';
import { AccountInformationPage } from '../pages/EnterAccountInformationPage';
import { AccountCreatedPage } from '../pages/AccountCreatedPage';
import { ProductsPage } from '../pages/ProductsPage';
import { CartPage } from '../pages/CartPage';

export class PageManager {
  private readonly page: Page;

  private _homePage: HomePage | null = null;
  private _signUpLoginPage: SignUpLoginPage | null = null;
  private _accountInformationPage: AccountInformationPage | null = null;
  private _accountCreatedPage: AccountCreatedPage | null = null;
  private _productsPage: ProductsPage | null = null;
  private _cartPage: CartPage | null = null;

  constructor(page: Page) {
    this.page = page;
  }

  get homePage(): HomePage {
    if (!this._homePage) this._homePage = new HomePage(this.page);
    return this._homePage;
  }

  get signUpLoginPage(): SignUpLoginPage {
    if (!this._signUpLoginPage) this._signUpLoginPage = new SignUpLoginPage(this.page);
    return this._signUpLoginPage;
  }

  get accountInformationPage(): AccountInformationPage {
    if (!this._accountInformationPage) this._accountInformationPage = new AccountInformationPage(this.page);
    return this._accountInformationPage;
  }

  get accountCreatedPage(): AccountCreatedPage {
    if (!this._accountCreatedPage) this._accountCreatedPage = new AccountCreatedPage(this.page);
    return this._accountCreatedPage;
  }

  get productsPage(): ProductsPage {
    if (!this._productsPage) this._productsPage = new ProductsPage(this.page);
    return this._productsPage;
  }

  get cartPage(): CartPage {
    if (!this._cartPage) this._cartPage = new CartPage(this.page);
    return this._cartPage;
  }
}
