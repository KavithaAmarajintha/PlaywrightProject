import test, { expect } from '../../../Fixtures/BaseClass'
import ENV from '../../../Utilities/env';
test.describe('Crease Esr Functionality @Employee', async () => {
    test('Createesr', async ({ page, loginPage, createesr}) => {
        await test.step('Esr', async () => {
            await loginPage.gotoLoginPage();
            await loginPage.LoginMethod(ENV.USERNAME,ENV.PASSWORD);
            await createesr.esr1.click();
            await createesr.createnewesr.click();
            if (await createesr.newesr.isVisible()) {
                expect(await createesr.newesr.textContent()).toContain("New ESR");
                console.log(await createesr.newesr.textContent())
            }
            await createesr.EsrPage('India', 'Accounts','test','testing');
            await createesr.submit.click();
            await createesr.createnewesr.click();
            await createesr.EsrPage('India','Pay Roll','req','des');
             await createesr.submit.click();
            if(await createesr.alert.isVisible())
            {
                expect(await createesr.alert.textContent()).toContain("Request with same categories already exists");
                console.log(await createesr.alert.textContent());
            }


        })
    })
})