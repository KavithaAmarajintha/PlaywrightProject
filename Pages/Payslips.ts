import {test,expect, Page, Locator}from'@playwright/test'
class Payslip{
    page:Page;
    payslips:Locator;
    employeepayslip:Locator;
    selectyear:Locator;
    selectmonth:Locator;
    View:Locator;
    //alert:Locator;

    constructor(page){
        this.page=page;
        this.payslips=page.locator("(//li[@id='isEmpMode21'])[1]");
        this.employeepayslip=page.locator("//div//h4[contains(text(),'Employee PaySlip')]");
        this.selectyear=page.locator("//div//select[@id='year']");
        this.selectmonth=page.locator("//div//select[@id='month']")
        //this.proceed=page.locator("//input[@type='submit']");
        this.View=page.locator("//div//button[contains(text(),'View')]")
       // this.alert=page.locator('//div[@class="alert alert-danger"]')
    }
    
    
}
export default Payslip;
