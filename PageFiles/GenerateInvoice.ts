import { Locator, Page }from '@playwright/test'

class GenerateInvoice{
    readonly page:Page;
    readonly invoices:Locator;
    readonly generate_invoice:Locator;
    readonly timesheetlist:Locator;
    readonly search:Locator;
    readonly next:Locator;
    readonly previous:Locator;
    readonly generateinvoicelink:Locator;
    readonly timesheettext:Locator;
    readonly invoicedate:Locator;
    readonly paymentterms:Locator;
    readonly invoicenumber:Locator;
    readonly invoiceduedate:Locator;
    readonly norecoredmatching:Locator;
    readonly submit:Locator;



    constructor(page:Page){
        this.invoices=page.locator("(//b[contains(text(),'Invoice')])[1]")
        this.generate_invoice=page.locator("(//div[@class='bg-white py-2 collapse-inner rounded']//a)[6]")
        this.timesheetlist=page.locator("//h6[contains(text(),'Timesheet List')]")
        this.search=page.locator("//input[@type='search']")
        this.next=page.locator("//a[contains(text(),'Next')]")
        this.previous=page.locator("//a[contains(text(),'Previous')]")
        this.generateinvoicelink=page.locator("(//a[@title='Generate Invoice'])[1]")
        this.timesheettext=page.locator("//h6[contains(text(),'Timesheet of Chaitra Bhandari for the period: 1/21/2024 - 1/22/2024')]")
        this.submit=page.locator("input#submit")
        this.invoicedate=page.locator("input#InvoiceDate")
        this.paymentterms=page.locator("select#PaymentTerm")
        this.invoicenumber =page.locator("input#InvoiceNo")
        this.norecoredmatching=page.locator("//td[@class='dataTables_empty']")
        this.invoiceduedate=page.locator("input#InvoiceDueDate")




    }


}
export default GenerateInvoice;