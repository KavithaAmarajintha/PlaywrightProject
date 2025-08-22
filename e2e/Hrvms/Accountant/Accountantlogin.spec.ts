import test,{expect}from '../../../Fixtures/BaseClass'
import ENV from '../../../Utilities/env';

test.describe('Accountant loginpage @Accountant',async()=>{
  
    test('validate the login page',async({page,loginpage1})=>{
       await test.step('Login Details',async()=>{
              await loginpage1.gotoLoginPage();
              
              await loginpage1.LoginMethod(ENV.USERNAME,ENV.PASSWORD)
              await page.waitForTimeout(2000)
        })
    })
})  