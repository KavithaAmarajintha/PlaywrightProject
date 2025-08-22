import Payslips from '../PageObjects/Payslips'
import SwingpayLoginPage from '../PageObjects/Login'
import {test as baseTest} from '@playwright/test'

const test = baseTest.extend<{
    payslips2:Payslips
    swingpayloginpage:SwingpayLoginPage
}
>({
    payslips2: async ({ page }, use) => {
      await use(new Payslips(page));
    },
    swingpayloginpage: async ({ page }, use) => {
      await use(new SwingpayLoginPage(page));
    },
})
export default test;
export const expect =test.expect;