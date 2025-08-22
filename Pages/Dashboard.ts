import {Page, Locator } from "@playwright/test";


class Dashboard{
    page:Page;
    username:Locator;
    password:Locator;
    login:Locator;
    Dash:Locator;
    dash: Locator;
    link1:Locator;
    Createtimesheet:Locator;
    dash1:Locator;
    link2:Locator;
    Createtimesheet1:Locator;
    dash2:Locator;
    link3:Locator;
    Esr:Locator;
   


    constructor(page){
        this.page=page
        this.username=page.locator("#LoginUser");
        this.password=page.locator("#password-field");
        this.login=page.locator("#Login");
        this.Dash=page.locator("//h1[text()='Dashboard']");
        this.dash=page.locator("//b[contains(text(),'Dashboard')]");
        this.link1=page.locator("//a[contains(text(),'Add Summary Timesheet')]");
        this.Createtimesheet=page.locator("//h1[text()='Create Timesheet']");
        this.dash1=page.locator("//b[contains(text(),'Dashboard')]");
        this.link2=page.locator("//a[contains(text(),'Add Day Wise Timesheet')]");
        this.Createtimesheet1=page.locator("//h1[text()='Create Timesheet']");
        this.dash2=page.locator("//span//b[contains(text(),'Dashboard')]");
        this.link3=page.locator("//div//a[contains(text(),'Submit Employee Service Request')]");
        this.Esr=page.locator("//h1[text()='New ESR']")

    }
}
export default Dashboard;