import{Page, Locator}from '@playwright/test'
import ENV from '../Utilities/env';
class loginpage{
   readonly page:Page;
   readonly username_field:Locator;
   readonly password_field:Locator;
   readonly login_button:Locator;

    constructor(page:Page){
        this.page=page;
        this.username_field=page.locator('input#LoginUser');
        this.password_field=page.locator('input#password-field');
        this.login_button =page.locator('input#Login');

    }
    public async gotoLoginPage() {
        await this.page.goto(ENV.BASE_URL);
    }
    public async gotoURLPage() {
        await this.page.goto(ENV.URL);
    }

    public async LoginMethod(username: string, password: string) {
        await this.username_field.fill(username);
        await this.password_field.fill(password);
        await this.login_button.click();
    }
}
export default loginpage;