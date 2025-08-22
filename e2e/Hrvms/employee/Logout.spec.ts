import test,{expect}from '../../../Fixtures/BaseClass' 
import ENV from '../../../Utilities/env';
test.describe('Logout Functionality @Employee',async()=>{
    test('Logout',async({page,loginPage,logout})=>{
        await test.step('validate the logout feature',async()=>{
            await loginPage.gotoLoginPage();
            await loginPage.LoginMethod(ENV.USERNAME,ENV.PASSWORD)
            await logout.profile.click();
            await logout.logout1.click();
            if(await logout.Readytoleave.isVisible())
            {
                expect(await logout.Readytoleave.textContent()).toContain("Ready to Leave?");
                console.log(await logout.Readytoleave.textContent())
            }
            await logout.Logout_button.click();
            await page.waitForTimeout(2000);
        })
    })
})
