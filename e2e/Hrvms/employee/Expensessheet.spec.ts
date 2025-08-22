import test,{expect}from '../../../Fixtures/BaseClass'
import ENV from '../../../Utilities/env'
test.describe('Emp Expenses Functionality @Employee',async()=>{
    test('Expenses sheets',async({page,loginPage,expenseslist})=>{
        await test.step('validate',async()=>{
            await loginPage.gotoLoginPage();
            await loginPage.LoginMethod(ENV.USERNAME,ENV.PASSWORD)
            await expenseslist.empexpensessheet.click();
            await expenseslist.expenseslist.click();
            if(await expenseslist.expensessheets.isVisible())
            {
                expect(await expenseslist.expensessheets.textContent()).toContain("Expenses Sheets");
                console.log(await expenseslist.expensessheets.textContent());
            }
            await expenseslist.SelectEntries('25');
            await expenseslist.search.fill('Rejected');
            if(await expenseslist.alert.isVisible())
            {
                expect(await expenseslist.alert.textContent()).toContain("No matching records found")
                console.log(await expenseslist.alert.textContent());
            }
            await expenseslist.search.clear();
            await expenseslist.search.fill('Pending');
            await expenseslist.search.clear();

        })
    })
})