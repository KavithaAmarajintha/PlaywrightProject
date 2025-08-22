import { Page,Locator }from '@playwright/test'
class SearchByDate{
  readonly page:Page;
  readonly invoices:Locator;
  readonly searchinvoice:Locator;
  readonly searchbydate:Locator;
  readonly fromdate:Locator;
  readonly todate:Locator;
  readonly search_button:Locator;
  readonly search:Locator;
  readonly info:Locator;
  readonly backtolist:Locator;
  readonly nomatchingrecord:Locator;
  readonly noinvoices:Locator;
  readonly backtosearch:Locator;





  constructor(page:Page){
    this.page=page;
    this.invoices=page.locator("(//b[contains(text(),'Invoice')])[1]")
    this.searchinvoice=page.locator("//a[contains(text(),'Search Invoice')]")
    this.searchbydate=page.locator("(//tr[@role='row']//td//a)[1]")
    this.fromdate=page.locator("input#fdate")
    this.todate=page.locator("input#tdate")
    this.search_button=page.locator("input#btnsubmit")
    this.search=page.locator("//input[@type='search']")
    this.info=page.locator("(//td//a[@title='View in Detail'])")
    this.backtolist=page.locator("//span[@class='text']")
    this.nomatchingrecord=page.locator("//td[contains(text(),'No matching records found')]")
    this.noinvoices=page.locator("//div[@class='alert alert-danger']")
    this.backtosearch=page.locator("//div//a[@class='btn btn-primary']")
   
  }
  public async Invoice(frmdate,tdate)
  {
      await this.fromdate.fill(frmdate);
      await this.todate.fill(tdate);
      await this.search_button.click();
  }

  
}
export default SearchByDate;