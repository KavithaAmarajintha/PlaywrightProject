import { Page,Locator }from '@playwright/test'
class SearchByStatus{
  readonly page:Page;
  readonly invoices:Locator;
  readonly searchinvoice:Locator;
  readonly searchbystatus:Locator;
  readonly select_status:Locator;
  readonly submit:Locator;
  readonly search:Locator;
  readonly info:Locator;
  readonly backtolist:Locator;
  readonly backtosearch:Locator;
  readonly pagelink2:Locator;
  readonly nomatchingrecord:Locator;
  readonly selectrows:Locator;
  readonly back_button:Locator;


  constructor(page:Page){
    this.page=page;
    this.invoices=page.locator("(//b[contains(text(),'Invoice')])[1]")
    this.searchinvoice=page.locator("//a[contains(text(),'Search Invoice')]")
    this.searchbystatus=page.locator("(//tr//td//a[contains(text(),'Select')])[2]")
    this.select_status=page.locator("select#status")
    this.submit=page.locator("input#btnsubmit")
    this.search=page.locator("//input[@type='search']")
    this.info=page.locator("//td//a[@title='View in Detail']")
    this.backtolist=page.locator("//span[contains(text(),'Back to List')]")
    this.backtosearch=page.locator("//div//a[@class='btn btn-primary']")
    this.pagelink2=page.locator("(//a[@class='page-link'])[3]")
    this.nomatchingrecord=page.locator("//tr//td[contains(text(),'No matching records found')]")
    this.selectrows=page.locator("//select[@name='dataTable_length']")
    this.back_button=page.locator("//div//a[contains(text(),'Back to List')]")


  }
}
export default SearchByStatus;