import test,{expect}from '../../../Fixtures/BaseClass'
import ENV from '../../../Utilities/env';


test.describe('Forgot Password Functionality @Employee',async()=>{
    test('validate forgotpassword',async({page,forgotpassword})=>{
        await test.step('validations',async()=>{
            await forgotpassword.gotoLoginpage();
            await forgotpassword.link.click();
            if(await forgotpassword.forgtpaswrd.isVisible())
            {
                expect(await forgotpassword.forgtpaswrd.textContent()).toContain('Forgot Your Password?');
                console.log(await forgotpassword.forgtpaswrd.textContent())
            }
            await forgotpassword.email.fill(ENV.FORGOTPASSWORD)
            await forgotpassword.Submit_button.click();
            await page.waitForTimeout(2000)
        })
    })
})