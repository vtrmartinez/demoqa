class PageManager {
    constructor(page){
        this.page = page;
        this.loginPage = null;
    }

    getLoginPage() {
        if(!this.loginPage) {
            const { LoginPage } = require("../pageobjects/login");
            this.loginPage = new LoginPage(this.page);
        }

        return this.loginPage;
    }
}

module.exports = { PageManager };