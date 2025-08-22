import test,{expect}from '../../../Fixtures/BaseClass'
import ENV from '../../../Utilities/env';

test.describe('Generate Invoice Functionality @Accountant',async()=>{
    test('Generate Invoice',async({page,loginpage1,generateinvoice})=>{
        await test.step('validate the Generate invoice',async()=>{
            await loginpage1.gotoLoginPage();
            await loginpage1.LoginMethod(ENV.USERNAME,ENV.PASSWORD);
            await generateinvoice.invoices.click();
            await generateinvoice.generate_invoice.click();
            if(await generateinvoice.timesheetlist.isVisible())
            {
                expect(await generateinvoice.timesheetlist.textContent()).toContain('Timesheet List');
                console.log(await generateinvoice.timesheetlist.textContent())
            }
            await generateinvoice.search.click();
            await generateinvoice.search.fill('15')
            await generateinvoice.search.clear();
            await generateinvoice.search.fill('testing')
            if(await generateinvoice.norecoredmatching.isVisible())
            {
                expect(await generateinvoice.norecoredmatching.textContent()).toContain('No matching records found')
                console.log(await generateinvoice.norecoredmatching.textContent())
            }
            await generateinvoice.search.clear();
            await generateinvoice.next.click();
            await generateinvoice.previous.click();
            await generateinvoice.search.fill('Chaitra Bhandari')
            await generateinvoice.generateinvoicelink.click();
            if(await generateinvoice.timesheettext.isVisible())
            {
                expect(await generateinvoice.timesheettext.textContent()).toContain('Timesheet of Chaitra Bhandari for the period: 1/21/2024 - 1/22/2024')
                console.log(await generateinvoice.timesheettext.textContent());
            }
            await generateinvoice.invoicedate.fill('2024-02-08');
            await generateinvoice.paymentterms.selectOption({label:'NET 7'})
            await page.evaluate(() => {
                window.scrollBy(0, 50);
              }); 
            await generateinvoice.invoiceduedate.fill('2024-02-11')
            await generateinvoice.invoicenumber.clear();
            await generateinvoice.invoicenumber.fill('CST')
            //await generateinvoice.submit.click(); 
            
            
        })

    })
})