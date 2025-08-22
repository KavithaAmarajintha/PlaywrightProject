import { Locator, Page }from '@playwright/test'

class Dashboardpage{
    readonly page:Page;
    readonly dashboard:Locator;
    readonly dashboard_title:Locator;
    readonly invoices:Locator;
    readonly createcustominvoice:Locator;
    readonly generateinvoice:Locator;


    constructor(page:Page){
        this.page=page;
        this.dashboard=page.locator("//b[contains(text(),'Dashboard')]")
        this.dashboard_title=page.locator("//h1[contains(text(),'Dashboard')]")
        this.invoices=page.locator("//div[@class='col mr-2']")
        this.createcustominvoice=page.locator("//a[contains(text(),'Create Custom Invoice')]")
        this.generateinvoice=page.locator("(//a[contains(text(),'Generate Invoice')])[2]")
    }
}
export default Dashboardpage;