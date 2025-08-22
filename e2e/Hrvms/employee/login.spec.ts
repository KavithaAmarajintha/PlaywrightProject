
import test,{expect}from '../../../Fixtures/BaseClass'
import ENV from "../../../Utilities/env";

test.describe("HRVMS-MVC -loginpage @Employee",async()=>{

    test("[T1253] login with valid details", async ({ page, loginPage }) => {
      
       await loginPage.gotoLoginPage();
       await loginPage.LoginMethod(ENV.USERNAME,ENV.PASSWORD);
       await page.waitForTimeout(2000)

       


        
      });
})


