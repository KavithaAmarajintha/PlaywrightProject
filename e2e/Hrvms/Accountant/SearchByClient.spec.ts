import exp = require('constants');
import test,{expect}from '../../../Fixtures/BaseClass'
import ENV from '../../../Utilities/env';

test.describe("Search By Client Functionality @Accountant",async()=>{
    test('validate search by client',async({page,loginpage1,searchbyclient1})=>{
        await test.step("Search By Employee",async()=>{
            await loginpage1.gotoLoginPage();
            await loginpage1.LoginMethod(ENV.USERNAME,ENV.PASSWORD);
            await searchbyclient1.invoices.click();
            await searchbyclient1.searchinvoice.click();
            await searchbyclient1.searchbyclient.click();
            await searchbyclient1.client.selectOption({label:'a'})
            await searchbyclient1.search_button.click();
            if(searchbyclient1.noinvoices.isVisible())
            {
                expect(await searchbyclient1.noinvoices.textContent()).toContain("There are no invoices")
                console.log(await searchbyclient1.noinvoices.textContent())
            }
            //await searchbyclient1.searchbyclient.click();
            await searchbyclient1.client.selectOption({label:'Aamer'})
            await searchbyclient1.search_button.click();
            await searchbyclient1.search.click();
            await searchbyclient1.search.fill("Jyothi Moka")
            await searchbyclient1.search.clear();
            await searchbyclient1.search.fill("testing")
            if(await searchbyclient1.nomatchingrecord.isVisible())
            {
                expect(await searchbyclient1.nomatchingrecord.textContent()).toContain("No matching records found")
                console.log(await searchbyclient1.nomatchingrecord.textContent());
            }
            await searchbyclient1.search.fill("CST--CBHA-0122-2024");
            await searchbyclient1.info.click();
            await searchbyclient1.backtolist.click();
            await page.evaluate(() => {
                window.scrollBy(0, 100);
              });
            await searchbyclient1.pagelink2.click();
            await searchbyclient1.selectpages.selectOption({label:'25'})
            await searchbyclient1.Backtosearch.click();


        })
    })
})