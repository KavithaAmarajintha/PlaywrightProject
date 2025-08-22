import test,{expect}from '../../../Fixtures/BaseClass'
import ENV from '../../../Utilities/env';
test.describe('Custom Invoice Functionality @Accountant',async()=>{
    test('Custome invoice list',async({page,loginpage1,customeinvoicelist})=>{
        await test.step('validate the custom invoice',async()=>{
            await loginpage1.gotoLoginPage();
            await loginpage1.LoginMethod(ENV.USERNAME,ENV.PASSWORD);
            await customeinvoicelist.invoices.click();
            await customeinvoicelist.custominvoice1.click();
            await customeinvoicelist.backtolist.click();
            if(await customeinvoicelist.invoicelist.isVisible())
            {
                expect(await customeinvoicelist.invoicelist.textContent()).toContain('Invoice List')
                console.log(await customeinvoicelist.invoicelist.textContent())
            }
            await customeinvoicelist.search.click();
            await customeinvoicelist.search.fill('Arjun Ram');
            await customeinvoicelist.search.clear();
            await customeinvoicelist.search.fill('testing');
            if(customeinvoicelist.nomatchingrecord.isVisible())
            {
                expect(await customeinvoicelist.nomatchingrecord.textContent()).toContain('No matching records found');
                console.log(await customeinvoicelist.nomatchingrecord.textContent())
            }
            await customeinvoicelist.search.click();
            await customeinvoicelist.search.fill('8990--RR-0206-2024')
            await customeinvoicelist.info.click();
            if(await customeinvoicelist.invoice_details.isVisible())
            {
                expect(await customeinvoicelist.invoice_details.textContent()).toContain('Invoice Details')
                console.log(await customeinvoicelist.invoice_details.textContent())
            }
            await customeinvoicelist.backtolist1.click();
            await customeinvoicelist.edit.click();
            if(await customeinvoicelist.updateinvoice.isVisible())
            {
                expect(await customeinvoicelist.updateinvoice.textContent()).toContain('Update Invoice');
                console.log(await customeinvoicelist.updateinvoice.textContent())
            }
            await customeinvoicelist.update.click();
            if(await customeinvoicelist.successfullyupdated.isVisible())
            {
                expect(await customeinvoicelist.successfullyupdated.textContent()).toContain('Invoice updated successfully')
                console.log(await customeinvoicelist.successfullyupdated.textContent())
            }
            await page.waitForTimeout(500)
            await customeinvoicelist.search.click();
            await customeinvoicelist.search.fill('8990--RR-0206-2024');
            await customeinvoicelist.mail.click();
            if(await customeinvoicelist.sendinvoices.isVisible())
            {
                expect(await customeinvoicelist.sendinvoices.textContent()).toContain('Send Invoice');
                console.log(await customeinvoicelist.sendinvoices.textContent());
            }
            await customeinvoicelist.mailto.click();
            await customeinvoicelist.mailto.fill('kavitha.a@clientservertech.com');
            await customeinvoicelist.radiobutton.click();
            await customeinvoicelist.selectclient.selectOption({label:'abcd'});
            await customeinvoicelist.sendmail.click();
            if(await customeinvoicelist.alert.isVisible())
            {
                expect(await customeinvoicelist.alert.textContent()).toContain('Your mail setup is not yet ready to send mails!!!')
                console.log(await customeinvoicelist.alert.textContent())
            }
            await page.waitForTimeout(5000)
            await customeinvoicelist.search.click();
            await customeinvoicelist.search.fill('8990--RR-0206-2024')
            await customeinvoicelist.downloadinvoice.click();
            if(await customeinvoicelist.downloadTitle.isVisible())
            {
                expect(await customeinvoicelist.downloadTitle.textContent()).toContain('Download Invoice')
                console.log(await customeinvoicelist.downloadTitle.textContent())
            }
            page.on('dialog',async dialog=>{
                expect(dialog.type()).toContain('confirm')
                expect(dialog.message()).toContain('Please select client name or vendor name!')
                await dialog.accept();
             })
            await customeinvoicelist.clientradiobutton.click();
            await customeinvoicelist.clientfield.selectOption({label:'abcd'})
            await customeinvoicelist.download.click();

           })
    })
})
