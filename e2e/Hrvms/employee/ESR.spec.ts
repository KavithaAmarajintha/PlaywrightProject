import test,{expect}from '../../../Fixtures/BaseClass'
import ENV from '../../../Utilities/env';
test.describe('Esr Functionality @Employee',async()=>{
    test('esr',async({page,loginPage,esr})=>{
   await test.step('validate',async()=>{
    await loginPage.gotoLoginPage();
    await loginPage.LoginMethod(ENV.USERNAME,ENV.PASSWORD)
    await esr.esr.click();
    expect(await esr.Esr.textContent()).toContain("ESR");

    await esr.search.fill('rejected');
    await esr.search.clear();
    await esr.info.click();
    if(await esr.esrdetails.isVisible())
    {
      expect(await esr.esrdetails.textContent()).toContain("ESR Details");
      console.log(await esr.esrdetails.textContent());

    }
    await esr.backtolist.click();
    await esr.chat.click();
    if(await esr.esrchat.isVisible()){
        expect(await esr.esrchat.textContent()).toContain("ESR Chat");
        console.log(await esr.esrchat.textContent());
    }
    await esr.backtolist1.click();
    await esr.attach.click();
    if(await esr.uploadattach.isVisible())
    {
        expect (await esr.uploadattach.textContent()).toContain("Upload Attachments");
        console.log(await esr.uploadattach.textContent());
    }
    
    await esr.search.fill('file');
    await esr.search.clear();
    await esr.search.fill('develop');
    if(await esr.alert.isVisible()){
         expect(await esr.alert.textContent()).toContain("No matching records found");
         console.log(await esr.alert.textContent());
    }
    await esr.search.clear();
    await esr.file.setInputFiles("Files/Testing.pdf");
    await esr.submit.click();
}) 
})
})