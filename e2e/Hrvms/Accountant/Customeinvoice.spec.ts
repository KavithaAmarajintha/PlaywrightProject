import test,{expect}from '../../../Fixtures/BaseClass'
import ENV from '../../../Utilities/env';
test.describe('Custom Invoice Functionality @Accountant',async()=>{
    test('custome invoice',async({page,loginpage1,customeinvoice})=>{
        await test.step('validate the custom invoice',async()=>{
            await loginpage1.gotoLoginPage();
            await loginpage1.LoginMethod(ENV.USERNAME,ENV.PASSWORD)
            await customeinvoice.invoices.click();
            await customeinvoice.custominvoice1.click();
            if(await customeinvoice.customeinvoice_title.isVisible())
            {
                expect(await customeinvoice.customeinvoice_title.textContent()).toContain('Custom Invoice')
                console.log(await customeinvoice.customeinvoice_title.textContent())
            }
            else
            {
                expect(await customeinvoice.customeinvoice_title.textContent()).toContain('Custom Invoice..')
                console.log(await customeinvoice.customeinvoice_title.textContent())
            } 
            await customeinvoice.select_employee.selectOption({label:'Mohan Gudik'})
            
            
            await customeinvoice.fromdate.fill('2024-02-05');
            await customeinvoice.todate.fill('2024-02-06');
            await customeinvoice.proceed.click();
            await customeinvoice.workedhours.fill('18')
            await customeinvoice.invoicedate.fill('2024-02-07');
            await customeinvoice.hourlyrate.fill('100')
            await customeinvoice.deductionrate.fill('10');
            await customeinvoice.selectradiobutton.click();
            await customeinvoice.selectclient.selectOption({label:'abcd'});
            await customeinvoice.paymentterms.selectOption({label:'NET 7'});
            await customeinvoice.invoiceduedate.fill('2024-02-09')
            await customeinvoice.selectfile.setInputFiles('Files/Testing.pdf')
            await customeinvoice.invoicenumber.clear();
            await customeinvoice.invoicenumber.fill('CST');
            await customeinvoice.submitbutton.click();
        })
    })
})