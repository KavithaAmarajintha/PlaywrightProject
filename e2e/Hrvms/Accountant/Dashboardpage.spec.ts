import test,{expect}from '../../../Fixtures/BaseClass'
import ENV from '../../../Utilities/env';

test.describe('Dashboard Functionality @Accountant',async()=>{
    test('Dashboard',async({page,loginpage1,dashboard1})=>{
         await test.step('validate the Dashboard',async()=>{
            await loginpage1.gotoLoginPage();
            await loginpage1.LoginMethod(ENV.USERNAME,ENV.PASSWORD);
            await dashboard1.dashboard.click();
            if(await dashboard1.dashboard_title.isVisible())
            {
                expect(await dashboard1.dashboard_title.textContent()).toContain('Dashboard');
                console.log(await dashboard1.dashboard_title.textContent())
            }
            await dashboard1.invoices.click();
            await dashboard1.dashboard.click();
            await dashboard1.createcustominvoice.click();
            await dashboard1.dashboard.click();
            await dashboard1.generateinvoice.click();
         })
    })
})