import{Page, Locator}from '@playwright/test'

class Logout{
    page:Page;
    username:Locator;
    password:Locator;
    login:Locator;
    profile:Locator;
    logout1:Locator;
    Readytoleave:Locator;
    Logout_button:Locator;


    constructor(page){
        this.page=page;
        this.username=page.locator("#LoginUser");
        this.password=page.locator("#password-field");
        this.login=page.locator("#Login");
        this.profile=page.locator("//i[@class='fa fa-user']");
        this.logout1=page.locator("//a[@data-target='#logoutModal']");
        this.Readytoleave=page.locator("//h5[text()='Ready to Leave?']").nth(0);
        this.Logout_button=page.locator("#logout");
        
    }
}
export default Logout;