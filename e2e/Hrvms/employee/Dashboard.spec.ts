import test,{expect}from '../../../Fixtures/BaseClass'
import ENV from '../../../Utilities/env';

test.describe('Dashboard page @Employee', async()=>{
       test('dashboard',async({page,loginPage,dashboard})=>{
       
        await loginPage.gotoLoginPage();
        await loginPage.LoginMethod(ENV.USERNAME,ENV.PASSWORD)
        await dashboard.Dash.click();
        if(await dashboard.dash.isVisible())
        {
            expect(await dashboard.dash.textContent()).toContain('Dashboard')
            console.log(await dashboard.dash.textContent() )
        }
        await dashboard.link1.click();
        if(await dashboard.Createtimesheet.isVisible())
        {
            expect(await dashboard.Createtimesheet.textContent()).toContain('Create Timesheet')
            console.log(await dashboard.Createtimesheet.textContent())
        }
        await dashboard.dash1.click();
        await dashboard.link2.click();
        if(await dashboard.Createtimesheet1.isVisible())
        {
            expect(await dashboard.Createtimesheet1.textContent()).toContain('Create Timesheet')
            console.log(await dashboard.Createtimesheet1.textContent())
        }
        await dashboard.dash1.click();
        await dashboard.link3.click();
        if(await dashboard.Esr.isVisible())
        {
            expect(await dashboard.Esr.textContent()).toContain('New ESR')
            console.log(await dashboard.Esr.textContent())
        }

   
    


})
})