import exp = require('constants');
import test,{expect}from '../../../Fixtures/BaseClass'
import ENV from '../../../Utilities/env';
test.describe('Expenses List Functionality @Accountant',async()=>{
    test('Expenses List',async({page,loginpage1,expenseslist1})=>{
      await test.step("Validate the Expenses List",async()=>{
        await loginpage1.gotoLoginPage();
        await loginpage1.LoginMethod(ENV.USERNAME,ENV.PASSWORD);
        await expenseslist1.expensesinvoices.click();
        await expenseslist1.Expenseslist.click();
        await expenseslist1.search.click();
        await expenseslist1.search.fill("RECEIVED");
        await expenseslist1.search.clear();
        await expenseslist1.search.fill("Testing");
        if(await expenseslist1.norecordsmatch.isVisible())
          {
            expect(await expenseslist1.norecordsmatch.textContent()).toContain("No matching records found");
            console.log(await expenseslist1.norecordsmatch.textContent())
          }
        await expenseslist1.search.clear();
        await expenseslist1.search.fill("COD_C1_EX-1028-10-23")  
        await expenseslist1.updateinvoice.click();
        if(await expenseslist1.updateinvoice_title.isVisible())
        {
               expect(await expenseslist1.updateinvoice_title.textContent()).toContain("Update Expenses Invoice");
               console.log(await expenseslist1.updateinvoice_title.textContent());
        }
        await page.evaluate(() => {
          window.scrollBy(0, 100);
        });   
        await expenseslist1.reason.clear();
        await expenseslist1.reason.fill("test");
        await expenseslist1.update.click();
        if(await expenseslist1.updatessuccessfully.isVisible())
          {
            expect(await expenseslist1.updatessuccessfully.textContent()).toContain("Expenses Invoice updated successfully");
            console.log(await expenseslist1.updatessuccessfully.textContent())
          }
        await expenseslist1.search.fill("COD_C1_EX-1028-10-23") 
        await expenseslist1.info.click();
        if(await expenseslist1.invoice_details.isVisible()) 
          {
            expect(await expenseslist1.invoice_details.textContent()).toContain("Expenses Invoice Details");
            console.log(await expenseslist1.invoice_details.textContent())
          }
        await expenseslist1.click_here.click();
        if(await expenseslist1.file_removed_alert.isVisible())
          {
            expect(await expenseslist1.file_removed_alert.textContent()).toContain("Sorry! file has been removed");
            console.log(await expenseslist1.file_removed_alert.textContent());
          }
          await expenseslist1.backtolist.click();
          await expenseslist1.search.fill("COD_C1_EX-1028-10-23");
          await expenseslist1.Sendmail.click();
          if(await expenseslist1.EmailExpenseinvoice_Title.isVisible())
            {
              expect(await expenseslist1.EmailExpenseinvoice_Title.textContent()).toContain("Email Expense Invoice");
              console.log(await expenseslist1.EmailExpenseinvoice_Title.textContent())
            }
          await expenseslist1.Email.fill("kavitha.a@clientservertech.com")
          await expenseslist1.Send_Button.click();
          await page.waitForTimeout(2000);
          if(await expenseslist1.mailsetupisnotready_alert.isVisible())
            {
              expect(await expenseslist1.mailsetupisnotready_alert.textContent()).toContain("Your mail setup is not yet ready to send mails!!!");
              console.log(await expenseslist1.mailsetupisnotready_alert.textContent())
            }
          await expenseslist1.search.fill("COD_C1_EX-1028-10-23");
          await expenseslist1.Delete_Icon.click();
          await page.waitForTimeout(2000);
          if(await expenseslist1.areyousurewanttodelete_alert.isVisible())
            {
              expect(await expenseslist1.areyousurewanttodelete_alert.textContent()).toContain("Are you sure you want to delete this?");
              console.log(await expenseslist1.areyousurewanttodelete_alert.textContent())
            }

           await expenseslist1.no_button.click(); 
  
          

            
          
        


      })
    })
})