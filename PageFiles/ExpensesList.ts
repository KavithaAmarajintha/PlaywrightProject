import { Locator, Page } from '@playwright/test'
class ExpensesList1{
    page:Page;
    expensesinvoices:Locator;
    Expenseslist:Locator;
    search:Locator;
    updateinvoice:Locator;
    updateinvoice_title:Locator;
    update:Locator;
    updatessuccessfully:Locator;
    info:Locator;
    invoice_details:Locator;
    click_here:Locator;
    file_removed_alert:Locator;
    backtolist:Locator;
    Sendmail:Locator;
    EmailExpenseinvoice_Title:Locator;
    Email:Locator;
    Send_Button:Locator;
    mailsetupisnotready_alert:Locator;
    Delete_Icon:Locator;
    areyousurewanttodelete_alert:Locator;
    no_button:Locator;
    norecordsmatch:Locator;
    reason:Locator;



    constructor(page:Page){
        this.expensesinvoices=page.locator("//span//b[contains(text(),'Expenses Invoice')]");
        this.Expenseslist=page.locator("//a[@href='/Expenses/ExpenseInvoicesList']");
        this.search=page.locator("//label//input[@type='search']")
        this.updateinvoice=page.locator("//td//a[@title='Update Invoice']");
        this.update=page.locator("input#submit");
        this.updatessuccessfully=page.locator("//div[contains(text(),'Expenses Invoice updated successfully')]");
        this.updateinvoice_title=page.locator("//div//h1[contains(text(),'Update Expenses Invoice')]")
        this.info=page.locator("//a[@title='View in Detail']");
        this.invoice_details=page.locator("//div//h6[contains(text(),'Expenses Invoice Details')]")
        this.click_here=page.locator("//div[@class='col-md-5']//a");
        this.file_removed_alert=page.locator("//div[@class='alert alert-danger']")
        this.backtolist=page.locator("//a//span[@class='text']");
        this.Sendmail=page.locator("(//a[@title='Email Vendor'])[1]")
        this.EmailExpenseinvoice_Title=page.locator("//div//h1[contains(text(),'Email Expense Invoice')]");
        this.Email=page.locator("input#tmail");
        this.Send_Button=page.locator("input#btnsubmit");
        this.mailsetupisnotready_alert=page.locator("//div[@class='toast-message']")
        this.Delete_Icon=page.locator("//a[@title='Delete Invoice']")
        this.areyousurewanttodelete_alert=page.locator("//div//h1[contains(text(),'Are you sure you want to delete this?')]")
        this.no_button=page.locator("//a[@class='btn btn-primary']");
        this.norecordsmatch=page.locator("//tr//td[contains(text(),'No matching records found')]");
        this.reason=page.locator("textarea#Reason")
    }    
}
export default ExpensesList1