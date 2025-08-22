import test,{expect}from '../../../Fixtures/BaseClass'
import ENV from '../../../Utilities/env';

test.describe("Search By Status Functionality @Accountant",async()=>{
    test('Search by status',async({page,loginpage1,searchbystatus1})=>{
      await test.step('validate search by status',async()=>{
        await loginpage1.gotoLoginPage();
        await loginpage1.LoginMethod(ENV.USERNAME,ENV.PASSWORD)
        await searchbystatus1.invoices.click();
        await searchbystatus1.searchinvoice.click();
        await searchbystatus1.searchbystatus.click();
        await searchbystatus1.select_status.selectOption({index:1});
        await searchbystatus1.submit.click();
        await searchbystatus1.search.click();
        await searchbystatus1.search.fill('PNC');
        await searchbystatus1.search.clear();
        await searchbystatus1.search.fill('testing');
        if(await searchbystatus1.nomatchingrecord.isVisible())
        {
           expect(await searchbystatus1.nomatchingrecord.textContent()).toContain("No matching records found");
           console.log(await searchbystatus1.nomatchingrecord.textContent())
        }
        await searchbystatus1.search.clear();
        await searchbystatus1.search.fill("@#?-C1-03031-03-2021")
        await searchbystatus1.info.click();
        await searchbystatus1.backtolist.click();
        await page.evaluate(() => {
            window.scrollBy(0, 100);
          });
        await searchbystatus1.pagelink2.click();  
        await searchbystatus1.selectrows.selectOption({label:'25'}) 
        await searchbystatus1.backtosearch.click();
        await searchbystatus1.back_button.click();
      })
    })
})