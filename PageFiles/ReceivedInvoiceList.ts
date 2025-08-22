import { Locator, Page }from '@playwright/test'

class ReceivedInvoiceList{
    readonly page:Page;
    readonly invoices:Locator;
    readonly receivedinvoicelist:Locator;
    readonly received_title:Locator;
    readonly search:Locator;
    readonly nomatchingrecord:Locator;
    readonly pagination1:Locator;
    readonly pagination2:Locator;
    readonly pagination3:Locator;
    readonly pagination4:Locator;
    readonly editicon:Locator;
    readonly updateinvoice_title:Locator;
    readonly partial_amount:Locator;
    readonly update_button:Locator;
    readonly pleaseenterreason:Locator;
    readonly successfullyupdated:Locator;
    readonly info1:Locator;
    readonly InvoiceDetails:Locator;
    readonly backtolist:Locator;
    readonly mail:Locator;
    readonly sendinvoice:Locator;
    readonly Email:Locator;
    readonly radiobutton:Locator;
    readonly vendor:Locator;
    readonly sendmail:Locator;
    readonly reason:Locator;
    readonly mailnotyetsend:Locator;
    readonly download_invoice:Locator;
    readonly download_title:Locator;
    readonly vendorradiobutton:Locator;
    readonly vendorfield:Locator;
    readonly download_button:Locator;



    constructor(page:Page){
        this.invoices=page.locator("(//b[contains(text(),'Invoice')])[1]");
        this.receivedinvoicelist=page.locator("//a[@href='/Invoices/InvoiceReceivedList']")
        this.received_title=page.locator("//h6[contains(text(),'Invoice Received List')]")
        this.search=page.locator("//input[@type='search']")
        this.nomatchingrecord=page.locator("//tr[@class='odd']//td")
        this.pagination1=page.locator("//a[@data-dt-idx='2']")
        this.pagination2=page.locator("//a[@data-dt-idx='3']")
        this.pagination3=page.locator("//a[@data-dt-idx='4']")
        this.pagination4=page.locator("//a[@data-dt-idx='5']")
        this.editicon=page.locator("//a[@title='Update Invoice']")
        this.updateinvoice_title=page.locator("//h1[contains(text(),'Update Invoice')]")
        this.partial_amount=page.locator("input#PartiallyPaidAmount")
        this.update_button=page.locator("//input[@value='Update']")
        this.pleaseenterreason=page.locator("//div[@class='alert alert-danger']")
        this.successfullyupdated=page.locator("//div[@id='toast-container']//div//div")
        this.info1=page.locator("//a[@title='View in Detail']//i")
        this.InvoiceDetails=page.locator("//div[@class='card shadow mb-4']//h6")
        this.backtolist=page.locator("//div[@class='row']//a");
        this.mail=page.locator("//a[@title='Email Client']//i");
        this.sendinvoice =page.locator("//div[@class='col-md-12']//h4")
        this.Email=page.locator("//input[@placeholder='mail@example.com']")
        this.radiobutton=page.locator("input#vendor")
        this.vendor=page.locator("select#clientvendor")
        this.sendmail=page.locator("//input[@value='Send Email']")
        this.reason=page.locator("textarea#Reason")
        this.mailnotyetsend=page.locator("//div[@class='alert alert-danger']")
        this.download_invoice=page.locator('//a[@title="Download Invoice"]//i')
        this.download_title=page.locator("//h4[contains(text(),'Download Invoice')]")
        this.vendorradiobutton=page.locator("input#vendor")
        this.vendorfield=page.locator("select#clientvendor")
        this.download_button=page.locator("//input[@value='Download']")
 

    }

}
export default ReceivedInvoiceList;