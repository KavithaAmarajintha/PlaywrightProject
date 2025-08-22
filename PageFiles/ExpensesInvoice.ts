import { Locator, Page }from '@playwright/test'

class ExpensesInvoice{

    page:Page;
    expensesinvoices:Locator;
    createinvoice:Locator;
    expensesList:Locator;
    CreateExpensesInvoice_Title:Locator;
    ExpensesInvoiceList_Title:Locator;


    constructor(page:Page){
        this.expensesinvoices=page.locator("//span//b[contains(text(),'Expenses Invoice')]");
        this.createinvoice=page.locator("//div//a[contains(text(),'Create Invoice')]");
        this.expensesList=page.locator("(//a[@href='/Expenses/ExpenseInvoicesList'])[1]")
        this.CreateExpensesInvoice_Title=page.locator("//div//h1[contains(text(),'Create Expenses Invoice')]");
        this.ExpensesInvoiceList_Title=page.locator("//div[@class='row']//h6")
    }
}
export default ExpensesInvoice;