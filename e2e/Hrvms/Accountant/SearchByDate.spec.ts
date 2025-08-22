import test,{expect}from '../../../Fixtures/BaseClass'
import ENV from '../../../Utilities/env';

test.describe("Search By Date Functionality @Accountant",async()=>{
    test('Search By Date',async({page,loginpage1,searchbydate1})=>{
       await test.step('validate search by date',async()=>{
            await loginpage1.gotoLoginPage();
            await loginpage1.LoginMethod(ENV.USERNAME,ENV.PASSWORD)
            await searchbydate1.invoices.click();
            await searchbydate1.searchinvoice.click();
            await searchbydate1.searchbydate.click();
            await searchbydate1.Invoice("2023-03-12","2023-03-12");
            await searchbydate1.search.click();
            await searchbydate1.search.fill("Bhuj");
            await searchbydate1.search.clear();
            await searchbydate1.search.fill("testing");
            if(await searchbydate1.nomatchingrecord.isVisible())
            {
                expect(await searchbydate1.nomatchingrecord.textContent()).toContain("No matching records found");
                console.log(await searchbydate1.nomatchingrecord.textContent())
            }
            await searchbydate1.search.clear();
            await searchbydate1.search.fill("9")
            await searchbydate1.info.click();
            await searchbydate1.backtolist.click();
            await searchbydate1.backtosearch.click();
            await searchbydate1.Invoice("2024-04-05","2024-04-05");
            if(await searchbydate1.noinvoices.isVisible())
            {
                expect(await searchbydate1.noinvoices.textContent()).toContain("There are no invoices")
                console.log(await searchbydate1.noinvoices.textContent())
            }
            await searchbydate1.Invoice("2024-04-05","2024-04-04");
            await page.waitForTimeout(10000);
            await page.evaluate(() => window.confirm = function(){return true;});
        //  page.on('dialog',async dialog=>{
        //         expect(dialog.type()).toContain('alert')
        //         expect(dialog.message()).toContain(' To Date should be greater than From Date')
        //         await dialog.accept();

        //      })
             await page.waitForTimeout(2000);


        })

    })
})