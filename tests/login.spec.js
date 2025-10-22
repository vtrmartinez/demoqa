import { test } from '@playwright/test';
import { PageManager } from '../pageobjects/pageManager';
import { validCredentials, invalidCredentials } from '../utils/testData';

test.describe('Verify Login Functionality', () => {
  let loginPage;
  let pageManager;

  test.beforeEach(async ({page}) => {
    pageManager = new PageManager(page);
    loginPage = pageManager.getLoginPage();
    await loginPage.goto();    
  });


  test('Login Successfully', async ({ page }) => {
    await loginPage.clickOnBookStoreMenu();
    await loginPage.clickOnLoginButton();
    await loginPage.enterCredentials(validCredentials.username, validCredentials.password);
    await loginPage.clickOnLoginButton();

    await loginPage.verifyLogoutButton();
  });

  test('Login with error - Wrong username', async ({ page }) => {
    await loginPage.clickOnBookStoreMenu();
    await loginPage.clickOnLoginButton();
    await loginPage.enterCredentials(invalidCredentials.username, validCredentials.password);
    await loginPage.clickOnLoginButton();

    await loginPage.verifyLoginErrorMessage();
  });

  test('Login with error - Wrong password', async ({ page }) => {
    await loginPage.clickOnBookStoreMenu();
    await loginPage.clickOnLoginButton();
    await loginPage.enterCredentials(validCredentials.username, invalidCredentials.password);
    await loginPage.clickOnLoginButton();

    await loginPage.verifyLoginErrorMessage();
  });
});
