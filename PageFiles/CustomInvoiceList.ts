import { Locator, Page }from '@playwright/test'
class CustomInvoiceList{
    readonly page:Page;
    readonly invoices:Locator;
    readonly custominvoice1:Locator;
    readonly backtolist:Locator;
    readonly invoicelist:Locator;
    readonly search:Locator;
    readonly edit:Locator;
    readonly updateinvoice:Locator;
    readonly hourlyrate:Locator;
    readonly update:Locator;
    readonly info:Locator;
    readonly invoice_details:Locator;
    readonly backtolist1:Locator;
    readonly mail:Locator;
    readonly mailto:Locator;
    readonly sendinvoices:Locator;
    readonly radiobutton:Locator;
    readonly selectclient:Locator;
    readonly sendmail:Locator;
    readonly nomatchingrecord:Locator;
    readonly invoice_list:Locator;
    readonly loading:Locator;
    readonly alert:Locator;
    readonly downloadinvoice:Locator;
    readonly downloadTitle:Locator;
    readonly clientradiobutton:Locator;
    readonly clientfield:Locator;
    readonly download:Locator;
    readonly successfullyupdated:Locator;

    constructor(page:Page){
        this.invoices=page.locator("(//b[contains(text(),'Invoice')])[1]")
        this.custominvoice1=page.locator("(//a[contains(text(),'Custom Invoice')])[1]")
        this.backtolist=page.locator("//a[@class='btn btn-primary']");
        this.invoicelist=page.locator("//h6[contains(text(),'Invoice List')]")
        this.search=page.locator("//input[@type='search']")
        this.edit=page.locator("(//a[@title='Update Invoice'])[1]")
        this.updateinvoice=page.locator("//h1[contains(text(),'Update Invoice')]")
        this.hourlyrate=page.locator("input#HourlyRate");
        this.update=page.locator("input#submit");
        this.info=page.locator('//i[@class="fa fa-fw fa-info"]')
        this.mail=page.locator("//i[@class='fa fa-fw fa-envelope']")
        this.sendinvoices=page.locator("//h4[contains(text(),'Send Invoice')]");
        this.mailto=page.locator("//input[@placeholder='mail@example.com']");
        this.radiobutton=page.locator("input#client");
        this.selectclient=page.locator("(//select[@id='clientvendor'])[1]");
        this.sendmail=page.locator("//input[@value='Send Email']");
        this.nomatchingrecord=page.locator("//td[contains(text(),'No matching records found')]")
        this.invoice_details=page.locator("//div[@class='row']//h6")
        this.backtolist1=page.locator("//div[@class='row']//a")
        this.invoice_list=page.locator("tr td");
        this.loading=page.locator("(//div[@class='se-pre-con'])[2]")
        this.alert=page.locator("//div[@class='alert alert-danger']")
        this.downloadinvoice=page.locator("//a[@title='Download Invoice']")
        this.downloadTitle=page.locator("//div[@class='col-md-12']//h4")
        this.clientradiobutton=page.locator("(//input[@type='radio'])[1]")
        this.clientfield=page.locator("//select[@class='clientvendor form-control form-control-user']")
        this.download=page.locator("//input[@value='Download']")
        this.successfullyupdated=page.locator("//div[contains(text(),'Invoice updated successfully')]")





    }
}
export default CustomInvoiceList;