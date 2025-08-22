import {test , expect,Page,Locator} from '@playwright/test'

class Payslips{
    page: Page;
    paySlips:Locator;
    getpayslipsTitle:Locator;
    Month:Locator;
    Proceed:Locator;
    alert:Locator;

    

    constructor(page){
        this.page=page;
        this.paySlips=page.locator("//b[contains(text(),'Payslips')]");
        this.getpayslipsTitle=page.locator("//h1[contains(text(),'Get Payslip')]");
        this.Month=page.locator("#Month");
        this.Proceed=page.locator("#getSlip");
        this.alert=page.locator("//div[@class='alert alert-danger']");
        

    }
}
export default Payslips;
