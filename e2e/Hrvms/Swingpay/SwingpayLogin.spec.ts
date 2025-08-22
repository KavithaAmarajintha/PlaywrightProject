import test,{expect}from '../../../Fixtures/Base'
import ENV from '../../../Utilities/env';

test.describe('Swingpay loginpage @SwingpayEmployee',async()=>{
  
    test('validate the Swingpay login page',async({page,swingpayloginpage})=>{
       await test.step('Login Details',async()=>{
              await swingpayloginpage.gotoSwingpayURL();
              await swingpayloginpage.SwingpayLoginMethod(ENV.Swingpay_USERNAME,ENV.Swingpay_PASSWORD)
              await page.waitForTimeout(2000)
        })
    })
})  