import{Page, Locator}from '@playwright/test'
import ENV from '../Utilities/env';
class SwingpayLoginPage{
    page:Page;
    Username:Locator;
    Password:Locator;
    loginbutton:Locator;

    constructor(page:Page){
        this.page=page;
        this.Username=page.locator("//input[@id='LoginUser']");
        this.Password=page.locator("//input[@id='password-field']");
        this.loginbutton =page.locator("//button[contains(text(),'Login')]");

    }
    public async gotoSwingpayURL() {
        await this.page.goto(ENV.Swingpay_URL)
    }
    

    public async SwingpayLoginMethod(username: string, password: string) {
        await this.Username.fill(username);
        await this.Password.fill(password);
        await this.loginbutton.click();
    }
}
export default SwingpayLoginPage;