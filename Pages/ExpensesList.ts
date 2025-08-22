import{test,expect, Page, Locator}from'@playwright/test'
class ExpensesList{
    page:Page;
    empexpensessheet:Locator;
    expenseslist:Locator;
    expensessheets:Locator;
    showentries:Locator;
    search:Locator;
    alert:Locator;



    constructor(page){
        this.page=page;
        this.empexpensessheet=page.locator("//li[@id='isEmpMode9']//b");
        this.expenseslist=page.locator("(//li[@id='isEmpMode9']//a)[3]");
        this.expensessheets=page.locator("//div[@class='row']//h6");
        this.showentries=page.locator("//select[@name='dataTable_length']");
        this.search=page.locator("//input[@type='search']");
        this.alert=page.locator("(//tr[@class='odd']//td)")


    }
    public async SelectEntries(dataTable_length){
        await this.showentries.selectOption({label:dataTable_length})
    }
    

}
export default ExpensesList;