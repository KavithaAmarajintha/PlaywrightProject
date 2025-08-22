import { Locator, Page }from '@playwright/test'
class AddExpenses{
    page:Page;
    empexpensessheet:Locator;
    addexpenses:Locator;
    uploadexpensessheet:Locator;
    backtolist:Locator;
    addexpenses1:Locator;
    purpose:Locator;
    upload:Locator;
    submit:Locator;
    downloadexpensessheet:Locator;


    constructor(page){
        this.page=page;
        this.empexpensessheet=page.locator("//b[contains(text(),'Emp Expenses Sheet')]");
        this.addexpenses=page.locator("(//li[@id='isEmpMode9']//a)[2]");
        this.uploadexpensessheet=page.locator("(//div[@class='container'])//h1");
        this.backtolist=page.locator("//a[@class='btn btn-primary']");
        this.purpose=page.locator("input#purp");
        this.upload=page.locator("input#file");
        this.submit=page.locator("input#submit");
        this.addexpenses1=page.locator("//span[contains(text(),'Add ExpenseSheet')]");
        this.downloadexpensessheet=page.locator("(//div[@class='container']//a//b)")
    }
    async ExpensesSheet(purposename,filename){
        await this.purpose.fill(purposename);
         await this.upload.setInputFiles(filename);
    }
}
export default AddExpenses;