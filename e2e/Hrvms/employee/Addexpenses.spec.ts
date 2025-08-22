import test,{expect}from'../../../Fixtures/BaseClass'
import ENV from '../../../Utilities/env'
test.describe('Add Expenses Functionality @Employee',async()=>{
    
    test('Add Expenses',async({page,loginPage,addexpenses})=>{
        await test.step('validate',async()=>{
            await loginPage.gotoLoginPage();
            await loginPage.LoginMethod(ENV.USERNAME,ENV.PASSWORD);
            await addexpenses.empexpensessheet.click();
            await addexpenses.addexpenses.click();
            if(await addexpenses.uploadexpensessheet.isVisible())
            {
                expect(await addexpenses.uploadexpensessheet.textContent()).toContain("Upload Expenses Sheet");
                console.log(await addexpenses.uploadexpensessheet.textContent());
            }
            //await addexpen.downloadexpensessheet.click();
            await addexpenses.backtolist.click();
            await addexpenses.addexpenses1.click();
            await addexpenses.ExpensesSheet('test purpose','Files/Testing.pdf');
            await addexpenses.submit.click();
            



        })
            

   }) 

})