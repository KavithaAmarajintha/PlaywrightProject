import test,{expect}from '../../../Fixtures/BaseClass'
import ENV from '../../../Utilities/env'
test.describe('Create Timesheet Functionality @Employee',async()=>{
    test('CreateTimesheet',async({page,loginPage,createtimesheet})=>{
        await test.step('validate',async()=>{
            await loginPage.gotoLoginPage();
            await loginPage.LoginMethod(ENV.USERNAME,ENV.PASSWORD);
            await createtimesheet.TimesheetPage();
            if(await createtimesheet.Createtimesheet.isVisible())
            {
                expect(await createtimesheet.Createtimesheet.textContent()).toContain("Create Timesheet");
                console.log(await createtimesheet.Createtimesheet.textContent());
            }
            await createtimesheet.CreateTimesheet('2024-02-19','2024-02-19','Hyderabad','Niranjan','Srinivas Yarram','Hrvms','09','done playwright on hrvms');
            await createtimesheet.addtolist.click();
            page.on('dialog',async dialog=>{
                expect(dialog.type()).toContain('confirm')
                expect(dialog.message()).toContain('ARE YOU SURE YOU WANT TO DELETE THIS?')
                await dialog.dismiss();
             })
            await createtimesheet.delete.click();
            await page.evaluate(() => {
                window.scrollBy(0, 600);
              });
            page.on('dialog',async dialog=>{
                expect(dialog.type()).toContain('confirm')
                expect(dialog.message()).toContain('Are you sure to submit?')
                await dialog.accept();
             })
            await createtimesheet.next.click();
            await createtimesheet.submit.click();
            await createtimesheet.CreateTimesheet1('2024-02-19','2024-02-19');
            await createtimesheet.proceed.click();
            if(await createtimesheet.alert.isVisible())
            {
                expect(await createtimesheet.alert.textContent()).toContain("Overlapping with previous timesheets 19 Feb 2024 - 19 Feb 2024");
                console.log(await createtimesheet.alert.textContent());
            }
            await createtimesheet.backlist.click();
            await createtimesheet.delete1.click();
            await createtimesheet.yes.click();




        })
    })
})