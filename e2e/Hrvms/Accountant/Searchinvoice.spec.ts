import test,{expect}from '../../../Fixtures/BaseClass'
import ENV from '../../../Utilities/env';

test.describe("Search Invoice Functionality @Accountant",async()=>{
    test("Search Invoice",async({page,loginpage1,Searchinvoice})=>{
     await test.step("validate search invoice",async()=>{
        await loginpage1.gotoLoginPage();
        await loginpage1.LoginMethod(ENV.USERNAME,ENV.PASSWORD);
        await Searchinvoice.invoices.click();
        await Searchinvoice.searchinvoice.click();
        if(await Searchinvoice.invoicesearch_title.isVisible())
        {
            expect(await Searchinvoice.invoicesearch_title.textContent()).toContain("Invoice Search");
            console.log(await Searchinvoice.invoicesearch_title.textContent())
        }
        await Searchinvoice.searchbydate.click();
        await Searchinvoice.backtolist.click();
        await Searchinvoice.searchbystatus.click();
        await Searchinvoice.backtolist.click();
        await Searchinvoice.searchbyclient.click();
        await Searchinvoice.backtolist.click();
        await Searchinvoice.searchbyemployee.click();
        await Searchinvoice.backtolist.click();
     })
    })
})