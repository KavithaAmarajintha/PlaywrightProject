import test, { expect } from "../../../Fixtures/BaseClass";
import ENV from "../../../Utilities/env";
test.describe('Payslips Functionality @Employee', async () => {
    test('payslips', async ({ page, loginPage,payslips1 }) => {

        await test.step('validates', async () => {
            await loginPage.gotoLoginPage();
            await loginPage.LoginMethod(ENV.USERNAME,ENV.PASSWORD);
            await page.evaluate(() => {
                window.scrollBy(0, 500);
              }); 
            await payslips1.payslips.click();
             if (await payslips1.employeepayslip.textContent()) {
                expect(await payslips1.employeepayslip.textContent()).toContain("Employee PaySlip");
                console.log(await payslips1.employeepayslip.textContent());
            }
            await payslips1.selectyear.selectOption({index:3});
            await payslips1.selectmonth.selectOption({index:10})
            // await payslips.selectyear.selectOption({label:"2022"})
            // await payslips.selectmonth.selectOption({label:'March'})
            page.on('dialog', async dialog => {
                expect(dialog.type()).toContain('alert')
                expect(dialog.message()).toContain('Error fetching payslip data. Please try again.')
                await page.waitForTimeout(5000);
                await dialog.accept();
       
             })
            await payslips1.View.click();
            await page.waitForTimeout(5000);
            //await payslips.month.fill('2024-02');
        //     const [newPage]  = await Promise.all([
        //         page.context().waitForEvent('page'),
        //        page.locator("#getSlip").click(),
        //         ]);
        //         const newPageURL = await newPage.url();
        //         await page.waitForTimeout(3000);
        //         const alert1 = await newPage.locator("//div[@class='alert alert-danger']")
        //         console.log("Child Page URL: " + newPageURL)
        //         console.log("Alert Message in Child Page: " + alert1);
        //         await page.waitForTimeout(2000);
        //         await newPage.locator("//div[@class='alert alert-danger']").waitFor({state : "visible"});
        //         if(await newPage.locator("//div[@class='alert alert-danger']").isVisible())
        //         {
        //         expect(await newPage.locator("//div[@class='alert alert-danger']").textContent()).toContain("No data found for selected period, please contact admin or HR.")
        //         console.log(await newPage.locator("//div[@class='alert alert-danger']").textContent())
        //         }
            
         })

    })
})
 