import test, { expect } from '../../../Fixtures/BaseClass'
import ENV from '../../../Utilities/env';

test.describe("My Documents Functionality @Employee", async () => {
   test('Documents', async ({ page, loginPage, mydocuments }) => {
      await test.step('validate the logout feature', async () => {
         await loginPage.gotoLoginPage();
         await loginPage.LoginMethod(ENV.USERNAME, ENV.PASSWORD);
         await mydocuments.mydocuments.click();
         if (await mydocuments.documentlist.isVisible()) {
            expect(await mydocuments.documentlist.textContent()).toContain("Document List")
            console.log(await mydocuments.documentlist.textContent());

         }
         await mydocuments.updatei.click();
         if (await mydocuments.edit.isVisible()) {
            expect(await mydocuments.edit.textContent()).toContain("Edit Employee Document");
            console.log(await mydocuments.edit.textContent());

         }
         await mydocuments.update.click();
         if (await mydocuments.alert.isVisible()) {
            expect(await mydocuments.alert.textContent()).toContain("Updated Successfully.");
            console.log(await mydocuments.alert.textContent())
         }
         await mydocuments.adddocument.click();
         if (await mydocuments.addemployeedocument.isVisible()) {
            expect(await mydocuments.addemployeedocument.textContent()).toContain("Add Employee Document");
            console.log(await mydocuments.addemployeedocument.textContent())
         }
         await mydocuments.MyDocuments1('testing', 'Files/Testing.pdf');

      })

   })

})

