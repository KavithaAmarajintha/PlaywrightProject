import test, { expect } from '../../../Fixtures/BaseClass'
import ENV from '../../../Utilities/env';
test.describe("Payroll Dropdown Functionality @Accountant",async()=>{
    test("Payroll",async({page,loginpage1,payroll1})=>{
      await  test.step('validate the payroll',async()=>{
            await loginpage1.gotoLoginPage();
            await loginpage1.LoginMethod(ENV.USERNAME,ENV.PASSWORD)
            await payroll1.payroll.click();
            await payroll1.payroll_list.click();
            if(await payroll1.Payroll_Title.isVisible()){
                expect(await payroll1.Payroll_Title.textContent()).toContain("Payroll");
                console.log(await payroll1.Payroll_Title.textContent())
            }
            await payroll1.payroll.click();
            await payroll1.generated_list.click();
            if(await payroll1.generatedlist_Title.isVisible())
                {
                    expect(await payroll1.generatedlist_Title.textContent()).toContain("Generated Payroll List");
                    console.log(await payroll1.generatedlist_Title.textContent())
                }
            await page.waitForTimeout(1000);   
        })
    })
})