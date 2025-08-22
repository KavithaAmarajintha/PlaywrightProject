import test,{expect}from '../../../Fixtures/BaseClass'
test.describe("Alerts",async()=>{
    test("Alert with ok @Accountant",async ({page,loginpage1,dialogalerts})=>{
        await test.step("validate alert with ok",async()=>{

        await loginpage1.gotoURLPage();
          //Enabling Dialog window handler
          page.on('dialog',async dialog=>{
                expect(dialog.type()).toContain('alert')
                expect(dialog.message()).toContain("I am an alert box!")
                await dialog.accept();
          })
          await dialogalerts.alert.click();
          await page.waitForTimeout(5000);
        })
    })

test("Confirmation Dialog alert with Ok and Cancel @Accountant",async ({page,loginpage1,dialogalerts})=>{
    await test.step("validate confirmation alert with Ok and Cancel",async()=>{
        await loginpage1.gotoURLPage();
    //Enabling Dialog window handler
    page.on('dialog',async dialog=>{
          expect(dialog.type()).toContain('confirm')
          expect(dialog.message()).toContain("Press a button!")
          await dialog.accept();//Close by using Ok Button
          //await dialog.dismiss();//Close by using Cancel Button
    })
    await dialogalerts.Confirmation_alert.click();
    if(await dialogalerts.youpressedOk.isVisible())
        {
            expect(await dialogalerts.youpressedOk.textContent()).toContain("You pressed OK!")
            console.log(await dialogalerts.youpressedOk.textContent());
        }
    await page.waitForTimeout(5000);
})
});
test("Prompt Dialog  @Accountant",async ({page,loginpage1,dialogalerts})=>{
    await test.step("validate Prompt dialog",async()=>{
        await loginpage1.gotoURLPage();
    //Enabling Dialog window handler
    page.on('dialog',async dialog=>{
          expect(dialog.type()).toContain('prompt')
          expect(dialog.message()).toContain("Please enter your name:")
          expect(dialog.defaultValue()).toContain("Harry Potter")
           await dialog.accept('kavitha');//Close by using Ok Button
          //await dialog.dismiss();//Close by using Cancel Button
    })
    await dialogalerts.prompt_alert.click();
    if(await dialogalerts.prompt_message.isVisible()){
        expect(await dialogalerts.prompt_message.textContent()).toContain("Hello kavitha! How are you today?");
        console.log(await dialogalerts.prompt_message.textContent())
    }
    await page.waitForTimeout(5000);

})
})
});