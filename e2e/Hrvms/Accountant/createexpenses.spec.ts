import test,{expect}from '../../../Fixtures/BaseClass'
import ENV from '../../../Utilities/env';

test.describe('Create Expenses Invoice Functionality @Accountant',async()=>{
    test('Create ExpenseInvoice',async({page,loginpage1,createExpensesInvoices1})=>{
        await test.step('validate the create expense invoice',async()=>{
            await loginpage1.gotoLoginPage();
            await loginpage1.LoginMethod(ENV.USERNAME,ENV.PASSWORD)
            await createExpensesInvoices1.ExpenseInvoice.click();
            await createExpensesInvoices1.createinvoice.click();
            if(await createExpensesInvoices1.createinvoice_title.isVisible()){
              expect(await createExpensesInvoices1.createinvoice_title.textContent()).toContain("Create Expenses Invoice");
              console.log(await createExpensesInvoices1.createinvoice_title.textContent())
            }
            await createExpensesInvoices1.selectemployee.selectOption({label:'Alfred Nobel'})
            await createExpensesInvoices1.fromdate.fill("2023-12-01");
            await createExpensesInvoices1.todate.fill("2023-12-02");
            await createExpensesInvoices1.expensetype.fill("Testing");
            await createExpensesInvoices1.invoicedte.fill("2023-12-03");
            await createExpensesInvoices1.invoiceamount.fill("1500");
            await createExpensesInvoices1.vendor.selectOption({label:'Apna'});
            await page.waitForTimeout(2000);
            await createExpensesInvoices1.file.setInputFiles('Files/Testing.pdf');

        //    const [fileChooser] = await Promise.all([
        //     page.waitForEvent('filechooser'),
        //     // windowA.locator('text=Edit').click(),
        //     page.waitForTimeout(3000),
        
        //     await createExpensesInvoices1.file.click(),
        //   ]);
        //   await fileChooser.setFiles(
        //     "Files/Testing.pdf",
        //     { timeout: 1000 }
        //    );
            await createExpensesInvoices1.payment_terms.selectOption({label:'NET 7'});
            await createExpensesInvoices1.submit.click();
            if(await createExpensesInvoices1.fromdateshouldbegreaterjoiningdate_alert.isVisible()){
                expect(await createExpensesInvoices1.fromdateshouldbegreaterjoiningdate_alert.textContent()).toContain("From Date should be greater than Joining Date Of Employee");
                console.log(await createExpensesInvoices1.fromdateshouldbegreaterjoiningdate_alert.textContent())
            }

        })
    })
})