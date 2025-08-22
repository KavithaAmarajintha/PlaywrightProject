import {test,expect,Page,Locator}from '@playwright/test'
class NewPayslips
{
    page:Page;
    Npayslips:Locator;
    getpayslips:Locator;
    Employee_payslip:Locator;
    View:Locator


    constructor(page){
        this.page=page;
        this.Npayslips=page.locator("#isEmpMode21");
        this.Employee_payslip=page.locator("//div//h4[contains(text(),'Employee PaySlip')]");
        this.View=page.locator("//div//button[contains(text(),'View')]");


        
    }
}
export default NewPayslips;