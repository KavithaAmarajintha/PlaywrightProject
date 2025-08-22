import {Page, Locator } from "@playwright/test";
import ENV from "../Utilities/env";

 class Forgotpassword {
 
     page:Page;
     link: Locator;
     email:Locator;
     Submit_button:Locator;
     forgtpaswrd:Locator;
   






    constructor(page){
        this.page=page;
        this.link=page.locator("//a[contains(text(),'Forgot Password?')]")
        this.email=page.locator('[name=EmailID]')
        this.Submit_button=page.locator("//input[@value='Submit']")
        this.forgtpaswrd=page.locator("//h1[text()='Forgot Your Password?']")
    }
    async gotoLoginpage(){
        await this.page.goto(ENV.BASE_URL);
    }
    


}
export default Forgotpassword;