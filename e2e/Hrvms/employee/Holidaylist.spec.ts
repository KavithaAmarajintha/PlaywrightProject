import test,{expect}from '../../../Fixtures/BaseClass'
import HolidayList from '../../../Pages/HolidayList'
import ENV from '../../../Utilities/env'
test.describe('Holiday Functionality @Employee',async()=>{
    test('test', async ({ page, loginPage,holidaylist}) => {
    await test.step('valid',async()=>{
         await loginPage.gotoLoginPage();
         await loginPage.LoginMethod(ENV.USERNAME,ENV.PASSWORD);
         await holidaylist.holidaylist.click();
         if(await holidaylist.holidayslist.isVisible()){
            expect(await holidaylist.holidayslist.textContent()).toContain("Holidays List");
            console.log(await holidaylist.holidayslist.textContent())
        }
         await holidaylist.HolidayList1('Testing','pongal');
         


        })
        

    })
})