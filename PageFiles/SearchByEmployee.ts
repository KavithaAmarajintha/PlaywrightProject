import { Page,Locator }from '@playwright/test'
class SearchByEmployee{
  readonly page:Page;
  readonly invoices:Locator;
  readonly searchinvoice:Locator;
  readonly searchbyemployee:Locator;
  readonly employee:Locator;
  readonly search_button:Locator;
  readonly search:Locator;
  readonly info:Locator;
  readonly backtolist:Locator;
  readonly Backtosearch:Locator;
  readonly nomatchingrecord:Locator;
  readonly pagelink2:Locator;
  readonly pagelink3:Locator;
  readonly selectpages:Locator;

  constructor(page:Page){
    this.page=page;
    this.invoices=page.locator("(//b[contains(text(),'Invoice')])[1]")
    this.searchinvoice=page.locator("//a[contains(text(),'Search Invoice')]")
    this.searchbyemployee=page.locator("(//tr//td//a)[4]")
    this.employee=page.locator("//select[@name='EmployeeId']")
    this.search_button=page.locator("input#btnsubmit")
    this.search=page.locator("//input[@type='search']")
    this.info=page.locator("//td//a[@title='View in Detail']")
    this.backtolist=page.locator("//span[contains(text(),'Back to List')]")
    this.Backtosearch=page.locator("//div//a[@class='btn btn-primary']")
    this.nomatchingrecord=page.locator("//tr//td[contains(text(),'No matching records found')]")
    this.pagelink2=page.locator("(//li//a[@class='page-link'])[3]")
    this.pagelink3=page.locator("(//li//a[@class='page-link'])[4]")
    this.selectpages=page.locator("//select[@name='dataTable_length']")
  }

}
export default SearchByEmployee;