import test, { expect } from '../../../Fixtures/BaseClass'
import ENV from '../../../Utilities/env';
test.describe("ChangePassword Functionality @Employee", async () => {
   test('changepassword', async ({ page, loginPage, changepassword }) => {
      await loginPage.gotoLoginPage();
      await loginPage.LoginMethod(ENV.USERNAME, ENV.PASSWORD);
      await changepassword.profile.click()
      await changepassword.changePassword.click()
      if (await changepassword.ChangePassword.isVisible()) {
         expect(await changepassword.ChangePassword.textContent()).toContain('Change Password');
         console.log(await changepassword.ChangePassword.textContent());
      }
      await changepassword.oldpassword.fill('Pass@123')
      await changepassword.newpassword.fill('Pass@1234')
      await changepassword.confirmpassword.fill('Pass@1234')
      await changepassword.Changepassword_button.click()
      if (await changepassword.changedsuccessfully.isVisible()) {
         expect(await changepassword.ChangePassword.textContent()).toContain('Password changed successfully');
         console.log(await changepassword.changedsuccessfully.textContent());
      }
      await changepassword.profile.click()
      await changepassword.changePassword.click()
      await changepassword.oldpassword.fill('Pass@1234')
      await changepassword.newpassword.fill('Pass@123')
      await changepassword.confirmpassword.fill('Pass@123')
      await changepassword.Changepassword_button.click()
      await changepassword.profile.click()
      await changepassword.changePassword.click()
      await changepassword.oldpassword.fill('Pass@123')
      await changepassword.newpassword.fill('Pass@123')
      await changepassword.confirmpassword.fill('Pass@123')
      await changepassword.Changepassword_button.click()
      if (await changepassword.alert1.isVisible()) {
         expect(await changepassword.alert1.textContent()).toContain('Old and new passwords should not be same.');
         console.log(await changepassword.alert1.textContent());
      }
      await changepassword.profile.click()
      await changepassword.changePassword.click()
      await changepassword.oldpassword.fill('Pass@1234')
      await changepassword.newpassword.fill('Pass@123')
      await changepassword.confirmpassword.fill('Pass@123')
      await changepassword.Changepassword_button.click()
      if (await changepassword.alert2.nth(0).isVisible()) {
         expect(await changepassword.alert2.textContent()).toContain('Old Password is worng');
         console.log(await changepassword.alert2.textContent());
      }
      await changepassword.profile.click()
      await changepassword.changePassword.click()
      await changepassword.oldpassword.fill('Pass@123')
      await changepassword.newpassword.fill('Pass@1233')
      await changepassword.confirmpassword.fill('Pass@123')
      await changepassword.Changepassword_button.click()
      //enabling alert handling
      page.on('dialog', async dialog => {
         expect(dialog.type()).toContain('alert')
         expect(dialog.message()).toContain('Confirm Password doesnot match with New Password')

         await dialog.accept();

      })

      await changepassword.Changepassword_button.click()

      await changepassword.profile.click()
      await changepassword.changePassword.click()
      await changepassword.oldpassword.fill('Pass123')
      await changepassword.newpassword.fill('pass')
      await changepassword.confirmpassword.fill('pass')
      await changepassword.Changepassword_button.click()
      //enabling alert handling
      page.on('dialog', async dialog => {
         expect(dialog.type()).toContain('alert')
         expect(dialog.message()).toContain('Password must be at atleast 6 characters.')
         await dialog.accept();
      })

      await changepassword.Changepassword_button.click()























   })
})