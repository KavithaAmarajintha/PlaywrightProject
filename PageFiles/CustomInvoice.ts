import { Locator, Page } from '@playwright/test'
class CustomInvoice{
    page:Page;
    invoices:Locator;
    custominvoice1:Locator;
    select_employee:Locator;
    fromdate:Locator;
    todate:Locator;
    proceed:Locator;
    workedhours:Locator;
    invoicedate:Locator;
    hourlyrate:Locator;
    deductionrate:Locator;
    invoiceamount:Locator;
    selectradiobutton:Locator;
    selectclient:Locator;
    paymentterms:Locator;
    invoiceduedate:Locator;
    selectfile:Locator;
    invoicenumber:Locator;
    customeinvoice_title:Locator;
    submitbutton:Locator;





    constructor(page:Page){
        this.invoices=page.locator("(//b[contains(text(),'Invoice')])[1]")
        this.custominvoice1=page.locator("(//a[contains(text(),'Custom Invoice')])[1]")
        this.select_employee=page.locator("select#EmployeeRef")
        this.fromdate=page.locator("input#PeriodFrom")
        this.todate=page.locator("input#PeriodTo")
        this.proceed=page.locator("//input[@type='submit']")
        this.workedhours=page.locator("input#WorkedHours")
        this.invoicedate=page.locator("input#InvoiceDate")
        this.hourlyrate=page.locator("input#HourlyRate")
        this.deductionrate=page.locator("input#DeductionPercent")
        this.invoiceamount=page.locator("input#InvoiceAmout")
        this.selectradiobutton=page.locator("input#client")
        this.selectclient=page.locator("select#clientvendor")
        this.paymentterms=page.locator("select#PaymentTerm")
        this.invoiceduedate=page.locator("input#InvoiceDueDate")
        this.selectfile=page.locator("input#file")
        this.invoicenumber=page.locator("input#InvoiceNo")
        this.submitbutton=page.locator("input#submit")
        this.customeinvoice_title=page.locator("//div[@class='col-md-6']//h1")


    }
}
export default CustomInvoice;
