import test,{expect} from '../../../Fixtures/BaseClass'
import ENV from '../../../Utilities/env'

test.describe("New Payslips functionality @Employee",async()=>{
    test("New Payslips",async({page,loginPage,newpayslip})=>{
        await test.step('validate',async()=>{
            await loginPage.gotoLoginPage();
            await loginPage.LoginMethod(ENV.USERNAME,ENV.PASSWORD); 
            await newpayslip.Npayslips.click();
            if(await newpayslip.Employee_payslip.isVisible)
            {
                expect(await newpayslip.Employee_payslip.textContent()).toContain("Employee PaySlip");
                console.log(await newpayslip.Employee_payslip.textContent());
            }
            
            await newpayslip.View.click();
            page.on('dialog',async dialog =>{
                expect(dialog.type()).toContain('alert')
                expect(dialog.message()).toContain("Payslip is not generated please contact HR")
                
                await dialog.accept();
            })
            await newpayslip.View.click();

           

    })
})
})