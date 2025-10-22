const { expect } = require("@playwright/test");

class LoginPage {
    constructor(page){
        this.page = page;
        this.bookStoreApp = page.getByRole('heading', { name: 'Book Store Application' });
        this.loginButton = page.getByRole('button', { name: 'Login' });
        this.username = page.getByRole('textbox', { name: 'UserName' });
        this.password = page.getByRole('textbox', { name: 'Password' });
        this.logoutButton = page.getByRole('button', { name: 'Log out' })
        this.loginErrorMessage = page.getByText('Invalid username or password!');
    }

    async goto() {
        await this.page.goto("https://demoqa.com/");
    }

    async clickOnBookStoreMenu() {
        this.bookStoreApp.click();
    }

    async clickOnLoginButton() {
        this.loginButton.click();
    }

    async enterCredentials(username, password) {
	    await this.username.fill(username);
	    await this.password.fill(password);
    }

    async verifyLogoutButton() {
        await this.logoutButton.waitFor({ state: 'visible'});
        expect(this.logoutButton).toBeVisible();
    }

    async verifyLoginErrorMessage() {
        await this.loginErrorMessage.waitFor({ state: 'visible'});
        expect(this.loginErrorMessage).toBeVisible();
    }
}

module.exports = { LoginPage };