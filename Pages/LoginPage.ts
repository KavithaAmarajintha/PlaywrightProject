import { Page, Locator } from "@playwright/test";
import ENV from '../Utilities/env';
class LoginPage {
    readonly page: Page;
    readonly username_textbox: Locator;
    readonly password_textbox: Locator;
    readonly login_button: Locator;
    readonly otp:Locator
    readonly verify:Locator



    constructor(page: Page) {
        this.page = page
        this.username_textbox = page.locator("#LoginUser")
        this.password_textbox = page.locator("#password-field");
        this.login_button = page.locator("#Login");
        this.otp=page.locator("//input[@name='otpCode']")
        this.verify=page.locator("//input[@type='submit']")

    }
    public async gotoLoginPage() {
        await this.page.goto(ENV.URL1!);
    }

    public async LoginMethod(username: string, password: string) {
        await this.username_textbox.fill(username);
        await this.password_textbox.fill(password);
        await this.login_button.click();
    }
     public async OTPGeneration(otp:string){
       await this.otp.fill(otp);
         await this.verify.click();
     }

}
export default LoginPage;