import{ Locator, Page }from '@playwright/test'
class Payroll{
    page:Page;
    payroll:Locator;
    payroll_list:Locator;
    Payroll_Title:Locator;
    generated_list:Locator;
    generatedlist_Title:Locator;





    constructor(page:Page){
        this.payroll=page.locator("//span//b[contains(text(),'Payroll')]");
        this.payroll_list=page.locator("//div//div//a[contains(text(),'Payroll List')]");
        this.Payroll_Title=page.locator("//h6[contains(text(),'Payroll')]")
        this.generated_list=page.locator("//div//div//a[contains(text(),'Generated List')]")
        this.generatedlist_Title=page.locator("//h6[contains(text(),'Generated Payroll List')]");



    }
}
export default Payroll;