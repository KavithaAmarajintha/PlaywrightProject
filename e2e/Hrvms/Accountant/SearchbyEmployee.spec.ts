import exp = require('constants');
import test,{expect}from '../../../Fixtures/BaseClass'
import ENV from '../../../Utilities/env';

test.describe("Search By Employee Functionality @Accountant",async()=>{
    test('validate search by employee',async({page,loginpage1,searchbyemployee1})=>{
        await test.step("Search By Employee",async()=>{
            await loginpage1.gotoLoginPage();
            await loginpage1.LoginMethod(ENV.USERNAME,ENV.PASSWORD);
            await searchbyemployee1.invoices.click();
            await searchbyemployee1.searchinvoice.click();
            await searchbyemployee1.searchbyemployee.click();
            await searchbyemployee1.employee.selectOption({label:'Akashay Reddy'})
            await searchbyemployee1.search_button.click();
            await searchbyemployee1.search.click();
            await searchbyemployee1.search.fill("Abb-C1-01203-012-2020")
            await searchbyemployee1.search.clear();
            await searchbyemployee1.search.fill("testing")
            if(await searchbyemployee1.nomatchingrecord.isVisible())
            {
                expect(await searchbyemployee1.nomatchingrecord.textContent()).toContain("No matching records found")
                console.log(await searchbyemployee1.nomatchingrecord.textContent());
            }
            await searchbyemployee1.search.fill("Abb-C1-01203-012-2020");
            await searchbyemployee1.info.click();
            await searchbyemployee1.backtolist.click();
            await page.evaluate(() => {
                window.scrollBy(0, 100);
              });
            await searchbyemployee1.pagelink2.click();
            await searchbyemployee1.pagelink3.click();
            await searchbyemployee1.selectpages.selectOption({label:'25'})
            await searchbyemployee1.Backtosearch.click();


        })
    })
})