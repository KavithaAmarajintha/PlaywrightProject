import exp = require('constants');
import test,{expect}from '../../../Fixtures/BaseClass'
import ENV from '../../../Utilities/env';

test.describe('Reports Functionality @Accountant',async()=>{
    test('Reports ',async({loginpage1,reports1})=>{
        await test.step('validate the Reprots',async()=>{
            await loginpage1.gotoLoginPage();
            await loginpage1.LoginMethod(ENV.USERNAME,ENV.PASSWORD)
            await reports1.reports.click();
            if(await reports1.Reprots_Title.isVisible()){
               expect(await reports1.Reprots_Title.textContent()).toContain("Reports");
               console.log(await reports1.Reprots_Title.textContent())
            }
            await reports1.search.click();
            await reports1.search.fill("testing");
            if(await reports1.norecordsfound.isVisible()){
                expect(await reports1.norecordsfound.textContent()).toContain("No matching records found");
                console.log(await reports1.norecordsfound.textContent());

            }
            await reports1.search.clear();
            await reports1.search.fill("Monthly Leaves Report");
            await reports1.view_report.click();
            if(await reports1.monthlyleavereport_title.isVisible()){
                expect(await reports1.monthlyleavereport_title.textContent()).toContain("Monthly Leave Report");
                console.log(await reports1.monthlyleavereport_title.textContent());
            }
            await reports1.fromdate.fill("2024-02");
            await reports1.submit.click();
            if(await reports1.leavelist.isVisible())
            {
                expect(await reports1.leavelist.textContent()).toContain("Leave Monthly Report List");
                console.log(await reports1.leavelist.textContent())
            }
                

            

        })
    })
})