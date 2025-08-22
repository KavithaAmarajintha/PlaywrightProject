import test,{expect}from '../../../Fixtures/BaseClass'
import ENV from '../../../Utilities/env'

test.describe('Leave Request Functionality @Employee',async()=>{
    test('Leave Request',async({page,loginPage,leaverequest})=>{
     await test.step('valid',async ()=>{

        await loginPage.gotoLoginPage();
        await loginPage.LoginMethod(ENV.USERNAME,ENV.PASSWORD);
        await leaverequest.leaverequest.click();
        await leaverequest.leavelist.click();
        if(await leaverequest.myleaves.isVisible()){
           expect(await leaverequest.myleaves.textContent()).toContain("My Leaves")
           console.log(await leaverequest.myleaves.textContent())
        }
        await leaverequest.search.fill("rejected");
        await leaverequest.search.clear();
        await leaverequest.info.click();
        if(await leaverequest.leavedetails.isVisible())
        {
           expect(await leaverequest.leavedetails.textContent()).toContain("Leave Details")
           console.log(await leaverequest.leavedetails.textContent());
        }
        await leaverequest.backtolist.click();
        await leaverequest.addreq.click();
         if(await leaverequest.reqtimeoff.isVisible())
          {
              expect(await leaverequest.reqtimeoff.textContent()).toContain("Request Time-Off")
              console.log(await leaverequest.reqtimeoff.textContent())
          }  
        await leaverequest.Validations('Sick Leave','2024-02-01','2024-02-01','fewer')
        await leaverequest.applynow.click();
        if(await leaverequest.alert.isVisible())
          {
            expect(await leaverequest.alert.textContent()).toContain("Leave exists on the specified dates.")
            console.log(await leaverequest.alert.textContent())
          }
        
        await leaverequest.applynow.click(); 
        await leaverequest.Validations('Casual Leave','2024-02-10','2024-02-11','test');
        await leaverequest.applynow.click(); 
        if(await leaverequest.alert1.isVisible())
        {
          expect(await leaverequest.alert1.textContent()).toContain("You can't apply leaves on weekends");
          console.log(await leaverequest.alert1.textContent())
        }
      

        // await leavereq.HalfDayvalidations('Casual Leave','2024-02-13','test');
        // await leavereq.halfday.click();

        // await leavereq.applynow.click(); 
        // if(await leavereq.alert2.isVisible())
        // {
        //   expect(await leavereq.alert2.textContent()).toContain("Your Leave request has been submitted.");
        //   console.log(await leavereq.alert2.textContent());
        // }
        




      })
        







    })
})
