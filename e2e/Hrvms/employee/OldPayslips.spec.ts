import test, { expect } from "../../../Fixtures/Base";
import ENV from "../../../Utilities/env";

test.describe('Old Payslips Design Functionality @SwingpayEmployee',async ()=>{
    test('Payslips Functionality',async({page,swingpayloginpage,payslips2})=>{
        await test.step("Payslips Functionality",async()=>{
            await swingpayloginpage.gotoSwingpayURL();
            await swingpayloginpage.SwingpayLoginMethod(ENV.Swingpay_USERNAME,ENV.Swingpay_PASSWORD);
            await payslips2.paySlips.click();
            if (await payslips2.getpayslipsTitle.textContent()) {
            expect(await payslips2.getpayslipsTitle.textContent()).toContain("Get Payslip");
            console.log(await payslips2.getpayslipsTitle.textContent());
            }
            await payslips2.Month.fill('2023-06');
            await payslips2.Proceed.click();
            const [newPage]  = await Promise.all([
                page.context().waitForEvent('page'),
                page.locator("#getSlip").click(),
            ]);
           const newPageURL = await newPage.url();
            await page.waitForTimeout(3000);
            const alert1 = await newPage.locator("//div[@class='alert alert-danger']")
            console.log("Child Page URL: " + newPageURL)
            console.log("Alert Message in Child Page: " + alert1);
            await page.waitForTimeout(2000);
            await newPage.locator("//div[@class='alert alert-danger']").waitFor({state : "visible"});
            if(await newPage.locator("//div[@class='alert alert-danger']").isVisible())
            {
            expect(await newPage.locator("//div[@class='alert alert-danger']").textContent()).toContain("No data found for selected period, please contact admin or HR.")
            console.log(await newPage.locator("//div[@class='alert alert-danger']").textContent())
            }
          
        })
    })
})