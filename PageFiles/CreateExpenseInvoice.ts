import { Locator, Page } from '@playwright/test'
class CreateExpenseInvoice{
    page:Page
    ExpenseInvoice:Locator;
    createinvoice:Locator;
    createinvoice_title:Locator;
    selectemployee:Locator;
    fromdate:Locator;
    todate:Locator;
    invoicedte:Locator;
    invoiceamount:Locator;
    expensetype:Locator;
    vendor:Locator;
    file:Locator;
    payment_terms:Locator;
    duedate:Locator;
    submit:Locator;
    fromdateshouldbegreaterjoiningdate_alert:Locator;




    constructor(page:Page){
        this.ExpenseInvoice=page.locator("//b[contains(text(),'Expenses Invoice')]");
        this.createinvoice=page.locator("//a[contains(text(),'Create Invoice')]");
        this.createinvoice_title=page.locator("//div[@class='col-md-6']//h1");
        this.selectemployee=page.locator("select#EmployeeRef");
        this.fromdate=page.locator("(//input[@type='date'])[1]");
        this.todate=page.locator("(//input[@type='date'])[2]");
        this.invoicedte=page.locator("input#idate");
        this.expensetype=page.locator("input#ExpenseType");
        this.vendor=page.locator("select#ClientVendorRef");
        this.file=page.locator("input#file");
        this.payment_terms=page.locator("select#PaymentTerm");
        this.duedate=page.locator("input#InvoiceDueDate");
        this.submit=page.locator("input#submit");
        this.invoiceamount=page.locator("input#InvoiceAmout")
        this.fromdateshouldbegreaterjoiningdate_alert=page.locator("//div[@class='alert alert-danger']")
        



    }
}
export default CreateExpenseInvoice;