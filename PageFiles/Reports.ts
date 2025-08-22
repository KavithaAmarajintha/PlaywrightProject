import { Locator, Page } from '@playwright/test'
class Reports{

    page:Page;
    reports:Locator;
    Reprots_Title:Locator;
    view_report:Locator;
    search:Locator;
    norecordsfound:Locator;
    monthlyleavereport_title:Locator;
    fromdate:Locator;
    submit:Locator;
    leavelist:Locator;




    constructor(page:Page){
        this.reports=page.locator("//b[contains(text(),'Reports')]");
        this.view_report=page.locator("//td//a[@title='View Report']");
        this.search=page.locator("//input[@type='search']");
        this.norecordsfound=page.locator("//td[contains(text(),'No matching records found')]");
        this.monthlyleavereport_title=page.locator("//div[@class='col-md-6']//h1");
        this.fromdate=page.locator("input#FromDate");
        this.submit=page.locator("//input[@type='submit']")
        this.Reprots_Title=page.locator("//div//h6[contains(text(),'Reports')]");
        this.leavelist=page.locator("//div//h6[contains(text(),'Leave Monthly Report List')]")




    }
}
export default Reports;