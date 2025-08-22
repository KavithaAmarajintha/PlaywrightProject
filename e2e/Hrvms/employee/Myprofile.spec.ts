import test,{expect}from '../../../Fixtures/BaseClass'
import ENV from '../../../Utilities/env';
test.describe('Myprofile Functionality @Employee',async()=>{
    test('Myprofile',async({page,loginPage,myprofile})=>{
         await test.step('validate',async()=>{
        await loginPage.gotoLoginPage();
        await loginPage.LoginMethod(ENV.USERNAME,ENV.PASSWORD);
        await myprofile.myprofile.click();
        if(await myprofile.myinfo.isVisible())
        {
            expect(await myprofile.myinfo.textContent()).toContain('My Info');
            console.log(await myprofile.myinfo.textContent());
        }
        await page.evaluate(() => {
            window.scrollBy(0, 500);
          });   
        await myprofile.primaryaddress.click();
        if(await myprofile.changeyouraddress.isVisible())
        {
            expect(await myprofile.changeyouraddress.textContent()).toContain('Change your Address');
            console.log(await myprofile.changeyouraddress.textContent())
        }
        await myprofile.street.clear();
        await myprofile.street.fill('Abids');
        await myprofile.city.clear();
        await myprofile.city.fill('Sec');
        await myprofile.state.clear();
        await myprofile.state.fill('Telangana');
        await myprofile.zipcode.clear();
        await myprofile.zipcode.fill('500078');
        await myprofile.update.click();
        if(await myprofile.alert.isVisible())
        {
            expect(await myprofile.alert.textContent()).toContain('Address has been changed');
            console.log(await myprofile.alert.textContent());
        }
        await page.evaluate(() => {
            window.scrollBy(0, 500);
          }); 
        await myprofile.secondaryaddress.click();
        if(await myprofile.changeyouraddress.isVisible())
        {
            expect(await myprofile.changeyouraddress.textContent()).toContain('Change your Address');
            console.log(await myprofile.changeyouraddress.textContent())
        }
        await myprofile.street3.clear();
        await myprofile.street3.fill('Gachibowli');
        await myprofile.city3.clear();
        await myprofile.city3.fill('Hitech');
        await myprofile.state3.clear();
        await myprofile.state3.fill('TS');
        await myprofile.country3.selectOption({label:'Canada'});
        await myprofile.zipcode3.clear();
        await myprofile.zipcode3.fill('500075');
        await myprofile.update.click();
        if(await myprofile.alert1.isVisible())
        {
            expect(await myprofile.alert1.textContent()).toContain('Secondary Address has been changed.');
            console.log(await myprofile.alert1.textContent());
        }

    
        })

    })

})