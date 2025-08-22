import{Page, Locator}from '@playwright/test'

class ChangePassword{
    page:Page;
    username:Locator;
    password:Locator;
    login:Locator;
    profile:Locator;
    changePassword:Locator;
    ChangePassword:Locator;
    oldpassword:Locator;
    newpassword:Locator;
    confirmpassword:Locator;
    Changepassword_button:Locator;
    changedsuccessfully:Locator;
    reset:Locator;

    alert1:Locator;
    alert2:Locator;
    alert3:Locator;

    constructor(page){
        this.page=page;
        this.username=page.locator("#LoginUser");
        this.password=page.locator("#password-field");
        this.login=page.locator("#Login");
        this.profile=page.locator("//i[@class='fa fa-user']");
        this.changePassword=page.locator("//a[@href='/Account/ChangePassword']");
        this.ChangePassword=page.locator("//h1[text()='Change Password']").nth(0);
        this.oldpassword=page.locator("#oldpwd");
        this.newpassword=page.locator("#newpwd");
        this.confirmpassword=page.locator("#cnfrmpwd");
        this.Changepassword_button=page.locator("//input[@value='Change Password']");
        this.reset=page.locator("//div//input[@value='Reset']")
        this.changedsuccessfully=page.locator("//div[text()='Password changed successfully']");

        this.alert1=page.locator("//p[text()='Old and new passwords should not be same.']");
        this.alert2=page.locator("//p[text()='Old Password is worng']");
    }
}
export default ChangePassword;