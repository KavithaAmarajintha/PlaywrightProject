import exp = require('constants');
import test,{expect}from '../../../Fixtures/BaseClass'
import AddExpenses from '../../../Pages/AddExpenses';
import ENV from '../../../Utilities/env';

test.describe("Expenses Invoice Functionality @Accountant",async()=>{
    test("Expenses Invoice",async({page,loginpage1,expensesinvoice1})=>{
       await test.step("validate Expenses Invoice",async()=>{
        await loginpage1.gotoLoginPage();
        await loginpage1.LoginMethod(ENV.USERNAME,ENV.PASSWORD);
        await expensesinvoice1.expensesinvoices.click();
        await expensesinvoice1.createinvoice.click();
        if(await expensesinvoice1.CreateExpensesInvoice_Title.isVisible()){
            expect(await expensesinvoice1.CreateExpensesInvoice_Title.textContent()).toContain("Create Expenses Invoice");
            console.log(await expensesinvoice1.CreateExpensesInvoice_Title.textContent())
        }
        await expensesinvoice1.expensesinvoices.click();
        await expensesinvoice1.expensesList.click();
        if(await expensesinvoice1.ExpensesInvoiceList_Title.isVisible())
            {
              expect(await expensesinvoice1.ExpensesInvoiceList_Title.textContent()).toContain("Expenses Invoice List");
              console.log(await expensesinvoice1.ExpensesInvoiceList_Title.textContent())
            }
        })
    })

   

    
})