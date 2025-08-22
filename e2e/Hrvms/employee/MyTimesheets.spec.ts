import test,{expect} from '../../../Fixtures/BaseClass'
import ENV from '../../../Utilities/env'
test.describe('My Timesheets Functionality @Employee',async()=>{
    test('My Timesheets', async({page,loginPage,mytimesheets})=>{
        await test.step('validate',async()=>{
        await loginPage.gotoLoginPage();
        await loginPage.LoginMethod(ENV.USERNAME,ENV.PASSWORD);
        await mytimesheets.timesheets.click()
        await mytimesheets.mytimesheets.click()
        if(await mytimesheets.Employeetimesheetreport.isVisible)
        {
            expect(await mytimesheets.Employeetimesheetreport.textContent()).toContain('Employee Timesheet Report');
            console.log(await mytimesheets.Employeetimesheetreport.textContent())
        }
        await mytimesheets.updateicon.click()
        if(await mytimesheets.dailywise.isVisible)
        {
            expect(await mytimesheets.dailywise.textContent()).toContain('Day Wise Report')
            console.log(await mytimesheets.dailywise.textContent())
        }
        await mytimesheets.update.click();
        if(await mytimesheets.Updatetimesheet.isVisible())
        {
            expect(await mytimesheets.Updatetimesheet.textContent()).toContain("Update DailyWise TimeSheet");
            console.log(await mytimesheets.Updatetimesheet.textContent());
        }
        await mytimesheets.updatebutton.click();
        if(await mytimesheets.updatesuccesffuly.isVisible())
        {
            expect(await mytimesheets.updatesuccesffuly.textContent()).toContain("Time Sheet Updated Successfully.");
            console.log(await mytimesheets.updatesuccesffuly.textContent())

        }
        await mytimesheets.Backtolist.click()
        await mytimesheets.infoicon.click()
        if(await mytimesheets.TimesheetDetails.isVisible)
        {
               expect(await mytimesheets.TimesheetDetails.textContent()).toContain('Timesheet Details');
                console.log(await mytimesheets.TimesheetDetails.textContent())
        }
        await mytimesheets.Backtolist1.click()
        await mytimesheets.delete.click();
        if(await mytimesheets.alert.isVisible())
        {
           expect(await mytimesheets.alert.textContent()).toContain('Are you sure you want to delete this?');
           console.log(await mytimesheets.alert.textContent());
        }
        await mytimesheets.no.click();
        await mytimesheets.mail.click();
        if(await mytimesheets.submit.isVisible())
        {
            expect(await mytimesheets.submit.textContent()).toContain('Are you sure you want to Submit this timesheet?');
            console.log(await mytimesheets.submit.textContent())
        }
        await mytimesheets.No.click();
        await mytimesheets.search.fill('Pending');
        await  mytimesheets.search.clear();
        await  mytimesheets.search.fill('approved');
        await  mytimesheets.search.fill('testing');
        if(await  mytimesheets.alert1.isVisible())
        {
            expect(await  mytimesheets.alert1.textContent()).toContain('No matching records found');
            console.log(await  mytimesheets.alert1.textContent())
        }



    })
        
    })
})