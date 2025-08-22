import { Locator, Page }from '@playwright/test'

class SearchInvoice{
   readonly page:Page;
   readonly invoices:Locator;
   readonly searchinvoice:Locator;
   readonly invoicesearch_title:Locator;
   readonly searchbydate:Locator;
   readonly backtolist:Locator;
   readonly searchbystatus:Locator;
   readonly searchbyclient:Locator;
   readonly searchbyemployee:Locator;





   constructor(page:Page){
    this.page=page;
    this.invoices=page.locator("(//b[contains(text(),'Invoice')])[1]")
    this.searchinvoice=page.locator("//a[contains(text(),'Search Invoice')]")
    this.invoicesearch_title=page.locator("//h1[contains(text(),'Invoice Search')]")
    this.searchbydate=page.locator("(//tr[@role='row']//td//a)[1]")
    this.backtolist=page.locator("//a[@class='btn btn-primary']")
    this.searchbystatus=page.locator("//tr[@class='even']//td//a")
    this.searchbyclient=page.locator("(//tr[@role='row']//td//a)[3]")
    this.searchbyemployee=page.locator("(//tbody//tr[@role='row']//td//a)[4]")



   }
   



}
export default SearchInvoice;