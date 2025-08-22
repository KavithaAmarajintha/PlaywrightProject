import test,{expect}from '../../../Fixtures/BaseClass'
import ENV from '../../../Utilities/env';

test.describe('Received Invoice List @Accountant',async()=>{
    test('Received Invoice',async({page,loginpage1,Receivedinvoicelist})=>{
     await test.step('Validate received invoice list',async()=>{
        await loginpage1.gotoLoginPage();
        await loginpage1.LoginMethod(ENV.USERNAME,ENV.PASSWORD)
        await Receivedinvoicelist.invoices.click();
        await Receivedinvoicelist.receivedinvoicelist.click();
        if(await Receivedinvoicelist.received_title.isVisible())
        {
            expect(await Receivedinvoicelist.received_title.textContent()).toContain('Invoice Received List');
            console.log(await Receivedinvoicelist.received_title.textContent())
        }
        await Receivedinvoicelist.search.fill('346-AK-0807-2023');
        await Receivedinvoicelist.search.clear();
        await Receivedinvoicelist.search.fill('testing')
        if(await Receivedinvoicelist.nomatchingrecord.isVisible())
        {
            expect(await Receivedinvoicelist.nomatchingrecord.textContent()).toContain('No matching records found');
            console.log(await Receivedinvoicelist.nomatchingrecord.textContent())
        }
        await Receivedinvoicelist.search.clear();
        await Receivedinvoicelist.pagination1.click();
        await Receivedinvoicelist.pagination2.click();
        await Receivedinvoicelist.pagination3.click();
        await Receivedinvoicelist.pagination4.click();
        await Receivedinvoicelist.search.fill('346-AK-0807-2023')
        await Receivedinvoicelist.editicon.click();
        if(await Receivedinvoicelist.updateinvoice_title.isVisible())
        {
            expect(await Receivedinvoicelist.updateinvoice_title.textContent()).toContain('Update Invoice');
            console.log(await Receivedinvoicelist.updateinvoice_title.textContent())
        }
        await Receivedinvoicelist.update_button.click();
        if(await Receivedinvoicelist.pleaseenterreason.isVisible())
        {
            expect(await Receivedinvoicelist.pleaseenterreason.textContent()).toContain('Please update the reason.')
            console.log(await Receivedinvoicelist.pleaseenterreason.textContent())
        }
        await page.evaluate(() => {
            window.scrollBy(0, 500);
          }); 
        await Receivedinvoicelist.reason.clear();
        await Receivedinvoicelist.reason.click();
        await Receivedinvoicelist.reason.fill('received')
        await Receivedinvoicelist.update_button.click();
        await page.waitForTimeout(2000)
        if(await Receivedinvoicelist.successfullyupdated.isVisible())
        {
            expect(await Receivedinvoicelist.successfullyupdated.textContent()).toContain('Invoice updated successfully')
            console.log(await Receivedinvoicelist.successfullyupdated.textContent())
        }
        await Receivedinvoicelist.search.click();
        await Receivedinvoicelist.search.fill('346-AK-0807-2023')
        await Receivedinvoicelist.info1.click();
        if(await Receivedinvoicelist.InvoiceDetails.isVisible())
        {
            expect(await Receivedinvoicelist.InvoiceDetails.textContent()).toContain('Invoice Details')
            console.log(await Receivedinvoicelist.InvoiceDetails.textContent())
        }
        await Receivedinvoicelist.backtolist.click();
        await Receivedinvoicelist.search.fill('346-AK-0807-2023');
        await Receivedinvoicelist.mail.click();
        if(await Receivedinvoicelist.sendinvoice.isVisible())
        {
            expect(await Receivedinvoicelist.sendinvoice.textContent()).toContain('Send Invoice')
            console.log(await Receivedinvoicelist.sendinvoice.textContent())
        }
        await Receivedinvoicelist.Email.fill('kavitha.a@clientservertech.com');
        await Receivedinvoicelist.radiobutton.click();
        await Receivedinvoicelist.vendor.selectOption({label:'Base'})
        await Receivedinvoicelist.sendmail.click();
        await page.waitForTimeout(2000);
        if(await Receivedinvoicelist.mailnotyetsend.isVisible())
        {
            expect(await Receivedinvoicelist.mailnotyetsend.textContent()).toContain('Your mail setup is not yet ready to send mails!!!');
            console.log(await Receivedinvoicelist.mailnotyetsend.textContent())
        }
        await Receivedinvoicelist.invoices.click();
        await Receivedinvoicelist.receivedinvoicelist.click();
        await Receivedinvoicelist.search.fill('346-AK-0807-2023');
        await Receivedinvoicelist.download_invoice.click();
        if(await Receivedinvoicelist.download_title.isVisible())
        {
            expect(await Receivedinvoicelist.download_title.textContent()).toContain('Download Invoice');
            console.log(await Receivedinvoicelist.download_title.textContent())
        }
        await Receivedinvoicelist.vendorradiobutton.click();
        await Receivedinvoicelist.vendorfield.selectOption({label:'Base'});
        await Receivedinvoicelist.download_button.click();

        
     })
    })
})